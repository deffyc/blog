---
published: true
date: '2018-10-02 11:11 +0800'
category: 信息技术
title: docker pptp
tags:
  - docker
---
```
pptp:
  image: index.docker.io/mobtitude/vpn-pptp:latest
  privileged: true
  restart: always
  ports:
  - 1723:1723
  volumes:
  - /root/ppp/chap-secrets:/etc/ppp/chap-secrets
  - /root/ppp/pptpd-options:/etc/ppp/pptpd-options
  net: host

```