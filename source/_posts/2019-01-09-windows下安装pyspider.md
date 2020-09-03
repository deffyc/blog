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
自带pycurl，如果其他版本，还需下载安装：https://www.lfd.uci.edu/~gohlke/pythonlibs/ 
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

## win10+python3.5.4运行pyspider错误
解决 Deprecated option ‘domaincontroller’: use ‘http_authenticator.domain_controller’ instead
这个问题 是因为默认pip安装的版本是3.0.x 解决方法 是卸载该版本 切换成2.4.1版本
> pip uninstall wsgidav 
> pip install wsgidav==2.4.1

pyspider启动报cannot import name 'DispatcherMiddleware'解决办法
降低werkzeug版本

> python -m pip uninstall werkzeug -y # 卸载
> python -m pip install werkzeug==0.16.1 #安装0.16.1版本

pip install librosa 安装出错
> pip3 install llvmlite-0.31.0-cp35-cp35m-win_amd64.whl
