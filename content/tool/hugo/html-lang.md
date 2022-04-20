---
title: "Hugoのhtml langの設定方法"
date: 2022-04-21T01:23:46+09:00
---

htmlのlangは未設定なので、lang=jaに設定します。

1. 言語設定

    config.ymlに下記の設定を修正

    > languageCode = 'ja-JP'
    > defaultContentLanguage = 'ja'

1. layouts/_default/baseof.html修正

    > <html lang="{{.Site.Language.Lang}}">

以上。
