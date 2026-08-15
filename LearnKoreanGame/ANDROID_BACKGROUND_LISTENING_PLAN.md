# Android WebView + 原生后台播放实施计划

## 文档状态

- 平台顺序：Android 优先，Android 验收完成后再移植 iOS。
- 当前阶段：Android 熄屏播放 MVP 已完成模拟器验证，进入真机验收与发布完善。
- Web 应用目录：`LearnKoreanGame/`
- Android 容器规划目录：`LearnKoreanMobile/`
- 核心目标：课程收听模式在熄屏、锁屏和切换到其他应用后继续播放，并支持系统媒体控制。

### 实现进度（2026-08-15）

- 已完成：Web/Native 驱动切换、Capacitor Android 容器、协议 v1、原生 TTS 缓存、Media3 后台服务、系统媒体控制、WebView 状态同步和 DataStore 恢复。
- 已验证：Android 16 模拟器熄屏 20 秒持续推进队列；系统暂停/继续/上一条；进程停止后从保存索引恢复；390×844 浏览器布局和暂停改速后继续播放。
- 自动化：Web 驱动测试和现有 Web 测试通过；Android App 模块 4 个 instrumented tests 通过；debug APK 构建成功。
- 待完成：Android 真机 5 分钟以上后台矩阵、电话/蓝牙/厂商省电策略、完整离线课程、缓存维护入口、签名/商店声明和 release 候选包。

## 1. 范围与成功标准

### 1.1 必须实现

- 保留现有 L1-L4 课程页面、课程数据、语言切换和收听模式 UI。
- 浏览器环境继续使用当前 Web Speech 播放能力。
- Android App 环境使用原生播放引擎，不再依赖 WebView 中的 `speechSynthesis`。
- 支持韩语与当前显示语言翻译交替播放。
- 韩语遵循用户选择的语速；中文或英文翻译始终使用正常速度。
- 支持范围、语速、重复次数、播放、暂停、停止、上一条和下一条。
- 支持锁屏、熄屏、切后台、蓝牙耳机和系统媒体通知控制。
- App 回到前台后，网页播放器 UI 与原生播放状态一致。
- 保存当前课程、队列位置、播放状态和设置，进程被回收后可以恢复。
- 已生成的语音可离线播放，并具有自动淘汰的缓存策略。

### 1.2 第一版不包含

- iOS 原生播放实现。
- 云端 TTS、账户同步和跨设备进度同步。
- Android Auto 内容浏览目录。
- 下载整册课程的离线包管理界面。
- 用户主动执行 Android“强制停止”后的自动播放。系统不允许应用绕过强制停止。

### 1.3 Android 版完成定义

- 真机锁屏播放完整课程队列期间没有因 WebView 休眠而停止。
- 切到其他 App 5 分钟后返回，播放仍正常，页面状态正确。
- 系统通知、锁屏和蓝牙耳机可以播放、暂停、上一条、下一条。
- 暂停后修改语速，再播放能从当前逻辑条目继续。
- 切换中文/英文后新队列使用对应翻译语音。
- App 进程被系统回收后，可以从持久化位置恢复。
- 普通浏览器中的现有收听模式没有回归。

## 2. 技术方案

### 2.1 技术选型

- App 容器：Capacitor Android。
- 原生语言：Kotlin。
- 后台服务：AndroidX Media3 `MediaSessionService`。
- 播放器：Media3 ExoPlayer。
- 语音生成：Android `TextToSpeech.synthesizeToFile()`。
- 本地状态：Android DataStore。
- 音频缓存：App cache 目录 + 索引文件。
- Web/Native 通信：自定义 Capacitor `ListeningPlugin`。

选择 `MediaSessionService` 是因为播放器和媒体会话会运行在独立于 Activity/WebView 的前台播放服务中。WebView 暂停或 Activity 进入后台时，原生服务仍可继续播放。

### 2.2 组件关系

```text
lesson_guide_app.js
  | buildListeningQueue()
  | ListeningController
  v
Capacitor ListeningPlugin
  | command / state event
  v
ListeningPlaybackService (MediaSessionService)
  |-- ListeningQueueRepository
  |-- TtsAudioCache
  |-- VoiceSelector
  |-- ExoPlayer + MediaSession
  `-- ListeningStateStore (DataStore)
```

### 2.3 状态所有权

- 浏览器运行时：JS `listeningState` 是状态源。
- Android App 开始原生播放后：原生 `ListeningPlaybackService` 是状态源。
- WebView 只发送命令并订阅原生状态，不自行推测播放是否继续。
- WebView 重新加载或回到前台时，必须先调用 `getState()` 再刷新 UI。

## 3. 队列与桥接协议

### 3.1 队列协议 v1

现有 `buildListeningQueue()` 继续负责决定播放内容和顺序。传给 Android 的数据删除浏览器专用 `voice` 对象，只保留可序列化字段。

```json
{
  "protocolVersion": 1,
  "sessionId": "l3-01-zh-CN-lesson",
  "lesson": {
    "id": "l3-01",
    "level": "L3",
    "title": "대인 관계",
    "translation": "人际关系"
  },
  "settings": {
    "mode": "lesson",
    "speed": "slow",
    "repeat": 1,
    "translationLocale": "zh-CN"
  },
  "startIndex": 0,
  "items": [
    {
      "id": "lesson-title",
      "ref": "lesson-title",
      "section": "overview",
      "label": "本课",
      "text": "대인 관계",
      "lang": "ko-KR",
      "mode": "sentence",
      "pauseAfterMs": 900
    }
  ]
}
```

### 3.2 原生插件方法

| 方法 | 输入 | 行为 |
| --- | --- | --- |
| `isAvailable` | 无 | 返回原生引擎和 TTS 可用状态 |
| `loadQueue` | 队列协议 v1 | 校验、保存队列并准备前几条音频 |
| `play` | 可选 `startIndex` | 从指定或保存位置开始播放 |
| `pause` | 无 | 暂停 ExoPlayer，保留当前位置 |
| `resume` | 无 | 从原生播放器当前位置恢复 |
| `stop` | 无 | 停止、清空活动媒体队列和通知 |
| `skipTo` | `index` | 跳到指定逻辑条目 |
| `skipNext` | 无 | 下一逻辑条目，不落在内部静音项上 |
| `skipPrevious` | 无 | 上一逻辑条目 |
| `updateSettings` | `speed`、`repeat` | 保留当前逻辑条目并重建后续播放表 |
| `getState` | 无 | 返回播放状态、队列位置和设置 |
| `clearCache` | 可选课程范围 | 清理可删除语音缓存 |

### 3.3 原生事件

统一发送 `listeningStateChanged`，降低 WebView 生命周期变化导致的多个事件乱序风险。

```json
{
  "sessionId": "l3-01-zh-CN-lesson",
  "status": "playing",
  "lessonId": "l3-01",
  "index": 12,
  "itemId": "vocab-4-example",
  "ref": "vocab-4",
  "positionMs": 380,
  "durationMs": 2140,
  "speed": "slow",
  "repeat": 1,
  "error": null
}
```

事件状态限定为：`idle`、`preparing`、`playing`、`paused`、`ended`、`error`。

## 4. 分阶段实施计划

### 阶段 0：建立基线和验证环境

状态：`[~] 模拟器基线完成，真机待补`

实现任务：

- [x] 记录当前浏览器版收听模式的功能和行为基线。
- [x] 确认本机 Node、Java、Android SDK、Gradle 和 Android Studio 环境。
- [x] 确认 Capacitor 当前稳定版要求的 `minSdk`、`compileSdk` 和 Java 版本。
- [ ] 建立 Android 真机调试设备，至少覆盖一台主流 Android 手机。
- [x] 保存当前页面桌面与移动端截图，作为 UI 回归基线。
- [ ] 为 `buildListeningQueue()` 补充纯逻辑测试，固定中文、英文、范围和重复配置的队列输出。

预计改动：

- `LearnKoreanGame/tests/`：新增收听队列测试。
- 不改变用户可见行为。

验收标准：

- 当前浏览器版测试通过。
- Android 调试设备能被构建工具识别。
- 队列协议样例可由真实 L1-L4 数据生成。

### 阶段 1：将 Web 播放逻辑抽象为驱动接口

状态：`[x] 已完成`

实现任务：

- [x] 复用现有 `listeningState` 作为统一 UI 命令和状态层。
- [x] 将当前 Web Speech 路径独立为 `startWebListening()` 等 Web 驱动分支。
- [x] 新增 `NativeListeningDriver`，实现能力检测、命令和事件订阅。
- [x] 根据 Capacitor 环境和 `isAvailable()` 选择驱动。
- [x] 保留浏览器版的 Wake Lock 和后台恢复兼容逻辑，但只在 Web 驱动启用。
- [x] 将 start/pause/resume/stop/jump/settings 路由到当前驱动。
- [x] 原生队列只传可序列化字段，不传 `SpeechSynthesisVoice`。

预计改动：

- `LearnKoreanGame/lesson_guide_app.js`
- 可选新增 `LearnKoreanGame/listening_controller.js`
- `lesson_guide_l1.html` 至 `lesson_guide_l4.html`：加载新增脚本（如拆文件）。

验收标准：

- 普通 Chrome/Safari 中所有现有播放功能保持一致。
- 控制器单元测试覆盖 start/pause/resume/stop/skip 和设置变化。
- 页面不需要知道底层是 Web Speech 还是原生引擎。

### 阶段 2：建立 Android Capacitor 容器

状态：`[x] 已完成`

实现任务：

- [x] 新建 `LearnKoreanMobile/` npm 工程。
- [x] 安装并锁定 Capacitor Core、CLI 和 Android 依赖。
- [x] 配置 Android 应用名称、application ID、图标占位和启动页。
- [x] 建立 Web 资源同步脚本，将 `LearnKoreanGame/` 复制到生成目录。
- [x] 让 App 默认进入课程指南首页，并保持 L1-L4 页面导航。
- [ ] 将 Google Fonts 等关键远程资源改为本地资源或提供离线回退。
- [x] 生成 Android 工程并完成首个 debug APK 构建。
- [x] 配置 `.gitignore`，忽略构建产物和生成的 Web 资源，不忽略原生源码。

规划目录：

```text
LearnKoreanMobile/
  package.json
  package-lock.json
  capacitor.config.ts
  scripts/
  www/                 # 生成目录，不作为课程源码维护
  android/             # Android 原生工程
```

验收标准：

- debug App 能在真机打开课程指南。
- L1-L4、语言切换和页面布局与移动浏览器一致。
- 不接入原生播放时，页面仍可使用 Web 驱动作为临时回退。

### 阶段 3：实现 Capacitor 原生桥接骨架

状态：`[x] 已完成`

实现任务：

- [x] 新增 Kotlin `ListeningPlugin` 并注册到 Capacitor。
- [x] 建立协议模型 `ListeningQueuePayload`、`ListeningItem`、`ListeningSettings` 和 `ListeningState`。
- [x] 实现严格输入校验：协议版本、语言枚举、队列长度、文本长度、索引范围和重复次数。
- [x] 实现全部 v1 播放命令与 `getState` 桥接路径。
- [x] 建立统一错误码并传回 WebView。
- [x] 插件只接受文本和逻辑 ID，不接受网页传入的任意本地文件路径。

规划文件：

```text
android/app/src/main/java/.../listening/
  ListeningPlugin.kt
  ListeningModels.kt
  ListeningError.kt
  ListeningQueueRepository.kt
```

验收标准：

- WebView 能传入真实课程队列，并原样读取经过校验的原生状态。
- Activity 重建后 `getState()` 不崩溃、不返回非法索引。
- 错误输入不会启动服务或写入缓存。

### 阶段 4：实现 TTS 音频生成和缓存

状态：`[~] 核心完成，离线矩阵待验收`

实现任务：

- [x] 封装 Android `TextToSpeech` 初始化和释放生命周期。
- [x] 分别为 `ko-KR`、`zh-CN`、`en-US` 选择并固定可用 voice。
- [x] 优先选择本地可用 voice；异常时受控切换网络 voice。
- [ ] 使用 `synthesizeToFile()` 将文本异步生成到临时文件，成功后原子移动到缓存位置。
- [x] 缓存键包含文本、语言、voice ID 和合成参数。
- [x] 翻译语音固定正常速度；韩语速度由播放参数控制。
- [ ] 先准备当前项和后续 2 至 3 项，再在后台按队列顺序预生成。
- [x] 去重并发生成请求，避免相同文字同时写多份文件。
- [x] 生成失败时重试一次，仍失败则通知 UI。
- [x] 按最后访问时间清理缓存，容量上限 200 MB、回收目标 160 MB。

规划文件：

```text
listening/
  TtsEngine.kt
  VoiceSelector.kt
  TtsAudioCache.kt
  CacheIndex.kt
```

验收标准：

- 三种语言均能生成可由 ExoPlayer 播放的本地音频。
- 同一文本第二次播放命中缓存，不重复合成。
- 队列切换或 App 回后台不会中断已经开始的缓存文件播放。
- 磁盘不足、voice 缺失和 TTS 初始化失败有明确错误状态。

说明：系统 TTS 无法保证韩语、中文和英文由同一个跨语言音色说出；Android 第一版保证每种语言内部固定 voice，不在队列中随机变化。后续接入统一的多语言云端 voice 时，不需要改变播放器协议。

### 阶段 5：实现 Media3 后台队列播放器

状态：`[x] 模拟器 MVP 已完成`

实现任务：

- [x] 新建 `ListeningPlaybackService : MediaSessionService`。
- [x] 在服务中创建 ExoPlayer、MediaSession 和队列仓库。
- [ ] 将逻辑条目展开为音频项、重复项和句间静音项。
- [x] 每个媒体项保留原始逻辑 `index`，上一条/下一条按逻辑条目跳转。
- [x] 在媒体项切换时应用韩语速度或翻译正常速度。
- [x] 将当前课程、段落和语言写入 `MediaMetadata`。
- [x] 实现播放完成、播放错误、缓存等待和跳过行为。
- [x] 实现 `onTaskRemoved()`：播放中保留服务，未播放时释放服务。
- [x] 在 Manifest 声明 media playback 前台服务和所需权限。

规划文件：

```text
listening/
  ListeningPlaybackService.kt
  ListeningPlaylistBuilder.kt
  ListeningPlayerListener.kt
  SilenceMediaSource.kt
```

Manifest 要点：

- `android.permission.FOREGROUND_SERVICE`
- `android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK`
- `android:foregroundServiceType="mediaPlayback"`
- `androidx.media3.session.MediaSessionService` intent filter

验收标准：

- 按 Home 键、切其他 App 和熄屏后继续播放。
- 从最近任务列表移除 Activity 时，正在播放的服务继续运行。
- 翻译始终正常速度，韩语按慢速/正常/快速设置播放。
- 暂停修改语速后，从当前逻辑条目继续。

### 阶段 6：系统通知、锁屏和外部控制

状态：`[~] 模拟器通过，真机通知/蓝牙待验收`

实现任务：

- [x] 使用 MediaSession 自动媒体通知作为基础实现。
- [x] 通知显示课程级别、课程标题和当前条目文本。
- [x] 配置播放、暂停、上一条、下一条按钮。
- [x] 处理系统媒体按键，并接入蓝牙媒体键路径。
- [ ] 验证 Android 13+ 通知权限被拒绝时的媒体播放行为。
- [x] 为 Android System UI 提供可本地读取的图标和元数据。
- [ ] 评估并实现 `MediaButtonReceiver` 与 playback resumption。

验收标准：

- 锁屏和通知栏控制与 WebView 卡片同步。
- 耳机断开时遵循 Android 音频焦点/音频变嘈杂事件的暂停策略。
- 通知中的上一条/下一条不会跳到静音占位项。

### 阶段 7：WebView 与原生状态同步

状态：`[x] 已完成`

实现任务：

- [x] `NativeListeningDriver` 订阅 `listeningStateChanged`。
- [x] 将原生状态映射回当前 `listeningState` 和播放器按钮。
- [x] 原生 `index/ref` 变化时复用现有页面高亮与自动定位逻辑。
- [x] App 启动、WebView reload、`resume` 和 `visibilitychange` 时调用 `getState()`。
- [x] 通过 `sessionId` 关联活动队列状态。
- [x] 点击新课程播放时替换后台队列。
- [x] 原生播放期间禁用 Web Speech 的后台修复和 Wake Lock 逻辑。

验收标准：

- 前后台往返后按钮、进度、当前条目和高亮完全一致。
- WebView 被系统重建后不会启动第二套播放队列。
- 原生播放时页面中不存在并行的 `speechSynthesis` 声音。

### 阶段 8：持久化、恢复和中断处理

状态：`[~] 核心恢复完成，系统级 resumption 待补`

实现任务：

- [x] 使用 DataStore 保存协议版本、sessionId、课程信息、队列、逻辑索引、位置、语速和重复次数。
- [x] 队列单独写入，媒体状态转换仅写轻量状态，避免反复序列化整课队列。
- [ ] 实现 `onPlaybackResumption()`，恢复媒体列表和起始位置。
- [x] 通过 ExoPlayer 处理 Audio Focus 和耳机断开事件。
- [x] 处理 TTS 超时、voice 异常、受控回退和缓存文件重建。
- [ ] App 升级后检查协议版本，不兼容时清理活动会话但保留可用缓存。

验收标准：

- 测试性终止 App 进程后，重新打开能恢复到保存位置。
- 短暂音频焦点丢失后按系统规则继续或等待用户恢复。
- 用户主动停止后不会因恢复逻辑自行重新播放。

### 阶段 9：缓存、离线和性能完善

状态：`[~] 缓存淘汰已完成，离线/性能矩阵待补`

实现任务：

- [ ] 统计单课首次准备时延、缓存命中率、缓存大小和失败率。
- [x] 仅预取下一项，开始播放不等待整课合成。
- [x] App 进入后台后只继续为当前活动队列准备必要音频。
- [ ] 增加缓存容量和清理入口，第一版可放在原生调试设置或隐藏维护入口。
- [ ] 将关键字体、图标和静音资源打包到 App，避免断网空白。
- [ ] 验证低存储、飞行模式、弱网和系统 TTS 仅网络 voice 场景。

验收标准：

- 已缓存课程在飞行模式下可完整播放。
- 冷启动只等待首批条目，不阻塞整个 WebView。
- 缓存达到上限后自动清理旧文件，不删除当前活动队列文件。

### 阶段 10：自动化测试、真机验收和发布准备

状态：`[~] 自动化与 debug 构建完成，真机发布待补`

实现任务：

- [x] Android instrumented tests 覆盖协议 v1、版本和语言校验。
- [ ] Android instrumented test 覆盖 Service 创建、命令和 DataStore 恢复。
- [x] Web 测试覆盖 Native 驱动选择、命令代理和状态规范化。
- [x] 建立 debug APK 构建命令和开发文档。
- [ ] 真机执行下方测试矩阵并记录结果。
- [x] 完成 Android 应用图标和系统启动页。
- [ ] 确认正式 application ID、签名和隐私说明。
- [ ] 检查 Android 前台服务与媒体播放相关的商店声明要求。

验收标准：

- 自动化测试全部通过。
- 真机阻断级用例全部通过。
- 浏览器版 L1-L4 回归通过。
- 能生成可安装的 release 候选包。

## 5. Android 真机测试矩阵

| 场景 | 期望结果 |
| --- | --- |
| 按 Home 键切后台 | 连续播放，通知出现 |
| 手动熄屏/锁屏 | 连续播放，锁屏控制可用 |
| 后台 5 分钟后返回 | 播放与页面状态一致 |
| 从最近任务移除 Activity | 播放中继续，重新打开可同步 |
| 系统“强制停止” | 允许停止；再次打开后不自动播放 |
| 暂停后切语速再播放 | 当前逻辑条目以新速度继续 |
| 播放中切语速 | 从当前逻辑条目稳定重建后续队列 |
| 中文切英文 | 新加载队列改读英文翻译 |
| 翻译语音 | 始终正常速度且同语言 voice 固定 |
| 韩语慢速/正常/快速 | 只影响韩语条目 |
| 上一条/下一条 | 按逻辑条目跳转，不停在静音项 |
| 来电或其他播放器抢占 | 按 Audio Focus 策略暂停/恢复 |
| 蓝牙耳机播放键 | 正常播放/暂停 |
| 蓝牙断开 | 自动暂停，避免扬声器突然播放 |
| WebView reload | 不重复播放，恢复原生状态 |
| 进程被系统回收 | 重新打开后可恢复保存位置 |
| 飞行模式播放已缓存课程 | 完整播放 |
| 存储空间不足 | 提示错误，不破坏已有缓存 |

设备覆盖至少包括：

- 接近项目 `minSdk` 的模拟器。
- 当前 `targetSdk` 的模拟器。
- 一台 Google/接近原生 Android 真机。
- 一台具有明显后台管理策略的厂商真机，例如 Samsung 或 Xiaomi。

## 6. 风险与应对

### 系统 TTS voice 差异

不同设备安装的 voice 不同。第一版固定每种语言选中的 voice，并保存 voice ID；找不到时重新选择并向页面报告。未来可将 `TtsAudioCache` 的生成来源替换为统一云端语音，而不改变 Web 队列和 Media3 播放层。

### 首次播放等待

整课语音生成可能较慢。采用“当前项 + 后续 2 至 3 项”优先准备，达到首播条件后立即播放，其余条目后台生成。

### 厂商省电策略

正确使用 `MediaSessionService` 和 media playback 前台服务是基础。仍需在 Samsung、Xiaomi 等设备实测；不使用保活轮询、静默音频或其他规避系统规则的做法。

### WebView 事件丢失

原生服务持有真实状态，WebView 恢复时主动 `getState()`，事件仅用于实时更新。所有事件带 `sessionId`，避免旧事件覆盖新队列。

### 队列过大

桥接只传逻辑队列，不传音频二进制。原生按窗口生成音频，避免一次占用大量内存和磁盘。

## 7. 实施顺序和里程碑

### 里程碑 A：原生链路跑通

完成阶段 0 至 3。结果是 Android App 能加载课程页面，WebView 可以把真实队列交给 Kotlin 插件。

### 里程碑 B：熄屏播放 MVP

完成阶段 4 至 6。结果是 Android 真机可以播放本地生成语音，并在锁屏和后台持续运行。

### 里程碑 C：完整状态恢复

完成阶段 7 至 8。结果是返回页面、进程回收和系统中断后状态可靠。

### 里程碑 D：可发布候选版

完成阶段 9 至 10。结果是离线、缓存、测试和发布配置达到验收标准。

## 8. 官方技术参考

- [Capacitor 官方文档](https://capacitorjs.com/docs)
- [Android Media3 后台播放](https://developer.android.com/media/media3/session/background-playback)
- [Android MediaSession 播放控制](https://developer.android.com/media/media3/session/control-playback)
- [Android TextToSpeech](https://developer.android.com/reference/android/speech/tts/TextToSpeech)
