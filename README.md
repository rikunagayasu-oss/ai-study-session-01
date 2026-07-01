# AI勉強会 第1回 資料

Claude Code を触って、プランモードでモックアップを立ち上げるまでを体験する 60 分の解説回スライド（HTML）。

- `index.html` — 本体。縦スクロール1ページ
- `style.css` — スタイル
- `script.js` — プロンプトのコピーボタン
- `.nojekyll` — GitHub Pages に Jekyll 処理を止めさせる

## ローカルで開く

ダブルクリックで開くだけでも動きますが、`file://` だと `navigator.clipboard` がフォールバック経路になるので、ローカルサーバで確認するのがおすすめ。

```bash
cd study-session-01
python3 -m http.server 8000
# → http://localhost:8000/
```

## GitHub Pages に公開する

`gh` CLI が入っていれば、以下だけで公開まで進めます。

```bash
cd study-session-01
git init
git add .
git commit -m "first session materials"
gh repo create ai-study-session-01 --public --source=. --push
```

そのあと GitHub 側で:

1. リポジトリの **Settings > Pages** を開く
2. **Build and deployment > Source** を `Deploy from a branch` に
3. **Branch** を `main` / `/(root)` に設定して Save
4. 1〜数分待つと `https://<ユーザー名>.github.io/ai-study-session-01/` で見えるようになる

## 更新の流れ

```bash
# 中身を編集したら
git add .
git commit -m "update"
git push
```

push すると Pages が数十秒で反映されます。

## 当日の使い方

- ブラウザで開いて、上から順に投影
- コピペ用プロンプトは各所に「コピー」ボタン付きで埋め込み済み
- 参加者にも同じURLを共有すれば、そのままコピーして手元でClaude Codeに貼れる
