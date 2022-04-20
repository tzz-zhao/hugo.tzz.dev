---
title: "Hugoクイックスタート"
date: 2022-04-20T23:52:27+09:00
---

Hugoの最も簡単な使い方になります。

1. インストール
    > brew install hugo

1. 新しいサイト作成

    > hugo new site tzz.dev

    > *tzz.devはサイト名*

1. theme作成

    通常は既存のthemeを使いますが、勉強のため、自前でthemeを作成して使います
    
    > cd tzz.dev
    
    > hugo new theme tzz

    > *tzzはtheme名*

    > *themes直下にtzzフォルダが作成され、tzz/layoutsには最低限のファイルが作成されるので

    > tzz/layoutsフォルダをtzz.dev直下に移動して、theme/tzzフォルダを削除します*

1. single.html修正

    layouts/_default/single.htmlはまだ空白になっているので、最低限で修正します

    > {{ define "main" }}

    >   {{.Title}}

    >   {{.Content}}

    > {{ end }}

1. コンテンツ作成

    > hugo new test.md

    test.mdの内容は
    > this is a test.

1. サーバーを起動

    > hugo server -D

    ブラウザで ***http://localhost:1313/test/*** を開いて、正常に表示されるはず。