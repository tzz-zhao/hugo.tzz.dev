---
title: "Hugoにtailwindcssを導入してみました"
date: 2022-04-22T00:43:15+09:00
---

最近、人気のtailwindcssを勉強し始めたので、Hugoに導入する手順を記録します。

1. 必要なパッケージをインストール

    > yarn add -D tailwindcss @tailwindcss/typography postcss postcss-cli autoprefixer

1. tailwindcss初期化

    > yarn run tailwindcss init -p
    >
    > tailwind.config.jsとpostcss.config.jsが生成されます

1. tailwindcss.config.js修正

    > module.exports = {

    >   content: ['./layouts/**/*.html', './content/**/*.md'],

    >   theme: {

    >     extend: {},

    >   },

    >   plugins: [

    >     require('@tailwindcss/typography'),

    >   ],

    > }

1. cssファイル準備

    assets/css/main.cssを作成、内容を下記にします。

    > @tailwind base;

    > @tailwind components;

    > @tailwind utilities;

1. テンプレートのheadにcssを追加

    > {{ $css := resources.Get "css/main.css" }}

    > {{ $css = $css | resources.PostCSS }}

    > {{ if hugo.IsProduction }}

    > {{ $css = $css | minify | fingerprint | resources.PostProcess }}

    > {{ end }}

    > <link href="{{ $css.RelPermalink }}" rel="stylesheet" />

以上。
