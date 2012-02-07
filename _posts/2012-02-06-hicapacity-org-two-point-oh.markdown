--- 
layout: post
title: Behind HICapacity.org 2.0
date: 2012-02-06 21:05:41 -10:00
author: James Wang
categories: ['Programming']
tags: ['jekyll']
---
Over the past 2 months, HICapacity.org has gone through a major overhaul on the front-end and back-end. We want to take a moment to expose our architecture for the site, examine our choices, and talk about the future of the site.

### Why Jekyll?
Take a look at the content on most sites. What actually warrants a backend database? Typically things such as logins, remote private API access, etc do. It turns out that, these services can sometimes be off-loaded to a web service with the proper security measures. Most of the time for a news-centric site, like ours, all we need is a static site generator. Jekyll is perfect for the job. You write all your posts by cloning a Git repository. You can save the server a lot of resources by using flat files generated from Jekyll. If you need plugins like Facebook, you can still add them to your site by calling their APIs through client side Javascript.

Read about Jekyll here - [https://github.com/mojombo/jekyll](https://github.com/mojombo/jekyll)

### Presentation by Julie
Take time out of your day to come to Julie's presentation about Jekyll on Thursday, February 9, 2012 - 7 PM at the makerspace.