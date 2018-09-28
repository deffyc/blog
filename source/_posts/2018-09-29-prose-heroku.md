---
published: true
date: '2018-09-29 04:15 +0800'
category: 学习
title: prose部署在heroku
tags:
  - git
---
## pull prose
 修改prose/app/views/header.js,107行代码
```
var newPath = pathUtil.join.apply(null, parts.concat([date + '-' + value + '.' + extension]));
//util.stringToUrl(value) cause non-alphanumeric words disappeared
```
2. 注册heroku,并cli


