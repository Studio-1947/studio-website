import os, re, glob
pattern = re.compile(r'src=[\'\"\`]\/([^\'\"\`]+)[\'\"\`]')
missing = []
for file in glob.glob('src/**/*.tsx', recursive=True):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        for match in pattern.finditer(content):
            img_path = match.group(1)
            # Skip remote urls and data uris
            if img_path.startswith(('http', 'data:')): continue
            if not os.path.exists(os.path.join('public', img_path)):
                missing.append((file, img_path))

if missing:
    print('Missing:')
    for m in missing:
        print(m)
else:
    print('All images exist.')
