# 设置GitHub Pages托管指南

## 步骤1：推送代码到GitHub

如需手动部署，请在终端中执行以下命令：

```bash
cd /Users/andy/Desktop/weiproduct-product-sites/AIMeditation
git push -u origin main
```

当前仓库已配置 GitHub Pages，可直接推送到 `main` 分支触发发布。

## 步骤2：启用GitHub Pages

1. 访问您的仓库：https://github.com/WeiProduct/AIMeditation
2. 点击 "Settings"（设置）标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分，选择：
   - Branch: main
   - Folder: / (root)
5. 点击 "Save"

## 步骤3：等待部署

GitHub Pages 需要几分钟来部署您的网站。部署完成后，您可以通过以下地址访问：

https://weiproduct.github.io/AIMeditation/

## 步骤4：更新App Store链接

App Store 链接已经配置在以下文件中，应用链接变化时再更新：

1. 编辑 `index.html`
2. 查找 `apps.apple.com`
3. 替换为您的App Store链接

## 需要添加的内容

### 1. 应用截图
将您的应用截图保存到 `images/` 目录：
- screenshot1.png - 主界面
- screenshot2.png - AI对话
- screenshot3.png - 音乐冥想
- screenshot4.png - 播放界面

### 2. Hero图片
创建或导出一个展示应用的手机模型图片：
- hero-mockup.png

### 3. App Store徽章
下载官方的App Store徽章：
- app-store-badge.svg

### 4. 二维码
生成指向App Store的二维码：
- qr-code.png

## 自定义域名（可选）

此产品站默认使用 GitHub Pages 地址，保持与公司主站 `weiproduct.com` 分开。如果之后要单独配置产品子域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入您的域名（如：aimeditation.weiproduct.com）
3. 在您的域名DNS设置中添加CNAME记录指向：weiproduct.github.io

## 维护建议

- 定期更新截图以反映最新的应用界面
- 根据用户反馈更新FAQ部分
- 保持隐私政策与应用功能同步更新
