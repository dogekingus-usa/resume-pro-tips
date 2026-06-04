#!/usr/bin/env python3
import re
import os

output_dir = r"C:\Users\SAMPC\.openclaw\workspace-chief-operation-director\content-sites\resume-pro-tips"
raw_path = os.path.join(output_dir, "linkedin-headline-examples_raw.md")
clean_path = os.path.join(output_dir, "linkedin-headline-examples.md")

with open(raw_path, 'rb') as f:
    raw = f.read().decode('utf-8', errors='replace')

# Strip ANSI escape sequences
text = re.sub(r'\x1b\[[0-9;]*[a-zA-Z]', '', raw)
text = re.sub(r'\x1b\][0-9;]*', '', text)
text = re.sub(r'\x1b\[?[0-9;]*[hl]', '', text)
text = re.sub(r'\x1b\[?25[hl]', '', text)
text = re.sub(r'\[[0-9]+[A-Z]', '', text)
text = re.sub(r'\[K', '', text)
text = re.sub(r'\x1b\[[0-9;]*', '', text)
text = re.sub(r'\x1b\].*?\x07', '', text)

with open(clean_path, 'w', encoding='utf-8') as f:
    f.write(text)

words = len(text.split())
size = os.path.getsize(clean_path)
print(f"OK: {size} bytes, {words} words")

# Clean up
os.remove(raw_path)
