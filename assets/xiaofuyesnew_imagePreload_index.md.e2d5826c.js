import{_ as n,c as s,o as a,d as t}from"./app.0cb80d29.js";const m='{"title":"React \u56FE\u7247\u9884\u52A0\u8F7D\u7EC4\u4EF6\u7684\u5B9E\u73B0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u56FE\u7247\u9884\u52A0\u8F7D\u539F\u7406","slug":"\u56FE\u7247\u9884\u52A0\u8F7D\u539F\u7406"},{"level":2,"title":"\u6765\u4E00\u4E2A\u624B\u6413\u7684 Provider","slug":"\u6765\u4E00\u4E2A\u624B\u6413\u7684-provider"},{"level":2,"title":"\u5F00\u59CB\u64B8\u7EC4\u4EF6\u4E86","slug":"\u5F00\u59CB\u64B8\u7EC4\u4EF6\u4E86"},{"level":2,"title":"\u7EC4\u4EF6\u7684\u4F7F\u7528","slug":"\u7EC4\u4EF6\u7684\u4F7F\u7528"},{"level":2,"title":"\u7BC7\u540E","slug":"\u7BC7\u540E"}],"relativePath":"xiaofuyesnew/imagePreload/index.md","lastUpdated":1642996261788}',p={},o=t(`<h1 id="react-\u56FE\u7247\u9884\u52A0\u8F7D\u7EC4\u4EF6\u7684\u5B9E\u73B0" tabindex="-1">React \u56FE\u7247\u9884\u52A0\u8F7D\u7EC4\u4EF6\u7684\u5B9E\u73B0 <a class="header-anchor" href="#react-\u56FE\u7247\u9884\u52A0\u8F7D\u7EC4\u4EF6\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h1><blockquote><p>\u73B0\u4EE3 Web app \u5728\u5904\u7406\u56FE\u7247\u7684\u65F6\u5019\u4E00\u822C\u4F1A\u91C7\u7528\u52A0\u8F7D <code>&lt;img&gt;</code> \u5143\u7D20\u81EA\u52A8\u52A0\u8F7D\u5BF9\u5E94\u7684\u56FE\u7247\u8D44\u6E90\u7684\u65B9\u5F0F\uFF0C\u4F46\u5728\u67D0\u4E9B\u7279\u5B9A\u9700\u6C42\u4E0B\uFF0C\u9700\u8981\u5728\u8FDB\u5165\u6B63\u5F0F\u9875\u9762\u524D\u5C31\u8FDB\u884C\u56FE\u7247\u52A0\u8F7D\uFF0C\u8FD9\u4E2A\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u4E5F\u540C\u65F6\u9700\u8981\u8FDB\u884C loading \u9875\u9762\u7684\u8FDB\u5EA6\u8BA1\u6570\u64CD\u4F5C\u3002\u56E0\u6B64\uFF0C\u672C\u6587\u7740\u91CD\u63A2\u8BA8\u5728 React \u8BED\u5883\u4E0B\u7684\u56FE\u7247\u9884\u52A0\u8F7D\u7EC4\u4EF6\u7684\u5B9E\u73B0\u3002</p></blockquote><h2 id="\u56FE\u7247\u9884\u52A0\u8F7D\u539F\u7406" tabindex="-1">\u56FE\u7247\u9884\u52A0\u8F7D\u539F\u7406 <a class="header-anchor" href="#\u56FE\u7247\u9884\u52A0\u8F7D\u539F\u7406" aria-hidden="true">#</a></h2><p>\u5728 javascript \u4E2D\uFF0C\u5BF9\u4E8E\u56FE\u7247\u7684\u9884\u52A0\u8F7D\uFF0C\u4E00\u822C\u8FD9\u6837\u5904\u7406\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// \u521B\u5EFA img \u5BF9\u8C61</span>
<span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49 onload \u4E8B\u4EF6\u51FD\u6570</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B8C\u6210\u52A0\u8F7D\u540E\uFF0C\u5BF9 img \u5BF9\u8C61\u8FDB\u884C\u64CD\u4F5C</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5BF9 src \u5C5E\u6027\u8D4B\u503C</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;path/to/image&#39;</span>
</code></pre></div><p>\u5728 React \u7684\u7EC4\u4EF6\u4E2D\u4E5F\u5C06\u8FD9\u6837\u5904\u7406\uFF0C\u4F46\u66F4\u4F18\u96C5\u4E00\u70B9\u7684\uFF0C\u6211\u4EEC\u5C01\u88C5\u4E00\u4E2A <code>Promise</code> :</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">imgLoadPromise</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> src
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6765\u4E00\u4E2A\u624B\u6413\u7684-provider" tabindex="-1">\u6765\u4E00\u4E2A\u624B\u6413\u7684 Provider <a class="header-anchor" href="#\u6765\u4E00\u4E2A\u624B\u6413\u7684-provider" aria-hidden="true">#</a></h2><p>\u72B6\u6001\u7BA1\u7406\u662F\u4E2A\u597D\u4E1C\u897F\uFF0C\u5F88\u591A\u4EBA\u8BF4\u5230 React \u7684\u72B6\u6001\u7BA1\u7406\u90FD\u4F1A\u60F3\u5230 Redux \u3002\u4F46\u662F\u5728\u62E5\u6709\u4E86 Hooks \u4E4B\u540E\uFF0C\u4E00\u4E9B\u7B80\u5355\u7684\u72B6\u6001\u7BA1\u7406\u5C31\u4E0D\u9700\u8981\u989D\u5916\u7684\u4F9D\u8D56\u5176\u4ED6\u5E93\u3002</p><p>\u591A\u7684\u5C31\u4E0D\u8BF4\u4E86\uFF0C\u76F4\u63A5 show code \uFF1A</p><div class="language-jsx"><pre><code><span class="token comment">// loading state</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> useReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token comment">// \u72B6\u6001\u521D\u59CB\u5316\u6570\u636E</span>
<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">loadingShow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793A loading \u9875\u9762</span>
  <span class="token literal-property property">loadingPercent</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u9884\u52A0\u8F7D\u8FDB\u5EA6\uFF0C\u5355\u4F4D %</span>
  <span class="token literal-property property">sourceCount</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>    <span class="token comment">// \u9700\u8981\u52A0\u8F7D\u7684\u56FE\u7247\u6570\u91CF</span>
  <span class="token literal-property property">sourceLoaded</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>   <span class="token comment">// \u5DF2\u7ECF\u52A0\u8F7D\u7684\u56FE\u7247\u6570\u91CF</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u72B6\u6001\u7BA1\u7406 reducer</span>
<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;hideLoading&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">loadingShow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&#39;updateLoading&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">loadingPercent</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&#39;countSource&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">sourceCount</span><span class="token operator">:</span> state<span class="token punctuation">.</span>sourceCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&#39;loadSource&#39;</span><span class="token operator">:</span>
      <span class="token keyword">const</span> loaded <span class="token operator">=</span> state<span class="token punctuation">.</span>sourceLoaded <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token keyword">const</span> percent <span class="token operator">=</span> state<span class="token punctuation">.</span>sourceCount
        <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>loaded <span class="token operator">/</span> state<span class="token punctuation">.</span>sourceCount<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token number">0</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">sourceLoaded</span><span class="token operator">:</span> loaded<span class="token punctuation">,</span>
        <span class="token literal-property property">loadingPercent</span><span class="token operator">:</span> percent<span class="token punctuation">,</span>
        <span class="token literal-property property">loadingShow</span><span class="token operator">:</span> percent <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">no such action: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>action<span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Context <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> initialState<span class="token punctuation">,</span>
  <span class="token function-variable function">dispatch</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">Provider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialState<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Context.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Context.Provider</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Provider
</code></pre></div><h2 id="\u5F00\u59CB\u64B8\u7EC4\u4EF6\u4E86" tabindex="-1">\u5F00\u59CB\u64B8\u7EC4\u4EF6\u4E86 <a class="header-anchor" href="#\u5F00\u59CB\u64B8\u7EC4\u4EF6\u4E86" aria-hidden="true">#</a></h2><p>\u524D\u6587\u4E2D\u6240\u63CF\u8FF0\u7684 <code>Provider</code> \u4E3B\u8981\u662F\u4E3A\u4E86\u7EDF\u8BA1\u5168\u5C40\u7684\u9884\u52A0\u8F7D\u72B6\u6001\uFF0C\u51C6\u5907\u597D\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5F00\u59CB\u8FDB\u884C\u7EC4\u4EF6\u7684\u7F16\u5199\uFF1A</p><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;loadingState&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Preload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>src<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>img<span class="token punctuation">,</span> setImg<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>Context<span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;countSource&#39;</span><span class="token punctuation">)</span>
    <span class="token function">imgLoadPromise</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">img</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setImg</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;loadSource&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> img
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Preload
</code></pre></div><h2 id="\u7EC4\u4EF6\u7684\u4F7F\u7528" tabindex="-1">\u7EC4\u4EF6\u7684\u4F7F\u7528 <a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5728\u6839\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u7528 <code>Provider</code> \u7EC4\u4EF6\uFF0C\u5C06\u6240\u6709\u7684\u9700\u8981\u8FDB\u884C\u72B6\u6001\u7BA1\u7406\u7684\u7EC4\u4EF6\u5305\u88F9\u5728\u5176\u4E2D\uFF1A</p><div class="language-jsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Preload</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path/to/image<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u53EF\u4EE5\u76D1\u63A7\u4E00\u4E0B state \u4E2D\u56FE\u7247\u7684\u52A0\u8F7D\u8FDB\u5EA6\u3002</p><h2 id="\u7BC7\u540E" tabindex="-1">\u7BC7\u540E <a class="header-anchor" href="#\u7BC7\u540E" aria-hidden="true">#</a></h2><p>\u6B64\u79CD\u9884\u52A0\u8F7D\u56FE\u7247\u8D44\u6E90\u7684\u65B9\u5F0F\u53EA\u9002\u5408\u6574\u4E2A\u4EA4\u4E92\u6D41\u7A0B\u90FD\u5728\u540C\u4E00\u4E2A\u9875\u9762\u7684 SPA \u4E2D\uFF0C\u5982\u679C\u662F\u9700\u8981\u5BF9\u4E8E\u56FE\u7247\u8D44\u6E90\u7EC4\u4EF6\u5378\u8F7D\u7684\u573A\u666F\u5C31\u4E0D\u9002\u7528\u4E86\u3002</p><p>\u5BF9\u4E8E\u540E\u9762\u7684\u573A\u666F\u5C06\u5728\u4EE5\u540E\u7684\u6587\u4E2D\u8FDB\u884C\u63A2\u8BA8\u3002</p>`,21),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
