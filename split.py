import sys
import re

try:
    with open('f:\\CuackdernosWEBSITE\\index.html', 'r', encoding='utf-8') as f:
        text = f.read()

    css_pattern = r'<style>.*?</style>'
    # Matching the specific large script block
    js_pattern = r'<script>\s*(?:\n\s*)*/\*\*\s*\*\s*1\.\s+CONFIG.*?</script>'

    css_match = re.search(css_pattern, text, re.DOTALL)
    js_match = re.search(js_pattern, text, re.DOTALL)

    if not css_match or not js_match:
        print("Could not find blocks")
        sys.exit(1)

    with open('f:\\CuackdernosWEBSITE\\style.css', 'w', encoding='utf-8') as f:
        f.write(css_match.group(0).replace('<style>', '').replace('</style>', '').strip())

    with open('f:\\CuackdernosWEBSITE\\script.js', 'w', encoding='utf-8') as f:
        f.write(js_match.group(0).replace('<script>', '').replace('</script>', '').strip())

    new_text = text.replace(css_match.group(0), '<link rel="stylesheet" href="style.css">')
    new_text = new_text.replace(js_match.group(0), '<script src="script.js"></script>')

    with open('f:\\CuackdernosWEBSITE\\index.html', 'w', encoding='utf-8') as f:
        f.write(new_text)

    print("Split completed successfully!")
except Exception as e:
    print("Error:", e)
