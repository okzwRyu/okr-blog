module.exports = {
  title: "OKR-BLOG",
  description: "A lot of random notes and a little tips",
  locales: {
    "/": {
      lang: "ja-JP",
    },
  },
  theme: "meteorlxy",
  themeConfig: {
    lang: require("./public/lang/ja-JP.js"),
    personalInfo: {
      nickname: "OKR",
      description: "駆け出しSE",
      location: "Tokyo, Japan",
      organization: "",
      avatar: "/images/tousen_karo_icon.jpg",

      sns: {
        github: {
          account: "okzwRyu",
          link: "https://github.com/okzwRyu",
        },
      },
    },

    header: {
      background: {
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2020-present <a href="https://github.com/okzwRyu" target="_blank">okzwRyu</a> | MIT License',
    },

    lastUpdated: true,
    nav: [
      { text: "Home", link: "/", exact: true },
      { text: "Posts", link: "/posts/", exact: false },
      { text: "Tags", link: "/posts/tags/", exact: false },
      { text: "Categories", link: "/posts/categories/", exact: false },
      { text: "About", link: "/about/", exact: false },
    ],

    smoothScroll: true,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: "okzwRyu",
      repo: "OKR-BLOG",
      clientId: "MY_CLIENT_ID",
      clientSecret: "MY_CLIENT_SECRET",
    },

    pagination: {
      perPage: 5,
    },

    defaultPages: {
      home: true,
      posts: true,
    },
  },
  markdown: {
    anchor: { permalink: false },
  },
};
