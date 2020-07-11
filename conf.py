# -*- coding: utf-8 -*-
"""博客构建配置文件
"""

# For Maverick
site_prefix = "/"
source_dir = "../src/"
build_dir = "../dist/"
template = "Kepler"
index_page_size = 10
archives_page_size = 20
enable_jsdelivr = {
    "enabled": True,
    "repo": "mikusaa/Wiki-site@gh-pages"
}

# 站点设置
site_name = "初之文库"
site_logo = "${static_prefix}logo.png"
site_build_date = "2019-12-18T16:51+08:00"
author = "mikusa"
email = "i@himiku.com"
author_homepage = "https://www.mikusa.cn"
description = "你好，未来。"
key_words = ['Maverick', 'mikusa', 'Galileo', 'blog']
language = 'zh-CN'
external_links = [
    {
        "name": "Maverick",
        "url": "https://github.com/AlanDecode/Maverick",
        "brief": "🏄‍ Go My Own Way."
    },
    {
        "name": "It's Mikusa",
        "url": "https://www.mikusa.cn",
        "brief": "mikusa的主页。"
    }
]
nav = [
    {
        "name": "首页",
        "url": "${site_prefix}",
        "target": "_self"
    },
    {
        "name": "归档",
        "url": "${site_prefix}archives/",
        "target": "_self"
    },
    {
        "name": "关于",
        "url": "${site_prefix}about/",
        "target": "_self"
    }
]

social_links = [
    {
        "name": "GitHub",
        "url": "https://github.com/mikusaa",
        "icon": "gi gi-github"
    }
]

valine = {
    "enable": True,
    "appId": "lTLdTTzd205yE2zU6GJWJaR4-gzGzoHsz",
    "appKey": "a0vt5WzsVhdJKNp8j3utdUuN",
    "notify": "false",
    "visitor": "false",
    "recordIP": "true",
    "serverURLs": None,
    "placeholder": "在这儿评论……"
}

head_addon = r'''
<meta http-equiv="x-dns-prefetch-control" content="on">
<link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
'''

footer_addon = 
'''
<link rel="apple-icon" sizes="180x180" href="/apple-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
'''
body_addon = ''
