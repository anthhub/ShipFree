# 服务付费指南与存储方案

本文档详细说明 ShipFree 项目中使用的所有服务的付费情况、套餐价格，以及图片/视频存储服务推荐。

## 📋 目录

- [服务付费情况总览](#服务付费情况总览)
- [详细套餐价格](#详细套餐价格)
- [图片/视频存储服务推荐](#图片视频存储服务推荐)
- [成本优化建议](#成本优化建议)

---

## 🎯 服务付费情况总览

### ✅ 完全免费的服务

| 服务                  | 用途     | 免费额度                     |
| --------------------- | -------- | ---------------------------- |
| **Vercel**            | 应用部署 | 无限个人项目，100GB/月带宽   |
| **Supabase Auth**     | 用户认证 | 无限用户，50,000 MAU/月      |
| **Supabase Database** | 数据库   | 500MB 存储，2GB 带宽/月      |
| **Supabase Storage**  | 文件存储 | 1GB 存储，2GB 带宽/月        |
| **GitHub**            | 代码托管 | 公开仓库免费，私有仓库有限制 |

### 💰 按需付费的服务

| 服务             | 用途     | 免费额度               | 付费起点                   |
| ---------------- | -------- | ---------------------- | -------------------------- |
| **Stripe**       | 支付处理 | 无                     | 按交易收费（2.9% + $0.30） |
| **LemonSqueezy** | 支付处理 | 无                     | 按交易收费（3.5% + $0.30） |
| **Mailgun**      | 邮件发送 | 5,000 封/月（前3个月） | $35/月起                   |
| **Railway**      | 应用部署 | $5 信用/月             | $5/月起                    |
| **Render**       | 应用部署 | 免费（有休眠）         | $7/月起                    |

---

## 💵 详细套餐价格

### 1. Supabase（认证 + 数据库 + 存储）

#### 免费计划（Free）

- ✅ **价格**: 完全免费
- ✅ **认证**: 无限用户，50,000 MAU/月
- ✅ **数据库**: 500MB 存储，2GB 带宽/月
- ✅ **存储**: 1GB 存储，2GB 带宽/月
- ✅ **API 请求**: 500,000/月
- ✅ **实时连接**: 200 并发连接
- ⚠️ **限制**: 7 天项目暂停（无活动时）

**适用场景**: 个人项目、MVP、小型 SaaS

#### Pro 计划

- 💰 **价格**: $25/月
- ✅ **认证**: 无限用户，100,000 MAU/月
- ✅ **数据库**: 8GB 存储，50GB 带宽/月
- ✅ **存储**: 100GB 存储，200GB 带宽/月
- ✅ **API 请求**: 5,000,000/月
- ✅ **实时连接**: 500 并发连接
- ✅ **无项目暂停**
- ✅ **每日备份**

**适用场景**: 中小型 SaaS，需要更多资源

#### Team 计划

- 💰 **价格**: $599/月
- ✅ 所有 Pro 功能
- ✅ 更高配额
- ✅ 优先支持
- ✅ SLA 保证

**适用场景**: 企业级应用

**官网**: [supabase.com/pricing](https://supabase.com/pricing)

---

### 2. Stripe（支付处理）

#### 定价模式

- 💰 **无月费**
- 💰 **按交易收费**:
  - 在线支付: **2.9% + $0.30** / 笔
  - 国际卡: **3.9% + $0.30** / 笔
  - 欧洲卡: **1.4% + €0.25** / 笔（SEPA）
- 💰 **退款**: $15/笔（可退还）

#### 示例成本

- 100 笔交易 × $10 = $1,000 收入
- Stripe 费用: 100 × ($0.30 + $10 × 2.9%) = $59
- 实际收入: $941
- **费率**: 约 5.9%

**适用场景**: 全球支付，需要完整支付功能

**官网**: [stripe.com/pricing](https://stripe.com/pricing)

---

### 3. LemonSqueezy（支付处理）

#### 定价模式

- 💰 **无月费**
- 💰 **按交易收费**:
  - 标准费率: **3.5% + $0.30** / 笔
  - 年付折扣: **3.5% + $0.30** / 笔（无折扣）
- 💰 **退款**: 免费

#### 示例成本

- 100 笔交易 × $10 = $1,000 收入
- LemonSqueezy 费用: 100 × ($0.30 + $10 × 3.5%) = $65
- 实际收入: $935
- **费率**: 约 6.5%

**优势**:

- ✅ 自动处理 VAT（增值税）
- ✅ 内置订阅管理
- ✅ 更简单的集成

**适用场景**: SaaS 订阅，需要自动处理税务

**官网**: [lemonsqueezy.com/pricing](https://www.lemonsqueezy.com/pricing)

---

### 4. Mailgun（邮件服务）

#### 免费计划（前3个月）

- ✅ **价格**: 免费
- ✅ **邮件数量**: 5,000 封/月
- ✅ **有效期**: 前 3 个月
- ⚠️ **限制**: 仅限测试域名

#### Foundation 计划

- 💰 **价格**: $35/月
- ✅ **邮件数量**: 50,000 封/月
- ✅ **存储**: 1,000 条日志/月
- ✅ **支持**: 邮件支持

#### Growth 计划

- 💰 **价格**: $80/月
- ✅ **邮件数量**: 100,000 封/月
- ✅ **存储**: 10,000 条日志/月
- ✅ **支持**: 优先支持

#### Scale 计划

- 💰 **价格**: 自定义
- ✅ **邮件数量**: 无限
- ✅ **存储**: 无限
- ✅ **支持**: 专属支持

**按量付费**:

- 💰 **超出部分**: $0.80 / 1,000 封

**适用场景**: 需要可靠邮件送达，大量邮件发送

**官网**: [mailgun.com/pricing](https://www.mailgun.com/pricing)

#### 免费替代方案

**Resend**（推荐）:

- ✅ **免费**: 3,000 封/月
- ✅ **付费**: $20/月起（50,000 封/月）
- ✅ **更现代**的 API
- ✅ **更好的开发者体验**

**SendGrid**:

- ✅ **免费**: 100 封/天（3,000/月）
- ✅ **付费**: $19.95/月起（50,000 封/月）

**官网**: [resend.com](https://resend.com)

---

### 5. Vercel（应用部署）

#### Hobby 计划（免费）

- ✅ **价格**: 完全免费
- ✅ **项目**: 无限个人项目
- ✅ **带宽**: 100GB/月
- ✅ **构建**: 6,000 分钟/月
- ✅ **Serverless Functions**: 100GB-小时/月
- ✅ **预览部署**: 无限
- ⚠️ **限制**: 无团队功能，无分析

**适用场景**: 个人项目、开源项目

#### Pro 计划

- 💰 **价格**: $20/月/用户
- ✅ **项目**: 无限
- ✅ **带宽**: 1TB/月
- ✅ **构建**: 24,000 分钟/月
- ✅ **Serverless Functions**: 1,000GB-小时/月
- ✅ **团队功能**: 是
- ✅ **分析**: 包含
- ✅ **优先支持**: 是

**适用场景**: 专业项目、团队协作

#### Enterprise 计划

- 💰 **价格**: 自定义
- ✅ 所有 Pro 功能
- ✅ 更高配额
- ✅ SLA 保证
- ✅ 专属支持

**官网**: [vercel.com/pricing](https://vercel.com/pricing)

---

### 6. Railway（应用部署）

#### 定价模式

- 💰 **按使用付费**
- ✅ **免费信用**: $5/月（新用户）
- 💰 **超出部分**: 按实际使用计费

#### 示例价格

- **应用托管**: ~$5-10/月（小型应用）
- **PostgreSQL**: ~$5/月（1GB）
- **MongoDB**: ~$5/月（1GB）
- **带宽**: 包含在服务中

**适用场景**: 需要 Docker 部署，需要数据库托管

**官网**: [railway.app/pricing](https://railway.app/pricing)

---

### 7. Render（应用部署）

#### 免费计划

- ✅ **价格**: 免费
- ⚠️ **限制**:
  - 应用休眠（15分钟无活动）
  - 750 小时/月
  - 512MB RAM
  - 无自定义域名（免费计划）

#### Starter 计划

- 💰 **价格**: $7/月起
- ✅ **无休眠**
- ✅ **512MB RAM**
- ✅ **自定义域名**

#### Professional 计划

- 💰 **价格**: $25/月起
- ✅ **2GB RAM**
- ✅ **更高性能**

**官网**: [render.com/pricing](https://render.com/pricing)

---

## 🖼️ 图片/视频存储服务推荐

### ⭐ 首选：Supabase Storage（推荐）

**为什么选择？**

- ✅ **已集成**：项目已使用 Supabase
- ✅ **免费额度**：1GB 存储，2GB 带宽/月
- ✅ **简单易用**：与 Supabase Auth 无缝集成
- ✅ **自动 CDN**：全球加速
- ✅ **Row Level Security**：自动权限控制

**价格**:

- 免费: 1GB 存储，2GB 带宽/月
- Pro ($25/月): 100GB 存储，200GB 带宽/月
- 超出: $0.021/GB 存储，$0.09/GB 带宽

**集成示例**:

```typescript
// 上传图片
const { data, error } = await supabase.storage
  .from("avatars")
  .upload(`${userId}/avatar.jpg`, file);

// 获取公共 URL
const {
  data: { publicUrl },
} = supabase.storage.from("avatars").getPublicUrl(`${userId}/avatar.jpg`);
```

**适用场景**: 用户头像、文档、小文件

---

### 🥈 次选：Cloudinary（图片优化）

**为什么选择？**

- ✅ **免费额度**: 25GB 存储，25GB 带宽/月
- ✅ **自动优化**: 图片压缩、格式转换
- ✅ **CDN**: 全球加速
- ✅ **视频支持**: 视频转码、缩略图
- ✅ **AI 功能**: 自动标签、内容审核

**价格**:

- 免费: 25GB 存储，25GB 带宽/月
- Plus ($99/月): 100GB 存储，100GB 带宽/月
- Advanced: 自定义

**适用场景**: 需要图片优化、视频处理、大量媒体文件

**官网**: [cloudinary.com/pricing](https://cloudinary.com/pricing)

---

### 🥉 第三选择：AWS S3 + CloudFront

**为什么选择？**

- ✅ **按量付费**: 只付实际使用
- ✅ **高可靠性**: 99.999999999% 持久性
- ✅ **全球 CDN**: CloudFront 加速
- ✅ **无限扩展**: 无存储限制

**价格**（示例，US East）:

- **S3 存储**: $0.023/GB/月
- **S3 请求**: $0.005/1,000 PUT，$0.0004/1,000 GET
- **CloudFront**: $0.085/GB（前 10TB）
- **传输出**: $0.09/GB（前 10TB）

**示例成本**（100GB 存储，10GB/月带宽）:

- S3 存储: 100GB × $0.023 = $2.30
- S3 请求: ~$0.10
- CloudFront: 10GB × $0.085 = $0.85
- **总计**: ~$3.25/月

**适用场景**: 大型应用、需要完全控制、已有 AWS 账户

**官网**: [aws.amazon.com/s3/pricing](https://aws.amazon.com/s3/pricing)

---

### 其他推荐服务

#### Cloudflare R2

- ✅ **免费**: 10GB 存储，无带宽费用
- ✅ **S3 兼容**: 可直接替换 S3
- ✅ **无出口费用**: 带宽免费
- 💰 **付费**: $0.015/GB/月（超出免费额度）

**适用场景**: 需要大量带宽，预算有限

**官网**: [cloudflare.com/products/r2](https://www.cloudflare.com/products/r2)

#### ImageKit

- ✅ **免费**: 20GB 存储，20GB 带宽/月
- ✅ **实时优化**: 自动图片优化
- ✅ **CDN**: 全球加速
- 💰 **付费**: $49/月起

**适用场景**: 需要专业图片优化

**官网**: [imagekit.io/pricing](https://imagekit.io/pricing)

#### Uploadcare

- ✅ **免费**: 5GB 存储，5GB 带宽/月
- ✅ **CDN**: 全球加速
- ✅ **API**: 简单易用
- 💰 **付费**: $25/月起

**适用场景**: 需要简单集成的文件上传

**官网**: [uploadcare.com/pricing](https://uploadcare.com/pricing)

---

## 📊 存储服务对比

| 服务                 | 免费存储 | 免费带宽 | 图片优化 | 视频支持 | 价格（超出） |
| -------------------- | -------- | -------- | -------- | -------- | ------------ |
| **Supabase Storage** | 1GB      | 2GB/月   | ❌       | ❌       | $0.021/GB    |
| **Cloudinary**       | 25GB     | 25GB/月  | ✅       | ✅       | $99/月起     |
| **AWS S3**           | 无       | 无       | ❌       | ❌       | $0.023/GB    |
| **Cloudflare R2**    | 10GB     | 无限     | ❌       | ❌       | $0.015/GB    |
| **ImageKit**         | 20GB     | 20GB/月  | ✅       | ❌       | $49/月起     |

---

## 💡 成本优化建议

### 1. 最小成本方案（完全免费）

**部署**: Vercel（免费）
**认证**: Supabase Auth（免费）
**数据库**: Supabase Database（免费 500MB）
**图片存储**: Supabase Storage（免费 1GB）
**视频存储**: 见下方 [免费视频存储方案](#免费视频存储方案)
**邮件**: Resend（免费 3,000 封/月）
**支付**: Stripe（按交易收费，无月费）

**月成本**: **$0**（仅支付交易手续费）

---

## 🎥 免费视频存储方案

### ⭐ 首选：Cloudinary（推荐）

**为什么选择？**

- ✅ **免费额度**: 25GB 存储，25GB 带宽/月
- ✅ **视频转码**: 自动转码为多种格式
- ✅ **视频优化**: 自动压缩，减少文件大小
- ✅ **缩略图生成**: 自动生成视频缩略图
- ✅ **CDN**: 全球加速
- ✅ **API 简单**: 易于集成

**免费计划限制**:

- ⚠️ 25GB 存储空间
- ⚠️ 25GB 带宽/月
- ⚠️ 25GB 转码时长/月
- ⚠️ 无高级分析

**适用场景**:

- 小到中型视频（< 100MB/个）
- 每月播放量 < 25GB
- 需要视频转码和优化

**集成示例**:

```typescript
// 上传视频
const formData = new FormData();
formData.append("file", videoFile);
formData.append("upload_preset", "your_preset");

const response = await fetch(
  `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`,
  {
    method: "POST",
    body: formData,
  }
);

// 获取视频 URL
const { secure_url } = await response.json();
```

**官网**: [cloudinary.com](https://cloudinary.com)

---

### 🥈 次选：Supabase Storage（小视频）

**为什么选择？**

- ✅ **已集成**: 项目已使用 Supabase
- ✅ **免费额度**: 1GB 存储，2GB 带宽/月
- ✅ **简单易用**: 与认证系统集成
- ✅ **Row Level Security**: 自动权限控制

**限制**:

- ⚠️ **仅 1GB 存储**: 只能存储少量小视频
- ⚠️ **无视频转码**: 需要自己处理转码
- ⚠️ **无视频优化**: 需要自己优化

**适用场景**:

- 非常小的视频（< 10MB/个）
- 用户上传的视频（头像视频、短视频）
- 不需要转码的视频

**集成示例**:

```typescript
// 上传视频
const { data, error } = await supabase.storage
  .from("videos")
  .upload(`${userId}/video.mp4`, videoFile);

// 获取公共 URL
const {
  data: { publicUrl },
} = supabase.storage.from("videos").getPublicUrl(`${userId}/video.mp4`);
```

**注意**: 1GB 只能存储约 10-20 个小视频（50-100MB 每个）

---

### 🥉 第三选择：Bunny.net Stream（推荐用于视频流）

**为什么选择？**

- ✅ **免费额度**: 1TB 存储，1TB 带宽/月（前 30 天）
- ✅ **之后**: $1/TB 存储，$0.01/GB 带宽
- ✅ **视频流**: 原生视频流支持
- ✅ **转码**: 自动转码
- ✅ **CDN**: 全球加速

**免费试用**:

- ✅ 前 30 天：1TB 存储 + 1TB 带宽
- 💰 之后：按使用付费（非常便宜）

**适用场景**:

- 视频流媒体
- 需要大量带宽
- 需要专业视频功能

**官网**: [bunny.net/stream](https://bunny.net/stream)

---

### 其他免费/低成本方案

#### Mux（专业视频平台）

**免费计划**:

- ✅ 前 30 天：$50 信用额度
- ✅ 之后：按使用付费
- 💰 存储：$0.015/GB/月
- 💰 转码：$0.04/分钟
- 💰 带宽：$0.01/GB

**优势**:

- ✅ 专业视频平台
- ✅ 自动转码和优化
- ✅ 视频分析
- ✅ 直播支持

**适用场景**: 专业视频应用，需要高级功能

**官网**: [mux.com](https://www.mux.com)

---

#### AWS S3 + CloudFront（按量付费）

**价格**（非常便宜）:

- 💰 S3 存储：$0.023/GB/月
- 💰 CloudFront：$0.085/GB（前 10TB）
- 💰 传输：$0.09/GB

**示例成本**（100GB 视频，10GB/月播放）:

- 存储：100GB × $0.023 = $2.30/月
- 带宽：10GB × $0.085 = $0.85/月
- **总计**: ~$3.15/月

**优势**:

- ✅ 按量付费，非常便宜
- ✅ 高可靠性
- ✅ 全球 CDN

**适用场景**: 需要大量存储，预算有限

---

#### Vimeo（视频托管）

**免费计划**:

- ✅ 500MB/周上传限制
- ✅ 5GB 总存储
- ⚠️ 有 Vimeo 水印

**付费计划**:

- 💰 Plus: $12/月（5GB/周，250GB 总存储）
- 💰 Pro: $20/月（20GB/周，1TB 总存储）

**适用场景**: 需要视频播放器，不需要自己开发

**官网**: [vimeo.com](https://vimeo.com)

---

## 📊 免费视频存储对比

| 服务                 | 免费存储         | 免费带宽       | 视频转码 | 视频优化 | 适用场景           |
| -------------------- | ---------------- | -------------- | -------- | -------- | ------------------ |
| **Cloudinary**       | 25GB             | 25GB/月        | ✅       | ✅       | 小到中型视频       |
| **Supabase Storage** | 1GB              | 2GB/月         | ❌       | ❌       | 非常小的视频       |
| **Bunny.net Stream** | 1TB（30天）      | 1TB/月（30天） | ✅       | ✅       | 视频流媒体         |
| **Mux**              | $50 信用（30天） | 按量付费       | ✅       | ✅       | 专业视频           |
| **AWS S3**           | 无               | 无             | ❌       | ❌       | 大量存储（需付费） |
| **Vimeo**            | 5GB              | 有限           | ✅       | ✅       | 视频托管           |

---

## 💡 免费视频存储推荐方案

### 方案 1: 完全免费（小规模）

**推荐**: Cloudinary

- ✅ 25GB 存储
- ✅ 25GB 带宽/月
- ✅ 视频转码和优化
- ✅ 完全免费

**适用场景**:

- 每月视频播放量 < 25GB
- 视频总数 < 100 个（平均 250MB/个）
- 个人项目或 MVP

**月成本**: **$0**

---

### 方案 2: 混合方案（推荐）

**图片**: Supabase Storage（免费 1GB）
**视频**: Cloudinary（免费 25GB）

**优势**:

- ✅ 图片和视频分离存储
- ✅ 充分利用免费额度
- ✅ 视频有转码和优化

**适用场景**:

- 需要存储图片和视频
- 视频需要转码
- 预算有限

**月成本**: **$0**

---

### 方案 3: 低成本方案（超出免费额度后）

**推荐**: Bunny.net Stream

- 💰 $1/TB 存储
- 💰 $0.01/GB 带宽
- ✅ 视频转码
- ✅ 全球 CDN

**示例成本**（100GB 视频，50GB/月播放）:

- 存储：100GB × $0.001 = $0.10/月
- 带宽：50GB × $0.01 = $0.50/月
- **总计**: ~$0.60/月

**适用场景**:

- 超出免费额度
- 需要大量带宽
- 预算有限

---

## 🎯 最小成本方案更新（包含视频）

### 完全免费方案

**部署**: Vercel（免费）
**认证**: Supabase Auth（免费）
**数据库**: Supabase Database（免费 500MB）
**图片存储**: Supabase Storage（免费 1GB）
**视频存储**: Cloudinary（免费 25GB 存储，25GB 带宽/月）
**邮件**: Resend（免费 3,000 封/月）
**支付**: Stripe（按交易收费，无月费）

**月成本**: **$0**（仅支付交易手续费）

**视频存储能力**:

- ✅ 25GB 视频存储空间
- ✅ 25GB/月视频播放带宽
- ✅ 自动视频转码和优化
- ✅ 全球 CDN 加速

**限制**:

- ⚠️ 每月播放量不能超过 25GB
- ⚠️ 总存储不能超过 25GB
- ⚠️ 转码时长限制 25GB/月

**优化建议**:

1. 压缩视频：上传前压缩视频，减少存储和带宽
2. 使用合适的格式：MP4 (H.264) 通常最兼容
3. 设置视频质量：根据需求选择合适的质量
4. 使用缩略图：减少带宽使用
5. 监控使用量：定期检查使用情况，避免超出限制

---

### 超出免费额度后的低成本方案

**视频存储**: Bunny.net Stream

- 💰 存储：$0.001/GB/月（$1/TB/月）
- 💰 带宽：$0.01/GB
- ✅ 视频转码和优化

**示例成本**（100GB 视频，50GB/月播放）:

- **月成本**: ~$0.60/月

**总成本**（包含其他服务）:

- 部署：$0（Vercel 免费）
- 认证：$0（Supabase 免费）
- 数据库：$0（Supabase 免费）
- 图片：$0（Supabase 免费）
- 视频：$0.60/月（Bunny.net）
- 邮件：$0（Resend 免费）
- **总计**: **~$0.60/月**

---

## 📝 视频存储集成示例

### Cloudinary 集成

```typescript
// 安装依赖
// npm install cloudinary

import { v2 as cloudinary } from "cloudinary";

// 配置
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 上传视频
export async function uploadVideo(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "your_preset");
  formData.append("resource_type", "video");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  return data.secure_url; // 视频 URL
}

// 获取优化后的视频 URL
export function getOptimizedVideoUrl(publicId: string) {
  return cloudinary.url(publicId, {
    resource_type: "video",
    transformation: [{ quality: "auto" }, { fetch_format: "auto" }],
  });
}
```

---

## ⚠️ 注意事项

1. **免费额度限制**:

   - Cloudinary: 25GB 存储，25GB 带宽/月
   - 超出后需要付费或使用其他服务

2. **视频大小**:

   - 建议单个视频 < 500MB
   - 使用压缩工具减少文件大小

3. **带宽监控**:

   - 定期检查使用量
   - 设置使用量警报
   - 优化视频质量以减少带宽

4. **备份**:

   - 重要视频需要备份
   - 考虑使用多个存储服务

5. **成本控制**:
   - 使用免费计划开始
   - 监控使用量
   - 超出后考虑 Bunny.net 等低成本方案

---

### 2. 小型 SaaS 方案（~$50/月）

**部署**: Vercel Pro（$20/月）
**认证**: Supabase Pro（$25/月）
**数据库**: 包含在 Supabase
**存储**: 包含在 Supabase（100GB）
**邮件**: Resend（$20/月，50,000 封）
**支付**: Stripe（按交易收费）

**月成本**: **~$65/月** + 交易手续费

---

### 3. 中型 SaaS 方案（~$150/月）

**部署**: Vercel Pro（$20/月）
**认证**: Supabase Pro（$25/月）
**数据库**: 包含在 Supabase
**存储**: Cloudinary Plus（$99/月，图片优化）
**邮件**: Mailgun Growth（$80/月）
**支付**: Stripe（按交易收费）

**月成本**: **~$224/月** + 交易手续费

---

### 4. 成本优化技巧

1. **使用免费计划开始**

   - 先用免费计划验证产品
   - 有收入后再升级

2. **选择合适的支付服务商**

   - Stripe: 费率低（2.9%），功能全
   - LemonSqueezy: 自动处理税务，适合国际 SaaS

3. **优化存储使用**

   - 使用图片压缩
   - 使用 CDN 缓存
   - 定期清理未使用文件

4. **邮件服务选择**

   - 小规模: Resend（免费 3,000/月）
   - 中等规模: Resend Pro（$20/月，50,000/月）
   - 大规模: Mailgun（$35/月起）

5. **数据库优化**
   - 使用 Supabase 免费计划开始（500MB）
   - 定期清理旧数据
   - 使用索引优化查询

---

## 🎯 推荐方案总结

### 个人项目 / MVP

- **部署**: Vercel（免费）
- **认证**: Supabase（免费）
- **数据库**: Supabase（免费 500MB）
- **存储**: Supabase Storage（免费 1GB）
- **邮件**: Resend（免费 3,000/月）
- **支付**: Stripe（按交易收费）

**月成本**: **$0**（仅交易手续费）

### 小型 SaaS（< 1,000 用户）

- **部署**: Vercel Pro（$20/月）
- **认证**: Supabase Pro（$25/月）
- **存储**: Supabase Storage（包含在 Pro）
- **邮件**: Resend Pro（$20/月）
- **支付**: Stripe（按交易收费）

**月成本**: **~$65/月** + 交易手续费

### 中型 SaaS（1,000-10,000 用户）

- **部署**: Vercel Pro（$20/月）
- **认证**: Supabase Pro（$25/月）
- **存储**: Cloudinary Plus（$99/月）
- **邮件**: Mailgun Growth（$80/月）
- **支付**: Stripe（按交易收费）

**月成本**: **~$224/月** + 交易手续费

---

## 📚 相关资源

- [Supabase 定价](https://supabase.com/pricing)
- [Stripe 定价](https://stripe.com/pricing)
- [LemonSqueezy 定价](https://www.lemonsqueezy.com/pricing)
- [Mailgun 定价](https://www.mailgun.com/pricing)
- [Vercel 定价](https://vercel.com/pricing)
- [Cloudinary 定价](https://cloudinary.com/pricing)
- [Resend 定价](https://resend.com/pricing)

---

## ⚠️ 注意事项

1. **免费计划限制**: 大多数免费计划有使用限制，超出后需要付费
2. **隐藏费用**: 注意带宽、请求次数等隐藏费用
3. **数据迁移**: 选择服务时考虑未来迁移成本
4. **备份**: 重要数据需要定期备份，可能需要额外费用
5. **监控**: 使用监控工具跟踪使用量，避免意外费用
