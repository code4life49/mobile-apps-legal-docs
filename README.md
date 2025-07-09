# 移动应用法律文档

此仓库包含各种移动应用程序的法律文档（隐私政策、服务条款等）。

**开发者：** code4life

## 目录结构

```
mobile-apps-legal-docs/
├── README.md
├── app-name-1/
│   ├── privacy-policy.md
│   ├── terms-of-service.md
│   └── other-legal-docs.md
├── app-name-2/
│   ├── privacy-policy.md
│   ├── terms-of-service.md
│   └── other-legal-docs.md
└── ...
```

## 添加新应用的指南

### 1. 目录命名规范

- 使用小写字母
- 使用连字符 (-) 分隔单词
- 保持名称简洁且描述性强
- 示例：`my-awesome-app`、`photo-editor-pro`

### 2. 必需文件

每个应用目录应至少包含：

- `privacy-policy.md` - 隐私政策文档
- `terms-of-service.md` - 服务条款文档

### 3. 可选文件

可根据需要添加其他法律文档：

- `cookie-policy.md` - Cookie 政策
- `data-retention-policy.md` - 数据保留政策
- `license-agreement.md` - 最终用户许可协议
- `community-guidelines.md` - 社区准则
- `disclaimer.md` - 免责声明

### 4. 文件格式

- 所有文档使用 Markdown (.md) 格式
- 包含适当的标题和结构
- 在每个文档顶部添加最后更新日期

### 5. 新应用结构示例

当添加名为 "my-new-app" 的新应用时：

1. 创建目录：`my-new-app/`
2. 添加必需文件：
   ```
   my-new-app/
   ├── privacy-policy.md
   ├── terms-of-service.md
   └── (根据需要添加其他法律文档)
   ```

### 6. 文档模板标题

每个文档应以此开头：

```markdown
# [文档类型] - [应用名称]

**最后更新：** [日期]

---

[文档内容]
```

## 维护

- 定期审查和更新法律文档
- 确保符合适用的法律法规
- 通过 Git 提交保留版本历史
- 修改时更新最后修改日期

## 联系方式

如有法律文档更新或合规问题，请联系开发者 code4life 或法务团队。

## Github Page 部署

本项目已配置 GitHub Pages 自动部署，可通过以下域名访问：

- **主域名：** https://legal.shijingty.com
- **GitHub 域名：** https://[username].github.io/mobile-apps-legal-docs

### 部署配置

- **部署分支：** `main`
- **自动部署：** 任何推送到 `main` 分支的提交都会自动触发网站更新
- **自定义域名：** `legal.shijingty.com` (已在 Namecheap 配置)

### 域名配置

#### Namecheap DNS 设置

在 Namecheap 控制面板中配置以下 DNS 记录：

```
类型: CNAME
主机: legal
值: code4life49.github.io
```

#### GitHub 仓库设置

1. 进入仓库 `Settings` → `Pages`
2. 选择 `Deploy from a branch`
3. 分支选择 `main`
4. 文件夹选择 `/ (root)`
5. 在 `Custom domain` 中填入 `legal.shijingty.com`
6. 勾选 `Enforce HTTPS`

### 部署流程

1. **本地修改：** 编辑法律文档文件
2. **提交更改：**
   ```bash
   git add .
   git commit -m "更新法律文档"
   git push origin main
   ```
3. **自动部署：** GitHub Actions 自动构建并部署到 GitHub Pages
4. **访问更新：** 通常在 1-5 分钟内生效

### 访问法律文档

文档可通过以下 URL 格式访问：

- 应用隐私政策：`https://legal.shijingty.com/[app-name]/privacy-policy`
- 应用服务条款：`https://legal.shijingty.com/[app-name]/terms-of-service`

例如：

- `https://legal.shijingty.com/my-awesome-app/privacy-policy`
- `https://legal.shijingty.com/photo-editor-pro/terms-of-service`

### 注意事项

- 请确保所有文档链接使用 HTTPS
- 域名生效可能需要几分钟到几小时
- 如遇到 SSL 证书问题，请等待 24-48 小时让证书完全生效
- 建议在推送前在本地预览 Markdown 文档格式

### 故障排除

如果网站无法访问或显示不安全：

1. 检查 DNS 记录是否正确配置
2. 确认 GitHub Pages 设置中的自定义域名正确
3. 等待 DNS 传播完成（最多 24 小时）
4. 清除浏览器缓存后重试
5. 检查是否有混合内容（HTTP 链接）导致的安全警告
