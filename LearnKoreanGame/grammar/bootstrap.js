(function bootstrapGrammarWiki(root) {
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = root.document.createElement("script");
            script.src = src;
            script.async = false;
            script.addEventListener("load", resolve, { once: true });
            script.addEventListener("error", () => reject(new Error(`Unable to load ${src}`)), { once: true });
            root.document.body.appendChild(script);
        });
    }

    async function start() {
        for (const script of [
            "shared/icons.js",
            "shared/locale.js",
            "grammar_data.js",
            "grammar_enrichment.js",
            "grammar_wiki_app.js"
        ]) await loadScript(script);
    }

    start().catch(error => {
        console.error(error);
        const main = root.document.getElementById("main-content");
        if (main) main.textContent = "Grammar Wiki failed to load.";
    });
})(window);
