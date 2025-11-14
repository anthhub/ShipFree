# ShipFree 部署指南

本文档详细说明 ShipFree Next.js 项目的推荐部署方案和步骤。

## 📋 目录

- [推荐部署平台](#推荐部署平台)
- [平台对比](#平台对比)
- [详细部署步骤](#详细部署步骤)
- [Webhook 配置](#webhook-配置)
- [数据库部署](#数据库部署)

---

## 🚀 推荐部署平台

### ⭐ 首选：Vercel（强烈推荐）

**为什么选择 Vercel？**

1. ✅ **Next.js 官方平台**，完美支持 Next.js 16 的所有特性
2. ✅ **零配置部署**，自动检测 Next.js 项目
3. ✅ **免费计划**包含：
   - 无限个人项目
   - 100GB 带宽/月
   - 自动 HTTPS
   - 全球 CDN
   - 自动预览部署
4. ✅ **内置环境变量管理**
5. ✅ **自动处理 Webhook**（Stripe、LemonSqueezy）
6. ✅ **Serverless Functions** 支持 API Routes
7. ✅ **与 Supabase 无缝集成**

**适用场景：**
- 个人项目和小型 SaaS
- 需要快速部署和迭代
- 预算有限或免费使用

---

### 🥈 次选：Railway

**为什么选择 Railway？**

1. ✅ **Docker 原生支持**（项目已有 Docker 配置）
2. ✅ **数据库托管**（PostgreSQL、MongoDB）
3. ✅ **简单易用**，类似 Heroku
4. ✅ **免费计划**：$5 信用额度/月
5. ✅ **环境变量管理**
6. ✅ **自动部署**（GitHub 集成）

**适用场景：**
- 需要 Docker 部署
- 需要托管数据库
- 需要更多控制权

---

### 🥉 第三选择：Render

**为什么选择 Render？**

1. ✅ **免费计划**可用（有休眠限制）
2. ✅ **Docker 支持**
3. ✅ **PostgreSQL 托管**
4. ✅ **自动 HTTPS**
5. ✅ **环境变量管理**

**适用场景：**
- 预算有限
- 需要 Docker 部署
- 可以接受免费计划的限制

---

### 🔧 自托管方案

**使用 Docker 部署到 VPS**

**适用场景：**
- 需要完全控制
- 有服务器运维能力
- 需要特定配置

**推荐 VPS 提供商：**
- **DigitalOcean**：$6/月起，简单易用
- **Linode**：$5/月起，性能稳定
- **Vultr**：$6/月起，全球节点
- **AWS EC2**：按需付费，功能强大

---

## 📊 平台对比

| 特性 | Vercel | Railway | Render | 自托管 (Docker) |
|------|--------|---------|--------|------------------|
| **免费计划** | ✅ 是 | ✅ $5/月信用 | ⚠️ 有限制 | ❌ 需付费 |
| **Next.js 优化** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Docker 支持** | ❌ | ✅ | ✅ | ✅ |
| **数据库托管** | ❌ | ✅ | ✅ | ❌ |
| **Webhook 支持** | ✅ | ✅ | ✅ | ✅ |
| **部署速度** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **易用性** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **成本（小项目）** | 免费 | $5/月 | 免费 | $5-10/月 |
| **扩展性** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 📝 详细部署步骤

### 方案 1: Vercel 部署（推荐）

#### 步骤 1: 准备代码仓库

```bash
# 确保代码已推送到 GitHub/GitLab/Bitbucket
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### 步骤 2: 连接 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 **"Add New Project"**
4. 导入你的 Git 仓库

#### 步骤 3: 配置项目

Vercel 会自动检测 Next.js 项目，使用以下默认配置：

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`（或 `pnpm build`）
- **Output Directory**: `.next`
- **Install Command**: `npm install`（或 `pnpm install`）

#### 步骤 4: 配置环境变量

在 Vercel Dashboard → Project Settings → Environment Variables 中添加：

```env
# Supabase（必需）
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# 数据库（如果使用）
DATABASE_URL=your-database-url

# Stripe（如果使用）
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...

# LemonSqueezy（如果使用）
LEMON_SQUEEZY_API_KEY=your-api-key
LEMON_SQUEEZY_STORE_ID=your-store-id
LEMON_SQUEEZY_WEBHOOK_SECRET=your-webhook-secret

# Mailgun（如果使用）
MAILGUN_API_KEY=your-api-key
MAILGUN_SIGNING_KEY=your-signing-key
```

#### 步骤 5: 部署

点击 **"Deploy"**，Vercel 会自动：
1. 安装依赖
2. 运行构建
3. 部署到全球 CDN
4. 提供 HTTPS 域名

#### 步骤 6: 配置自定义域名（可选）

1. 在 Project Settings → Domains
2. 添加你的域名
3. 按照提示配置 DNS 记录

---

### 方案 2: Railway 部署

#### 步骤 1: 准备 Docker 配置

项目已包含 Docker 配置，可以直接使用。

#### 步骤 2: 连接 Railway

1. 访问 [railway.app](https://railway.app)
2. 使用 GitHub 账号登录
3. 点击 **"New Project"** → **"Deploy from GitHub repo"**
4. 选择你的仓库

#### 步骤 3: 配置部署

Railway 会自动检测 Docker，或手动选择：

- **Deploy Type**: Docker
- **Dockerfile Path**: `docker/prod/Dockerfile`
- **Docker Context**: `.`（项目根目录）

#### 步骤 4: 添加数据库（可选）

1. 在 Railway Dashboard → **"New"** → **"Database"** → **"Add PostgreSQL"**
2. Railway 会自动创建数据库并设置 `DATABASE_URL` 环境变量

#### 步骤 5: 配置环境变量

在 Railway Dashboard → Variables 中添加所有必需的环境变量。

#### 步骤 6: 部署

Railway 会自动：
1. 构建 Docker 镜像
2. 部署容器
3. 提供 HTTPS 域名

---

### 方案 3: Render 部署

#### 步骤 1: 连接 Render

1. 访问 [render.com](https://render.com)
2. 使用 GitHub 账号登录
3. 点击 **"New"** → **"Web Service"**
4. 连接你的 Git 仓库

#### 步骤 2: 配置服务

- **Name**: shipfree（或你的项目名）
- **Environment**: Docker
- **Dockerfile Path**: `docker/prod/Dockerfile`
- **Docker Context**: `.`
- **Plan**: Free（或选择付费计划）

#### 步骤 3: 添加数据库（可选）

1. **"New"** → **"PostgreSQL"**
2. 选择免费计划（有休眠限制）
3. Render 会自动设置 `DATABASE_URL`

#### 步骤 4: 配置环境变量

在 Environment Variables 中添加所有必需变量。

#### 步骤 5: 部署

点击 **"Create Web Service"**，Render 会开始部署。

---

### 方案 4: 自托管 Docker 部署

#### 步骤 1: 准备服务器

```bash
# 在 VPS 上安装 Docker 和 Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# 安装 Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### 步骤 2: 克隆项目

```bash
git clone https://github.com/your-username/shipfree.git
cd shipfree
```

#### 步骤 3: 配置环境变量

创建 `.env` 文件：

```bash
cp .env.example .env
nano .env  # 编辑环境变量
```

#### 步骤 4: 构建和运行

```bash
# 使用生产环境配置（包含 PostgreSQL）
docker-compose -f docker/prod/docker-compose.yml -f docker/prod/docker-compose.postgres.yml up -d --build
```

#### 步骤 5: 配置 Nginx 反向代理（推荐）

```nginx
# /etc/nginx/sites-available/shipfree
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 步骤 6: 配置 SSL（Let's Encrypt）

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 🔗 Webhook 配置

### Stripe Webhook

1. **获取 Webhook URL**：
   - Vercel: `https://your-app.vercel.app/api/stripe/webhook`
   - Railway: `https://your-app.railway.app/api/stripe/webhook`
   - Render: `https://your-app.onrender.com/api/stripe/webhook`
   - 自托管: `https://yourdomain.com/api/stripe/webhook`

2. **在 Stripe Dashboard 配置**：
   - 进入 [Stripe Dashboard](https://dashboard.stripe.com/webhooks)
   - 点击 **"Add endpoint"**
   - 输入 Webhook URL
   - 选择事件：`customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`
   - 复制 **Signing secret** 到环境变量 `STRIPE_WEBHOOK_SECRET`

### LemonSqueezy Webhook

1. **获取 Webhook URL**：
   - 同上，路径为 `/api/lemonsqueezy/webhook`

2. **在 LemonSqueezy Dashboard 配置**：
   - 进入 [LemonSqueezy Settings → Webhooks](https://app.lemonsqueezy.com/settings/webhooks)
   - 创建 Webhook
   - 输入 URL
   - 复制 **Signing secret** 到环境变量 `LEMON_SQUEEZY_WEBHOOK_SECRET`

### Mailgun Webhook

1. **获取 Webhook URL**：
   - 路径为 `/api/mailgun`

2. **在 Mailgun Dashboard 配置**：
   - 进入 [Mailgun → Webhooks](https://app.mailgun.com/mg/sending/mg.<yourdomain>/webhooks)
   - 添加 HTTP webhook
   - 输入 URL
   - 复制 **Signing key** 到环境变量 `MAILGUN_SIGNING_KEY`

---

## 🗄️ 数据库部署

### 选项 1: Supabase 数据库（推荐）

如果使用 Supabase 存储业务数据：

1. 在 Supabase Dashboard 创建表
2. 使用 Supabase 的连接字符串作为 `DATABASE_URL`
3. 无需单独部署数据库

### 选项 2: Railway/Render 托管数据库

1. 在平台创建 PostgreSQL 数据库
2. 平台自动设置 `DATABASE_URL` 环境变量
3. 无需额外配置

### 选项 3: 独立数据库服务

**推荐提供商：**

- **Supabase**：免费 500MB，PostgreSQL
- **Neon**：免费 3GB，Serverless PostgreSQL
- **PlanetScale**：免费 5GB，MySQL（需迁移）
- **Railway**：$5/月，PostgreSQL
- **Render**：免费（有休眠），PostgreSQL

### 选项 4: Docker 自托管数据库

使用项目中的 Docker Compose 配置：

```bash
docker-compose -f docker/prod/docker-compose.postgres.yml up -d
```

**注意**：生产环境建议使用托管数据库服务，而不是 Docker 容器，因为：
- 自动备份
- 高可用性
- 更好的性能
- 专业维护

---

## ✅ 部署检查清单

部署前确保：

- [ ] 所有环境变量已配置
- [ ] Stripe Webhook URL 已配置（如使用 Stripe）
- [ ] LemonSqueezy Webhook URL 已配置（如使用 LemonSqueezy）
- [ ] Mailgun Webhook URL 已配置（如使用 Mailgun）
- [ ] 数据库连接正常
- [ ] 域名 DNS 已配置（如使用自定义域名）
- [ ] SSL 证书已配置（自托管）
- [ ] 测试登录/注册功能
- [ ] 测试支付流程（如使用）
- [ ] 测试邮件发送（如使用）

---

## 🎯 推荐方案总结

### 个人项目 / MVP

**推荐：Vercel（免费）**

- 零配置
- 自动部署
- 全球 CDN
- 完美支持 Next.js

### 需要 Docker / 数据库托管

**推荐：Railway（$5/月）**

- Docker 支持
- 数据库托管
- 简单易用
- 自动部署

### 预算有限

**推荐：Render（免费）**

- 免费计划可用
- Docker 支持
- 数据库托管
- 有休眠限制

### 需要完全控制

**推荐：自托管 + DigitalOcean（$6/月）**

- 完全控制
- 无限制
- 需要运维能力

---

## 📚 相关资源

- [Vercel 文档](https://vercel.com/docs)
- [Railway 文档](https://docs.railway.app)
- [Render 文档](https://render.com/docs)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [Docker 文档](https://docs.docker.com)

---

## 💡 提示

1. **开发环境**：使用 Vercel 的预览部署功能，每个 PR 自动创建预览环境
2. **生产环境**：使用 Vercel 生产环境，配置自定义域名
3. **数据库**：建议使用 Supabase 或 Neon 的免费计划开始
4. **监控**：使用 Vercel Analytics 或 Sentry 监控应用性能
5. **备份**：定期备份数据库，使用平台提供的自动备份功能

