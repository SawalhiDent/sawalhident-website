import fitz
import json
import os

PDF_PATH = "attached_assets/Mastery_of_Physics_Implant_Protocol_v2_1785960333083.pdf"
OUT_DIR = ".agents/outputs/implant-protocol"
os.makedirs(OUT_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)

# Metadata
meta = {
    "page_count": doc.page_count,
    "metadata": doc.metadata,
}
print(json.dumps(meta, ensure_ascii=False, indent=2))

# Extract text from all pages
all_text = []
for i, page in enumerate(doc):
    text = page.get_text("text").strip()
    all_text.append({"page": i + 1, "text": text})

with open(f"{OUT_DIR}/text.json", "w", encoding="utf-8") as f:
    json.dump(all_text, f, ensure_ascii=False, indent=2)

# Render first 6 pages as images for visual inspection
for i in range(min(6, doc.page_count)):
    page = doc[i]
    pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5))
    pix.save(f"{OUT_DIR}/page-{i+1:02d}.png")
    print(f"Rendered page {i+1}")

# File size
size_mb = round(os.path.getsize(PDF_PATH) / (1024 * 1024), 1)
print(f"PDF size: {size_mb} MB")
print(f"Total pages: {doc.page_count}")
