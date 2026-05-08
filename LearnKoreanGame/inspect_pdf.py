import fitz
import json

pdf_path = "/Users/rex/Downloads/kiip-3-textbook.pdf"
doc = fitz.open(pdf_path)

# Look for patterns in the first 50 pages to understand the structure
results = []
for page_num in range(10, 40):  # skip very beginning pages like TOC
    page = doc.load_page(page_num)
    text = page.get_text("text")
    if "어휘" in text or "문화" in text or "문법" in text:
        results.append({
            "page": page_num,
            "text": text[:500] # just getting a snippet of the page to see the structure
        })

print(json.dumps(results[:5], ensure_ascii=False, indent=2))
