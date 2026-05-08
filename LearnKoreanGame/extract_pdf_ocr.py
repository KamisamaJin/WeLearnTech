import sys
import pytesseract
from pdf2image import convert_from_path

def extract_text_from_pdf_page(pdf_path, page_num):
    print(f"Loading PDF and extracting page {page_num} as image...")
    # pdf2image pages are 1-indexed for first_page and last_page
    images = convert_from_path(pdf_path, first_page=page_num, last_page=page_num, dpi=300)
    
    if not images:
        return "Failed to load page."
        
    image = images[0]
    
    print("Running Tesseract OCR on the image... (This might take a few seconds)")
    # 'kor' for Korean, 'eng' for English. '+' combines them.
    text = pytesseract.image_to_string(image, lang='kor+eng')
    
    return text

if __name__ == "__main__":
    # Test on KIIP 3, page 15 (which is probably unit 1 vocabulary or similar)
    pdf = "/Users/rex/Downloads/kiip-3-textbook.pdf"
    # Usually chapter 1 starts around page 12-16. Let's extract page 15.
    extracted_text = extract_text_from_pdf_page(pdf, 15)
    
    print("\n" + "="*50)
    print("OCR EXTRACTION RESULT FOR PAGE 15:")
    print("="*50)
    print(extracted_text)
    print("="*50)
