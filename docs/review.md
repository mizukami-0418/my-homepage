# プロジェクトレビュー

作成日: 2026-04-26  
対象ブランチ: main

---

## セキュリティ

### SEC-001 🔴高 メールテンプレートへの HTML インジェクション

- [ ] **SEC-001** — `app/actions/contact.ts:72,91` — ユーザー入力の `name`・`message`・`email` を HTML テンプレートにエスケープなしで直接埋め込んでいる。悪意あるユーザーが `<script>` タグや HTML タグを送信すると、管理者が受信するメール内で任意の HTML が実行・レンダリングされる。

  ```ts
  // 現状（危険）
  html: `<p>${name} 様</p><p>${message.replace(/\n/g, "<br />")}</p>`

  // 修正案
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  html: `<p>${escape(name)} 様</p><p>${escape(message).replace(/\n/g, "<br />")}</p>`
  ```

### SEC-002 🔴高 メール送信エラーを無視して `success: true` を返す

- [ ] **SEC-002** — `app/actions/contact.ts:68-95` — Resend でのメール送信（自動返信・管理者通知）の結果を一切チェックしていない。送信が失敗してもユーザーには「送信完了」と表示されてしまう。

  ```ts
  // 修正案
  const { error: replyError } = await resend.emails.send({ ... });
  if (replyError) {
    return { success: false, error: "メール送信に失敗しました" };
  }
  ```

### SEC-003 🟡中 `ADMIN_EMAIL` の非 null アサーション

- [ ] **SEC-003** — `app/actions/contact.ts:89` — `process.env.ADMIN_EMAIL!` は環境変数が未設定の場合に `undefined` を Resend に渡し、実行時エラーになる。明示的なバリデーションがない。

  ```ts
  if (!process.env.ADMIN_EMAIL) {
    return { success: false, error: "サーバー設定エラー" };
  }
  ```

### SEC-004 🟡中 Supabase クライアントの環境変数バリデーション欠如

- [ ] **SEC-004** — `app/lib/supabase.ts:3-6` — `NEXT_PUBLIC_SUPABASE_URL!` と `SUPABASE_SERVICE_ROLE_KEY!` に非 null アサーションを使用しているが、未設定時のエラーが不明瞭。また `SUPABASE_SERVICE_ROLE_KEY` はサーバー専用キーであり、このファイルが誤ってクライアントバンドルに含まれないよう注意が必要（現状は Server Action 経由のみで使用されており問題なし）。

  ```ts
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase 環境変数が未設定です");
  }
  ```

### SEC-005 🟡中 Content-Security-Policy ヘッダー未設定

- [ ] **SEC-005** — `next.config.ts:3-11` — `X-Frame-Options` などは設定済みだが、XSS 対策として最も効果的な `Content-Security-Policy` が設定されていない。

  ```ts
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://qiita.com;",
  }
  ```

### SEC-006 🟡中 個人の電話番号・メールアドレスがソースコードにハードコード

- [ ] **SEC-006** — `app/components/common/FooterBrand.tsx:24-28` — 電話番号 `080-2243-1037` とメールアドレス `tomo.web.studio2026@gmail.com` がソースコードに直接記述されている。Git 履歴や OSS 公開時にスクレイパーに収集されるリスクがある。環境変数化または定数ファイルへの移動を推奨。

---

## コード品質

### QUA-001 🟡中 Qiita API レスポンスで `any` 型を使用

- [ ] **QUA-001** — `app/lib/qiita.ts:21-22` — `item: any`・`tag: any` と型付けしており、API レスポンスの構造変更がコンパイル時に検出できない。`types/blog.ts` の型や別途インターフェースで型付けすべき。

  ```ts
  interface QiitaApiItem {
    id: string;
    title: string;
    url: string;
    created_at: string;
    tags: Array<{ name: string }>;
    likes_count: number;
  }
  ```

### QUA-002 🟡中 `useReveal` フックをローカルに再実装（共有フックと重複）

- [ ] **QUA-002** — `app/components/blog/BlogLink.tsx:9-19` — `app/hooks/useReveal.ts` に共有フックが存在するにもかかわらず、`BlogLink.tsx` が独自実装を持っている。実装の差異（`useRef` vs `useCallback`）があるため、挙動に不整合が生じる可能性がある。共有フックをインポートするよう統一すること。

### QUA-003 🟡中 サーバーアクション呼び出しが `try-catch` で囲まれていない

- [ ] **QUA-003** — `app/components/contact/ContactForm.tsx` — `submitContact(formData)` の呼び出しが `try-catch` で保護されていない。サーバーアクションが例外をスローした場合、エラー状態がセットされずコンポーネントがクラッシュする。

  ```ts
  try {
    const result = await submitContact(formData);
    // ...
  } catch {
    setError("エラーが発生しました。しばらくしてから再度お試しください。");
    setStatus("error");
  }
  ```

### QUA-004 🟢低 存在しない ESLint ルール名

- [ ] **QUA-004** — `eslint.config.mjs:19` — `"react-hooks/refs"` は実在しないルール名（正しくは `"react-hooks/rules-of-hooks"` など）。このルールは黙って無視されており、意図した抑制が効いていない。コメントの説明と照らして正しいルール名を調べ、修正または削除すること。

### QUA-005 🟢低 `fetchQiitaArticles` がエラー時に throw し、エラーバウンダリへ委ねる

- [ ] **QUA-005** — `app/lib/qiita.ts:13` — Qiita API 失敗時に `throw new Error(...)` しているため、`/blog` ページ全体がエラーバウンダリに落ちる。空配列を返してグレースフルに降格させる方が UX として望ましい。

---

## テスト

### TST-001 🟡中 テストが存在しない

- [ ] **TST-001** — プロジェクト全体 — テストフレームワーク未設定・テストファイルなし。最低限、お問い合わせフローのサーバーアクション（レートリミット・バリデーション）と Qiita 取得ロジックの単体テストを追加することを推奨。Jest + Testing Library、または Vitest が Next.js との相性がよい。

---

## パフォーマンス

### PER-001 🟡中 Qiita 記事を `cache: "no-store"` で毎回フェッチ

- [ ] **PER-001** — `app/lib/qiita.ts:9` — `cache: "no-store"` によりリクエストごとに Qiita API を叩いている。記事の更新頻度は低いため、ISR（`next: { revalidate: 3600 }`）を使うと不要なリクエストを削減できる。

  ```ts
  next: { revalidate: 3600 }, // 1時間ごとに再検証
  ```

### PER-002 🟡中 MUI（Material-UI）が依存に含まれバンドルを肥大化

- [ ] **PER-002** — `package.json` — `@mui/material`・`@mui/icons-material`・`@mui/system`・`@emotion/react`・`@emotion/styled` が dependencies に含まれている。使用箇所が限定的であれば、`@hugeicons/react` と `lucide-react` に統一して MUI を削除するとバンドルサイズを大幅に削減できる（MUI + Emotion で圧縮後 ~150KB 程度）。

### PER-003 🟢低 ブログヒーロー画像が CSS `backgroundImage` で読み込まれ Next.js 最適化が効かない

- [ ] **PER-003** — `app/blog/page.tsx:44` — `style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}` は Next.js の `<Image>` コンポーネントによる自動最適化（WebP 変換・サイズ最適化・プリロード）が適用されない。`<Image fill priority />` に置き換えることで LCP 改善が期待できる。

### PER-004 🟢低 `radix-ui` パッケージが不要

- [ ] **PER-004** — `package.json` — `radix-ui` が直接依存に列挙されているが、shadcn/ui コンポーネント経由で既に `@radix-ui/*` の個別パッケージが使われているため重複している。削除して問題ない。

---

## ドキュメント

### DOC-001 🟢低 `.env.example` が存在しない

- [ ] **DOC-001** — プロジェクトルート — 必要な環境変数を示す `.env.example` がなく、新規セットアップ時に CLAUDE.md を読まないと何が必要か分からない。以下を作成することを推奨。

  ```
  QIITA_TOKEN=
  NEXT_PUBLIC_SUPABASE_URL=
  SUPABASE_SERVICE_ROLE_KEY=
  RESEND_API_KEY=
  ADMIN_EMAIL=
  ```

### DOC-002 🟢低 CLAUDE.md のコンポーネント名が実装と不一致

- [ ] **DOC-002** — `CLAUDE.md:39行目` / `app/LayoutWrapper.tsx:12` — CLAUDE.md では `LayoutWrapper` と記載しているが、実際の関数名は `BlogLayoutWrapper`。

---

## サマリー

| ID | 重要度 | カテゴリ | タイトル |
|---|---|---|---|
| SEC-001 | 🔴高 | セキュリティ | メールテンプレートへの HTML インジェクション |
| SEC-002 | 🔴高 | セキュリティ | メール送信エラーを無視して success: true を返す |
| SEC-003 | 🟡中 | セキュリティ | ADMIN_EMAIL の非 null アサーション |
| SEC-004 | 🟡中 | セキュリティ | Supabase 環境変数バリデーション欠如 |
| SEC-005 | 🟡中 | セキュリティ | CSP ヘッダー未設定 |
| SEC-006 | 🟡中 | セキュリティ | 個人情報のハードコード |
| QUA-001 | 🟡中 | コード品質 | Qiita API レスポンスで `any` 型 |
| QUA-002 | 🟡中 | コード品質 | useReveal のローカル再実装 |
| QUA-003 | 🟡中 | コード品質 | サーバーアクション呼び出しが try-catch 未保護 |
| QUA-004 | 🟢低 | コード品質 | 存在しない ESLint ルール名 |
| QUA-005 | 🟢低 | コード品質 | Qiita エラー時に throw してバウンダリへ委ねる |
| TST-001 | 🟡中 | テスト | テストが存在しない |
| PER-001 | 🟡中 | パフォーマンス | Qiita を毎回フェッチ（キャッシュなし） |
| PER-002 | 🟡中 | パフォーマンス | MUI のバンドル肥大化 |
| PER-003 | 🟢低 | パフォーマンス | ブログヒーロー画像が Next.js 最適化対象外 |
| PER-004 | 🟢低 | パフォーマンス | radix-ui の重複依存 |
| DOC-001 | 🟢低 | ドキュメント | .env.example が存在しない |
| DOC-002 | 🟢低 | ドキュメント | CLAUDE.md のコンポーネント名が不一致 |
