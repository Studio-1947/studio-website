import sys

sys.stdout.reconfigure(encoding='utf-8')

file_path = r"d:\workcode\studiowebsite\studio-website\src\data\blogData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

idx = text.lower().find("slug: \"the-lost-math-of-kolam\"")
if idx != -1:
    next_idx = text.lower().find("slug:", idx + 10)
    print(text[idx:next_idx])
