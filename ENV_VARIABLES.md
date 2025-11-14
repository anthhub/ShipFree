# 环境变量配置指南

本文档详细说明 ShipFree 项目所需的所有环境变量及其作用。

## 📋 目录

- [必需环境变量](#必需环境变量)
- [可选环境变量](#可选环境变量)
- [快速开始](#快速开始)
- [详细说明](#详细说明)

---

## 必需环境变量

这些变量是项目运行所必需的，缺少会导致应用无法启动。

### Supabase 配置

#### `NEXT_PUBLIC_SUPABASE_URL`

- **类型**: 字符串
- **作用**: Supabase 项目的 API URL
- **使用位置**:
  - `src/lib/supabase/client.ts`
  - `src/lib/supabase/server.ts`
  - `src/lib/supabase/middleware.ts`
- **获取方式**:
  1. 登录 [Supabase Dashboard](https://app.supabase.com)
  2. 选择你的项目
  3. 进入 Settings → API
  4. 复制 Project URL
- **示例**: `https://abcdefghijklmnop.supabase.co`
- **注意**: 必须以 `NEXT_PUBLIC_` 开头，因为需要在客户端使用

#### `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- **类型**: 字符串
- **作用**: Supabase 匿名密钥，用于客户端认证
- **使用位置**: 同 `NEXT_PUBLIC_SUPABASE_URL`
- **获取方式**:
  1. 在 Supabase Dashboard → Settings → API
  2. 复制 `anon` `public` key
- **示例**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **安全性**: 这是公开密钥，可以安全地暴露在客户端代码中（Supabase 通过 RLS 保护数据）

---

## 可选环境变量

这些变量根据你使用的功能来决定是否需要配置。

### 数据库配置

#### `DATABASE_URL`

- **类型**: 字符串
- **作用**: PostgreSQL 数据库连接字符串（用于业务数据存储）
- **使用位置**:
  - `src/db/index.ts` (Drizzle ORM 连接)
  - `drizzle.config.ts` (数据库迁移配置)
- **格式**: `postgresql://用户名:密码@主机:端口/数据库名`
- **示例**:
  - 本地开发: `postgresql://devuser:devpass@localhost:5432/shipfreedev`
  - Docker: `postgresql://devuser:devpass@postgres:5432/shipfreedev`
- **注意**:
  - 如果只使用 Supabase Auth，可以不配置
  - 如果使用本地 PostgreSQL（Docker），需要配置
  - 如果使用 Supabase 数据库，应该使用 Supabase 的连接字符串

---

### Stripe 支付配置

#### `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

- **类型**: 字符串
- **作用**: Stripe 公钥，用于客户端创建支付会话
- **使用位置**: `src/utils/stripe.ts` → `getStripe()`
- **获取方式**:
  1. 登录 [Stripe Dashboard](https://dashboard.stripe.com)
  2. 进入 Developers → API keys
  3. 复制 Publishable key（以 `pk_` 开头）
- **示例**: `pk_test_51AbCdEf...` (测试环境) 或 `pk_live_...` (生产环境)
- **注意**: 必须以 `NEXT_PUBLIC_` 开头

#### `STRIPE_SECRET_KEY`

- **类型**: 字符串
- **作用**: Stripe 私钥，用于服务端创建支付会话和处理 webhook
- **使用位置**:
  - `src/utils/stripe.ts` → `stripe` 实例
  - `src/app/api/stripe/checkout/route.ts`
- **获取方式**:
  1. Stripe Dashboard → Developers → API keys
  2. 复制 Secret key（以 `sk_` 开头）
- **示例**: `sk_test_51AbCdEf...` (测试环境) 或 `sk_live_...` (生产环境)
- **安全性**: ⚠️ **绝不要**暴露在客户端代码中，只能在服务端使用

#### `STRIPE_WEBHOOK_SECRET`

- **类型**: 字符串
- **作用**: 用于验证 Stripe Webhook 请求的签名，防止伪造请求
- **使用位置**: `src/app/api/stripe/webhook/route.ts`
- **获取方式**:
  1. Stripe Dashboard → Developers → Webhooks
  2. 创建或选择 webhook endpoint
  3. 复制 Signing secret（以 `whsec_` 开头）
- **示例**: `whsec_1234567890abcdef...`
- **安全性**: ⚠️ 仅在服务端使用，用于验证 webhook 真实性

---

### LemonSqueezy 支付配置

#### `LEMON_SQUEEZY_API_KEY`

- **类型**: 字符串
- **作用**: LemonSqueezy API 密钥，用于创建支付会话
- **使用位置**: `src/utils/lemon.ts`
- **获取方式**:
  1. 登录 [LemonSqueezy Dashboard](https://app.lemonsqueezy.com)
  2. 进入 Settings → API
  3. 创建 API Key
- **示例**: `sk_1234567890abcdef...`

#### `LEMON_SQUEEZY_STORE_ID`

- **类型**: 字符串
- **作用**: LemonSqueezy 商店 ID，用于关联支付会话到特定商店
- **使用位置**: `src/utils/lemon.ts` → `createCheckout()`
- **获取方式**:
  1. LemonSqueezy Dashboard → Settings → Stores
  2. 查看 Store ID
- **示例**: `12345`

#### `LEMON_SQUEEZY_WEBHOOK_SECRET`

- **类型**: 字符串
- **作用**: 用于验证 LemonSqueezy Webhook 请求的签名
- **使用位置**: `src/app/api/lemonsqueezy/webhook/route.ts`
- **获取方式**:
  1. LemonSqueezy Dashboard → Settings → Webhooks
  2. 创建 webhook → 复制 Signing secret
- **示例**: `your-webhook-secret-here`

---

### Mailgun 邮件服务配置

#### `MAILGUN_API_KEY`

- **类型**: 字符串
- **作用**: Mailgun API 密钥，用于发送邮件
- **使用位置**: `src/lib/mailgun.ts`
- **获取方式**:
  1. 登录 [Mailgun Dashboard](https://app.mailgun.com)
  2. 进入 Sending → API Keys
  3. 复制 Private API key
- **示例**: `1234567890abcdef1234567890abcdef-12345678-abcdefgh`
- **注意**:
  - 开发环境可以不配置（会显示警告）
  - 生产环境必须配置才能发送邮件

#### `MAILGUN_SIGNING_KEY`

- **类型**: 字符串
- **作用**: 用于验证 Mailgun Webhook 请求的签名（邮件回复功能）
- **使用位置**: `src/app/api/mailgun/route.ts`
- **获取方式**:
  1. Mailgun Dashboard → Sending → Webhooks
  2. 查看 HTTP webhook signing key
- **示例**: `your-signing-key-here`
- **注意**: 只有需要处理邮件回复时才需要配置

---

### 其他配置

#### `NODE_ENV`

- **类型**: 字符串
- **作用**: Node.js 环境标识
- **可选值**: `development` | `production` | `test`
- **默认值**: `development`
- **使用位置**: 整个应用（Next.js 自动读取）

#### `HUSKY`

- **类型**: 字符串
- **作用**: 控制 Git hooks（Husky）是否运行
- **可选值**: `0` (禁用) | `1` (启用)
- **默认值**: `0`
- **使用位置**: Git hooks 配置

---

## 快速开始

### 1. 创建环境变量文件

```bash
# 复制示例文件
cp .env.example .env.local
```

### 2. 配置必需变量

至少需要配置 Supabase 相关变量：

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. 根据功能需求配置可选变量

- **使用本地数据库**: 配置 `DATABASE_URL`
- **使用 Stripe 支付**: 配置 Stripe 相关变量
- **使用 LemonSqueezy 支付**: 配置 LemonSqueezy 相关变量
- **发送邮件**: 配置 Mailgun 相关变量

---

## 详细说明

### 环境变量命名规则

#### `NEXT_PUBLIC_*` 前缀

- 以 `NEXT_PUBLIC_` 开头的变量会暴露到客户端代码
- 可以在浏览器中访问
- 只能包含非敏感信息（如公钥、URL）

#### 无前缀变量

- 仅在服务端使用
- 不会暴露到客户端
- 用于存储敏感信息（如私钥、API 密钥）

### 安全性建议

1. **永远不要提交 `.env.local` 到 Git**

   - `.env.local` 已在 `.gitignore` 中
   - 使用 `.env.example` 作为模板

2. **生产环境使用环境变量管理**

   - Vercel: Project Settings → Environment Variables
   - 其他平台: 使用平台提供的环境变量配置

3. **密钥轮换**

   - 定期更换 API 密钥
   - 如果密钥泄露，立即撤销并重新生成

4. **最小权限原则**
   - 只授予必要的权限
   - 使用测试密钥进行开发

### 环境变量优先级

Next.js 按以下顺序加载环境变量（后面的会覆盖前面的）：

1. `.env` - 所有环境
2. `.env.local` - 所有环境（本地覆盖，不提交到 Git）
3. `.env.development` - 仅开发环境
4. `.env.development.local` - 仅开发环境（本地覆盖）
5. `.env.production` - 仅生产环境
6. `.env.production.local` - 仅生产环境（本地覆盖）

### 验证配置

创建环境变量后，可以通过以下方式验证：

```typescript
// 在代码中检查
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL");
}
```

---

## 常见问题

### Q: 为什么有些变量需要 `NEXT_PUBLIC_` 前缀？

A: Next.js 只会在客户端代码中暴露以 `NEXT_PUBLIC_` 开头的环境变量。如果变量需要在客户端使用（如 Supabase 客户端初始化），必须添加此前缀。

### Q: 我可以同时使用 Stripe 和 LemonSqueezy 吗？

A: 可以。项目支持两种支付方式，你可以根据需求选择使用其中一种或两种都使用。

### Q: 不配置 Mailgun 会影响应用运行吗？

A: 不会。Mailgun 是可选的，如果不配置，应用仍可正常运行，只是无法发送邮件。开发环境会显示警告信息。

### Q: 如何获取 Supabase 连接字符串用于业务数据库？

A: 在 Supabase Dashboard → Settings → Database → Connection string → URI，复制连接字符串。注意：这不是用于认证的 URL，而是用于直接连接数据库的。

---

## 相关资源

- [Next.js 环境变量文档](https://nextjs.org/docs/basic-features/environment-variables)
- [Supabase 文档](https://supabase.com/docs)
- [Stripe API 文档](https://stripe.com/docs/api)
- [LemonSqueezy API 文档](https://docs.lemonsqueezy.com/api)
- [Mailgun API 文档](https://documentation.mailgun.com/)
