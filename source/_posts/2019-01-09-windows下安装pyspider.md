---
published: true
date: '2019-01-09 16:17 +0800'
category: 信息技术
title: windows下安装pyspider
tags:
  - python
  - pyspider
---
## 安装python

查看朋友spider所支持的Python版本，Python 2.{6,7}, 3.{3,4,5,6} support。
下载地址：https://www.python.org/downloads/ ，安装3.5，安装时后勾选添加环境变量。
自带pycurl，如果其他版本，还需下载安装：https://bintray.com/pycurl/pycurl/pycurl/view#files
> 可能缺少api-ms-win-crt-runtime-l1-1-0.dll

## 安装pip

使用get-pip.py进行安装
> curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
> python get-pip.py

## 安装pyspider

> pip install pyspider
> pyspider

## 安装phantomjs
http://phantomjs.org/download.html