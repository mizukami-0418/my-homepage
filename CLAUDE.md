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

| 変数名                      | 用途                                            |
| --------------------------- | ----------------------------------------------- |
| `QIITA_TOKEN`               | Qiita API 認証トークン（ブログ記事取得）        |
| `NEXT_PUBLIC_SUPABASE_URL`  | Supabase プロジェクト URL                       |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase サービスロールキー（お問い合わせ保存） |
| `RESEND_API_KEY`            | Resend API キー（メール送信）                   |
| `ADMIN_EMAIL`               | お問い合わせ通知の送信先メールアドレス          |

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

## 修正作業ルール

<!--
  このセクションを CLAUDE.md の末尾にそのまま追記する。
  プロジェクトに合わせて <要変更> 箇所だけ書き換えること。
-->

---

### 絶対ルール（最優先・例外なし）

- **main / master への直接 Push は禁止** — 必ず作業ブランチから PR を作成し、ユーザーが承認してからマージする
- **マージ・PR 作成はユーザーの指示があるまで実行しない**
- **ファイルの削除は実行前に必ずユーザーに確認する** — 削除が必要と判断した場合でも、ファイル名とその理由を提示してから承認を得ること
- **検証コマンドが1つでも失敗したら Push しない** — エラーを残したままコミットしない
- **エラー原因が不明なまま次の問題に進まない** — 原因が特定できない場合は作業を停止してユーザーに報告する

---

### フェーズ 1 — 修正前の準備

```bash
# 1. 現在の状態を確認（未コミットの変更がないことを確認）
git status
```

- **1つの問題 = 1つのコミット** — 複数の問題を同時に修正しない
- `docs/review.md` を読んで、対象問題のIDと内容を確認してから着手する

---

### フェーズ 2 — 修正中のルール

- **対象ファイルのみ変更する** — 問題と無関係のファイルに触らない
- **ファイルの削除は原則禁止** — 削除が必要な場合は `_archive/` への移動で代替し、ユーザーに確認後に実施する
- **不明点が生じたら即停止** — 推測で進めず、ユーザーに確認してから再開する
- コードを大きく書き換える場合は、変更前に該当箇所をコメントアウトして退避してから着手する

---

### フェーズ 3 — 検証 → コミット → Push

修正後は**必ず以下の順番で**すべて実行する。1つでも失敗した場合は修正してからやり直す。

```bash
# Step 1: ビルドが通るか確認
npm run build

# Step 2: Lint・型チェック
npm run lint          # <要変更: プロジェクトのlintコマンド>
npm run type-check    # <要変更: 型チェックがある場合>

# Step 3: 開発サーバーで動作確認
npm run dev
# → ブラウザで対象機能が正常に動くことを確認してから次へ進む
# → 確認後に Ctrl+C でサーバーを停止

# Step 4: テスト（テストがある場合）
npm run test

# Step 5: 問題なければコミット
git add -p            # -p で変更を1つずつ確認してからステージング
git commit -m "fix(SEC-002): sanitize user input in search endpoint"

# Step 6: Push
git push origin fix/SEC-002-sanitize-search-input
```

---

### フェーズ 4 — docs/review.md の更新

Push が成功したら必ず記録を更新する。

```markdown
<!-- 変更例 -->

- [x] 🔴 SEC-002 SQLクエリに未サニタイズのユーザー入力 (`src/api/search.py:45`)

### SEC-002 解決 (YYYY-MM-DD)

`bleach.clean()` で入力をサニタイズ。パラメータ化クエリに変更。
```

---

### 緊急時の対応（アクシデント発生時）

```bash
# 何かおかしいと気づいたら即座に実行
git status            # 何が変わったか確認
git diff              # 変更内容を確認

# 直前のコミット前の状態に戻す（コミット済みなら）
git revert HEAD

# まだコミットしていない変更を全部取り消す
git restore .

# 特定のファイルだけ戻す
git restore <ファイルパス>

# 作業ブランチを丸ごと捨てて main に戻る
git checkout main
git branch -D fix/<ブランチ名>
```

> **重要**: `git restore .` は未コミットの変更をすべて失う。実行前に `git diff` で内容を確認すること。

---

### Push 頻度の目安

| タイミング                   | アクション                         |
| ---------------------------- | ---------------------------------- |
| 問題を1件解決するたびに      | 検証 → コミット → Push             |
| セッションを終了する前に     | 必ず Push（WIP コミットでもよい）  |
| 大きなリファクタリングの前に | 現状を Push してからブランチを切る |
| 1時間作業したら              | 途中でも WIP コミットを Push       |

```bash
# セッション終了時の WIP コミット例（検証前でも記録を残したい場合）
git add -A
git commit -m "wip: SEC-002 対応途中 — サニタイズ実装、テスト未完"
git push origin fix/SEC-002-sanitize-search-input
```
