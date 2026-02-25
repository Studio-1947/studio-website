import sys
try:
    import PyPDF2
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf2"])
    import PyPDF2

def extract():
    reader = PyPDF2.PdfReader('public/Untitled document.pdf')
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    with open('blogs-extracted.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Done extracting PDF")

if __name__ == "__main__":
    extract()
