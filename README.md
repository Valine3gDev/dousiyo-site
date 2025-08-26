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
npm i
```
### 開発サーバーの起動
```shell
npm run docs:dev
```

現在認可以上の鉄道会社の情報のみ追加できます。
### 駅情報の追加
/pages/station/RULE.mdのフォーマットを確認し、`/pages/station/stations/<路線名>.md`を作成します。

### 会社情報の追加
/pages/company/RULE.mdのフォーマットを確認し、`/pages/company/<会社名>.md`を作成します。

> [!IMPORTANT]
> 情報追加後は`npm run docs:build`でビルドが通るか確認してください。

## マップについて
openseadragonを使用しているので、画像を変換する必要があります。
```sh
sudo dnf install vips-tool
vips dzsave ./map2025-08-25.png ./map2025-08-25 --tile-size=256 --overlap=1 --suffix=.jpg[Q=90]
```
