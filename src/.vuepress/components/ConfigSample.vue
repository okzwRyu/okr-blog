<template>
    <div>
        <div class="language-js extra-class"><pre class="language-js"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Title of your website</span>
  title<span class="token operator">:</span> <span class="token string">'My Blog'</span><span class="token punctuation">,</span>

  <span class="token comment">// Description of your website</span>
  description<span class="token operator">:</span> <span class="token string">'This is my blog'</span><span class="token punctuation">,</span>

  <span class="token comment">// Language of your website</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Theme to use</span>
  theme<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>

  <span class="token comment">// Theme config</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Language of this theme. See the [Theme Language] section below.</span>
    lang<span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>

    <span class="token comment">// Personal infomation (delete the fields if you don't have / don't want to display)</span>
    personalInfo<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Nickname</span>
      nickname<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>

      <span class="token comment">// Introduction of yourself (HTML supported)</span>
      description<span class="token operator">:</span> <span class="token string">'Happy Coding&lt;br/&gt;Happy Life'</span><span class="token punctuation">,</span>

      <span class="token comment">// Email</span>
      email<span class="token operator">:</span> <span class="token string">'meteor.lxy@foxmail.com'</span><span class="token punctuation">,</span>

      <span class="token comment">// Your location</span>
      location<span class="token operator">:</span> <span class="token string">'Xi\'an City, China'</span><span class="token punctuation">,</span>

      <span class="token comment">// Your organization</span>
      organization<span class="token operator">:</span> <span class="token string">'Xi\'an Jiao Tong University'</span><span class="token punctuation">,</span>

      <span class="token comment">// Your avatar image</span>
      <span class="token comment">// Set to external link</span>
      avatar<span class="token operator">:</span> <span class="token string">'https://www.meteorlxy.cn/assets/img/avatar.jpg'</span><span class="token punctuation">,</span>
      <span class="token comment">// Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`</span>
      <span class="token comment">// avatar: '/img/avatar.jpg',</span>

      <span class="token comment">// Accounts of SNS</span>
      sns<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Github account and link</span>
        github<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://github.com/meteorlxy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Facebook account and link</span>
        facebook<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy.cn'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://www.facebook.com/meteorlxy.cn'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// LinkedIn account and link</span>
        linkedin<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'http://www.linkedin.com/in/meteorlxy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Twitter account and link</span>
        twitter<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy_cn'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://twitter.com/meteorlxy_cn'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Sina Weibo account and link</span>
        weibo<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'@焦炭君_Meteor'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://weibo.com/u/2039655434'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Zhihu account and link</span>
        zhihu<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy.cn'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://www.zhihu.com/people/meteorlxy.cn'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Douban account and link</span>
        douban<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'159342708'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://www.douban.com/people/159342708'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Reddit account and link</span>
        reddit<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://www.reddit.com/user/meteorlxy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Medium account and link</span>
        medium<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy.cn'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://medium.com/@meteorlxy.cn'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Instagram account and link</span>
        instagram<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy.cn'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://www.instagram.com/meteorlxy.cn'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// GitLab account and link</span>
        gitlab<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://gitlab.com/meteorlxy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Bitbucket account and link</span>
        bitbucket<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://bitbucket.org/meteorlxy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Docker Hub account and link</span>
        docker<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://hub.docker.com/u/meteorlxy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// CSDN account and link</span>
        csdn<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://www.csdn.net/'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Juejin account and link</span>
        juejin<span class="token operator">:</span> <span class="token punctuation">{</span>
          account<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">'https://juejin.im/user/5c6fa9dde51d453fcb7baf09'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Header Config (Optional)</span>
    header<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// The background of the header. You can choose to use an image, or to use random pattern (geopattern)</span>
      background<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.</span>
        url<span class="token operator">:</span> <span class="token string">'/assets/img/bg.jpg'</span><span class="token punctuation">,</span>

        <span class="token comment">// Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.</span>
        useGeo<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// show title in the header or not</span>
      showTitle<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Footer Config (Optional)</span>
    footer<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Show 'Powered by VuePress' or not (enable it to support VuePress)</span>
      poweredBy<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)</span>
      poweredByTheme<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// Add your custom footer (HTML supported)</span>
      custom<span class="token operator">:</span> <span class="token string">'Copyright 2018-present &lt;a href="https://github.com/meteorlxy" target="_blank"&gt;meteorlxy&lt;/a&gt; | MIT License'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Info Card Config (Optional)</span>
    infoCard<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)</span>
      headerBackground<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.</span>
        url<span class="token operator">:</span> <span class="token string">'/assets/img/bg.jpg'</span><span class="token punctuation">,</span>

        <span class="token comment">// Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.</span>
        useGeo<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Show the last updated time of your posts</span>
    lastUpdated<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// The content of your navbar links</span>
    nav<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> exact<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Posts'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/posts/'</span><span class="token punctuation">,</span> exact<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// Enable smooth scrolling or not</span>
    smoothScroll<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// Configs for vuepress-plugin-zooming</span>
    zooming<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// @see https://vuepress.github.io/en/plugins/zooming</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Comments config. See the [Posts Comments] section below.</span>
    comments<span class="token operator">:</span> <span class="token punctuation">{</span>
      owner<span class="token operator">:</span> <span class="token string">'meteorlxy'</span><span class="token punctuation">,</span>
      repo<span class="token operator">:</span> <span class="token string">'vuepress-theme-meteorlxy'</span><span class="token punctuation">,</span>
      clientId<span class="token operator">:</span> <span class="token string">'MY_CLIENT_ID'</span><span class="token punctuation">,</span>
      clientSecret<span class="token operator">:</span> <span class="token string">'MY_CLIENT_SECRET'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Pagination config (Optional)</span>
    pagination<span class="token operator">:</span> <span class="token punctuation">{</span>
      perPage<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Default Pages (Optional, the default value of all pages is `true`)</span>
    defaultPages<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Allow theme to add Home page (url: /)</span>
      home<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// Allow theme to add Posts page (url: /posts/)</span>
      posts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>

</style>