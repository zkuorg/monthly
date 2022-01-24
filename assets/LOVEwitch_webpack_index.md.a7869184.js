import{_ as s,c as n,o as e,d as p}from"./app.0cb80d29.js";var t="/monthly/assets/customloader.89f492d0.png",r="/monthly/assets/loaderUsage.9cc614c6.png",a="/monthly/assets/customPlugin.f28453a2.png",o="/monthly/assets/mode.b7ac2770.png";const _='{"title":"webpack","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49\u53CA\u4F5C\u7528","slug":"\u5B9A\u4E49\u53CA\u4F5C\u7528"},{"level":2,"title":"\u57FA\u672C\u6982\u5FF5","slug":"\u57FA\u672C\u6982\u5FF5"},{"level":3,"title":"Entry","slug":"entry"},{"level":3,"title":"Output","slug":"output"},{"level":3,"title":"Loaders","slug":"loaders"},{"level":3,"title":"Plugins","slug":"plugins"},{"level":3,"title":"Mode","slug":"mode"},{"level":3,"title":"\u89E3\u6790ES6\u548CJSX","slug":"\u89E3\u6790es6\u548Cjsx"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LOVEwitch/webpack/index.md","lastUpdated":1642996261780}',l={},c=p(`<h1 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4E49\u53CA\u4F5C\u7528" tabindex="-1">\u5B9A\u4E49\u53CA\u4F5C\u7528 <a class="header-anchor" href="#\u5B9A\u4E49\u53CA\u4F5C\u7528" aria-hidden="true">#</a></h2><p>webpack\u4E3A\u6253\u5305\u6784\u5EFA\u5DE5\u5177\uFF0C\u4E3B\u8981\u4F5C\u7528\u4E3A\uFF1A</p><ol><li>\u8F6C\u6362ES6\u8BED\u6CD5</li><li>\u8F6C\u6362JSX</li><li>CSS\u524D\u7F00\u8865\u5168/\u9884\u5904\u7406\u5668</li><li>\u538B\u7F29\u6DF7\u6DC6</li><li>\u56FE\u7247\u538B\u7F29</li></ol><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1">\u57FA\u672C\u6982\u5FF5 <a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a></h2><h3 id="entry" tabindex="-1">Entry <a class="header-anchor" href="#entry" aria-hidden="true">#</a></h3><p>webpack\u4F9D\u8D56\u56FE\u6253\u5305\u5165\u53E3</p><p>\u5BF9\u4E8E\u975E\u4EE3\u7801\u6BD4\u5982\u56FE\u7247\u3001\u5B57\u4F53\u4F9D\u8D56\u4E5F\u4F1A\u4E0D\u65AD\u52A0\u5165\u5230\u4F9D\u8D56\u56FE\u4E2D</p><ul><li>\u5355\u5165\u53E3\uFF1Aentry\u4E3A\u5B57\u7B26\u4E32</li><li>\u591A\u5165\u53E3\uFF1Aentry\u4E3A\u5BF9\u8C61</li></ul><h3 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-hidden="true">#</a></h3><p>\u544A\u8BC9webpack\u5982\u4F55\u5C06\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u8F93\u51FA\u5230\u78C1\u76D8</p><p>\u5355\u5165\u53E3\uFF1Afilename+path</p><div class="language-js"><pre><code><span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;bundles.js&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u591A\u5165\u53E3\uFF1A\u901A\u8FC7\u5360\u4F4D\u7B26\u786E\u4FDD\u6587\u4EF6\u540D\u79F0\u7684\u552F\u4E00</p><div class="language-js"><pre><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">index</span><span class="token operator">:</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span><span class="token string">&#39;./src/search.js&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;[name].js&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="loaders" tabindex="-1">Loaders <a class="header-anchor" href="#loaders" aria-hidden="true">#</a></h3><p>webpack\u5F00\u7BB1\u5373\u7528\u53EA\u652F\u6301JS\u548CJSON\u4E24\u79CD\u6587\u4EF6\u7C7B\u578B\uFF0C\u901A\u8FC7loaders\u53BB\u652F\u6301\u5176\u4ED6\u6587\u4EF6\u7C7B\u578B\u5E76\u4E14\u628A\u4ED6\u4EEC\u8F6C\u5316\u6210\u6709\u6548\u7684\u6A21\u5757\uFF0C\u5E76\u4E14\u53EF\u4EE5\u6DFB\u52A0\u5230\u4F9D\u8D56\u56FE\u4E2D\u3002</p><p>\u672C\u8EAB\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u53D7\u6E90\u6587\u4EF6\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u8F6C\u6362\u7684\u7ED3\u679C\u3002</p><h4 id="\u5E38\u89C1\u7684loaders" tabindex="-1">\u5E38\u89C1\u7684loaders <a class="header-anchor" href="#\u5E38\u89C1\u7684loaders" aria-hidden="true">#</a></h4><p><img src="`+t+'" alt="\u5E38\u89C1\u7684loaders"></p><h4 id="loaders\u7684\u7528\u6CD5" tabindex="-1">Loaders\u7684\u7528\u6CD5 <a class="header-anchor" href="#loaders\u7684\u7528\u6CD5" aria-hidden="true">#</a></h4><p><img src="'+r+'" alt="Loaders\u7684\u7528\u6CD5"></p><h3 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-hidden="true">#</a></h3><p>\u63D2\u4EF6\u7528\u4E8Ebundle\u6587\u4EF6\u7684\u4F18\u5316\uFF0C\u8D44\u6E90\u7BA1\u7406\u548C\u73AF\u5883\u53D8\u91CF\u6CE8\u5165</p><p>\u4F5C\u7528\u4E8E\u6574\u4E2A\u6784\u5EFA\u8FC7\u7A0B</p><h4 id="\u5E38\u89C1\u7684plugins" tabindex="-1">\u5E38\u89C1\u7684plugins <a class="header-anchor" href="#\u5E38\u89C1\u7684plugins" aria-hidden="true">#</a></h4><p><img src="'+a+'" alt="\u5E38\u89C1\u7684plugins"></p><h4 id="plugins\u7528\u6CD5" tabindex="-1">plugins\u7528\u6CD5 <a class="header-anchor" href="#plugins\u7528\u6CD5" aria-hidden="true">#</a></h4><p><img src="'+a+'" alt="plugins\u7528\u6CD5"></p><h3 id="mode" tabindex="-1">Mode <a class="header-anchor" href="#mode" aria-hidden="true">#</a></h3><p>\u7528\u6765\u5236\u5B9A\u5F53\u524D\u7684\u6784\u5EFA\u73AF\u5883\uFF1Aproduction\u3001development\u3001none</p><p>\u8BBE\u7F6E mode \u53EF\u4EE5\u4F7F\u2F64 webpack \u5185\u7F6E\u7684\u51FD\u6570\uFF0C\u9ED8\u8BA4\u503C\u4E3A production</p><h4 id="mode\u7684\u5185\u7F6E\u51FD\u6570\u529F\u80FD" tabindex="-1">Mode\u7684\u5185\u7F6E\u51FD\u6570\u529F\u80FD <a class="header-anchor" href="#mode\u7684\u5185\u7F6E\u51FD\u6570\u529F\u80FD" aria-hidden="true">#</a></h4><p><img src="'+o+`" alt="mode"></p><h3 id="\u89E3\u6790es6\u548Cjsx" tabindex="-1">\u89E3\u6790ES6\u548CJSX <a class="header-anchor" href="#\u89E3\u6790es6\u548Cjsx" aria-hidden="true">#</a></h3><h4 id="\u89E3\u6790es6" tabindex="-1">\u89E3\u6790ES6 <a class="header-anchor" href="#\u89E3\u6790es6" aria-hidden="true">#</a></h4><p>\u4F7F\u7528babel-loader\uFF0Cbabel\u7684\u914D\u7F6E\u6587\u4EF6\u662F.babelrc\uFF0C\u91CD\u8981\u7684\u6982\u5FF5\uFF1A</p><ul><li>preset \u4E00\u7CFB\u5217plugin\u7684\u96C6\u5408</li><li>plugins \u4E00\u4E2Aplugin\u5BF9\u5E94\u4E00\u4E2A\u529F\u80FD</li></ul><p>\u5B89\u88C5 npm i @babel/core @babel/preset-env babel-loader</p><p>webpack.config.js\u6587\u4EF6\u5982\u4E0B</p><div class="language-js"><pre><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>.babelrc\u914D\u7F6E\u5982\u4E0B</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u89E3\u6790jsx" tabindex="-1">\u89E3\u6790JSX <a class="header-anchor" href="#\u89E3\u6790jsx" aria-hidden="true">#</a></h4><p>npm i react react-dom @babel/preset-react -D babel\u4E2D\u589E\u52A0\u914D\u7F6E</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@babel/preset-react&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><p><a href="https://time.geekbang.org/course/detail/100028901-97202" target="_blank" rel="noopener noreferrer">\u6781\u5BA2\u65F6\u95F4</a></p>`,48),i=[c];function u(d,h,k,g,b,y){return e(),n("div",null,i)}var x=s(l,[["render",u]]);export{_ as __pageData,x as default};
