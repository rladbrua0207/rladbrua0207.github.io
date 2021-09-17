---
title:  "html head 기본설정"
excerpt: "인프런 잔재미코딩"
date:   2021-09-17 15:00:02 +0900
categories: web
tags:
  -web
  -인프런 잔재미코딩
---

```html
   <meta charset="UTF-8" />
    <title></title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
<!-- user-scalable 을 사용하지 않는 디바이스를 위해, maximun-scale/minimum-scale 설정을 하는 것-->

    <meta http-equiv="X-UA-Compatible" content="ie=edge" />


    <!-- Open Graph (Facebook, Linkedin) -->
    <!-- https://ourcodeworld.com/public-media/articles/articleocw-56d1a6901b773.png -->

    <meta propery="og:type" content="website" />

    <!-- https://ogp.me/#types -->

    <meta property="og:title" content="Open Graph title" />
    <meta property="og:description" content="Open Graph description" />
    <meta property="og:image" content="Open Graph img" />
    <meta property="og:url" content="Open Graph url" />
    <meta property="og:site_name" content="Open Graph site name" />


    <!-- twitter card (Twitter) -->
    <!-- https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/twitter-cards-implementation-with-websites/Images/summary_card_tweet.png -->

    <meta name="twitter:card" content="summary" />

    <!-- card 종류: summary, photo, player -->

    <meta name="twitter:title" content="" />
    <meta name="twitter:description" content="" />
    <meta name="twitter:image" content="" />
    <meta name="twitter:url" content="" />
    <meta name="twitter:creator" content="YuGyeom" />


    <!-- 일반적인 fabicon 설정 -->
    <link rel="icon" href="" />
    <!-- 아이폰용 fabicon 설정 -->
    <link rel="apple-touch-icon" href="" />
    <!-- 인터넷 익스플러용 fabicon 설정-->
    <link rel="short icon" type="image/x-icon" href="" />


    <!-- CSS Reset(1), 아이콘 폰트, 웹페이지 사용폰트, style.css -->
    <link rel="stylesheet" href="css/nomalize.css" />  <!-- nomalize.css 파일 다운받아서 사용, 다른설정 하기 전에 초기화 -->
    <!-- https://fontawesome.com/start -->

    <script src="https://kit.fontawesome.com/f1def33959.js" crossorigin="anonymous"></script> <!-- 각종 아이콘 -->

    <!-- Spoca Han Sans Neo: https://spoqa.github.io/spoqa-han-sans/ko-KR/ -->
    <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css" /> <!-- 웹 폰트-->
    <link rel="stylesheet" href="css/style.css" />

<!-- CSS class naming (BEM 명명규칙: Block Element Modifier 순으로 작성)
    __ : ~ 의 하위 요소를(속해있는) 나타냄
    -- : ~ 의 상태를 나타냄(수정한다 라는 느낌)
    - : 단어와 단어사이는 하이픈 (BlueBox X, blueBox X, blue_box X, blue-box O)
    예를 들어, box-container__title--blue 와 같이 작성할 수 있음 (참고로만 알아두면 됨)
    -->

    <!-- 항상 화면을 100% 로 사용하면, 와이드 스크린에서 웹페이지가 기대와 달리 보일 수 있음 -->

    <!-- header 에 상단 메뉴까지 넣을 예정 -->
    <!-- 전체 layout 는 시맨틱 태그로 구성하고,
      각 layout component 는 width를 100% 로 하되,
      해당 component 에 들어가는 요소들은 특정 가로 사이즈 이상에서는 특정 사이즈로 가운데에 정렬되도록,
      inner 클래스로 감싸주기로 함
      각 하부 요소 배치를 위해서는 각 layout 별 container 로 정의해주기로 함
    -->
```

