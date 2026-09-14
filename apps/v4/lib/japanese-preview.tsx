"use client"

import * as React from "react"

const TRANSLATIONS: Record<string, string> = {
  "What are your shipping options?": "配送方法には何がありますか？",
  "What is your return policy?": "返品ポリシーを教えてください。",
  "How can I contact customer support?":
    "カスタマーサポートにはどう連絡できますか？",
  "Can I access my account history?": "アカウント履歴を確認できますか？",
  "Premium feature information": "プレミアム機能の情報",
  "How do I update my email address?":
    "メールアドレスを変更するにはどうすればよいですか？",
  "Account updated successfully": "アカウントを更新しました",
  "Payment successful": "支払いが完了しました",
  "Payment failed": "支払いに失敗しました",
  "New feature available": "新機能を利用できます",
  "Your subscription will expire in 3 days.":
    "サブスクリプションの有効期限が3日後に切れます。",
  "Dark mode is now available": "ダークモードを利用できます",
  "Share Project": "プロジェクトを共有",
  "Share this project?": "このプロジェクトを共有しますか？",
  "Delete Chat": "チャットを削除",
  "Delete chat?": "チャットを削除しますか？",
  "Are you absolutely sure?": "本当に実行しますか？",
  "Allow accessory to connect?": "アクセサリの接続を許可しますか？",
  "Don’t allow": "許可しない",
  "Don't allow": "許可しない",
  "Show Dialog": "ダイアログを表示",
  Cancel: "キャンセル",
  Continue: "続行",
  Allow: "許可",
  Share: "共有",
  Delete: "削除",
  Settings: "設定",
  Profile: "プロフィール",
  Billing: "請求",
  "Log out": "ログアウト",
  Home: "ホーム",
  Documentation: "ドキュメント",
  Sections: "セクション",
  "Get Started": "はじめに",
  Breadcrumb: "パンくずリスト",
  "Default attachment": "デフォルトの添付ファイル",
  "Small attachment": "小さい添付ファイル",
  "Extra small attachment": "さらに小さい添付ファイル",
  "Ready to upload": "アップロードの準備完了",
  "Processing document": "ドキュメントを処理中",
  "Open preview dialog": "プレビューダイアログを開く",
  "Copy link": "リンクをコピー",
  "Search files, tags, or metadata...": "ファイル、タグ、メタデータを検索…",
  "Search articles...": "記事を検索…",
  "Select a framework": "フレームワークを選択",
  "Select a timezone": "タイムゾーンを選択",
  "Type a command or search...": "コマンドを入力または検索…",
  "Search Emoji": "絵文字を検索",
  "Open Menu": "メニューを開く",
  "New File": "新しいファイル",
  "Open File": "ファイルを開く",
  "New Folder": "新しいフォルダー",
  Save: "保存",
  "Save Page...": "ページを保存…",
  "Create Shortcut...": "ショートカットを作成…",
  "Name Window...": "ウィンドウ名を変更…",
  "Grid View": "グリッド表示",
  "List View": "リスト表示",
  Notifications: "通知",
  Search: "検索",
  Submit: "送信",
  Loading: "読み込み中",
  "Learn More": "詳しく見る",
  Report: "報告",
  "Go Back": "戻る",
  "More Options": "その他のオプション",
  "Open Popover": "ポップオーバーを開く",
  "Show error details": "エラーの詳細を表示",
  "Media controls": "メディア操作",
  "Reaction: thumbs up": "リアクション：いいね",
  "Reactions: thumbs up": "リアクション：いいね",
  "Reaction: fire": "リアクション：炎",
  "Run the build script.": "ビルドスクリプトを実行します。",
  "Failed to run the command.": "コマンドの実行に失敗しました。",
  "Find the bug and fix it.": "バグを見つけて修正してください。",
  "Can you tell me what's the issue?": "問題について教えてもらえますか？",
  "Sure. Hit me with your best demo.": "もちろんです。デモを見せてください。",
  "This is the default primary bubble.":
    "これはデフォルトのプライマリーバブルです。",
  "This is the secondary variant.": "これはセカンダリーバリアントです。",
  "Did you remove the stale route?": "古いルートを削除しましたか？",
  "Yes, removed it from the registry.": "はい、レジストリから削除しました。",
  "Select the items you want to show on the desktop.":
    "デスクトップに表示する項目を選択してください。",
  "Share your thoughts about our service.":
    "サービスについてのご意見をお聞かせください。",
  "Login to your account": "アカウントにログイン",
  "Sign Up": "アカウントを作成",
  Login: "ログイン",
  "Login with Google": "Googleでログイン",
  "View Event": "イベントを見る",
  "Open Link": "リンクを開く",
  "New Branch": "新しいブランチ",
  Status: "ステータス",
  Name: "名前",
  Email: "メールアドレス",
  Password: "パスワード",
  Title: "タイトル",
  Description: "説明",
  Type: "種別",
  Date: "日付",
  Actions: "操作",
  Preview: "プレビュー",
  Download: "ダウンロード",
  Copy: "コピー",
  Add: "追加",
  Back: "戻る",
  Close: "閉じる",
  Open: "開く",
  View: "表示",
  Edit: "編集",
  Publish: "公開",
  Badge: "バッジ",
  Secondary: "セカンダリ",
  Outline: "アウトライン",
  Ghost: "ゴースト",
  Default: "デフォルト",
  Command: "コマンド",
  Manual: "手動",
  "Loading...": "読み込み中…",
  Usage: "使い方",
  Composition: "構成",
  Basic: "基本",
  Variants: "バリエーション",
  Features: "機能",
  Accessibility: "アクセシビリティ",
  "API Reference": "APIリファレンス",
  Sizes: "サイズ",
  Size: "サイズ",
  Small: "小さい",
  Media: "メディア",
  Destructive: "破壊的",
  Action: "アクション",
  "Custom Colors": "カスタムカラー",
  "With Icon": "アイコン付き",
  "With Spinner": "スピナー付き",
  Multiple: "複数",
  Disabled: "無効",
  Borders: "境界線",
  Dropdown: "ドロップダウン",
  Group: "グループ",
  Trigger: "トリガー",
  Image: "画像",
  States: "状態",
  "Table of Contents": "目次",
  Prerequisites: "前提条件",
  "Project Structure": "プロジェクト構成",
  "Row Actions": "行操作",
  Pagination: "ページネーション",
  Sorting: "並べ替え",
  Filtering: "フィルタリング",
  Visibility: "表示",
  "Row Selection": "行選択",
  "Reusable Components": "再利用可能なコンポーネント",
  "New Components": "新しいコンポーネント",
  "All Components": "すべてのコンポーネント",
  Demo: "デモ",
  Approach: "アプローチ",
  Anatomy: "構成",
  Validation: "バリデーション",
  Examples: "例",
  Example: "例",
  Parts: "パーツ",
  Requirements: "要件",
  Authentication: "認証",
  Testing: "テスト",
  "Error Handling": "エラー処理",
  "Next Steps": "次のステップ",
  "Try it out": "試してみる",
  "Choose Your Framework": "フレームワークを選択",
  "Pending States": "保留中の状態",
  "Disabled States": "無効な状態",
  "Displaying Errors": "エラーの表示",
  "Resetting the Form": "フォームをリセット",
  "Complex Forms": "複雑なフォーム",
  "Array Fields": "配列フィールド",
  "Basic usage": "基本的な使い方",
  "Multiple selection": "複数選択",
  "Keyboard navigation": "キーボード操作",
  "Data attributes": "データ属性",
  "Reduced Motion": "視覚効果を減らす",
  Fallback: "フォールバック",
  Color: "カラー",
  Duration: "期間",
  Reverse: "反転",
  Changelog: "変更履歴",
  "More Updates": "その他の更新",
  "On This Page": "このページの内容",
  Docs: "ドキュメント",
  Previous: "前へ",
  Next: "次へ",
  "Latest updates and announcements.": "最新の更新とお知らせ。",
  "Install the following dependencies:": "次の依存関係をインストールします：",
  "Install the required shadcn/ui dependencies:":
    "必要なshadcn/uiの依存関係をインストールします：",
  "Copy and paste the following code into your project.":
    "次のコードをプロジェクトにコピーして貼り付けます。",
  "Update the import paths to match your project setup.":
    "プロジェクトの構成に合わせてインポートパスを更新します。",
  "To enable RTL support in shadcn/ui, see the RTL configuration guide.":
    "shadcn/uiでRTLサポートを有効にするには、RTL構成ガイドを参照してください。",
  "Install the following dependency:": "次の依存関係をインストールします：",
  "Run the following command:": "次のコマンドを実行します：",
  "Start by defining your data": "まずデータを定義します",
  "Define your chart config": "チャート設定を定義します",
  "Build your chart": "チャートを作成します",
  "Add the following colors to your CSS file":
    "次のカラーをCSSファイルに追加します",
  "Add the following component to your app":
    "次のコンポーネントをアプリに追加します",
  "Use the following composition to build an Accordion:":
    "次の構成を使用して、Accordionを構築します。",
  "Is it accessible?": "アクセシビリティに対応していますか？",
  "Yes. It adheres to the WAI-ARIA design pattern.":
    "はい。WAI-ARIAのデザインパターンに準拠しています。",
  "This action cannot be undone.": "この操作は取り消せません。",
  "Add to library": "ライブラリに追加",
  "See more examples": "その他の例を見る",
  "Content negotiation": "コンテンツネゴシエーション",
  "Use case": "ユースケース",
  "Example files": "ファイル例",
  "Browse example registry items": "レジストリ項目の例を見る",
  "Right-to-left support for shadcn/ui components.":
    "shadcn/uiコンポーネントの右から左への表示をサポートします。",
  "Adding dark mode to your site.": "サイトにダークモードを追加します。",
  "Adding dark mode to your app.": "アプリにダークモードを追加します。",
  "Create a new Vite project with RTL support.":
    "RTLサポート付きの新しいViteプロジェクトを作成します。",
  "Create a new TanStack Start project with RTL support.":
    "RTLサポート付きの新しいTanStack Startプロジェクトを作成します。",
  "Create a new Next.js project with RTL support.":
    "RTLサポート付きの新しいNext.jsプロジェクトを作成します。",
  "Install and configure shadcn/ui for Vite.":
    "Vite向けにshadcn/uiをインストールして設定します。",
  "Install and configure shadcn/ui for TanStack Start.":
    "TanStack Start向けにshadcn/uiをインストールして設定します。",
  "Install and configure shadcn/ui for TanStack Router.":
    "TanStack Router向けにshadcn/uiをインストールして設定します。",
  "Install and configure shadcn/ui for Remix.":
    "Remix向けにshadcn/uiをインストールして設定します。",
  "Install and configure shadcn/ui for React Router.":
    "React Router向けにshadcn/uiをインストールして設定します。",
  "Install and configure shadcn/ui for Next.js.":
    "Next.js向けにshadcn/uiをインストールして設定します。",
  "Install and configure shadcn/ui for Laravel.":
    "Laravel向けにshadcn/uiをインストールして設定します。",
  "Install and configure shadcn/ui for Gatsby.":
    "Gatsby向けにshadcn/uiをインストールして設定します。",
  "Install and configure shadcn/ui for Astro.":
    "Astro向けにshadcn/uiをインストールして設定します。",
  "How to install dependencies and structure your app.":
    "依存関係をインストールしてアプリを構成する方法を説明します。",
  "Add dependencies to your project manually.":
    "プロジェクトに依存関係を手動で追加します。",
  "Build forms with React and shadcn/ui.":
    "Reactとshadcn/uiでフォームを構築します。",
  "Build forms in React using TanStack Form and Zod.":
    "TanStack FormとZodを使用してReactでフォームを構築します。",
  "Build forms in React using React Hook Form and Zod.":
    "React Hook FormとZodを使用してReactでフォームを構築します。",
  "Build forms in React using Formisch and Valibot.":
    "FormischとValibotを使用してReactでフォームを構築します。",
  "Examples of registry items: styles, components, css vars, etc.":
    "レジストリ項目の例：スタイル、コンポーネント、CSS変数など。",
  "Create a new project with RTL support.":
    "RTLサポート付きの新しいプロジェクトを作成します。",
  "A responsive table component.":
    "レスポンシブ対応のテーブルコンポーネントです。",
  "A component that displays a list of options.":
    "選択肢の一覧を表示するコンポーネントです。",
  "A vertically stacked set of interactive headings that each reveal a section of content.":
    "縦方向に積み重ねられたインタラクティブな見出しのセットで、それぞれがコンテンツのセクションを表示します。",
  "A modal dialog that interrupts the user with important content and expects a response.":
    "重要な内容を表示してユーザーの操作を促すモーダルダイアログです。",
  "Displays a callout for user attention.":
    "ユーザーに注意を促すメッセージを表示します。",
  "Displays content within a desired ratio.":
    "指定した比率でコンテンツを表示します。",
  "Displays a file or image attachment with media, metadata, upload state, and actions.":
    "メディア、メタデータ、アップロード状態、操作を備えたファイルまたは画像の添付ファイルを表示します。",
  "An image element with a fallback for representing the user.":
    "ユーザーを表す画像要素です。画像がない場合の代替表示にも対応します。",
  "Displays a badge or a component that looks like a badge.":
    "バッジ、またはバッジのように見えるコンポーネントを表示します。",
  "Displays the path to the current resource using a hierarchy of links.":
    "リンクの階層で現在のリソースまでのパスを表示します。",
  "Displays a button or a component that looks like a button.":
    "ボタン、またはボタンのように見えるコンポーネントを表示します。",
  "A container that groups related buttons together with consistent styling.":
    "関連するボタンを一貫したスタイルでまとめるコンテナです。",
  "A calendar component that allows users to select a date or a range of dates.":
    "日付または日付範囲を選択できるカレンダーコンポーネントです。",
  "Displays a card with header, content, and footer.":
    "ヘッダー、コンテンツ、フッターを備えたカードを表示します。",
  "A carousel with motion and swipe built using Embla.":
    "Emblaで構築した、アニメーションとスワイプに対応するカルーセルです。",
  "Beautiful charts. Built using Recharts. Copy and paste into your apps.":
    "Rechartsで構築された美しいチャートです。アプリにコピーして貼り付けて使えます。",
  "A control that allows the user to toggle between checked and not checked.":
    "オンとオフを切り替えられるコントロールです。",
  "An interactive component which expands/collapses a panel.":
    "パネルを展開・折りたたみできるインタラクティブなコンポーネントです。",
  "Autocomplete input with a list of suggestions.":
    "候補一覧付きのオートコンプリート入力です。",
  "Command menu for search and quick actions.":
    "検索とクイックアクションのためのコマンドメニューです。",
  "Displays a menu of actions triggered by a right click.":
    "右クリックで開く操作メニューを表示します。",
  "Powerful table and datagrids built using TanStack Table.":
    "TanStack Tableで構築した高機能なテーブルとデータグリッドです。",
  "A date picker component with range and presets.":
    "範囲選択とプリセットに対応した日付ピッカーです。",
  "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.":
    "メインウィンドウまたは別のダイアログに重ねて表示するウィンドウです。背後のコンテンツは操作できなくなります。",
  "A provider component that sets the text direction for your application.":
    "アプリケーションのテキスト方向を設定するプロバイダーコンポーネントです。",
  "A drawer component for React.": "React向けのドロワーコンポーネントです。",
  "Displays a menu to the user — such as a set of actions or functions — triggered by a button.":
    "ボタンで開く、操作や機能の一覧などのメニューを表示します。",
  "Use the Empty component to display an empty state.":
    "Emptyコンポーネントを使用して空の状態を表示します。",
  "Combine labels, controls, and help text to compose accessible form fields and grouped inputs.":
    "ラベル、コントロール、ヘルプテキストを組み合わせて、アクセシブルなフォームフィールドと入力グループを構成します。",
  "For sighted users to preview content available behind a link.":
    "リンク先のコンテンツを視覚的に確認するためのカードです。",
  "A text input component for forms and user data entry with built-in styling and accessibility features.":
    "フォームやユーザーデータの入力に使う、スタイルとアクセシビリティ機能を備えたテキスト入力コンポーネントです。",
  "Accessible one-time password component with copy-paste functionality.":
    "コピー＆ペーストに対応したアクセシブルなワンタイムパスワードコンポーネントです。",
  "Add addons, buttons, and helper content to inputs.":
    "入力欄にアドオン、ボタン、補助コンテンツを追加します。",
  "A versatile component for displaying content with media, title, description, and actions.":
    "メディア、タイトル、説明、操作を備えたコンテンツを表示する汎用コンポーネントです。",
  "Used to display textual user input from keyboard.":
    "キーボードからのテキスト入力を表示します。",
  "Renders an accessible label associated with controls.":
    "コントロールに関連付けられたアクセシブルなラベルを表示します。",
  "Displays an inline status, system note, bordered row, or labeled separator in a conversation.":
    "会話内にインラインのステータス、システムノート、境界線付きの行、ラベル付きの区切り線を表示します。",
  "A chat scroll container that anchors turns, opens saved transcripts, follows streamed responses, loads history without jumping, and jumps to any message.":
    "会話のターンを固定し、保存したトランスクリプトを開き、ストリーミング応答を追跡し、履歴を位置をずらさず読み込み、任意のメッセージへ移動できるチャット用スクロールコンテナです。",
  "A collection of links for navigating websites.":
    "Webサイトを移動するためのリンク集です。",
  "A styled native HTML select element with consistent design system integration.":
    "デザインシステムと一貫して統合できるようスタイルを整えた、ネイティブHTMLセレクト要素です。",
  "Pagination with page navigation, next and previous links.":
    "ページ移動、次へ・前へリンクに対応したページネーションです。",
  "Displays rich content in a portal, triggered by a button.":
    "ボタンで開くポータル内にリッチコンテンツを表示します。",
  "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.":
    "タスクの完了状況を示すインジケーターを表示します。通常は進捗バーとして表示されます。",
  "A multi-step questionnaire with single-choice, multiple-choice, freeform, and skippable questions.":
    "単一選択、複数選択、自由記述、スキップ可能な質問に対応するマルチステップアンケートです。",
  "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.":
    "ラジオボタンと呼ばれる選択可能なボタンのセットで、一度に1つだけ選択できます。",
  "Accessible resizable panel groups and layouts with keyboard support.":
    "キーボード操作に対応したアクセシブルなサイズ変更可能パネルグループとレイアウトです。",
  "Augments native scroll functionality for custom, cross-browser styling.":
    "ネイティブのスクロール機能を拡張し、ブラウザ間で一貫したカスタムスタイルを適用します。",
  "Displays a list of options for the user to pick from—triggered by a button.":
    "ボタンで開き、ユーザーが選択できる項目の一覧を表示します。",
  "Visually or semantically separates content.":
    "コンテンツを視覚的または意味的に分離します。",
  "Extends the Dialog component to display content that complements the main content of the screen.":
    "Dialogコンポーネントを拡張し、画面のメインコンテンツを補足する内容を表示します。",
  "A composable, themeable and customizable sidebar component.":
    "組み合わせて使え、テーマとカスタマイズに対応したサイドバーコンポーネントです。",
  "Use to show a placeholder while content is loading.":
    "コンテンツの読み込み中にプレースホルダーを表示します。",
  "An input where the user selects a value from within a given range.":
    "指定した範囲から値を選択する入力コンポーネントです。",
  "An indicator that can be used to show a loading state.":
    "読み込み中の状態を示すインジケーターです。",
  "An opinionated toast component for React.":
    "React向けに設計されたトーストコンポーネントです。",
  "A succinct message that is displayed temporarily.":
    "一時的に表示する簡潔なメッセージです。",
  "A set of layered sections of content—known as tab panels—that are displayed one at a time.":
    "タブパネルと呼ばれるコンテンツの層を、一度に1つずつ表示するセットです。",
  "A two-state button that can be either on or off.":
    "オンまたはオフにできる2状態のボタンです。",
  "A set of two-state buttons that can be toggled on or off.":
    "オンとオフを切り替えられる2状態ボタンのセットです。",
  "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.":
    "キーボードフォーカスまたはマウスホバー時に、要素に関連する情報を表示するポップアップです。",
  "Styles for headings, paragraphs, lists, etc.":
    "見出し、段落、リストなどのスタイルです。",
  shimmer: "シマー",
  "Scroll Fade": "スクロールフェード",
  Content: "コンテンツ",
  Team: "チーム",
  Subscription: "サブスクリプション",
  "This week": "今週",
  "Next cycle": "次のサイクル",
  "Public API": "公開API",
  "Test coverage": "テストカバレッジ",
  Locally: "ローカルで",
  "Component only": "コンポーネントのみ",
  "Reset draft": "下書きをリセット",
  "Open clarification": "確認事項を開く",
  "Send answer": "回答を送信",
  "Other answer": "その他の回答",
  "Pick a date": "日付を選択",
  "My Account": "マイアカウント",
  "This is a button": "これはボタンです",
  "This is a toggle": "これは切り替えボタンです",
  "Building a Streaming Chatbot": "ストリーミングチャットボットを構築する",
  "Customized UI": "カスタマイズしたUI",
  "Error State": "エラー状態",
  "Cancellation and regeneration": "キャンセルと再生成",
  "API reference": "APIリファレンス",
  "Event Callbacks": "イベントコールバック",
  "What to expect from here on out": "ここから期待できること",
  "Typography should be easy": "タイポグラフィはシンプルに",
  "The composing room": "組版室",
  "Breaking changes": "破壊的変更",
  Appendix: "付録",
  Glossary: "用語集",
  "Reference notes": "参考メモ",
  "Revision history": "改訂履歴",
  'Slow before "Ready"': '"Ready"になるまで遅い',
  "Slow first page": "最初のページが遅い",
  "Slow every save": "保存するたびに遅い",
  English: "英語",
  Auto: "自動",
  "Bug Title": "バグのタイトル",
  Username: "ユーザー名",
  "More about you": "あなたについて",
  "Spoken Language": "使用言語",
  Tasks: "タスク",
  Plan: "プラン",
  "Email Addresses": "メールアドレス",
}

const PATTERN_TRANSLATIONS: [RegExp, string][] = [
  [/^Previous page$/, "前のページ"],
  [/^Next page$/, "次のページ"],
  [/^Previous$/, "前へ"],
  [/^Next$/, "次へ"],
  [/^Select (.+)$/, "$1を選択"],
  [/^Remove (.+)$/, "$1を削除"],
  [/^Open (.+)$/, "$1を開く"],
  [/^Preview (.+)$/, "$1をプレビュー"],
  [/^Retry upload$/, "アップロードを再試行"],
  [/^Cancel upload$/, "アップロードをキャンセル"],
  [/^Reactions: (.+)$/, "リアクション：$1"],
  [
    /^Use the following composition to build (?:an?|the) (.+):$/,
    "次の構成を使用して、$1を構築します。",
  ],
  [/^A basic (.+)$/, "基本的な$1"],
  [/^Use (.+) to (.+)\.$/, "$1を使用して$2。"],
]

const TEXT_REPLACEMENTS: [string, string][] = [
  ["Install the following dependencies", "次の依存関係をインストールします"],
  [
    "Copy and paste the following code into your project",
    "次のコードをプロジェクトにコピーして貼り付けます",
  ],
  [
    "Update the import paths to match your project setup",
    "プロジェクトの構成に合わせてインポートパスを更新します",
  ],
  [
    "To enable RTL support in shadcn/ui",
    "shadcn/uiでRTLサポートを有効にするには",
  ],
  ["documentation for more information", "ドキュメントを参照してください"],
  ["Click here to", "ここをクリックして"],
]

function translate(value: string) {
  const leading = value.match(/^\s*/)?.[0] ?? ""
  const trailing = value.match(/\s*$/)?.[0] ?? ""
  const normalized = value.trim().replace(/\s+/g, " ")
  if (!normalized) return value

  if (TRANSLATIONS[normalized]) {
    return `${leading}${TRANSLATIONS[normalized]}${trailing}`
  }

  for (const [pattern, replacement] of PATTERN_TRANSLATIONS) {
    if (pattern.test(normalized)) {
      return `${leading}${normalized.replace(pattern, replacement)}${trailing}`
    }
  }

  const replaced = TEXT_REPLACEMENTS.reduce(
    (result, [from, to]) => result.replaceAll(from, to),
    value
  )
  if (replaced !== value) return replaced

  return value
}

function translatePreview(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const textNodes: Text[] = []
  let node: Node | null
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest("pre, code")) continue
    textNodes.push(node as Text)
  }
  for (const textNode of textNodes) {
    const current = textNode.nodeValue ?? ""
    const translated = translate(current)
    if (translated !== current) textNode.nodeValue = translated
  }

  for (const element of root.querySelectorAll<HTMLElement>(
    "[aria-label], [title], [placeholder], [alt]"
  )) {
    for (const attribute of ["aria-label", "title", "placeholder", "alt"]) {
      const value = element.getAttribute(attribute)
      if (value) {
        const translated = translate(value)
        if (translated !== value) element.setAttribute(attribute, translated)
      }
    }
  }
}

export function JapanesePreview({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const root = ref.current
    if (!root) return

    translatePreview(root)
    const observer = new MutationObserver(() => translatePreview(root))
    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="contents" lang="ja">
      {children}
    </div>
  )
}
