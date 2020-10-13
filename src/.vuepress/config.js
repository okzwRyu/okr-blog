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
    //   email: "okr_1205@outlook.jp",
      location: "Tokyo, Japan",
      organization: "",
      // Your avatar image
      // Set to external link
      // TODO: Add image file.
      avatar: "https://www.meteorlxy.cn/assets/img/avatar.jpg",
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      sns: {
        github: {
          account: "okzwRyu",
          link: "https://github.com/okzwRyu",
        },
      },
    },

    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        //   url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: "Home", link: "/", exact: true },
      { text: "Posts", link: "/posts/", exact: false },
      { text: "About", link: "/about/", exact: true },
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: "okzwRyu",
      repo: "OKR-BLOG",
      clientId: "MY_CLIENT_ID",
      clientSecret: "MY_CLIENT_SECRET",
    },

    // Pagination config
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      home: true,
      posts: true,
    //   about: true,
    },
  },
  markdown: {
    anchor: { permalink: false },
  },
};
