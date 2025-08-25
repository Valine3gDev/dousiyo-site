# 名前どうしよ鯖のサイト
vitepressで作成しています。  
> [!IMPORTANT]
> このリポジトリはまだまだ開発中です。

## コントリビュート
### 開発環境のセットアップ
リポジトリをクローン
```shell
git clone https://github.com/Valine3gDev/dousiyo-site.git
cd dousiyo-site
npm install
```


現在認可以上の鉄道会社の情報のみ追加できます。
### 駅情報の追加
/pages/eki/RULE.mdのフォーマットを確認し、`/pages/eki/ekis/<路線名>.md`を作成します。

### 会社情報の追加
/pages/kaisya/RULE.mdのフォーマットを確認し、`/pages/kaisya/<会社名>.md`を作成します。

> [!IMPORTANT]
> 情報追加後は`npm run docs:build`でビルドが通るか確認してください。