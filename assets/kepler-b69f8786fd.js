console.log(" %c Maverick & Kepler By AlanDecode %c https://www.imalan.cn/ ","color: #fadfa3; background: #23b7e5; padding:5px;","padding:5px;");var initPage=function(t){$(".toggle_sidebar").click(function(){$(this).parent().parent().toggleClass("open")}),$(".go-external").click(function(){window.open($(this).siblings("a").attr("href"),"_blank")});var n,e="#content article";function o(){for(var t=document.getElementsByTagName("iframe"),e=0;e<t.length;e++){var n=t[e],o=n.src;if("string"==typeof o&&-1<o.indexOf("player.bilibili.com")){n.classList.add("bili-player"),o.indexOf("&high_quality")<0&&(o+="&high_quality=1",n.setAttribute("src",o));var a=.5625*n.clientWidth;null!=n.getAttribute("data-ratio")&&(a=parseFloat(n.getAttribute("data-ratio"))*n.clientWidth),540<=window.innerWidth&&(a+=120),n.style.height=a+"px"}}}$(e).length&&$("#toc").length&&($.each($(e).find("h1, h2, h3, h4, h5, h6"),function(t,e){$(e).attr("id","toc_"+String(t+1))}),t?tocbot.refresh({tocSelector:"#toc",contentSelector:"#content article",headingSelector:"h1, h2, h3, h4, h5, h6",hasInnerContainers:!0,collapseDepth:7}):tocbot.init({tocSelector:"#toc",contentSelector:"#content article",headingSelector:"h1, h2, h3, h4, h5, h6",hasInnerContainers:!0,collapseDepth:7})),$("#content-wrapper").click(function(){$("body").removeClass("toc-open").removeClass("navbar-open")}),function(){for(var t=document.domain,e=document.getElementsByTagName("a"),n=0;n<e.length;n++){var o=e[n],a=o.getAttribute("target");(void 0===a||""!=a&&"_self"!=a)&&o.host!=t&&o.setAttribute("target","_blank")}}(),o(),window.addEventListener("resize",o),n=document.domain,$.each($('a:not(a[target="_blank"], a[no-pjax])'),function(t,e){e.host==n&&$(e).addClass("pjax")}),$(document).pjax("a.pjax",{container:"#pjax-container",fragment:"#pjax-container",timeout:8e3}),t&&(renderMathInElement(document.body,mathOpts),"function"==typeof initValine&&$("#comments").length&&initValine())};$(document).ready(function(){initPage(!1)}),$(document).on("pjax:send",function(){$("body").removeClass("navbar-open").removeClass("toc-open"),NProgress.configure({showSpinner:!1}),NProgress.start()}),$(document).on("pjax:complete",function(){NProgress.done(),initPage(!0)});