# Blog Template(VuePress)

## 使用方法

基本的にほとんどのファイルを編集することになります。

良い例が，`src\.vuepress\config.js`です。

まぁ，書き換え頑張ってください。

記事を書く場所は，`src\.vuepress\_posts\yyyy\mm-dd-[一意の番号].md`です。

使用テーマは，"[meteorlxy](https://github.com/meteorlxy/vuepress-theme-meteorlxy)"です。

ドキュメントは，[こちら](https://vuepress-theme-meteorlxy.meteorlxy.cn/)です。

GitHub Pagesでビルドする場合は，
```yaml
name: Deploy
on: 
# [push]
```
というふうにコメントアウトされているので，
```yaml
name: Deploy
on: [push]
```
と書いてコメントアウトを外すと，プッシュがあるたびにGitHub Pagesでビルドされるようになります。

## 使用プラグイン

`package.json`を参照

## License

These codes are licensed under CC0.

[![CC0](https://upload.wikimedia.org/wikipedia/commons/6/69/CC0_button.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## About This Repo

[![wakatime](https://wakatime.com/badge/user/c9fbbcad-1b0d-4a00-b147-a687ce2b2ea1/project/0ddcd41a-6c70-4742-841c-c9bae867570a.svg)](https://wakatime.com/badge/user/c9fbbcad-1b0d-4a00-b147-a687ce2b2ea1/project/0ddcd41a-6c70-4742-841c-c9bae867570a)

![GitHub stars](https://img.shields.io/github/stars/Nakatai-0322/vuepress-blog-template.svg?style=social)
