#!/bin/bash

echo "优化图片并推送到GitHub..."

# 检查是否安装了imagemagick
if ! command -v convert &> /dev/null; then
    echo "需要安装ImageMagick来优化图片"
    echo "运行: brew install imagemagick"
    exit 1
fi

# 优化icon.png
echo "优化 icon.png..."
convert images/icon.png -resize 512x512 -quality 85 images/icon_optimized.png
mv images/icon_optimized.png images/icon.png

# 提交更改
git add -A
git commit -m "Optimize icon size for web"

# 设置git配置以避免大文件错误
git config http.postBuffer 524288000

# 推送
echo "推送到GitHub..."
git push -u origin main