
import re

try:
    # 1. Read the dumped SVG content
    with open('logo_debug.txt', 'r', encoding='utf-8') as f:
        svg_content = f.read()

    # 2. Extract the text path (starts with M65)
    match = re.search(r'd="(M65[^"]+)"', svg_content)
    if not match:
        print('Could not find text path starting with M65 in logo_debug.txt')
        exit(1)
    
    full_text_path = match.group(1)
    print(f'Found Text Path length: {len(full_text_path)}')

    # 3. Read Logo.tsx
    logo_path = r'src/components/Logo.tsx'
    with open(logo_path, 'r', encoding='utf-8') as f:
        logo_content = f.read()

    # 4. Replace the old textPath string
    # We look for: const textPath = "..."
    # We use string replacement if regex is tricky with quotes, but regex is safer for "..."
    new_content = re.sub(
        r'const textPath = ".*";', 
        f'const textPath = "{full_text_path}";', 
        logo_content
    )

    if new_content == logo_content:
        print('Replacement failed - regex did not match const textPath = "..."')
    else:
        with open(logo_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Successfully updated Logo.tsx with full text path')

except Exception as e:
    print(f'Error: {e}')
    exit(1)
