#!/usr/bin/env python3
from PIL import Image
import os

# Open the icon
icon_path = 'images/icon.png'
img = Image.open(icon_path)

# Resize to 512x512 for web use
img_resized = img.resize((512, 512), Image.Resampling.LANCZOS)

# Save with optimization
img_resized.save(icon_path, 'PNG', optimize=True, quality=85)

file_size = os.path.getsize(icon_path) / 1024 / 1024
print(f"Icon optimized! New size: {file_size:.2f} MB")