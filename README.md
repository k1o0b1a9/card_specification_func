# CSV Data Aggregation

このプログラムはCSVファイルからデータを取り出し、指定された方法で処理してFirebaseに保存するものです。

## 概要

1. `csv_output.js`: CSVファイルを読み込み、データをJavaScriptのオブジェクトとして返します。
2. `extracting_element.js`: CSVから取得したデータをフィルタリングして整理し、その結果を返します。また、利用日を 'YYYY_MM' 形式の文字列として返します。
3. `aggregate_csv.js`: `extracting_element.js` で得られたデータを集約します。地点による価格の合計を計算し、その結果をオブジェクトとして返します。
4. `main.js`: 上記の全ての処理を実行し、最終的な結果をFirebaseのFirestoreに保存します。

## 使い方

`.env` ファイルをプロジェクトのルートディレクトリに設置し、以下の環境変数を設定します。

- `CREDIT_SPEC_LOCATION`: CSVファイルのパス
- `DATE`: CSVの日付列の名前
- `FORMAT`: CSVの日付の形式
- `LOCATION`: CSVの地点列の名前
- `PRICE`: CSVの価格列の名前

Firebaseの認証情報を含む `serviceAccount` JSONファイルが必要です。プロジェクトのルートディレクトリにこのJSONファイルを置き、`main.js` 内の `serviceAccount` に対するパスを適切に設定します。

その後、以下のコマンドを実行します。

```bash
node main.js
```

成功すると、指定したCSVファイルのデータがFirebase Firestoreに保存されます。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳しくは[LICENSE](LICENSE)ファイルをご確認ください。

## コントリビューション

バグの報告や改善の提案は大歓迎です。その際は[Issues](https://github.com/your-repo-url/issues)をご利用ください。

## 開発者

- [Keigo Kobayashi](mailto:bako95518@gmail.com)

上記READMEはあくまで一例であり、プロジェクトの詳細に合わせて必要に応じて修正してください。