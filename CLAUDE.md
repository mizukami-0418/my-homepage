# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint 実行
```

テストフレームワークは未設定。

## 環境変数 (.env.local)

| 変数名 | 用途 |
|---|---|
| `QIITA_TOKEN` | Qiita API 認証トークン（ブログ記事取得） |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase プロジェクト URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase サービスロールキー（お問い合わせ保存） |
| `RESEND_API_KEY` | Resend API キー（メール送信） |
| `ADMIN_EMAIL` | お問い合わせ通知の送信先メールアドレス |

## アーキテクチャ

### ルート構成

```
/            ← ランディングページ（セクション一覧）
/blog        ← Qiita 記事一覧（検索・ページネーション付き）
/contact     ← お問い合わせフォーム
/workflow    ← 制作フロー説明
/privacy     ← プライバシーポリシー
/terms       ← 利用規約
```

### 二重レイアウト

`app/LayoutWrapper.tsx` がパスを見てレイアウトを切り替える。

- **フルレイアウト**（`Header` + `Footer`）: `/`（ホーム）
- **シンプルレイアウト**（`SimpleHeader` + `SimpleFooter`）: `/blog`, `/contact`, `/privacy`, `/terms`, `/workflow`

新しいページを追加する場合、`SIMPLE_LAYOUT_PATHS` への追記が必要になることがある。

### ホームページのセクション構成

`app/page.tsx` が以下の順でセクションコンポーネントを並べている（全て `app/components/` 配下）:

`HeroSection` → `TargetAudienceSection` → `ProblemsSection` → `AboutSection` → `ServicesSection` → `StrengthsSection` → `WorksSection` → `PricingSection` → `BlogLink` → `ContactSection`

### お問い合わせフロー

`ContactForm`（Client Component）→ Server Action `app/actions/contact.ts` → ① Supabase `contacts` テーブルに保存 → ② Resend でユーザーに自動返信 → ③ Resend で管理者に通知。

### ブログ

`app/lib/qiita.ts` で Qiita API（認証済みユーザーの記事一覧）を取得し、`app/blog/page.tsx`（Server Component）でフィルタリングとページネーションを行う。記事データは `cache: "no-store"` で毎回取得。

### ダークモード

`app/hooks/useTheme.ts` で管理。`localStorage` の `"theme"` キーに `"dark"` / `"light"` を保存し、`<html>` 要素に `.dark` クラスを付け外しする。CSS は Tailwind v4 の `@custom-variant dark (&:is(.dark *))` で定義。

### UI コンポーネント

shadcn/ui のプリミティブは `components/ui/`（`@/components/ui/`）に配置。`app/components/` 配下には機能別のページセクションコンポーネントを置く。アイコンは `@hugeicons/react`（主），`lucide-react`，`@mui/icons-material` を使用。