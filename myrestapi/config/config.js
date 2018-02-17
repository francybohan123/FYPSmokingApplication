<!DOCTYPE html>
<!-- saved from url=(0084)https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html -->
<html class="no-touch gr__learn2crack_com" lang="en-US" prefix="og: http://ogp.me/ns# og: http://ogp.me/ns#"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="stylesheet" href="./config_files/css"><link rel="stylesheet" href="./config_files/cab275ca3e4424be2f577ad313690ad3.css" data-minify="1"><title>Android User Registration and Login with Node.js and MongoDB - Server #1</title><meta property="og:locale" content="en_US"><meta property="og:type" content="article"><meta property="og:title" content="Android User Registration and Login with Node.js and MongoDB – Server #1"><meta property="og:description" content="In this series of tutorials we will develop a complete login, registration and authentication system with Node.js and MongoDB database."><meta property="og:url" content="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html"><meta property="og:site_name" content="Learn2Crack - Step in to Learn"><meta property="article:tag" content="ES6"><meta property="article:tag" content="login register"><meta property="article:tag" content="login register authentication"><meta property="article:tag" content="mongo"><meta property="article:tag" content="nodejs"><meta property="article:section" content="Android Development"><meta property="article:published_time" content="2016-09-24T17:53:59+00:00"><meta property="article:modified_time" content="2017-08-08T13:28:40+00:00"><meta property="og:updated_time" content="2017-08-08T13:28:40+00:00"><meta property="og:image" content="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server.png"><meta name="description" content="In this series of tutorials we will develop a complete login, registration and authentication system with Node.js and MongoDB database."><link rel="canonical" href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html"><link rel="publisher" href="https://plus.google.com/+Learn2crackOfficial"><meta property="og:locale" content="en_US"><meta property="og:type" content="article"><meta property="og:title" content="Android User Registration and Login with Node.js and MongoDB - Server #1"><meta property="og:description" content="In this series of tutorials we will develop a complete login, registration and authentication system with Node.js and MongoDB database."><meta property="og:url" content="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html"><meta property="og:site_name" content="Learn2Crack - Step in to Learn"><meta property="article:publisher" content="https://www.facebook.com/Learn2CrackOfficial"><meta property="article:tag" content="ES6"><meta property="article:tag" content="login register"><meta property="article:tag" content="login register authentication"><meta property="article:tag" content="mongo"><meta property="article:tag" content="nodejs"><meta property="article:section" content="Android Development"><meta property="article:published_time" content="2016-09-24T17:53:59+00:00"><meta property="article:modified_time" content="2017-08-08T13:28:40+00:00"><meta property="og:updated_time" content="2017-08-08T13:28:40+00:00"><meta property="og:image" content="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server.png"><meta property="og:image:secure_url" content="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server.png"><meta property="og:image:width" content="1920"><meta property="og:image:height" content="1080"><meta name="twitter:card" content="summary"><meta name="twitter:description" content="In this series of tutorials we will develop a complete login, registration and authentication system with Node.js and MongoDB database."><meta name="twitter:title" content="Android User Registration and Login with Node.js and MongoDB - Server #1"><meta name="twitter:site" content="@learn2crack"><meta name="twitter:image" content="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server.png"><meta name="twitter:creator" content="@rajamalw"> <style></style><script async="" src="./config_files/android-user-registration-login-node-server.html"></script><script src="https://asset.pagefair.net/ads.min.js"></script><script src="https://asset.pagefair.com/measure.min.js"></script><script type="text/javascript" async="" src="./config_files/essb-core.min.js.download"></script><script id="facebook-jssdk" src="./config_files/sdk.js.download"></script><script async="" src="https://www.google-analytics.com/analytics.js"></script><script type="application/ld+json">{"@context":"http:\/\/schema.org","@type":"WebSite","@id":"#website","url":"https:\/\/www.learn2crack.com\/","name":"Learn2Crack - Step in to Learn","potentialAction":{"@type":"SearchAction","target":"https:\/\/www.learn2crack.com\/?s={search_term_string}","query-input":"required name=search_term_string"}}</script> <script type="application/ld+json">{"@context":"http:\/\/schema.org","@type":"Organization","url":"https:\/\/www.learn2crack.com\/2016\/09\/android-user-registration-login-node-server.html","sameAs":["https:\/\/www.facebook.com\/Learn2CrackOfficial","https:\/\/www.linkedin.com\/company\/learn2crack","https:\/\/plus.google.com\/+Learn2crackOfficial","https:\/\/www.youtube.com\/user\/learn2crackofficial","https:\/\/www.pinterest.com\/learn2crack\/","https:\/\/twitter.com\/learn2crack"],"@id":"#organization","name":"Learn2Crack","logo":"https:\/\/www.learn2crack.com\/wp-content\/uploads\/2015\/06\/logo_alt.png"}</script> <link rel="dns-prefetch" href="https://www.learn2crack.com/"><link rel="dns-prefetch" href="https://cdn.learn2crack.com/"><link rel="dns-prefetch" href="https://fonts.googleapis.com/"><link rel="dns-prefetch" href="https://s.w.org/"><link rel="alternate" type="application/rss+xml" title="Learn2Crack - Step in to Learn » Feed" href="https://www.learn2crack.com/feed"><link rel="alternate" type="application/rss+xml" title="Learn2Crack - Step in to Learn » Comments Feed" href="https://www.learn2crack.com/comments/feed"><link rel="alternate" type="application/rss+xml" title="Learn2Crack - Step in to Learn » Android User Registration and Login with Node.js and MongoDB – Server #1 Comments Feed" href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html/feed"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE"><meta name="og:title" content="Android User Registration and Login with Node.js and MongoDB – Server #1"><meta name="og:type" content="website"><meta name="og:url" content="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html"><meta name="og:image" content="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server-1024x576.png">  <script type="text/javascript" data-cfasync="false">var disableStr = 'ga-disable-UA-42392378-1';

	/* Function to detect opted out users */
	function __gaTrackerIsOptedOut() {
		return document.cookie.indexOf(disableStr + '=true') > -1;
	}

	/* Disable tracking if the opt-out cookie exists. */
	if ( __gaTrackerIsOptedOut() ) {
		window[disableStr] = true;
	}

	/* Opt-out function */
	function __gaTrackerOptout() {
	  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
	  window[disableStr] = true;
	}
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','__gaTracker');

	__gaTracker('create', 'UA-42392378-1', 'auto');
	__gaTracker('set', 'forceSSL', true);
	__gaTracker('send','pageview');</script> <style type="text/css">img.wp-smiley,img.emoji{display:inline!important;border:none!important;box-shadow:none!important;height:1em!important;width:1em!important;margin:0 .07em!important;vertical-align:-0.1em!important;background:none!important;padding:0!important}</style><style id="rs-plugin-settings-inline-css" type="text/css"></style> <script type="text/javascript">/* <![CDATA[ */ var monsterinsights_frontend = {"js_events_tracking":"true","is_debug_mode":"false","download_extensions":"doc,exe,js,pdf,ppt,tgz,zip,xls","inbound_paths":"","home_url":"https:\/\/www.learn2crack.com","track_download_as":"event","internal_label":"int","hash_tracking":"false"}; /* ]]> */</script> <script type="text/javascript" src="https://cdn.learn2crack.com/wp-content/cache/busting/1/wp-content/plugins/google-analytics-for-wordpress/assets/js/frontend.min-6.2.7.js"></script> <script type="text/javascript" src="./config_files/highlight.pack-e409ccf6667708a842dee4ec95d53ef1.js.download" data-minify="1"></script> <script type="text/javascript" src="./config_files/jquery-1.12.4.js.download"></script> <script type="text/javascript" src="./config_files/ts-fab-7cd282ee6228e669eaaf72cc43251472.js.download" data-minify="1"></script> <script type="text/javascript" src="./config_files/jquery.themepunch.tools.min-5.4.6.3.1.js.download"></script> <script type="text/javascript" src="./config_files/jquery.themepunch.revolution.min-5.4.6.3.1.js.download"></script> <link rel="https://api.w.org/" href="https://www.learn2crack.com/wp-json/"><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.learn2crack.com/xmlrpc.php?rsd"><link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.learn2crack.com/wp-includes/wlwmanifest.xml"><meta name="generator" content="WordPress 4.9.3"><link rel="shortlink" href="https://www.learn2crack.com/?p=4642"><link rel="alternate" type="application/json+oembed" href="https://www.learn2crack.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.learn2crack.com%2F2016%2F09%2Fandroid-user-registration-login-node-server.html"><link rel="alternate" type="text/xml+oembed" href="https://www.learn2crack.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.learn2crack.com%2F2016%2F09%2Fandroid-user-registration-login-node-server.html&amp;format=xml"><style>pre[data-bit$='pos']{background-color:inherit!important;width:inherit!important;border:0px!important;clear:left!important;font-size:12px!important;margin-bottom:0px!important;margin-left:0px!important;margin-right:0px!important;margin-top:0px!important;padding-bottom:0px!important;padding-left:0px!important;padding-right:0px!important;padding-top:0px!important;position:relative!important;word-wrap:normal!important;overflow:auto!important}pre[data-bit$='pos']:before{content:attr(data-lines)!important;font-size:12px!important;line-height:18px!important;display:block!important;position:absolute!important;float:left!important;top:0px!important;text-align:right!important;left:0px!important;width:24px!important;color:#d2d2d2!important;opacity:0!important;-webkit-transition:opacity 0.4s!important;-moz-transition:opacity 0.4s!important;transition:opacity 0.4s!important}pre[data-bit$='pos']:hover:before{opacity:1!important}pre[data-bit$='pos'] code{border:0px!important;font-size:12px!important;line-height:18px!important;margin-bottom:0px!important;margin-left:0px!important;margin-right:0px!important;margin-top:0px!important;padding-bottom:0px!important;padding-left:40px!important;padding-right:12px!important;padding-top:0px!important;background-repeat:repeat!important}pre[data-bit$='com']{background-color:inherit!important;width:inherit!important;border:0px!important;clear:left!important;font-size:12px!important;margin-bottom:0px!important;margin-left:0px!important;margin-right:0px!important;margin-top:0px!important;padding-bottom:0px!important;padding-left:0px!important;padding-right:0px!important;padding-top:0px!important;position:relative!important;word-wrap:normal!important;overflow:auto!important}pre[data-bit$='com']:before{content:attr(data-lines)!important;font-size:12px!important;line-height:18px!important;display:block!important;position:absolute!important;float:left!important;top:0px!important;text-align:right!important;left:0px!important;width:24px!important;color:#d2d2d2!important;opacity:0!important;-webkit-transition:opacity 0.4s!important;-moz-transition:opacity 0.4s!important;transition:opacity 0.4s!important}pre[data-bit$='com']:hover:before{opacity:1!important}pre[data-bit$='com'] code{border:0px!important;font-size:12px!important;line-height:18px!important;margin-bottom:0px!important;margin-left:0px!important;margin-right:0px!important;margin-top:0px!important;padding-bottom:0px!important;padding-left:40px!important;padding-right:12px!important;padding-top:0px!important;background-repeat:repeat!important}.hljs{display:inline-block!important}.posts_collapsable-box{display:block;position:relative;padding-left:15px;padding-right:15px;padding-top:9px;padding-bottom:9px;left:0;background-color:#d2d2d2;border-width:0;font-size:12px;font-weight:700;cursor:pointer;transition:background-color 0.4s;-webkit-transition:background-color 0.4s;-moz-transition:background-color 0.4s}.posts_collapsable-box:hover{background-color:#d2d2d2}.comments_collapsable-box{display:block;position:relative;padding-left:15px;padding-right:15px;padding-top:9px;padding-bottom:9px;left:0;background-color:#d2d2d2;border-width:0;font-size:12px;font-weight:700;cursor:pointer;transition:background-color 0.4s;-webkit-transition:background-color 0.4s;-moz-transition:background-color 0.4s}.comments_collapsable-box:hover{background-color:#d2d2d2}</style> <script>hljs.tabReplace = '';
       hljs.initHighlightingOnLoad();</script> <meta name="theme-color" content="#00796B"><meta name="msapplication-navbutton-color" content="#00796B"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><style>.ts-fab-wrapper .ts-fab-list li a{background-color:#fafafa;border:1px solid #fafafa;color:#404040}.ts-fab-wrapper .ts-fab-list li.active a{background-color:#f6f6f6;border:1px solid #f6f6f6;color:#252525}.ts-fab-wrapper .ts-fab-tab.visible-tab{background-color:#f6f6f6;border:2px solid #f6f6f6;color:#404040}</style><script type="text/javascript">if ( ! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		var root = document.getElementsByTagName( 'html' )[0]
		root.className += " no-touch";
	}</script> <style type="text/css">.essb-subscribe-form-content.essb-subscribe-from-design3 input.essb-subscribe-form-content-email-field,.essb-subscribe-form-content.essb-subscribe-from-design3 input.essb-subscribe-form-content-name-field{background-color:rgba(255,255,255,.2)!important;margin-top:5px!important}.essb-subscribe-form-content.essb-subscribe-from-design3 input{padding:0px!important}.essb_bottombar{margin-bottom:-200px}</style> <script type="text/javascript">var essb_settings = {"ajax_url":"https:\/\/www.learn2crack.com\/wp-admin\/admin-ajax.php","essb3_nonce":"f5d1b55f43","essb3_plugin_url":"https:\/\/www.learn2crack.com\/wp-content\/plugins\/easy-social-share-buttons3","essb3_stats":true,"essb3_ga":true,"essb3_ga_mode":"simple","blog_url":"https:\/\/www.learn2crack.com\/","essb3_postfloat_stay":false,"post_id":4642,"bottombar_appear":"10","bottombar_disappear":"90"};</script><meta name="generator" content="Powered by WPBakery Page Builder - drag and drop page builder for WordPress."> <!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="https://www.learn2crack.com/wp-content/plugins/js_composer/assets/css/vc_lte_ie9.min.css" media="screen"><![endif]--><meta name="onesignal" content="wordpress-plugin"><link rel="manifest" href="https://www.learn2crack.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/manifest.json.php?gcm_sender_id="> <script src="./config_files/OneSignalSDK.js.download" async=""></script> <script>window.OneSignal = window.OneSignal || [];

      OneSignal.push( function() {
        OneSignal.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js.php";
        OneSignal.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js.php";
        OneSignal.SERVICE_WORKER_PARAM = { scope: '/' };

        OneSignal.setDefaultNotificationUrl("https://cdn.learn2crack.com/");
        var oneSignal_options = {};
        window._oneSignalInitOptions = oneSignal_options;

        oneSignal_options['wordpress'] = true;
oneSignal_options['appId'] = '262bd336-e724-4e31-b333-1e8c2057a2cb';
oneSignal_options['autoRegister'] = true;
oneSignal_options['welcomeNotification'] = { };
oneSignal_options['welcomeNotification']['title'] = "";
oneSignal_options['welcomeNotification']['message'] = "";
oneSignal_options['path'] = "https://www.learn2crack.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/";
oneSignal_options['promptOptions'] = { };
              OneSignal.init(window._oneSignalInitOptions);
                    });

      function documentInitOneSignal() {
        var oneSignal_elements = document.getElementsByClassName("OneSignal-prompt");

        var oneSignalLinkClickHandler = function(event) { OneSignal.push(['registerForPushNotifications']); event.preventDefault(); };        for(var i = 0; i < oneSignal_elements.length; i++)
          oneSignal_elements[i].addEventListener('click', oneSignalLinkClickHandler, false);
      }

      if (document.readyState === 'complete') {
           documentInitOneSignal();
      }
      else {
           window.addEventListener("load", function(event){
               documentInitOneSignal();
          });
      }</script> <meta name="generator" content="Powered by Slider Revolution 5.4.6.3.1 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface.">  <script>window.fbAsyncInitPredefined = window.fbAsyncInit;
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: 117100935120196,
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.6'
                });
                window.FB.init = function(){};
                window.fbAsyncInitPredefined && window.fbAsyncInitPredefined();
            };
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js?";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script> <link rel="icon" href="https://cdn.learn2crack.com/wp-content/uploads/2016/01/cropped-favicon-150x150.png" sizes="32x32"><link rel="icon" href="https://cdn.learn2crack.com/wp-content/uploads/2016/01/cropped-favicon-300x300.png" sizes="192x192"><link rel="apple-touch-icon-precomposed" href="https://cdn.learn2crack.com/wp-content/uploads/2016/01/cropped-favicon-300x300.png"><meta name="msapplication-TileImage" content="https://cdn.learn2crack.com/wp-content/uploads/2016/01/cropped-favicon-300x300.png"> <script type="text/javascript">function setREVStartSize(e){
				try{ var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;					
					if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})					
				}catch(d){console.log("Failure at Presize of Slider:"+d)}
			};</script> <noscript>&lt;style type="text/css"&gt;.wpb_animate_when_almost_visible{opacity:1}&lt;/style&gt;</noscript><style id="us-theme-options-css" type="text/css">@font-face{font-family:'FontAwesome';src:url(https://cdn.learn2crack.com/wp-content/themes/Zephyr/framework/fonts/fontawesome-webfont.woff2?v=4.7.0) format('woff2'),url(https://cdn.learn2crack.com/wp-content/themes/Zephyr/framework/fonts/fontawesome-webfont.woff?v=4.7.0) format('woff');font-weight:400;font-style:normal}.style_phone6-1>div{background-image:url(https://cdn.learn2crack.com/wp-content/themes/Zephyr/framework/img/phone-6-black-real.png)}.style_phone6-2>div{background-image:url(https://cdn.learn2crack.com/wp-content/themes/Zephyr/framework/img/phone-6-white-real.png)}.style_phone6-3>div{background-image:url(https://cdn.learn2crack.com/wp-content/themes/Zephyr/framework/img/phone-6-black-flat.png)}.style_phone6-4>div{background-image:url(https://cdn.learn2crack.com/wp-content/themes/Zephyr/framework/img/phone-6-white-flat.png)}html,.w-nav .widget{font-family:"Roboto",sans-serif;font-size:14px;line-height:24px;font-weight:400}.w-text.font_main_menu,.w-nav-list.level_1{font-family:"Roboto",sans-serif;font-weight:300}h1,h2,h3,h4,h5,h6,.w-text.font_heading,.w-blog-post.format-quote blockquote,.w-counter-number,.w-pricing-item-price,.w-tabs-item-title,.stats-block .stats-desc .stats-number{font-family:"Roboto",sans-serif;font-weight:300}h1{font-size:40px;font-weight:300;letter-spacing:0em}h2{font-size:34px;font-weight:300;letter-spacing:0em}h3{font-size:28px;font-weight:300;letter-spacing:0em}h4,.widgettitle,.comment-reply-title,.woocommerce #reviews h2,.woocommerce .related>h2,.woocommerce .upsells>h2,.woocommerce .cross-sells>h2{font-size:24px;font-weight:300;letter-spacing:0em}h5{font-size:20px;font-weight:300;letter-spacing:0em}h6{font-size:18px;font-weight:300;letter-spacing:0em}@media (max-width:767px){html{font-size:16px;line-height:28px}h1{font-size:30px}h1.vc_custom_heading{font-size:30px!important}h2{font-size:26px}h2.vc_custom_heading{font-size:26px!important}h3{font-size:22px}h3.vc_custom_heading{font-size:22px!important}h4,.widgettitle,.comment-reply-title,.woocommerce #reviews h2,.woocommerce .related>h2,.woocommerce .upsells>h2,.woocommerce .cross-sells>h2{font-size:20px}h4.vc_custom_heading{font-size:20px!important}h5{font-size:18px}h5.vc_custom_heading{font-size:18px!important}h6{font-size:16px}h6.vc_custom_heading{font-size:16px!important}}body{background-image:url(https://cdn.learn2crack.com/wp-content/uploads/2015/06/paper_2X.png);background-attachment:scroll;background-position:top center;background-repeat:repeat;background-size:initial}body,.header_hor .l-header.pos_fixed{min-width:1300px}.l-canvas.type_boxed,.l-canvas.type_boxed .l-subheader,.l-canvas.type_boxed .l-section.type_sticky,.l-canvas.type_boxed~.l-footer{max-width:1300px}.header_hor .l-subheader-h,.l-titlebar-h,.l-main-h,.l-section-h,.w-tabs-section-content-h,.w-blog-post-body{max-width:1140px}@media (max-width:1290px){.l-section:not(.width_full) .owl-nav{display:none}}@media (max-width:1340px){.l-section:not(.width_full) .w-blog .owl-nav{display:none}}.l-sidebar{width:27%}.l-content{width:68%}@media (max-width:767px){.g-cols>div:not([class*=" vc_col-"]){clear:both;float:none;width:100%;margin:0 0 2rem}.g-cols.type_boxes>div,.g-cols>div:last-child,.g-cols>div.has-fill{margin-bottom:0}.vc_wp_custommenu.layout_hor,.align_center_xs,.align_center_xs .w-socials{text-align:center}}@media screen and (max-width:1200px){.w-portfolio.cols_3 .w-portfolio-item{width:33.333333333333%}.w-portfolio.cols_3 .w-portfolio-item.size_2x1,.w-portfolio.cols_3 .w-portfolio-item.size_2x2{width:66.666666666667%}.w-portfolio.cols_4 .w-portfolio-item{width:33.333333333333%}.w-portfolio.cols_4 .w-portfolio-item.size_2x1,.w-portfolio.cols_4 .w-portfolio-item.size_2x2{width:66.666666666667%}.w-portfolio.cols_5 .w-portfolio-item{width:33.333333333333%}.w-portfolio.cols_5 .w-portfolio-item.size_2x1,.w-portfolio.cols_5 .w-portfolio-item.size_2x2{width:66.666666666667%}.w-portfolio.cols_6 .w-portfolio-item{width:33.333333333333%}.w-portfolio.cols_6 .w-portfolio-item.size_2x1,.w-portfolio.cols_6 .w-portfolio-item.size_2x2{width:66.666666666667%}}@media screen and (max-width:900px){.w-portfolio.cols_2 .w-portfolio-item{width:50%}.w-portfolio.cols_2 .w-portfolio-item.size_2x1,.w-portfolio.cols_2 .w-portfolio-item.size_2x2{width:100%}.w-portfolio.cols_3 .w-portfolio-item{width:50%}.w-portfolio.cols_3 .w-portfolio-item.size_2x1,.w-portfolio.cols_3 .w-portfolio-item.size_2x2{width:100%}.w-portfolio.cols_4 .w-portfolio-item{width:50%}.w-portfolio.cols_4 .w-portfolio-item.size_2x1,.w-portfolio.cols_4 .w-portfolio-item.size_2x2{width:100%}.w-portfolio.cols_5 .w-portfolio-item{width:50%}.w-portfolio.cols_5 .w-portfolio-item.size_2x1,.w-portfolio.cols_5 .w-portfolio-item.size_2x2{width:100%}.w-portfolio.cols_6 .w-portfolio-item{width:50%}.w-portfolio.cols_6 .w-portfolio-item.size_2x1,.w-portfolio.cols_6 .w-portfolio-item.size_2x2{width:100%}}@media screen and (max-width:600px){.w-portfolio.cols_1 .w-portfolio-item{width:100%}.w-portfolio.cols_2 .w-portfolio-item{width:100%}.w-portfolio.cols_3 .w-portfolio-item{width:100%}.w-portfolio.cols_4 .w-portfolio-item{width:100%}.w-portfolio.cols_5 .w-portfolio-item{width:100%}.w-portfolio.cols_6 .w-portfolio-item{width:100%}}@media screen and (max-width:1200px){.w-blog.cols_3 .w-blog-post{width:33.333333333333%}.w-blog.cols_4 .w-blog-post{width:33.333333333333%}.w-blog.cols_5 .w-blog-post{width:33.333333333333%}.w-blog.cols_6 .w-blog-post{width:33.333333333333%}}@media screen and (max-width:900px){.w-blog.cols_2 .w-blog-post{width:50%}.w-blog.cols_3 .w-blog-post{width:50%}.w-blog.cols_4 .w-blog-post{width:50%}.w-blog.cols_5 .w-blog-post{width:50%}.w-blog.cols_6 .w-blog-post{width:50%}}@media screen and (max-width:600px){.w-blog.cols_1 .w-blog-post{width:100%}.w-blog.cols_2 .w-blog-post{width:100%}.w-blog.cols_3 .w-blog-post{width:100%}.w-blog.cols_4 .w-blog-post{width:100%}.w-blog.cols_5 .w-blog-post{width:100%}.w-blog.cols_6 .w-blog-post{width:100%}}.w-header-show,.w-toplink{background-color:rgba(0,0,0,.3)}body{background-color:#d6d6d6;-webkit-tap-highlight-color:rgba(0,191,165,.2)}.l-subheader.at_top,.l-subheader.at_top .w-dropdown-list,.l-subheader.at_top .type_mobile .w-nav-list.level_1{background-color:#00796B}.l-subheader.at_top,.l-subheader.at_top .w-dropdown.active,.l-subheader.at_top .type_mobile .w-nav-list.level_1{color:#b2dfdb}.no-touch .l-subheader.at_top a:hover,.no-touch .l-header.bg_transparent .l-subheader.at_top .w-dropdown.active a:hover{color:#fff}.header_ver .l-header,.header_hor .l-subheader.at_middle,.l-subheader.at_middle .w-dropdown-list,.l-subheader.at_middle .type_mobile .w-nav-list.level_1{background-color:#009688}.l-subheader.at_middle,.l-subheader.at_middle .w-dropdown.active,.l-subheader.at_middle .type_mobile .w-nav-list.level_1{color:#fff}.no-touch .l-subheader.at_middle a:hover,.no-touch .l-header.bg_transparent .l-subheader.at_middle .w-dropdown.active a:hover{color:#fff}.l-subheader.at_bottom,.l-subheader.at_bottom .w-dropdown-list,.l-subheader.at_bottom .type_mobile .w-nav-list.level_1{background-color:#00796B}.l-subheader.at_bottom,.l-subheader.at_bottom .w-dropdown.active,.l-subheader.at_bottom .type_mobile .w-nav-list.level_1{color:#b2dfdb}.no-touch .l-subheader.at_bottom a:hover,.no-touch .l-header.bg_transparent .l-subheader.at_bottom .w-dropdown.active a:hover{color:#fff}.l-header.bg_transparent:not(.sticky) .l-subheader{color:#fff}.no-touch .l-header.bg_transparent:not(.sticky) a:not(.w-nav-anchor):hover,.no-touch .l-header.bg_transparent:not(.sticky) .type_desktop .menu-item.level_1:hover>.w-nav-anchor{color:#fff}.l-header.bg_transparent:not(.sticky) .w-nav-title:after{background-color:#fff}.w-search-form{background-color:#fff;color:#00796B}.w-search.layout_fullscreen .w-search-background{background-color:#fff}.w-search.layout_fullscreen input:focus + .w-form-row-field-bar:before,.w-search.layout_fullscreen input:focus + .w-form-row-field-bar:after{background-color:#00796B}.no-touch .menu-item.level_1:hover>.w-nav-anchor{background-color:#00897b;color:#fff}.w-nav-title:after{background-color:#fff}.menu-item.level_1.current-menu-item>.w-nav-anchor,.menu-item.level_1.current-menu-parent>.w-nav-anchor,.menu-item.level_1.current-menu-ancestor>.w-nav-anchor{background-color:;color:#7dfadb}.l-header.bg_transparent:not(.sticky) .type_desktop .menu-item.level_1.current-menu-item>.w-nav-anchor,.l-header.bg_transparent:not(.sticky) .type_desktop .menu-item.level_1.current-menu-ancestor>.w-nav-anchor{color:#7dfadb}.w-nav-list:not(.level_1){background-color:#fff;color:#000}.w-nav-anchor:not(.level_1) .ripple{background-color:#000}.no-touch .menu-item:not(.level_1):hover>.w-nav-anchor{background-color:#EEE;color:#000}.menu-item:not(.level_1).current-menu-item>.w-nav-anchor,.menu-item:not(.level_1).current-menu-parent>.w-nav-anchor,.menu-item:not(.level_1).current-menu-ancestor>.w-nav-anchor{background-color:#EEE;color:#7dfadb}.w-cart-quantity,.btn.w-menu-item,.btn.menu-item.level_1>a,.l-footer .vc_wp_custommenu.layout_hor .btn>a{background-color:#ffffff!important;color:#00897b!important}.no-touch .btn.w-menu-item:hover,.no-touch .btn.menu-item.level_1>a:hover,.no-touch .l-footer .vc_wp_custommenu.layout_hor .btn>a:hover{background-color:#ffffff!important;color:#00897b!important}body.us_iframe,.l-preloader,.l-canvas,.l-footer,.l-popup-box-content,.w-blog.layout_flat .w-blog-post-h,.w-cart-dropdown,.w-pricing.style_1 .w-pricing-item-h,.w-person.layout_card,.select2-dropdown,.us-woo-shop_modern .product-h,.no-touch .us-woo-shop_modern .product-meta,.woocommerce #payment .payment_box,.wpcf7-form-control-wrap.type_select:after{background-color:#fff}.woocommerce #payment .payment_methods li>input:checked + label,.woocommerce .blockUI.blockOverlay{background-color:#ffffff!important}button.w-btn.color_contrast.style_raised,a.w-btn.color_contrast.style_raised,.w-iconbox.style_circle.color_contrast .w-iconbox-icon{color:#fff}.l-section.color_alternate,.l-titlebar.color_alternate,.l-section.for_blogpost .w-blog-post-preview,.l-section.for_related>.l-section-h,.l-canvas.sidebar_none .l-section.for_comments,.w-actionbox.color_light,.w-author,.w-blog.layout_latest .w-blog-post-meta-date,.no-touch .w-btn.style_flat:hover,.no-touch .pagination a.page-numbers:hover,.g-filters-item .ripple,.w-form.for_protected,.w-iconbox.style_circle.color_light .w-iconbox-icon,.g-loadmore-btn,.no-touch .owl-prev:hover,.no-touch .owl-next:hover,.w-profile,.w-pricing.style_1 .w-pricing-item-header,.w-pricing.style_2 .w-pricing-item-h,.w-progbar-bar,.w-progbar.style_3 .w-progbar-bar:before,.w-progbar.style_3 .w-progbar-bar-count,.l-main .w-socials-item-link,.w-tabs-item .ripple,.w-tabs.layout_timeline .w-tabs-item,.w-tabs.layout_timeline .w-tabs-section-header-h,.w-testimonials.style_1 .w-testimonial-h,.widget_calendar #calendar_wrap,.no-touch .l-main .widget_nav_menu a:hover,.select2-selection__choice,.woocommerce .login,.woocommerce .track_order,.woocommerce .checkout_coupon,.woocommerce .lost_reset_password,.woocommerce .register,.no-touch .us-woo-shop_modern .product-h .button:hover,.woocommerce .comment-respond,.woocommerce .cart_totals,.no-touch .woocommerce .product-remove a:hover,.woocommerce .checkout #order_review,.woocommerce ul.order_details,.widget_shopping_cart,.smile-icon-timeline-wrap .timeline-wrapper .timeline-block,.smile-icon-timeline-wrap .timeline-feature-item.feat-item{background-color:#f2f7f7}.timeline-wrapper .timeline-post-right .ult-timeline-arrow l,.timeline-wrapper .timeline-post-left .ult-timeline-arrow l,.timeline-feature-item.feat-item .ult-timeline-arrow l{border-color:#f2f7f7}hr,td,th,input,textarea,select,.l-section,.vc_column_container,.vc_column-inner,.w-form-row-field input:focus,.w-form-row-field textarea:focus,.widget_search input[type="text"]:focus,.w-image,.w-separator,.w-sharing-item,.w-tabs-list,.w-tabs-section,.w-tabs-section-header:before,.l-main .widget_nav_menu .menu,.l-main .widget_nav_menu .menu-item a,.wpml-ls-legacy-dropdown a,.wpml-ls-legacy-dropdown-click a,.woocommerce .quantity.buttons_added input.qty,.woocommerce .quantity.buttons_added .plus,.woocommerce .quantity.buttons_added .minus,.woocommerce-tabs .tabs,.woocommerce .related,.woocommerce .upsells,.woocommerce .cross-sells,.woocommerce ul.order_details li,.select2-selection,.smile-icon-timeline-wrap .timeline-line{border-color:#d7e0df}.w-iconbox.style_default.color_light .w-iconbox-icon,.w-separator,.pagination .page-numbers{color:#d7e0df}button.w-btn.color_light.style_raised,a.w-btn.color_light.style_raised,.no-touch .color_alternate .w-btn.style_flat:hover,.no-touch .g-loadmore-btn:hover,.color_alternate .g-filters-item .ripple,.color_alternate .w-tabs-item .ripple,.no-touch .color_alternate .owl-prev:hover,.no-touch .color_alternate .owl-next:hover,.no-touch .color_alternate .pagination a.page-numbers:hover,.no-touch .woocommerce #payment .payment_methods li>label:hover,.widget_price_filter .ui-slider:before{background-color:#d7e0df}h1,h2,h3,h4,h5,h6,.w-counter-number{color:#212121}.w-progbar.color_heading .w-progbar-bar-h{background-color:#212121}.l-canvas,.l-footer,.l-popup-box-content,button.w-btn.color_light.style_raised,a.w-btn.color_light.style_raised,.w-blog.layout_flat .w-blog-post-h,.w-cart-dropdown,.w-iconbox.style_circle.color_light .w-iconbox-icon,.w-pricing-item-h,.w-person.layout_card,.w-tabs.layout_timeline .w-tabs-item,.w-tabs.layout_timeline .w-tabs-section-header-h,.w-testimonials.style_1 .w-testimonial-h,.woocommerce .form-row .chosen-drop,.us-woo-shop_modern .product-h,.select2-dropdown{color:#3f4544}button.w-btn.color_contrast.style_raised,a.w-btn.color_contrast.style_raised,.w-iconbox.style_circle.color_contrast .w-iconbox-icon,.w-progbar.color_text .w-progbar-bar-h,.w-scroller-dot span{background-color:#3f4544}.w-scroller-dot span{box-shadow:0 0 0 2px #3f4544}a{color:#00bfa5}.no-touch a:hover,.no-touch a:hover + .w-blog-post-body .w-blog-post-title a,.no-touch .w-blog-post-title a:hover{color:#2196f3}.no-touch .w-cart-dropdown a:not(.button):hover{color:#2196f3!important}.highlight_primary,.g-preloader,button.w-btn.color_primary.style_flat,a.w-btn.color_primary.style_flat,.w-counter.color_primary .w-counter-number,.w-iconbox.style_default.color_primary .w-iconbox-icon,.g-filters-item.active,.w-form-row.focused:before,.w-form-row.focused>i,.no-touch .w-sharing.type_simple.color_primary .w-sharing-item:hover .w-sharing-icon,.w-separator.color_primary,.w-tabs-item.active,.w-tabs-section.active .w-tabs-section-header,.l-main .widget_nav_menu .menu-item.current-menu-item>a,.no-touch .us-woo-shop_modern .product-h a.button,.woocommerce-tabs .tabs li.active,.woocommerce #payment .payment_methods li>input:checked + label,input[type="radio"]:checked + .wpcf7-list-item-label:before,input[type="checkbox"]:checked + .wpcf7-list-item-label:before{color:#00bfa5}.l-section.color_primary,.l-titlebar.color_primary,.no-touch .l-navigation-item:hover .l-navigation-item-arrow,.highlight_primary_bg,.w-actionbox.color_primary,.w-blog-post-preview-icon,button,input[type="submit"],a.w-btn.color_primary.style_raised,.pagination .page-numbers.current,.w-form-row.focused .w-form-row-field-bar:before,.w-form-row.focused .w-form-row-field-bar:after,.w-iconbox.style_circle.color_primary .w-iconbox-icon,.w-pricing.style_1 .type_featured .w-pricing-item-header,.w-pricing.style_2 .type_featured .w-pricing-item-h,.w-progbar.color_primary .w-progbar-bar-h,.w-sharing.type_solid.color_primary .w-sharing-item,.w-sharing.type_fixed.color_primary .w-sharing-item,.w-socials-item-link-hover,.w-tabs-list-bar,.w-tabs.layout_timeline .w-tabs-item.active,.no-touch .w-tabs.layout_timeline .w-tabs-item:hover,.w-tabs.layout_timeline .w-tabs-section.active .w-tabs-section-header-h,.rsDefault .rsThumb.rsNavSelected,.woocommerce .button.alt,.woocommerce .button.checkout,.widget_price_filter .ui-slider-range,.widget_price_filter .ui-slider-handle,.select2-results__option--highlighted,.smile-icon-timeline-wrap .timeline-separator-text .sep-text,.smile-icon-timeline-wrap .timeline-wrapper .timeline-dot,.smile-icon-timeline-wrap .timeline-feature-item .timeline-dot,.l-body .cl-btn{background-color:#00bfa5}.l-content blockquote,.g-filters-item.active,input:focus,textarea:focus,.w-separator.color_primary,.owl-dot.active span,.rsBullet.rsNavSelected span,.woocommerce .quantity.buttons_added input.qty:focus,.validate-required.woocommerce-validated input:focus,.validate-required.woocommerce-invalid input:focus,.us-woo-shop_modern .button.loading:before,.us-woo-shop_modern .button.loading:after,.woocommerce .form-row .chosen-search input[type="text"]:focus,.woocommerce-tabs .tabs li.active{border-color:#00bfa5}input:focus,textarea:focus{box-shadow:0 -1px 0 0 #00bfa5 inset}.highlight_secondary,.no-touch .w-blognav-item:hover .w-blognav-title,button.w-btn.color_secondary.style_flat,a.w-btn.color_secondary.style_flat,.w-counter.color_secondary .w-counter-number,.w-iconbox.style_default.color_secondary .w-iconbox-icon,.w-iconbox.style_default .w-iconbox-link:active .w-iconbox-icon,.no-touch .w-iconbox.style_default .w-iconbox-link:hover .w-iconbox-icon,.w-iconbox-link:active .w-iconbox-title,.no-touch .w-iconbox-link:hover .w-iconbox-title,.no-touch .w-sharing.type_simple.color_secondary .w-sharing-item:hover .w-sharing-icon,.w-separator.color_secondary,.no-touch .woocommerce .stars:hover a,.no-touch .woocommerce .stars a:hover,.woocommerce .star-rating span:before{color:#2196f3}.l-section.color_secondary,.l-titlebar.color_secondary,.highlight_secondary_bg,.no-touch .w-blog.layout_tiles .w-blog-post-meta-category a:hover,.no-touch .l-section.preview_trendy .w-blog-post-meta-category a:hover,button.w-btn.color_secondary.style_raised,a.w-btn.color_secondary.style_raised,.w-actionbox.color_secondary,.w-iconbox.style_circle.color_secondary .w-iconbox-icon,.w-progbar.color_secondary .w-progbar-bar-h,.w-sharing.type_solid.color_secondary .w-sharing-item,.w-sharing.type_fixed.color_secondary .w-sharing-item,.no-touch .w-toplink.active:hover,.no-touch .tp-leftarrow.tparrows.custom:hover,.no-touch .tp-rightarrow.tparrows.custom:hover,p.demo_store,.woocommerce .onsale,.woocommerce .form-row .chosen-results li.highlighted{background-color:#2196f3}.w-separator.color_secondary{border-color:#2196f3}.highlight_faded,button.w-btn.color_light.style_flat,a.w-btn.color_light.style_flat,.l-main .w-author-url,.l-main .w-blog-post-meta>*,.l-main .w-profile-link.for_logout,.l-main .w-socials.color_desaturated .w-socials-item-link,.l-main .g-tags,.l-main .w-testimonial-author-role,.l-main .widget_tag_cloud,.l-main .widget_product_tag_cloud{color:#9da6a5}.w-btn.style_flat .ripple,.w-btn.color_light.style_raised .ripple,.w-iconbox.style_circle.color_light .ripple,.l-main .w-socials.color_desaturated_inv .w-socials-item-link{background-color:#9da6a5}.color_footer-top,.color_footer-top .wpcf7-form-control-wrap.type_select:after{background-color:#1d2625}.color_footer-top .w-socials-item-link,.color_footer-top .widget_shopping_cart{background-color:#26302f}.color_footer-top,.color_footer-top *,.color_footer-top .w-form-row input:focus,.color_footer-top .w-form-row textarea:focus{border-color:#2d3837}.color_footer-top .w-separator{color:#2d3837}.color_footer-top{color:#7f8a88}.color_footer-top a{color:#b2bfbe}.no-touch .color_footer-top a:hover,.no-touch .color_footer-top a:hover + .w-blog-post-body .w-blog-post-title a,.color_footer-top .w-form-row.focused:before,.color_footer-top .w-form-row.focused>i{color:#2196f3}.color_footer-top .w-form-row.focused .w-form-row-field-bar:before,.color_footer-top .w-form-row.focused .w-form-row-field-bar:after{background-color:#2196f3}.color_footer-top input:focus,.color_footer-top textarea:focus{border-color:#2196f3;box-shadow:0 -1px 0 0 #2196f3 inset}.color_footer-bottom,.color_footer-bottom .wpcf7-form-control-wrap.type_select:after{background-color:#141a19}.color_footer-bottom .w-socials-item-link,.color_footer-bottom .widget_shopping_cart{background-color:#1d2625}.color_footer-bottom,.color_footer-bottom,.color_footer-bottom .w-form-row input:focus,.color_footer-bottom .w-form-row textarea:focus{border-color:#2d3837}.color_footer-bottom .w-separator{color:#2d3837}.color_footer-bottom{color:#7f8a88}.color_footer-bottom a{color:#b2bfbe}.no-touch .color_footer-bottom a:hover,.no-touch .color_footer-bottom a:hover + .w-blog-post-body .w-blog-post-title a,.color_footer-bottom .w-form-row.focused:before,.color_footer-bottom .w-form-row.focused>i{color:#2196f3}.color_footer-bottom .w-form-row.focused .w-form-row-field-bar:before,.color_footer-bottom .w-form-row.focused .w-form-row-field-bar:after{background-color:#2196f3}.color_footer-bottom input:focus,.color_footer-bottom textarea:focus{border-color:#2196f3;box-shadow:0 -1px 0 0 #2196f3 inset}</style><style id="us-header-css" type="text/css">@media (min-width:901px){.hidden_for_default{display:none!important}.l-subheader.at_top{display:none}.l-subheader.at_bottom{display:none}.header_hor .l-subheader.at_top{line-height:40px;height:40px}.header_hor .l-header.sticky .l-subheader.at_top{line-height:0;height:0;overflow:hidden}.header_hor .l-subheader.at_middle{line-height:100px;height:100px}.header_hor .l-header.sticky .l-subheader.at_middle{line-height:50px;height:50px}.header_hor .l-subheader.at_bottom{line-height:50px;height:50px}.header_hor .l-header.sticky .l-subheader.at_bottom{line-height:50px;height:50px}.header_hor .l-header.pos_fixed + .l-titlebar,.header_hor .sidebar_left .l-header.pos_fixed + .l-main,.header_hor .sidebar_right .l-header.pos_fixed + .l-main,.header_hor .sidebar_none .l-header.pos_fixed + .l-main .l-section:first-child,.header_hor .sidebar_none .l-header.pos_fixed + .l-main .l-section-gap:nth-child(2),.header_hor.header_inpos_below .l-header.pos_fixed~.l-main .l-section:nth-child(2),.header_hor .l-header.pos_static.bg_transparent + .l-titlebar,.header_hor .sidebar_left .l-header.pos_static.bg_transparent + .l-main,.header_hor .sidebar_right .l-header.pos_static.bg_transparent + .l-main,.header_hor .sidebar_none .l-header.pos_static.bg_transparent + .l-main .l-section:first-child{padding-top:100px}.header_hor .l-header.pos_static.bg_solid + .l-main .l-section.preview_trendy .w-blog-post-preview{top:-100px}.header_hor.header_inpos_bottom .l-header.pos_fixed~.l-main .l-section:first-child{padding-bottom:100px}.header_hor .l-header.bg_transparent~.l-main .l-section.valign_center:first-child>.l-section-h{top:-50px}.header_hor.header_inpos_bottom .l-header.pos_fixed.bg_transparent~.l-main .l-section.valign_center:first-child>.l-section-h{top:50px}.header_hor .l-header.pos_fixed~.l-main .l-section.height_full:not(:first-child){min-height:calc(100vh - 50px)}.admin-bar.header_hor .l-header.pos_fixed~.l-main .l-section.height_full:not(:first-child){min-height:calc(100vh - 82px)}.header_hor .l-header.pos_fixed~.l-main .l-section.sticky{top:50px}.admin-bar.header_hor .l-header.pos_fixed~.l-main .l-section.sticky{top:82px}.header_hor .sidebar_none .l-header.pos_fixed.sticky + .l-main .l-section.type_sticky:first-child{padding-top:50px}.header_hor.header_inpos_below .l-header.pos_fixed:not(.sticky){position:absolute;top:100%}.header_hor.header_inpos_bottom .l-header.pos_fixed:not(.sticky){position:absolute;bottom:0}.header_inpos_below .l-header.pos_fixed~.l-main .l-section:first-child,.header_inpos_bottom .l-header.pos_fixed~.l-main .l-section:first-child{padding-top:0!important}.header_hor.header_inpos_below .l-header.pos_fixed~.l-main .l-section.height_full:nth-child(2){min-height:100vh}.admin-bar.header_hor.header_inpos_below .l-header.pos_fixed~.l-main .l-section.height_full:nth-child(2){min-height:calc(100vh - 32px)}.header_inpos_bottom .l-header.pos_fixed:not(.sticky) .w-cart-dropdown,.header_inpos_bottom .l-header.pos_fixed:not(.sticky) .w-nav.type_desktop .w-nav-list.level_2{bottom:100%;transform-origin:0 100%}.header_inpos_bottom .l-header.pos_fixed:not(.sticky) .w-nav.type_mobile.m_layout_dropdown .w-nav-list.level_1{top:auto;bottom:100%;box-shadow:0 -3px 3px rgba(0,0,0,.1)}.header_inpos_bottom .l-header.pos_fixed:not(.sticky) .w-nav.type_desktop .w-nav-list.level_3,.header_inpos_bottom .l-header.pos_fixed:not(.sticky) .w-nav.type_desktop .w-nav-list.level_4{top:auto;bottom:0;transform-origin:0 100%}}@media (min-width:601px) and (max-width:900px){.hidden_for_tablets{display:none!important}.l-subheader.at_top{display:none}.l-subheader.at_bottom{display:none}.header_hor .l-subheader.at_top{line-height:36px;height:36px}.header_hor .l-header.sticky .l-subheader.at_top{line-height:36px;height:36px}.header_hor .l-subheader.at_middle{line-height:80px;height:80px}.header_hor .l-header.sticky .l-subheader.at_middle{line-height:50px;height:50px}.header_hor .l-subheader.at_bottom{line-height:50px;height:50px}.header_hor .l-header.sticky .l-subheader.at_bottom{line-height:50px;height:50px}.header_hor .l-header.pos_fixed + .l-titlebar,.header_hor .sidebar_left .l-header.pos_fixed + .l-main,.header_hor .sidebar_right .l-header.pos_fixed + .l-main,.header_hor .sidebar_none .l-header.pos_fixed + .l-main .l-section:first-child,.header_hor .sidebar_none .l-header.pos_fixed + .l-main .l-section-gap:nth-child(2),.header_hor .l-header.pos_static.bg_transparent + .l-titlebar,.header_hor .sidebar_left .l-header.pos_static.bg_transparent + .l-main,.header_hor .sidebar_right .l-header.pos_static.bg_transparent + .l-main,.header_hor .sidebar_none .l-header.pos_static.bg_transparent + .l-main .l-section:first-child{padding-top:80px}.header_hor .l-header.pos_static.bg_solid + .l-main .l-section.preview_trendy .w-blog-post-preview{top:-80px}.header_hor .l-header.pos_fixed~.l-main .l-section.sticky{top:50px}.header_hor .sidebar_none .l-header.pos_fixed.sticky + .l-main .l-section.type_sticky:first-child{padding-top:50px}}@media (max-width:600px){.hidden_for_mobiles{display:none!important}.l-subheader.at_top{display:none}.l-subheader.at_bottom{display:none}.header_hor .l-subheader.at_top{line-height:36px;height:36px}.header_hor .l-header.sticky .l-subheader.at_top{line-height:36px;height:36px}.header_hor .l-subheader.at_middle{line-height:50px;height:50px}.header_hor .l-header.sticky .l-subheader.at_middle{line-height:50px;height:50px}.header_hor .l-subheader.at_bottom{line-height:50px;height:50px}.header_hor .l-header.sticky .l-subheader.at_bottom{line-height:50px;height:50px}.header_hor .l-header.pos_fixed + .l-titlebar,.header_hor .sidebar_left .l-header.pos_fixed + .l-main,.header_hor .sidebar_right .l-header.pos_fixed + .l-main,.header_hor .sidebar_none .l-header.pos_fixed + .l-main .l-section:first-child,.header_hor .sidebar_none .l-header.pos_fixed + .l-main .l-section-gap:nth-child(2),.header_hor .l-header.pos_static.bg_transparent + .l-titlebar,.header_hor .sidebar_left .l-header.pos_static.bg_transparent + .l-main,.header_hor .sidebar_right .l-header.pos_static.bg_transparent + .l-main,.header_hor .sidebar_none .l-header.pos_static.bg_transparent + .l-main .l-section:first-child{padding-top:50px}.header_hor .l-header.pos_static.bg_solid + .l-main .l-section.preview_trendy .w-blog-post-preview{top:-50px}.header_hor .l-header.pos_fixed~.l-main .l-section.sticky{top:50px}.header_hor .sidebar_none .l-header.pos_fixed.sticky + .l-main .l-section.type_sticky:first-child{padding-top:50px}}@media (min-width:901px){.ush_image_2{height:50px}.l-header.sticky .ush_image_2{height:35px}}@media (min-width:601px) and (max-width:900px){.ush_image_2{height:30px}.l-header.sticky .ush_image_2{height:30px}}@media (max-width:600px){.ush_image_2{height:20px}.l-header.sticky .ush_image_2{height:20px}}.header_hor .ush_menu_1.type_desktop .w-nav-list.level_1>.menu-item>a{padding:0 20px}.header_ver .ush_menu_1.type_desktop{line-height:40px}.ush_menu_1.type_desktop .btn.menu-item.level_1>.w-nav-anchor{margin:10px}.ush_menu_1.type_desktop .w-nav-list>.menu-item.level_1{font-size:16px}.ush_menu_1.type_desktop .w-nav-list>.menu-item:not(.level_1){font-size:15px}.ush_menu_1.type_mobile .w-nav-anchor.level_1{font-size:15px}.ush_menu_1.type_mobile .w-nav-anchor:not(.level_1){font-size:14px}@media (min-width:901px){.ush_menu_1 .w-nav-icon{font-size:20px}}@media (min-width:601px) and (max-width:900px){.ush_menu_1 .w-nav-icon{font-size:20px}}@media (max-width:600px){.ush_menu_1 .w-nav-icon{font-size:20px}}@media screen and (max-width:899px){.ush_menu_1 .w-nav-list{display:none}.ush_menu_1 .w-nav-control{display:block}}@media (min-width:901px){.ush_search_1.layout_simple{max-width:240px}.ush_search_1.layout_modern.active{width:240px}.ush_search_1 .w-search-open,.ush_search_1 .w-search-close,.ush_search_1 .w-search-form-btn{font-size:17px}}@media (min-width:601px) and (max-width:900px){.ush_search_1.layout_simple{max-width:200px}.ush_search_1.layout_modern.active{width:200px}.ush_search_1 .w-search-open,.ush_search_1 .w-search-close,.ush_search_1 .w-search-form-btn{font-size:17px}}@media (max-width:600px){.ush_search_1 .w-search-open,.ush_search_1 .w-search-close,.ush_search_1 .w-search-form-btn{font-size:17px}}</style><style id="us-custom-css" type="text/css">@media only screen and (max-width:1000px){.l-footer .l-subfooter.at_top,.l-sidebar{display:none}.color_footer-top{display:none}.l-content{width:100%}}.w-blog-post a.w-btn.w-blog-post-more{background-color:#2196F3;color:#fff}.l-section.for_sharing{display:none}.l-section.for_sharing .l-section-h{display:none}.l-section.for_sharing .w-sharing-item{display:none}.l-section.for_sharing .w-sharing-item:last-child{display:none}@media only screen and (max-width:767px){.l-section.for_sharing{display:none}.l-section.for_sharing .w-sharing-item{display:none}.l-section.for_sharing .w-sharing-item:last-child{display:none}}.w-toplink{display:none!important}.l2c-slider{height:640px;width:360px;margin:0 auto}.mfp-title{display:none}.essb_links{margin:.25em 0}</style><script type="text/javascript" async="" src="./config_files/embed.js.download"></script><script async="" type="text/javascript" src="./config_files/count.js.download"></script><script type="text/javascript" async="" src="https://cdn1.developermedia.com/a.min.js"></script><script src="./config_files/count-data.js.download"></script><link rel="preload" as="style" href="https://c.disquscdn.com/next/embed/styles/lounge.2d848eddee1b8c12749b72a04b2b33dc.css"><link rel="preload" as="script" href="https://c.disquscdn.com/next/embed/common.bundle.845ead53749f15d0bd8a5ee344c8f06e.js"><link rel="preload" as="script" href="https://c.disquscdn.com/next/embed/lounge.bundle.8241ae5fc761eb94635acdc63f5fd29f.js"><link rel="preload" as="script" href="https://disqus.com/next/config.js"><style type="text/css">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_loader{background-color:#f6f7f9;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100%}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100%;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100%;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{width:auto;height:auto;min-height:initial;min-width:initial;background:none}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{color:#fff;display:block;padding-top:20px;clear:both;font-size:18px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;bottom:0;left:0;right:0;top:0;width:100%;min-height:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #29487d;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f6f7f9;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-repeat:no-repeat;background-position:50% 50%;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50%;z-index:4}
.fb_customer_chat_bounce_in{animation-duration:250ms;animation-name:fb_bounce_in}.fb_customer_chat_bounce_out{animation-duration:250ms;animation-name:fb_fade_out}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}.fb_mobile_overlay_active{height:100%;overflow:hidden;position:fixed;width:100%}@keyframes fb_fade_out{from{opacity:1}to{opacity:0}}@keyframes fb_bounce_in{0%{opacity:0;transform:scale(.8, .8);transform-origin:100% 100%}10%{opacity:.1}20%{opacity:.2}30%{opacity:.3}40%{opacity:.4}50%{opacity:.5}60%{opacity:.6}70%{opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale(1, 1)}}</style><script src="./config_files/alfie.f51946af45e0b561c60f768335c9eb79.js.download" async="" charset="UTF-8"></script><script type="text/javascript" async="" src="https://cdn2.developermedia.com/a.min.js"></script></head><body class="post-template-default single single-post postid-4642 single-format-standard l-body Zephyr_4.10.2 HB_2.0.6 header_hor header_inpos_top btn_hov_ wpb-js-composer js-comp-ver-5.4.5 vc_responsive disable_effects state_tablets" itemscope="" itemtype="https://schema.org/WebPage" data-gr-c-s-loaded="true"><div class="l-canvas sidebar_right type_wide"><header class="l-header pos_fixed bg_solid shadow_thin sticky" itemscope="" itemtype="https://schema.org/WPHeader"><div class="l-subheader at_middle"><div class="l-subheader-h"><div class="l-subheader-cell at_left"><div class="w-img ush_image_2"><a class="w-img-h" href="https://www.learn2crack.com/"><img class="for_default" src="./config_files/logo.png" width="900" height="300" alt="Learn2Crack"></a></div></div><div class="l-subheader-cell at_center"></div><div class="l-subheader-cell at_right"><nav class="w-nav dropdown_mdesign m_align_left m_layout_dropdown ush_menu_1 type_mobile" itemscope="" itemtype="https://schema.org/SiteNavigationElement"><a class="w-nav-control" href="javascript:void(0);" aria-label="Menu"><div class="w-nav-icon"><i></i></div><span>Menu</span></a><ul class="w-nav-list level_1" style="max-height: 543px;"><li id="menu-item-4939" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_1 menu-item-4939"><a class="w-nav-anchor level_1" href="https://www.learn2crack.com/"><span class="w-nav-title">HOME</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-4940" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-has-children w-nav-item level_1 menu-item-4940 togglable"><a class="w-nav-anchor level_1" href="https://www.learn2crack.com/category/androiddev"><span class="w-nav-title">ANDROID DEVELOPMENT</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a><ul class="w-nav-list level_2"><li id="menu-item-5472" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5472"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/data-binding"><span class="w-nav-title">Data Binding</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-5471" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5471"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/maps"><span class="w-nav-title">Google Maps</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-5467" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5467"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/login-register"><span class="w-nav-title">Login Registration</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-5470" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5470"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/material-design"><span class="w-nav-title">Material Design</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-5464" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5464"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/nfc"><span class="w-nav-title">Nfc</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-5465" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5465"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/opencv"><span class="w-nav-title">OpenCV</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-5468" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5468"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/picasso"><span class="w-nav-title">Picasso</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-5466" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5466"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/recycler-view"><span class="w-nav-title">RecyclerView</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-5463" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5463"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/retrofit"><span class="w-nav-title">Retrofit</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-5469" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_2 menu-item-5469"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/tag/rxjava"><span class="w-nav-title">RxJava</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li></ul></li><li id="menu-item-4941" class="menu-item menu-item-type-taxonomy menu-item-object-category w-nav-item level_1 menu-item-4941"><a class="w-nav-anchor level_1" href="https://www.learn2crack.com/category/android"><span class="w-nav-title">ANDROID</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-4956" class="menu-item menu-item-type-taxonomy menu-item-object-category w-nav-item level_1 menu-item-4956"><a class="w-nav-anchor level_1" href="https://www.learn2crack.com/category/android-studio"><span class="w-nav-title">ANDROID STUDIO</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-4942" class="menu-item menu-item-type-taxonomy menu-item-object-category w-nav-item level_1 menu-item-4942"><a class="w-nav-anchor level_1" href="https://www.learn2crack.com/category/ubuntu"><span class="w-nav-title">UBUNTU</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-4943" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children w-nav-item level_1 menu-item-4943 togglable"><a class="w-nav-anchor level_1" href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#"><span class="w-nav-title">MISC</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a><ul class="w-nav-list level_2"><li id="menu-item-4944" class="menu-item menu-item-type-taxonomy menu-item-object-category w-nav-item level_2 menu-item-4944"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/category/raspberrypi"><span class="w-nav-title">Raspberry Pi</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><li id="menu-item-4945" class="menu-item menu-item-type-taxonomy menu-item-object-category w-nav-item level_2 menu-item-4945"><a class="w-nav-anchor level_2" href="https://www.learn2crack.com/category/wordpress"><span class="w-nav-title">WordPress</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li></ul></li><li id="menu-item-4946" class="menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_1 menu-item-4946"><a class="w-nav-anchor level_1" href="https://www.youtube.com/user/learn2crackofficial/videos"><span class="w-nav-title">VIDEOS</span><span class="w-nav-arrow"></span><span class="ripple-container"></span></a></li><div class="w-nav-close"></div></ul><div class="w-nav-options hidden" onclick="return {&quot;mobileWidth&quot;:900,&quot;mobileBehavior&quot;:1}"></div></nav><div class="w-search layout_fullscreen ush_search_1"><div class="w-search-background"></div><div class="w-search-form"><form class="w-search-form-h" autocomplete="off" action="https://www.learn2crack.com/" method="get"><div class="w-search-form-field"><input type="text" name="s" id="us_form_search_s" placeholder="Search" aria-label="Search"><span class="w-form-row-field-bar"></span></div><div class="w-search-close"></div></form></div><a class="w-search-open" href="javascript:void(0);" aria-label="Search"></a></div></div></div></div><div class="l-subheader for_hidden hidden"></div></header><div class="l-titlebar size_small color_alternate"><div class="l-titlebar-h"><div class="l-titlebar-content"><h1 itemprop="headline">Learn2Crack</h1></div><div class="g-breadcrumbs" xmlns:v="http://rdf.data-vocabulary.org/#"><span typeof="v:Breadcrumb"><a class="g-breadcrumbs-item" rel="v:url" property="v:title" href="https://www.learn2crack.com/">Home</a></span> <span class="g-breadcrumbs-separator"></span> <span typeof="v:Breadcrumb"><a rel="v:url" property="v:title" href="https://www.learn2crack.com/category/androiddev">Android Development</a></span> <span class="g-breadcrumbs-separator"></span> <span class="g-breadcrumbs-item">Android User Registration and Login with Node.js and MongoDB – Server #1</span></div></div></div><div class="l-main"><div class="l-main-h i-cf"><main class="l-content" itemprop="mainContentOfPage"><article class="l-section for_blogpost preview_basic post-4642 post type-post status-publish format-standard has-post-thumbnail hentry category-androiddev tag-es6 tag-login-register tag-login-register-authentication tag-mongo tag-nodejs"><div class="l-section-h i-cf"><div class="w-blog"><div class="w-blog-post-preview"> <img width="1024" height="576" src="./config_files/node-cover-server-1024x576.png" class="attachment-large size-large" alt="android login registration authentication" srcset="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server-1024x576.png 1024w, https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server-300x169.png 300w, https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server-768x432.png 768w, https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server-600x338.png 600w" sizes="(max-width: 1024px) 100vw, 1024px"></div><div class="w-blog-post-body"><h1 class="w-blog-post-title entry-title" itemprop="headline">Android User Registration and Login with Node.js and MongoDB – Server #1</h1><div class="w-blog-post-meta"> <time class="w-blog-post-meta-date date updated" itemprop="datePublished" datetime="2016-09-24 17:53:59">September 24, 2016</time><span class="w-blog-post-meta-author vcard author"><a href="https://www.learn2crack.com/author/rajamalw" class="fn">Raj Amal</a></span><span class="w-blog-post-meta-category"><a href="https://www.learn2crack.com/category/androiddev" rel="category tag">Android Development</a></span><span class="w-blog-post-meta-comments"><a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#disqus_thread" data-disqus-identifier="4642 https://www.learn2crack.com/?p=4642">26 Comments</a></span></div></div></div></div></article><section class="l-section"><div class="l-section-h i-cf" itemprop="text"><div class="w-video ratio_16x9"><div class="w-video-h"><iframe width="420" height="315" src="./config_files/5b0wWZuTazA.html" allowfullscreen=""></iframe></div></div><div style="float:none;margin:10px 0 10px 0;text-align:center;"> <script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8742978029010463" data-ad-slot="1236380435" data-ad-format="auto" hidden="" rufp73z=""></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> </div><div class="wpb_text_column "><div class="wpb_wrapper"><p><br>In this series of tutorials we will develop a complete login, registration and authentication system with <strong>Node.js</strong> and <strong>MongoDB</strong> database. We already have a old tutorial published two years back. This will be a updated one with latest code.</p><p>Some changes and features when compared to the old one,</p><p>-&gt; Use <strong>JSON Web Token</strong> for session handling.</p><p>-&gt; Passwords are hashed using <strong>Bcrypt</strong>&nbsp;hashing algorithm.</p><p>-&gt; Basic Authentication for login authentication.</p><p>-&gt; Use <strong>ES6</strong> syntax and <strong>Promises</strong> instead of callbacks.</p><p>The ES6 Features we use are,</p><p>-&gt; Promises</p><p>-&gt; Arrow functions</p><p>-&gt; <strong>const</strong> and <strong>let</strong> identifiers instead of var</p><p><strong>Note</strong> :</p><p>ES6 is the latest revision of JavaScript which was released in 2015.</p></div></div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Prerequisites</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>-&gt; Setup <strong>Node.js</strong> run time and <strong>npm</strong> in your Operating System (Windows, Linux or OS X). Download Node.js from the link given below.</p><p><a href="https://nodejs.org/" target="_blank" rel="nofollow">https://nodejs.org</a></p><p>-&gt; Download and install <strong>MongoDB</strong> server in your Operating System (Windows, Linux or OS X).</p><p><a href="https://www.mongodb.com/download-center" rel="nofollow" target="_blank">https://www.mongodb.com/download-center</a></p><p>-&gt; Download and install <strong>Robomongo</strong>, a GUI client used to create and view databases.</p><p><a href="https://robomongo.org/" rel="nofollow" target="_blank">https://robomongo.org/</a></p></div></div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Creating MongoDB Database</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>Using <strong>Robomongo</strong> create a new <strong>MongoDB</strong> database named <strong>node-login</strong>.</p><p>Then right click on the created database and select <strong>Open Shell</strong>.</p><p>Type the following code in the shell,</p><pre data-bit="true,false,false,false,,pos"><code class="javascript  hljs " style="min-width: 85%; white-space: pre;">db.getCollection(<span class="hljs-string">'users'</span>).createIndex( { <span class="hljs-string">"email"</span>: <span class="hljs-number">1</span> }, { unique: <span class="hljs-literal">true</span> } )</code></pre><p>The above code makes the email field as <strong>unique</strong>, similar to primary key in Relational database such as MySQL.</p></div></div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Download Complete Project</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>You can download the complete project as zip or fork from our Github repository.<br></p><div class="" style="" data-lock-id="onpLock484801"><div class="w-btn-wrapper align_center"><a class="w-btn style_raised color_secondary icon_atleft" href="https://github.com/Learn2Crack/android-login-registration-authentication-server/archive/master.zip" target="_blank" style="font-size:19px;"><i class="fa fa-github"></i><span class="w-btn-label">Download (Github)</span><span class="ripple-container"></span></a></div><div class="w-btn-wrapper align_center"><a class="w-btn style_raised color_secondary icon_atleft" href="https://bit.ly/2duBItO" target="_blank" style="font-size:19px;"><i class="fa fa-cloud-download"></i><span class="w-btn-label">Download</span><span class="ripple-container"></span></a></div><br><div class="w-btn-wrapper align_center"><a class="w-btn style_raised color_secondary icon_atleft" href="https://github.com/Learn2Crack/android-login-registration-authentication-server" target="_blank" style="font-size:19px;"><i class="fa fa-code-fork"></i><span class="w-btn-label">Fork</span><span class="ripple-container"></span></a></div></div></div></div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Creating Project</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>Create a new directory named <strong>node-login</strong> and switch to that directory. Create a new&nbsp;<strong>package.json</strong> file to define all the required Node dependencies. The following dependencies are required.</p></div></div><h4><div class="w-message with_icon color_custom" style="background-color:#607d8b;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-file-code-o"></i></div><div class="w-message-body"><p>package.json</p></div></div></h4><div class="wpb_text_column "><div class="wpb_wrapper"><pre data-bit="true,false,false,false,,pos" data-lines="1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
"><code class="json  hljs " style="min-width: 85%; white-space: pre;">{
  "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"node-login"</span></span>,
  "<span class="hljs-attribute">version</span>": <span class="hljs-value"><span class="hljs-string">"1.0.0"</span></span>,
  "<span class="hljs-attribute">main</span>": <span class="hljs-value"><span class="hljs-string">"app.js"</span></span>,
  "<span class="hljs-attribute">dependencies</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">basic-auth</span>": <span class="hljs-value"><span class="hljs-string">"^1.0.4"</span></span>,
    "<span class="hljs-attribute">bcryptjs</span>": <span class="hljs-value"><span class="hljs-string">"^2.3.0"</span></span>,
    "<span class="hljs-attribute">body-parser</span>": <span class="hljs-value"><span class="hljs-string">"^1.15.2"</span></span>,
    "<span class="hljs-attribute">express</span>": <span class="hljs-value"><span class="hljs-string">"^4.14.0"</span></span>,
    "<span class="hljs-attribute">jsonwebtoken</span>": <span class="hljs-value"><span class="hljs-string">"^7.1.9"</span></span>,
    "<span class="hljs-attribute">mongoose</span>": <span class="hljs-value"><span class="hljs-string">"^4.6.0"</span></span>,
    "<span class="hljs-attribute">morgan</span>": <span class="hljs-value"><span class="hljs-string">"^1.7.0"</span></span>,
    "<span class="hljs-attribute">nodemailer</span>": <span class="hljs-value"><span class="hljs-string">"^2.6.0"</span></span>,
    "<span class="hljs-attribute">randomstring</span>": <span class="hljs-value"><span class="hljs-string">"^1.1.5"</span>
  </span>}
</span>}</code></pre></div></div><div class="wpb_text_column "><div class="wpb_wrapper"><p>Lets look at what these modules does,</p><p><strong>basic-auth</strong></p><p>This is used for login authentication. The email and password is sent by client as a <strong>Base64</strong> encoded string in header which is decoded by this module.</p><p><strong>bcyptjs</strong></p><p>Use to create and verify password hash using <strong>bcrpyt</strong> hasing algorithm.</p><p><strong>body-parser</strong></p><p>This is used to parse the JSON body in each request.</p><p><strong>express</strong></p><p>This is the complete framework used to create <strong>RESTful</strong> web services.</p><p><strong>jsonwebtoken</strong></p><p>This is used to create <strong>JSON Web Token</strong> which is used for session handling.</p><p><strong>mongoose</strong></p><p>This module is used to connect to <strong>MongoDB</strong> database.</p><p><strong>morgan</strong></p><p>This module is used to print logs in terminal for each <strong>http</strong> request.</p><p><strong>nodemailer</strong></p><p>This module is used to sent&nbsp;mail using SMTP for forgot password process.</p><p><strong>randomstring</strong></p><p>This module is used to generate random string which we use as a token for reset password.</p></div></div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Project Structure</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>The image given below shows the exact project structure.</p><p><a ref="magnificPopup" href="./config_files/sublime.png"><img class="aligncenter size-full wp-image-4648" src="./config_files/sublime.png" alt="sublime" width="188" height="293"></a></p></div></div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Creating config.json</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>Create a new <strong>config.json</strong> file. This file will be present in <strong>config</strong> directory. This file has some predefined constants such as email id, password and secret for creating <strong>JSON Web Token</strong>. The email id and password defined in this file will be used to send mail using SMTP. I have tested with Gmail.</p></div></div><h4><div class="w-message with_icon color_custom" style="background-color:#607d8b;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-file-code-o"></i></div><div class="w-message-body"><p>config.json</p></div></div></h4><div class="wpb_text_column "><div class="wpb_wrapper"><pre data-bit="true,false,false,false,,pos" data-lines="1
2
3
4
5
6
"><code class="javascript  hljs " style="min-width: 85%; white-space: pre;">{ 
 <span class="hljs-string">"name"</span> : <span class="hljs-string">"Your Name"</span>,
 <span class="hljs-string">"email"</span> : <span class="hljs-string">"YourEmail@gmail.com"</span>,
 <span class="hljs-string">"password"</span> : <span class="hljs-string">"Your Email Password"</span>,
 <span class="hljs-string">"secret"</span> : <span class="hljs-string">"Learn2Crack"</span>
}</code></pre></div></div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Creating MongoDB model</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>Create a <strong>user.js</strong> file in which we define our MongoDB collection schema. Instead of using var, we are going to use ES6 <strong>const</strong> and <strong>let</strong> identifier for assigning variables. The const is immutable where let is mutable also both are block scoped when compared to var.</p></div></div><h4><div class="w-message with_icon color_custom" style="background-color:#607d8b;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-file-code-o"></i></div><div class="w-message-body"><p>user.js</p></div></div></h4><div class="wpb_text_column "><div class="wpb_wrapper"><pre data-bit="true,false,false,false,,pos" data-lines="1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
"><code class="javascript  hljs " style="min-width: 85%; white-space: pre;"><span class="hljs-pi">'use strict'</span>;

<span class="hljs-keyword">const</span> mongoose = <span class="hljs-built_in">require</span>(<span class="hljs-string">'mongoose'</span>);

<span class="hljs-keyword">const</span> Schema = mongoose.Schema;

<span class="hljs-keyword">const</span> userSchema = mongoose.Schema({ 

	name 			: <span class="hljs-built_in">String</span>,
	email			: <span class="hljs-built_in">String</span>, 
	hashed_password	: <span class="hljs-built_in">String</span>,
	created_at		: <span class="hljs-built_in">String</span>,
	temp_password	: <span class="hljs-built_in">String</span>,
	temp_password_time: <span class="hljs-built_in">String</span>

});

mongoose.Promise = global.Promise;
mongoose.connect(<span class="hljs-string">'mongodb://localhost:27017/node-login'</span>);

module.exports = mongoose.model(<span class="hljs-string">'user'</span>, userSchema);</code></pre></div></div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Creating functions</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>We have 4 functions files <strong>register.js</strong>, <strong>login.js</strong>, <strong>profile.js</strong> and <strong>password.js</strong> which has functions defined for the subsequent operation.</p><p>The <strong>register.js</strong> file consists of register function which saves data to MongoDB database. Instead of using the default Javascript callbacks we are using the new <strong>ES6 Promises</strong>. When creating a Promise we call <strong>resolve()</strong> for success operation and <strong>reject()</strong> for failure operation. Similarly when calling a promise <strong>then()</strong> is called for success and <strong>catch()</strong> is called for failure. We also replaced function definition with <strong>ES6 Arrow functions</strong>.</p><p>The login function is defined in <strong>login.js</strong> which authenticates the user and returns a JSON Web Token or else it throws a error.</p><p>Similarly <strong>profile.js</strong> has fucnction which returns users profile.</p><p>Finally the <strong>password.js</strong> file has definition for change password and rest password functionalities. The rest password is a two step process. The first step is to generate a random token and send to user’s email using <strong>nodemailer</strong>. The second step is to verify the token and change the password to a new one.</p></div></div><h4><div class="w-message with_icon color_custom" style="background-color:#607d8b;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-file-code-o"></i></div><div class="w-message-body"><p>register.js</p></div></div></h4><div class="wpb_text_column "><div class="wpb_wrapper"><pre data-bit="true,false,false,false,,pos" data-lines="1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
"><code class="javascript  hljs " style="min-width: 85%; white-space: pre;"><span class="hljs-pi">'use strict'</span>;

<span class="hljs-keyword">const</span> user = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../models/user'</span>);
<span class="hljs-keyword">const</span> bcrypt = <span class="hljs-built_in">require</span>(<span class="hljs-string">'bcryptjs'</span>);

exports.registerUser = (name, email, password) =&gt; 

	<span class="hljs-keyword">new</span> Promise((resolve,reject) =&gt; {

	    <span class="hljs-keyword">const</span> salt = bcrypt.genSaltSync(<span class="hljs-number">10</span>);
		<span class="hljs-keyword">const</span> hash = bcrypt.hashSync(password, salt);

		<span class="hljs-keyword">const</span> newUser = <span class="hljs-keyword">new</span> user({

			name: name,
			email: email,
			hashed_password: hash,
			created_at: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()
		});

		newUser.save()

		.then(() =&gt; resolve({ status: <span class="hljs-number">201</span>, message: <span class="hljs-string">'User Registered Sucessfully !'</span> }))

		.catch(err =&gt; {

			<span class="hljs-keyword">if</span> (err.code == <span class="hljs-number">11000</span>) {

				reject({ status: <span class="hljs-number">409</span>, message: <span class="hljs-string">'User Already Registered !'</span> });

			} <span class="hljs-keyword">else</span> {

				reject({ status: <span class="hljs-number">500</span>, message: <span class="hljs-string">'Internal Server Error !'</span> });
			}
		});
	});</code></pre></div></div><h4><div class="w-message with_icon color_custom" style="background-color:#607d8b;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-file-code-o"></i></div><div class="w-message-body"><p>login.js</p></div></div></h4><div class="wpb_text_column "><div class="wpb_wrapper"><pre data-bit="true,false,false,false,,pos" data-lines="1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
"><code class="javascript  hljs " style="min-width: 85%; white-space: pre;"><span class="hljs-pi">'use strict'</span>;

<span class="hljs-keyword">const</span> user = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../models/user'</span>);
<span class="hljs-keyword">const</span> bcrypt = <span class="hljs-built_in">require</span>(<span class="hljs-string">'bcryptjs'</span>);

exports.loginUser = (email, password) =&gt; 

	<span class="hljs-keyword">new</span> Promise((resolve,reject) =&gt; {

		user.find({email: email})

		.then(users =&gt; {

			<span class="hljs-keyword">if</span> (users.length == <span class="hljs-number">0</span>) {

				reject({ status: <span class="hljs-number">404</span>, message: <span class="hljs-string">'User Not Found !'</span> });

			} <span class="hljs-keyword">else</span> {

				<span class="hljs-keyword">return</span> users[<span class="hljs-number">0</span>];

			}
		})

		.then(user =&gt; {

			<span class="hljs-keyword">const</span> hashed_password = user.hashed_password;

			<span class="hljs-keyword">if</span> (bcrypt.compareSync(password, hashed_password)) {

				resolve({ status: <span class="hljs-number">200</span>, message: email });

			} <span class="hljs-keyword">else</span> {

				reject({ status: <span class="hljs-number">401</span>, message: <span class="hljs-string">'Invalid Credentials !'</span> });
			}
		})

		.catch(err =&gt; reject({ status: <span class="hljs-number">500</span>, message: <span class="hljs-string">'Internal Server Error !'</span> }));

	});</code></pre></div></div><h4><div class="w-message with_icon color_custom" style="background-color:#607d8b;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-file-code-o"></i></div><div class="w-message-body"><p>profile.js</p></div></div></h4><div class="wpb_text_column "><div class="wpb_wrapper"><pre data-bit="true,false,false,false,,pos" data-lines="1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
"><code class="javascript  hljs " style="min-width: 85%; white-space: pre;"><span class="hljs-pi">'use strict'</span>;

<span class="hljs-keyword">const</span> user = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../models/user'</span>);

exports.getProfile = email =&gt; 

	<span class="hljs-keyword">new</span> Promise((resolve,reject) =&gt; {

		user.find({ email: email }, { name: <span class="hljs-number">1</span>, email: <span class="hljs-number">1</span>, created_at: <span class="hljs-number">1</span>, _id: <span class="hljs-number">0</span> })

		.then(users =&gt; resolve(users[<span class="hljs-number">0</span>]))

		.catch(err =&gt; reject({ status: <span class="hljs-number">500</span>, message: <span class="hljs-string">'Internal Server Error !'</span> }))

	});</code></pre></div></div><h4><div class="w-message with_icon color_custom" style="background-color:#607d8b;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-file-code-o"></i></div><div class="w-message-body"><p>password.js</p></div></div></h4><div class="wpb_text_column "><div class="wpb_wrapper"><pre data-bit="true,false,false,false,,pos" data-lines="1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
"><code class="javascript  hljs " style="min-width: 85%; white-space: pre;"><span class="hljs-pi">'use strict'</span>;

<span class="hljs-keyword">const</span> user = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../models/user'</span>);
<span class="hljs-keyword">const</span> bcrypt = <span class="hljs-built_in">require</span>(<span class="hljs-string">'bcryptjs'</span>);
<span class="hljs-keyword">const</span> nodemailer = <span class="hljs-built_in">require</span>(<span class="hljs-string">'nodemailer'</span>);
<span class="hljs-keyword">const</span> randomstring = <span class="hljs-built_in">require</span>(<span class="hljs-string">"randomstring"</span>);
<span class="hljs-keyword">const</span> config = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../config/config.json'</span>);

exports.changePassword = (email, password, newPassword) =&gt; 

	<span class="hljs-keyword">new</span> Promise((resolve, reject) =&gt; {

		user.find({ email: email })

		.then(users =&gt; {

			<span class="hljs-keyword">let</span> user = users[<span class="hljs-number">0</span>];
			<span class="hljs-keyword">const</span> hashed_password = user.hashed_password;

			<span class="hljs-keyword">if</span> (bcrypt.compareSync(password, hashed_password)) {

				<span class="hljs-keyword">const</span> salt = bcrypt.genSaltSync(<span class="hljs-number">10</span>);
				<span class="hljs-keyword">const</span> hash = bcrypt.hashSync(newPassword, salt);

				user.hashed_password = hash;

				<span class="hljs-keyword">return</span> user.save();

			} <span class="hljs-keyword">else</span> {

				reject({ status: <span class="hljs-number">401</span>, message: <span class="hljs-string">'Invalid Old Password !'</span> });
			}
		})

		.then(user =&gt; resolve({ status: <span class="hljs-number">200</span>, message: <span class="hljs-string">'Password Updated Sucessfully !'</span> }))

		.catch(err =&gt; reject({ status: <span class="hljs-number">500</span>, message: <span class="hljs-string">'Internal Server Error !'</span> }));

	});

exports.resetPasswordInit = email =&gt;

	<span class="hljs-keyword">new</span> Promise((resolve, reject) =&gt; {

		<span class="hljs-keyword">const</span> random = randomstring.generate(<span class="hljs-number">8</span>);

		user.find({ email: email })

		.then(users =&gt; {

			<span class="hljs-keyword">if</span> (users.length == <span class="hljs-number">0</span>) {

				reject({ status: <span class="hljs-number">404</span>, message: <span class="hljs-string">'User Not Found !'</span> });

			} <span class="hljs-keyword">else</span> {

				<span class="hljs-keyword">let</span> user = users[<span class="hljs-number">0</span>];

				<span class="hljs-keyword">const</span> salt = bcrypt.genSaltSync(<span class="hljs-number">10</span>);
				<span class="hljs-keyword">const</span> hash = bcrypt.hashSync(random, salt);

				user.temp_password = hash;
				user.temp_password_time = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();

				<span class="hljs-keyword">return</span> user.save();
			}
		})

		.then(user =&gt; {

			<span class="hljs-keyword">const</span> transporter = nodemailer.createTransport(`smtps:<span class="hljs-comment">//${config.email}:${config.password}@smtp.gmail.com`);</span>

			<span class="hljs-keyword">const</span> mailOptions = {

    			from: `<span class="hljs-string">"${config.name}"</span> &lt;${config.email}&gt;`,
    			to: email,  
    			subject: <span class="hljs-string">'Reset Password Request '</span>, 
    			html: `Hello ${user.name},

    			&nbsp;&nbsp;&nbsp;&nbsp; Your reset password token is &lt;b&gt;${random}&lt;<span class="hljs-regexp">/b&gt;. 
    			If you are viewing this mail from a Android Device click this &lt;a href="http:/</span><span class="hljs-regexp">/learn2crack/</span>${random}<span class="hljs-string">"&gt;link&lt;/a&gt;. 
    			The token is valid for only 2 minutes.

    			Thanks,
    			Learn2Crack.`

			};

			return transporter.sendMail(mailOptions);

		})

		.then(info =&gt; {

			console.log(info);
			resolve({ status: 200, message: 'Check mail for instructions' })
		})

		.catch(err =&gt; {

			console.log(err);
			reject({ status: 500, message: 'Internal Server Error !' });

		});
	});

exports.resetPasswordFinish = (email, token, password) =&gt; 

	new Promise((resolve, reject) =&gt; {

		user.find({ email: email })

		.then(users =&gt; {

			let user = users[0];

			const diff = new Date() - new Date(user.temp_password_time); 
			const seconds = Math.floor(diff / 1000);
			console.log(`Seconds : ${seconds}`);

			if (seconds &lt; 120) { return user; } else { reject({ status: 401, message: 'Time Out ! Try again' }); } }) .then(user =&gt; {

			if (bcrypt.compareSync(token, user.temp_password)) {

				const salt = bcrypt.genSaltSync(10);
				const hash = bcrypt.hashSync(password, salt);
				user.hashed_password = hash;
				user.temp_password = undefined;
				user.temp_password_time = undefined;

				return user.save();

			} else {

				reject({ status: 401, message: 'Invalid Token !' });
			}
		})

		.then(user =&gt; resolve({ status: 200, message: 'Password Changed Successfully !' }))

		.catch(err =&gt; reject({ status: 500, message: 'Internal Server Error !' }));

	});</span></code></pre></div></div><div style="float:none;margin:10px 0 10px 0;text-align:center;"> <script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8742978029010463" data-ad-slot="8620046432" data-ad-format="auto" hidden="" rufp73z=""></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> </div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Defining routes</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>All the <strong>RESTful</strong> endpoints are defined in <strong>routes.js</strong> file using the new Express 4 router. The default root endpoint returns a welcome message.</p><p>The <strong>/authenticate</strong> endpoint is used for login operation. The POST request in <strong>/users</strong> endpoint is used to add a new user.</p><p>The GET request in <strong>/users/email</strong> endpoint is used to get the user profile details. The generated JSON Web Token should be present in the header for the field <strong>x-access-token</strong>.</p><p>Similarly PUT operation is used to change the password using old and new password. Also <strong>x-access-token</strong> should be present in header for this request.</p><p>Finally POST request in <strong>/users/email/password</strong> is used for reset password operation. Sending a empty body will trigger the operation which sends a token in email. This token expires in 2 minutes. Sending body with token and new password resets the password.</p></div></div><h4><div class="w-message with_icon color_custom" style="background-color:#607d8b;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-file-code-o"></i></div><div class="w-message-body"><p>routes.js</p></div></div></h4><div class="wpb_text_column "><div class="wpb_wrapper"><pre data-bit="true,false,false,false,,pos" data-lines="1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
"><code class="javascript  hljs " style="min-width: 85%; white-space: pre;"><span class="hljs-pi">'use strict'</span>;

<span class="hljs-keyword">const</span> auth = <span class="hljs-built_in">require</span>(<span class="hljs-string">'basic-auth'</span>);
<span class="hljs-keyword">const</span> jwt = <span class="hljs-built_in">require</span>(<span class="hljs-string">'jsonwebtoken'</span>);

<span class="hljs-keyword">const</span> register = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./functions/register'</span>);
<span class="hljs-keyword">const</span> login = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./functions/login'</span>);
<span class="hljs-keyword">const</span> profile = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./functions/profile'</span>);
<span class="hljs-keyword">const</span> password = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./functions/password'</span>);
<span class="hljs-keyword">const</span> config = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./config/config.json'</span>);

module.exports = router =&gt; {

	router.get(<span class="hljs-string">'/'</span>, (req, res) =&gt; res.end(<span class="hljs-string">'Welcome to Learn2Crack !'</span>));

	router.post(<span class="hljs-string">'/authenticate'</span>, (req, res) =&gt; {

		<span class="hljs-keyword">const</span> credentials = auth(req);

		<span class="hljs-keyword">if</span> (!credentials) {

			res.status(<span class="hljs-number">400</span>).json({ message: <span class="hljs-string">'Invalid Request !'</span> });

		} <span class="hljs-keyword">else</span> {

			login.loginUser(credentials.name, credentials.pass)

			.then(result =&gt; {

				<span class="hljs-keyword">const</span> token = jwt.sign(result, config.secret, { expiresIn: <span class="hljs-number">1440</span> });

				res.status(result.status).json({ message: result.message, token: token });

			})

			.catch(err =&gt; res.status(err.status).json({ message: err.message }));
		}
	});

	router.post(<span class="hljs-string">'/users'</span>, (req, res) =&gt; {

		<span class="hljs-keyword">const</span> name = req.body.name;
		<span class="hljs-keyword">const</span> email = req.body.email;
		<span class="hljs-keyword">const</span> password = req.body.password;

		<span class="hljs-keyword">if</span> (!name || !email || !password || !name.trim() || !email.trim() || !password.trim()) {

			res.status(<span class="hljs-number">400</span>).json({message: <span class="hljs-string">'Invalid Request !'</span>});

		} <span class="hljs-keyword">else</span> {

			register.registerUser(name, email, password)

			.then(result =&gt; {

				res.setHeader(<span class="hljs-string">'Location'</span>, <span class="hljs-string">'/users/'</span>+email);
				res.status(result.status).json({ message: result.message })
			})

			.catch(err =&gt; res.status(err.status).json({ message: err.message }));
		}
	});

	router.get(<span class="hljs-string">'/users/:id'</span>, (req,res) =&gt; {

		<span class="hljs-keyword">if</span> (checkToken(req)) {

			profile.getProfile(req.params.id)

			.then(result =&gt; res.json(result))

			.catch(err =&gt; res.status(err.status).json({ message: err.message }));

		} <span class="hljs-keyword">else</span> {

			res.status(<span class="hljs-number">401</span>).json({ message: <span class="hljs-string">'Invalid Token !'</span> });
		}
	});

	router.put(<span class="hljs-string">'/users/:id'</span>, (req,res) =&gt; {

		<span class="hljs-keyword">if</span> (checkToken(req)) {

			<span class="hljs-keyword">const</span> oldPassword = req.body.password;
			<span class="hljs-keyword">const</span> newPassword = req.body.newPassword;

			<span class="hljs-keyword">if</span> (!oldPassword || !newPassword || !oldPassword.trim() || !newPassword.trim()) {

				res.status(<span class="hljs-number">400</span>).json({ message: <span class="hljs-string">'Invalid Request !'</span> });

			} <span class="hljs-keyword">else</span> {

				password.changePassword(req.params.id, oldPassword, newPassword)

				.then(result =&gt; res.status(result.status).json({ message: result.message }))

				.catch(err =&gt; res.status(err.status).json({ message: err.message }));

			}
		} <span class="hljs-keyword">else</span> {

			res.status(<span class="hljs-number">401</span>).json({ message: <span class="hljs-string">'Invalid Token !'</span> });
		}
	});

	router.post(<span class="hljs-string">'/users/:id/password'</span>, (req,res) =&gt; {

		<span class="hljs-keyword">const</span> email = req.params.id;
		<span class="hljs-keyword">const</span> token = req.body.token;
		<span class="hljs-keyword">const</span> newPassword = req.body.password;

		<span class="hljs-keyword">if</span> (!token || !newPassword || !token.trim() || !newPassword.trim()) {

			password.resetPasswordInit(email)

			.then(result =&gt; res.status(result.status).json({ message: result.message }))

			.catch(err =&gt; res.status(err.status).json({ message: err.message }));

		} <span class="hljs-keyword">else</span> {

			password.resetPasswordFinish(email, token, newPassword)

			.then(result =&gt; res.status(result.status).json({ message: result.message }))

			.catch(err =&gt; res.status(err.status).json({ message: err.message }));
		}
	});

	<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">checkToken</span><span class="hljs-params">(req)</span> {</span>

		<span class="hljs-keyword">const</span> token = req.headers[<span class="hljs-string">'x-access-token'</span>];

		<span class="hljs-keyword">if</span> (token) {

			<span class="hljs-keyword">try</span> {

  				<span class="hljs-keyword">var</span> decoded = jwt.verify(token, config.secret);

  				<span class="hljs-keyword">return</span> decoded.message === req.params.id;

			} <span class="hljs-keyword">catch</span>(err) {

				<span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
			}

		} <span class="hljs-keyword">else</span> {

			<span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
		}
	}
}</code></pre></div></div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Creating app.js</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>This is the main file which starts our Node.js server. Here we use the middle ware <strong>body-parser&nbsp;</strong>and <strong>morgan</strong> with Express. The router is set to express by,</p><blockquote><p> app.use(‘/api/v1’, router);</p></blockquote><p>The <strong>/api/v1</strong> is appended before each API endpoint.</p><p>Our server will run on port <strong>8080</strong>.</p></div></div><h4><div class="w-message with_icon color_custom" style="background-color:#607d8b;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-file-code-o"></i></div><div class="w-message-body"><p>app.js</p></div></div></h4><div class="wpb_text_column "><div class="wpb_wrapper"><pre data-bit="true,false,false,false,,pos" data-lines="1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
"><code class="javascript  hljs " style="min-width: 85%; white-space: pre;"><span class="hljs-pi">'use strict'</span>;

<span class="hljs-keyword">const</span> express    = <span class="hljs-built_in">require</span>(<span class="hljs-string">'express'</span>);        
<span class="hljs-keyword">const</span> app        = express();                
<span class="hljs-keyword">const</span> bodyParser = <span class="hljs-built_in">require</span>(<span class="hljs-string">'body-parser'</span>);
<span class="hljs-keyword">const</span> logger 	   = <span class="hljs-built_in">require</span>(<span class="hljs-string">'morgan'</span>);
<span class="hljs-keyword">const</span> router 	   = express.Router();
<span class="hljs-keyword">const</span> port 	   = process.env.PORT || <span class="hljs-number">8080</span>;

app.use(bodyParser.json());
app.use(logger(<span class="hljs-string">'dev'</span>));

<span class="hljs-built_in">require</span>(<span class="hljs-string">'./routes'</span>)(router);
app.use(<span class="hljs-string">'/api/v1'</span>, router);

app.listen(port);

console.log(`App Runs on ${port}`);</code></pre></div></div><div style="float:none;margin:10px 0 10px 0;text-align:center;"> <script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8742978029010463" data-ad-slot="2573512830" data-ad-format="auto" hidden="" rufp73z=""></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> </div><h3><div class="w-message with_icon color_custom" style="background-color:#388e3c;color:#ffffff;"><div class="w-message-icon"><i class="fa fa-th-list"></i></div><div class="w-message-body"><p>Running the Server</p></div></div></h3><div class="wpb_text_column "><div class="wpb_wrapper"><p>Open the Terminal or Command Prompt and switch to this <strong>node-login</strong> directory. Enter the following command to start the server.</p><blockquote><p> node app</p></blockquote><p>Open the browser and hit the url <a href="http://127.0.0.1:8080/api/v1/">http://127.0.0.1:8080/api/v1/</a> to see the welcome message.</p></div></div><div class="w-actionbox color_light controls_right"><div class="w-actionbox-text"><h2>Developing Android Application</h2><p>In the following part you will learn how to develop Android Application and consume this RESTful API.</p></div><div class="w-actionbox-controls"><a class="w-btn color_white style_raised icon_none" href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-client.html" target="_blank"><span class="w-btn-label">Proceed</span><span class="ripple-container"></span></a></div></div><div style="font-size:0px;height:0px;line-height:0px;margin:0;padding:0;clear:both"></div><div id="ts-fab-below-4642" class="ts-fab-wrapper ts-fab-icons-text"><ul class="ts-fab-list"><li class="ts-fab-bio-link active"><a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#ts-fab-bio-below-4642"> <span class="genericon genericon-user" data-tab="bio"></span> <span class="ts-fab-tab-text">Bio</span> </a></li><li class="ts-fab-twitter-link"><a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#ts-fab-twitter-below-4642" data-tab="twitter" data-twitter-username="rajamalw" data-show-count="true" data-locale="en_US"> <span class="genericon genericon-twitter"></span> <span class="ts-fab-tab-text">Twitter</span> </a></li><li class="ts-fab-googleplus-link"><a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#ts-fab-googleplus-below-4642" data-tab="googleplus" data-width="320" data-googleplus-username="+RajAmal" data-locale="en_US"><span class="genericon genericon-googleplus"></span> <span class="ts-fab-tab-text">Google+</span> </a></li><li class="ts-fab-linkedin-link"><a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#ts-fab-linkedin-below-4642" data-tab="linkedin" data-linkedin-url="https://www.linkedin.com/in/raj-amal-0b791876"> <span class="genericon genericon-linkedin"></span> <span class="ts-fab-tab-text">LinkedIn</span> </a></li><li class="ts-fab-latest-posts-link"><a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#ts-fab-latest-posts-below-4642" data-tab="latest-posts"> <span class="genericon genericon-standard"></span> <span class="ts-fab-tab-text">Latest Posts</span> </a></li></ul><div class="ts-fab-tabs"><div class="ts-fab-tab visible-tab" id="ts-fab-bio-below-4642"><div class="ts-fab-avatar"><img alt="Raj Amal" src="./config_files/67283abf3e13430b424e4e3e8a2233c7" srcset="https://secure.gravatar.com/avatar/67283abf3e13430b424e4e3e8a2233c7?s=128&amp;d=mm&amp;r=g 2x" class="avatar avatar-64 photo" height="64" width="64"></div><div class="ts-fab-text"><div class="ts-fab-header"><h4><a rel="nofollow" href="https://www.learn2crack.com/">Raj Amal</a></h4><div class="ts-fab-description"><span>Developer</span> at <span>Learn2Crack</span></div></div><div class="ts-fab-content">Raj Amal is an Android Developer. He Loves to code and explores new technologies. He also authored a book <a href="https://www.packtpub.com/application-development/learning-android-google-maps" rel="nofollow">Learning Android Google Maps</a></div></div></div><div class="ts-fab-tab" id="ts-fab-twitter-below-4642"><div class="ts-fab-avatar"><img alt="Raj Amal" src="./config_files/67283abf3e13430b424e4e3e8a2233c7" srcset="https://secure.gravatar.com/avatar/67283abf3e13430b424e4e3e8a2233c7?s=128&amp;d=mm&amp;r=g 2x" class="avatar avatar-64 photo" height="64" width="64"></div><div class="ts-fab-text"><div class="ts-fab-header"><h4><a rel="nofollow" href="https://twitter.com/rajamalw">@rajamalw</a></h4></div><div class="ts-fab-content"><div class="ts-fab-twitter-tweet"></div></div><div class="ts-fab-twitter-widget-wrapper"></div></div></div><div class="ts-fab-tab" id="ts-fab-googleplus-below-4642"><div class="ts-fab-avatar"><img alt="Raj Amal" src="./config_files/67283abf3e13430b424e4e3e8a2233c7" srcset="https://secure.gravatar.com/avatar/67283abf3e13430b424e4e3e8a2233c7?s=128&amp;d=mm&amp;r=g 2x" class="avatar avatar-64 photo" height="64" width="64"></div><div class="ts-fab-text"><div class="ts-fab-header"><h4><a rel="nofollow" href="https://plus.google.com/+RajAmal?rel=author">+Raj Amal</a></h4></div><div class="ts-fab-googleplus-widget-wrapper"> <g:follow href="//plus.google.com/+RajAmal" rel="author"></g:follow></div></div></div><div class="ts-fab-tab" id="ts-fab-linkedin-below-4642"><div class="ts-fab-avatar"><img alt="Raj Amal" src="./config_files/67283abf3e13430b424e4e3e8a2233c7" srcset="https://secure.gravatar.com/avatar/67283abf3e13430b424e4e3e8a2233c7?s=128&amp;d=mm&amp;r=g 2x" class="avatar avatar-64 photo" height="64" width="64"></div><div class="ts-fab-text"><div class="ts-fab-linkedin-widget-wrapper"></div></div></div><div class="ts-fab-tab" id="ts-fab-latest-posts-below-4642"><div class="ts-fab-avatar"><img alt="Raj Amal" src="./config_files/67283abf3e13430b424e4e3e8a2233c7" srcset="https://secure.gravatar.com/avatar/67283abf3e13430b424e4e3e8a2233c7?s=128&amp;d=mm&amp;r=g 2x" class="avatar avatar-64 photo" height="64" width="64"></div><div class="ts-fab-text"><div class="ts-fab-header"><h4>Latest posts by Raj Amal <span class="latest-see-all">(<a href="https://www.learn2crack.com/author/rajamalw">see all</a>)</span></h4></div><ul class="ts-fab-latest"><li> <a href="https://www.learn2crack.com/2017/11/retrofit-and-rxjava-in-kotlin.html">Android working with Retrofit and RxJava in Kotlin</a><span> - November 23, 2017</span></li><li> <a href="https://www.learn2crack.com/2017/11/android-development-kotlin.html">Getting Started with Android Development in Kotlin</a><span> - November 23, 2017</span></li><li> <a href="https://www.learn2crack.com/2017/08/upload-image-using-retrofit.html">Android Upload Image using Retrofit #2</a><span> - August 8, 2017</span></li></ul></div></div></div></div><div class="essb_break_scroll"></div></div></section><section class="l-section for_tags"><div class="l-section-h i-cf"><div class="g-tags"> <span class="g-tags-title">:</span> <a href="https://www.learn2crack.com/tag/es6" rel="tag">ES6</a>, <a href="https://www.learn2crack.com/tag/login-register" rel="tag">login register</a>, <a href="https://www.learn2crack.com/tag/login-register-authentication" rel="tag">login register authentication</a>, <a href="https://www.learn2crack.com/tag/mongo" rel="tag">mongo</a>, <a href="https://www.learn2crack.com/tag/nodejs" rel="tag">nodejs</a></div></div></section><section class="l-section for_sharing"><div class="l-section-h i-cf"><div class="w-sharing type_solid align_left color_default"><a class="w-sharing-item facebook" title="Share this" href="javascript:void(0)" data-sharing-url="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" data-sharing-image="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server.png"><span class="w-sharing-icon"></span></a><a class="w-sharing-item twitter" title="Tweet this" href="javascript:void(0)" data-sharing-url="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" data-sharing-image="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server.png"><span class="w-sharing-icon"></span></a><a class="w-sharing-item gplus" title="Share this" href="javascript:void(0)" data-sharing-url="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" data-sharing-image="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server.png"><span class="w-sharing-icon"></span></a><a class="w-sharing-item linkedin" title="Share this" href="javascript:void(0)" data-sharing-url="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" data-sharing-image="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server.png"><span class="w-sharing-icon"></span></a><a class="w-sharing-item pinterest" title="Pin this" href="javascript:void(0)" data-sharing-url="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" data-sharing-image="https://cdn.learn2crack.com/wp-content/uploads/2016/09/node-cover-server.png"><span class="w-sharing-icon"></span></a></div></div></section><section class="l-section for_blognav"><div class="l-section-h i-cf"><div class="w-blognav inv_false"> <a class="w-blognav-item to_prev" href="https://www.learn2crack.com/2016/09/android-automated-ui-testing-with-espresso.html"> <span class="w-blognav-meta">Previous Post</span> <span class="w-blognav-title">Android automated UI testing with Espresso</span> </a> <a class="w-blognav-item to_next" href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-client.html"> <span class="w-blognav-meta">Next Post</span> <span class="w-blognav-title">Android User Registration and Login with Node.js and MongoDB – Client #2</span> </a></div></div></section><section class="l-section for_related"><div class="l-section-h i-cf"><h4>Related Posts</h4><div class="w-blog layout_related type_grid" itemscope="" itemtype="https://schema.org/Blog"><div class="w-blog-list"><article class="w-blog-post androiddev post-2430 post type-post status-publish format-standard has-post-thumbnail hentry category-androiddev tag-mongodb tag-nodejs" data-id="2430" data-categories="androiddev"><div class="w-blog-post-h"> <a href="https://www.learn2crack.com/2014/04/android-login-registration-nodejs-server.html" aria-label="Android Login Registration System with Node.js and MongoDB – Server #1"><div class="w-blog-post-preview"> <img width="600" height="400" src="./config_files/cover111-600x400.png" class="attachment-us_600_400_crop size-us_600_400_crop wp-post-image" alt=""> <span class="w-blog-post-preview-icon" style="padding-bottom:66.6667%;"></span><span class="ripple-container"></span></div> </a><div class="w-blog-post-body"><h2 class="w-blog-post-title"> <a class="entry-title" rel="bookmark" href="https://www.learn2crack.com/2014/04/android-login-registration-nodejs-server.html">Android Login Registration System with Node.js and MongoDB – Server #1</a></h2><div class="w-blog-post-meta"> <time class="w-blog-post-meta-date date updated" datetime="2014-04-27 04:22:25">April 27, 2014</time><span class="w-blog-post-meta-author vcard author hidden"><a href="https://www.learn2crack.com/author/rajamalw" class="fn">Raj Amal</a></span></div></div></div></article><article class="w-blog-post androiddev post-2465 post type-post status-publish format-standard has-post-thumbnail hentry category-androiddev tag-mongodb tag-nodejs" data-id="2465" data-categories="androiddev"><div class="w-blog-post-h"> <a href="https://www.learn2crack.com/2014/04/android-login-registration-nodejs-client.html" aria-label="Android Login Registration System with Node.js and MongoDB – Client #2"><div class="w-blog-post-preview"> <img width="600" height="400" src="./config_files/cover111-600x400.png" class="attachment-us_600_400_crop size-us_600_400_crop wp-post-image" alt=""> <span class="w-blog-post-preview-icon" style="padding-bottom:66.6667%;"></span><span class="ripple-container"></span></div> </a><div class="w-blog-post-body"><h2 class="w-blog-post-title"> <a class="entry-title" rel="bookmark" href="https://www.learn2crack.com/2014/04/android-login-registration-nodejs-client.html">Android Login Registration System with Node.js and MongoDB – Client #2</a></h2><div class="w-blog-post-meta"> <time class="w-blog-post-meta-date date updated" datetime="2014-04-27 04:22:34">April 27, 2014</time><span class="w-blog-post-meta-author vcard author hidden"><a href="https://www.learn2crack.com/author/rajamalw" class="fn">Raj Amal</a></span></div></div></div></article><article class="w-blog-post androiddev post-4317 post type-post status-publish format-standard has-post-thumbnail hentry category-androiddev tag-login-register" data-id="4317" data-categories="androiddev"><div class="w-blog-post-h"> <a href="https://www.learn2crack.com/2016/04/android-login-registration-php-mysql-server.html" aria-label="Android Login Registration System with PHP and MySQL (Updated) – Server #1"><div class="w-blog-post-preview"> <img width="600" height="400" src="./config_files/cover-login-600x400.png" class="attachment-us_600_400_crop size-us_600_400_crop wp-post-image" alt="android login registration"> <span class="w-blog-post-preview-icon" style="padding-bottom:66.6667%;"></span><span class="ripple-container"></span></div> </a><div class="w-blog-post-body"><h2 class="w-blog-post-title"> <a class="entry-title" rel="bookmark" href="https://www.learn2crack.com/2016/04/android-login-registration-php-mysql-server.html">Android Login Registration System with PHP and MySQL (Updated) – Server #1</a></h2><div class="w-blog-post-meta"> <time class="w-blog-post-meta-date date updated" datetime="2016-04-02 12:40:11">April 2, 2016</time><span class="w-blog-post-meta-author vcard author hidden"><a href="https://www.learn2crack.com/author/rajamalw" class="fn">Raj Amal</a></span></div></div></div></article></div></div></div></section><section class="l-section for_comments"><div class="l-section-h i-cf"><div id="disqus_thread"><iframe id="dsq-app3216" name="dsq-app3216" allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" title="Disqus" sandbox="allow-forms allow-popups allow-same-origin allow-scripts" width="100%" src="./config_files/saved_resource.html" style="width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important; height: 0px !important; display: none !important;" hidden=""></iframe><iframe id="dsq-app3213" name="dsq-app3213" allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" title="Disqus" width="100%" src="./config_files/saved_resource(1).html" style="width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important; height: 4589px !important;" horizontalscrolling="no" verticalscrolling="no"></iframe></div> <script type="text/javascript">var disqus_url = 'https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html';
var disqus_identifier = '4642 https://www.learn2crack.com/?p=4642';
var disqus_container_id = 'disqus_thread';
var disqus_shortname = 'learn2crack';
var disqus_title = "Android User Registration and Login with Node.js and MongoDB &#8211; Server #1";
var disqus_config_custom = window.disqus_config;
var disqus_config = function () {
    /*
    All currently supported events:
    onReady: fires when everything is ready,
    onNewComment: fires when a new comment is posted,
    onIdentify: fires when user is authenticated
    */
    
    
    this.language = '';
        this.callbacks.onReady.push(function () {

        // sync comments in the background so we don't block the page
        var script = document.createElement('script');
        script.async = true;
        script.src = '?cf_action=sync_comments&post_id=4642';

        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
    
    if (disqus_config_custom) {
        disqus_config_custom.call(this);
    }
};

(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();</script> </div></section></main><aside class="l-sidebar at_right default_sidebar q2w3-fixed-widget-container" itemscope="" itemtype="https://schema.org/WPSideBar" style=""><div id="text-3" class="widget widget_text"><div class="textwidget"><div class="essbfc-container essbfc-col-2 essbfc-template-metro"><h3>Social Followers</h3><ul><li class="essbfc-facebook"><a href="https://www.facebook.com/Learn2CrackOfficial" target="_blank" rel="nofollow"><div class="essbfc-network"><i class="essbfc-icon essbfc-icon-facebook essbfc-icon-pulse"></i><span class="essbfc-followers-count">38k</span><span class="essbfc-followers-text">Fans</span></div></a></li><li class="essbfc-twitter"><a href="https://www.twitter.com/learn2crack" target="_blank" rel="nofollow"><div class="essbfc-network"><i class="essbfc-icon essbfc-icon-twitter essbfc-icon-pulse"></i><span class="essbfc-followers-count">6.3k</span><span class="essbfc-followers-text">Followers</span></div></a></li><li class="essbfc-google"><a href="https://plus.google.com/+Learn2CrackOfficial" target="_blank" rel="nofollow"><div class="essbfc-network"><i class="essbfc-icon essbfc-icon-google essbfc-icon-pulse"></i><span class="essbfc-followers-count">16.6k</span><span class="essbfc-followers-text">Followers</span></div></a></li><li class="essbfc-youtube"><a href="https://www.youtube.com/user/learn2crackofficial" target="_blank" rel="nofollow"><div class="essbfc-network"><i class="essbfc-icon essbfc-icon-youtube essbfc-icon-pulse"></i><span class="essbfc-followers-count">2.7k</span><span class="essbfc-followers-text">Subscribers</span></div></a></li><li class="essbfc-pinterest"><a href="https://www.pinterest.com/learn2crack" target="_blank" rel="nofollow"><div class="essbfc-network"><i class="essbfc-icon essbfc-icon-pinterest essbfc-icon-pulse"></i><span class="essbfc-followers-count">324</span><span class="essbfc-followers-text">Followers</span></div></a></li><li class="essbfc-linkedin"><a href="https://www.linkedin.com/company/https://www.linkedin.com/company/learn2crack" target="_blank" rel="nofollow"><div class="essbfc-network"><i class="essbfc-icon essbfc-icon-linkedin essbfc-icon-pulse"></i><span class="essbfc-followers-count">30</span><span class="essbfc-followers-text">Followers</span></div></a></li></ul></div></div></div><div id="newsletterwidget-2" class="widget widget_newsletterwidget"><div class="tnp tnp-widget"><form method="post" action="https://www.learn2crack.com/?na=s" onsubmit="return newsletter_check(this)"><input type="hidden" name="nr" value="widget"> <input type="hidden" name="nl[]" value="0"><div class="tnp-field tnp-field-email"><label>Email</label><input class="tnp-email" type="email" name="ne" required=""></div><div class="tnp-field tnp-field-button"><input class="tnp-submit" type="submit" value="Subscribe"></div></form></div></div><div id="text-2" class="widget widget_text"><div class="textwidget"><div data-type="ad" data-publisher="learn2crack.com" data-format="300x250" data-zone="side_bar_top"></div></div></div><div id="text-7" class="widget widget_text" style=""><div class="textwidget"><div data-type="ad" data-publisher="learn2crack.com" data-format="300x250" data-zone="sidebar_fixed"></div><div data-type="ad" data-publisher="learn2crack.com" data-format="300x250" data-zone="SideBarBottom"></div></div></div></aside></div></div></div><footer class="l-footer" itemscope="" itemtype="https://schema.org/WPFooter"><section class="l-section wpb_row height_medium color_footer-top"><div class="l-section-h i-cf"><div class="g-cols vc_row type_default valign_top vc_column-gap-20"><div class="vc_col-sm-4 wpb_column vc_column_container"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="wpb_widgetised_column wpb_content_element"><div class="wpb_wrapper"><div id="tag_cloud-2" class="widget widget_tag_cloud"><h3 class="widgettitle">Tags</h3><div class="tagcloud"><a href="https://www.learn2crack.com/tag/4-2-2" class="tag-cloud-link tag-link-28 tag-link-position-1" style="font-size: 8pt;" aria-label="4.2.2 (1 item)">4.2.2</a> <a href="https://www.learn2crack.com/tag/4-3" class="tag-cloud-link tag-link-29 tag-link-position-2" style="font-size: 8pt;" aria-label="4.3 (1 item)">4.3</a> <a href="https://www.learn2crack.com/tag/abc" class="tag-cloud-link tag-link-30 tag-link-position-3" style="font-size: 8pt;" aria-label="abc (1 item)">abc</a> <a href="https://www.learn2crack.com/tag/action-bar" class="tag-cloud-link tag-link-31 tag-link-position-4" style="font-size: 8pt;" aria-label="Action Bar (1 item)">Action Bar</a> <a href="https://www.learn2crack.com/tag/alertdialog" class="tag-cloud-link tag-link-33 tag-link-position-5" style="font-size: 8pt;" aria-label="AlertDialog (1 item)">AlertDialog</a> <a href="https://www.learn2crack.com/tag/android" class="tag-cloud-link tag-link-34 tag-link-position-6" style="font-size: 22pt;" aria-label="Android (21 items)">Android</a> <a href="https://www.learn2crack.com/tag/android-4-4" class="tag-cloud-link tag-link-35 tag-link-position-7" style="font-size: 8pt;" aria-label="Android 4.4 (1 item)">Android 4.4</a> <a href="https://www.learn2crack.com/tag/android-5-0" class="tag-cloud-link tag-link-36 tag-link-position-8" style="font-size: 8pt;" aria-label="Android 5.0 (1 item)">Android 5.0</a> <a href="https://www.learn2crack.com/tag/android-apk" class="tag-cloud-link tag-link-38 tag-link-position-9" style="font-size: 12.038461538462pt;" aria-label="Android apk (3 items)">Android apk</a> <a href="https://www.learn2crack.com/tag/android-desktop-os" class="tag-cloud-link tag-link-39 tag-link-position-10" style="font-size: 8pt;" aria-label="Android Desktop OS (1 item)">Android Desktop OS</a> <a href="https://www.learn2crack.com/tag/apps" class="tag-cloud-link tag-link-47 tag-link-position-11" style="font-size: 10.423076923077pt;" aria-label="Apps (2 items)">Apps</a> <a href="https://www.learn2crack.com/tag/bbm" class="tag-cloud-link tag-link-48 tag-link-position-12" style="font-size: 12.038461538462pt;" aria-label="BBM (3 items)">BBM</a> <a href="https://www.learn2crack.com/tag/free-download" class="tag-cloud-link tag-link-73 tag-link-position-13" style="font-size: 10.423076923077pt;" aria-label="Free Download (2 items)">Free Download</a> <a href="https://www.learn2crack.com/tag/genymotion" class="tag-cloud-link tag-link-78 tag-link-position-14" style="font-size: 13.384615384615pt;" aria-label="Genymotion (4 items)">Genymotion</a> <a href="https://www.learn2crack.com/tag/google-play" class="tag-cloud-link tag-link-84 tag-link-position-15" style="font-size: 10.423076923077pt;" aria-label="Google Play (2 items)">Google Play</a> <a href="https://www.learn2crack.com/tag/google-play-services" class="tag-cloud-link tag-link-85 tag-link-position-16" style="font-size: 12.038461538462pt;" aria-label="Google Play Services (3 items)">Google Play Services</a> <a href="https://www.learn2crack.com/tag/hack" class="tag-cloud-link tag-link-91 tag-link-position-17" style="font-size: 10.423076923077pt;" aria-label="Hack (2 items)">Hack</a> <a href="https://www.learn2crack.com/tag/kitkat" class="tag-cloud-link tag-link-101 tag-link-position-18" style="font-size: 12.038461538462pt;" aria-label="KitKat (3 items)">KitKat</a> <a href="https://www.learn2crack.com/tag/kotlin" class="tag-cloud-link tag-link-216 tag-link-position-19" style="font-size: 10.423076923077pt;" aria-label="kotlin (2 items)">kotlin</a> <a href="https://www.learn2crack.com/tag/linux" class="tag-cloud-link tag-link-102 tag-link-position-20" style="font-size: 15.403846153846pt;" aria-label="Linux (6 items)">Linux</a> <a href="https://www.learn2crack.com/tag/listview" class="tag-cloud-link tag-link-103 tag-link-position-21" style="font-size: 10.423076923077pt;" aria-label="ListView (2 items)">ListView</a> <a href="https://www.learn2crack.com/tag/load-image" class="tag-cloud-link tag-link-212 tag-link-position-22" style="font-size: 10.423076923077pt;" aria-label="load image (2 items)">load image</a> <a href="https://www.learn2crack.com/tag/login-register" class="tag-cloud-link tag-link-107 tag-link-position-23" style="font-size: 14.461538461538pt;" aria-label="login register (5 items)">login register</a> <a href="https://www.learn2crack.com/tag/login-register-authentication" class="tag-cloud-link tag-link-108 tag-link-position-24" style="font-size: 10.423076923077pt;" aria-label="login register authentication (2 items)">login register authentication</a> <a href="https://www.learn2crack.com/tag/material-design" class="tag-cloud-link tag-link-113 tag-link-position-25" style="font-size: 12.038461538462pt;" aria-label="material design (3 items)">material design</a> <a href="https://www.learn2crack.com/tag/mongodb" class="tag-cloud-link tag-link-117 tag-link-position-26" style="font-size: 12.038461538462pt;" aria-label="mongodb (3 items)">mongodb</a> <a href="https://www.learn2crack.com/tag/nodejs" class="tag-cloud-link tag-link-128 tag-link-position-27" style="font-size: 15.403846153846pt;" aria-label="nodejs (6 items)">nodejs</a> <a href="https://www.learn2crack.com/tag/opencv" class="tag-cloud-link tag-link-129 tag-link-position-28" style="font-size: 10.423076923077pt;" aria-label="opencv (2 items)">opencv</a> <a href="https://www.learn2crack.com/tag/python" class="tag-cloud-link tag-link-138 tag-link-position-29" style="font-size: 12.038461538462pt;" aria-label="Python (3 items)">Python</a> <a href="https://www.learn2crack.com/tag/raspberry-pi" class="tag-cloud-link tag-link-140 tag-link-position-30" style="font-size: 13.384615384615pt;" aria-label="Raspberry Pi (4 items)">Raspberry Pi</a> <a href="https://www.learn2crack.com/tag/recycler-view" class="tag-cloud-link tag-link-141 tag-link-position-31" style="font-size: 15.403846153846pt;" aria-label="recycler view (6 items)">recycler view</a> <a href="https://www.learn2crack.com/tag/retrofit" class="tag-cloud-link tag-link-145 tag-link-position-32" style="font-size: 17.961538461538pt;" aria-label="retrofit (10 items)">retrofit</a> <a href="https://www.learn2crack.com/tag/rxjava" class="tag-cloud-link tag-link-146 tag-link-position-33" style="font-size: 12.038461538462pt;" aria-label="rxjava (3 items)">rxjava</a> <a href="https://www.learn2crack.com/tag/sqlite" class="tag-cloud-link tag-link-154 tag-link-position-34" style="font-size: 10.423076923077pt;" aria-label="SQLite (2 items)">SQLite</a> <a href="https://www.learn2crack.com/tag/surf" class="tag-cloud-link tag-link-156 tag-link-position-35" style="font-size: 10.423076923077pt;" aria-label="Surf (2 items)">Surf</a> <a href="https://www.learn2crack.com/tag/terminal" class="tag-cloud-link tag-link-162 tag-link-position-36" style="font-size: 10.423076923077pt;" aria-label="Terminal (2 items)">Terminal</a> <a href="https://www.learn2crack.com/tag/tips" class="tag-cloud-link tag-link-165 tag-link-position-37" style="font-size: 12.038461538462pt;" aria-label="Tips (3 items)">Tips</a> <a href="https://www.learn2crack.com/tag/torrent" class="tag-cloud-link tag-link-167 tag-link-position-38" style="font-size: 10.423076923077pt;" aria-label="Torrent (2 items)">Torrent</a> <a href="https://www.learn2crack.com/tag/transfer-files" class="tag-cloud-link tag-link-168 tag-link-position-39" style="font-size: 10.423076923077pt;" aria-label="Transfer Files (2 items)">Transfer Files</a> <a href="https://www.learn2crack.com/tag/tricks" class="tag-cloud-link tag-link-169 tag-link-position-40" style="font-size: 14.461538461538pt;" aria-label="Tricks (5 items)">Tricks</a> <a href="https://www.learn2crack.com/tag/ubuntu" class="tag-cloud-link tag-link-171 tag-link-position-41" style="font-size: 15.403846153846pt;" aria-label="Ubuntu (6 items)">Ubuntu</a> <a href="https://www.learn2crack.com/tag/whatsapp" class="tag-cloud-link tag-link-190 tag-link-position-42" style="font-size: 12.038461538462pt;" aria-label="WhatsApp (3 items)">WhatsApp</a> <a href="https://www.learn2crack.com/tag/windows" class="tag-cloud-link tag-link-198 tag-link-position-43" style="font-size: 12.038461538462pt;" aria-label="Windows (3 items)">Windows</a> <a href="https://www.learn2crack.com/tag/wordpress" class="tag-cloud-link tag-link-199 tag-link-position-44" style="font-size: 12.038461538462pt;" aria-label="WordPress (3 items)">WordPress</a> <a href="https://www.learn2crack.com/tag/xposed-framework" class="tag-cloud-link tag-link-202 tag-link-position-45" style="font-size: 10.423076923077pt;" aria-label="xposed framework (2 items)">xposed framework</a></div></div></div></div></div></div></div><div class="vc_col-sm-4 wpb_column vc_column_container"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="wpb_widgetised_column wpb_content_element"><div class="wpb_wrapper"><div id="recent-posts-2" class="widget widget_recent_entries"><h3 class="widgettitle">Recent Posts</h3><ul><li> <a href="https://www.learn2crack.com/2017/11/retrofit-and-rxjava-in-kotlin.html">Android working with Retrofit and RxJava in Kotlin</a></li><li> <a href="https://www.learn2crack.com/2017/11/android-development-kotlin.html">Getting Started with Android Development in Kotlin</a></li><li> <a href="https://www.learn2crack.com/2017/08/upload-image-using-retrofit.html">Android Upload Image using Retrofit #2</a></li><li> <a href="https://www.learn2crack.com/2017/08/node-js-server-upload-images.html">Creating Node.js server to upload Images #1</a></li><li> <a href="https://www.learn2crack.com/2017/07/android-material-design-tabs.html">Android Material Design Tabs with TabLayout</a></li></ul></div></div></div></div></div></div><div class="vc_col-sm-4 wpb_column vc_column_container"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="wpb_widgetised_column wpb_content_element"><div class="wpb_wrapper"><div id="calendar-2" class="widget widget_calendar"><div id="calendar_wrap" class="calendar_wrap"><table id="wp-calendar"><caption>September 2016</caption><thead><tr><th scope="col" title="Monday">M</th><th scope="col" title="Tuesday">T</th><th scope="col" title="Wednesday">W</th><th scope="col" title="Thursday">T</th><th scope="col" title="Friday">F</th><th scope="col" title="Saturday">S</th><th scope="col" title="Sunday">S</th></tr></thead><tfoot><tr><td colspan="3" id="prev"><a href="https://www.learn2crack.com/2016/06">« Jun</a></td><td class="pad">&nbsp;</td><td colspan="3" id="next"><a href="https://www.learn2crack.com/2016/10">Oct »</a></td></tr></tfoot><tbody><tr><td colspan="3" class="pad">&nbsp;</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>5</td><td>6</td><td><a href="https://www.learn2crack.com/2016/09/07" aria-label="Posts published on September 7, 2016">7</a></td><td>8</td><td>9</td><td>10</td><td>11</td></tr><tr><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td></tr><tr><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td><a href="https://www.learn2crack.com/2016/09/24" aria-label="Posts published on September 24, 2016">24</a></td><td>25</td></tr><tr><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td class="pad" colspan="2">&nbsp;</td></tr></tbody></table></div></div></div></div></div></div></div></div></div></section><section class="l-section wpb_row height_small color_footer-bottom align_center_xs"><div class="l-section-h i-cf"><div class="g-cols vc_row type_default valign_top"><div class="vc_col-sm-4 wpb_column vc_column_container"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="wpb_text_column "><div class="wpb_wrapper"><p>Learn2Crack © 2018. All Rights Reserved.</p></div></div></div></div></div><div class="vc_col-sm-8 wpb_column vc_column_container"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="vc_wp_custommenu  layout_hor align_right"><div class="widget widget_nav_menu"><div class="menu-primary-container"><ul id="menu-primary" class="menu"><li id="menu-item-4952" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4952"><a href="https://www.learn2crack.com/contact-us">Contact Us</a></li><li id="menu-item-4951" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4951"><a href="https://www.learn2crack.com/advertise">Advertise</a></li><li id="menu-item-5880" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5880"><a href="https://www.learn2crack.com/donate">Donate</a></li><li id="menu-item-4953" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4953"><a href="https://www.learn2crack.com/disclaimer">Disclaimer</a></li><li id="menu-item-4962" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4962"><a href="https://www.learn2crack.com/our-team">Our Team</a></li><li id="menu-item-4961" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4961"><a href="https://www.learn2crack.com/terms-of-use">Terms of Use</a></li><li id="menu-item-4954" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4954"><a href="https://www.learn2crack.com/privacy-policy">Privacy Policy</a></li><li id="menu-item-4955" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4955"><a href="https://www.learn2crack.com/sitemap_index.xml">Sitemap</a></li></ul></div></div></div></div></div></div></div></div></section></footer> <a class="w-toplink pos_right active" href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#" title="Back to top" aria-hidden="true"></a> <a class="w-header-show" href="javascript:void(0);"><span>Menu</span></a><div class="w-header-overlay"></div> <script type="text/javascript">// Store some global theme options used in JS
	if (window.$us === undefined) window.$us = {};
	$us.canvasOptions = ($us.canvasOptions || {});
	$us.canvasOptions.disableEffectsWidth = 1000;
	$us.canvasOptions.responsive = true;
	$us.canvasOptions.backToTopDisplay = 100;

	$us.langOptions = ($us.langOptions || {});
	$us.langOptions.magnificPopup = ($us.langOptions.magnificPopup || {});
	$us.langOptions.magnificPopup.tPrev = 'Previous (Left arrow key)';
	$us.langOptions.magnificPopup.tNext = 'Next (Right arrow key)';
	$us.langOptions.magnificPopup.tCounter = '%curr% of %total%';

	$us.navOptions = ($us.navOptions || {});
	$us.navOptions.mobileWidth = 900;
	$us.navOptions.togglable = true;
	$us.ajaxLoadJs = false;
	$us.templateDirectoryUri = 'https://cdn.learn2crack.com/wp-content/themes/Zephyr';</script> <div class="essb_bottombar essb_active_bottombar"><div class="essb_bottombar_inner"><div class="essb_bottombar_inner_buttons essb_bar_withoutcontent essb_bottombar_align_center"><div class="essb_links essb_counters essb_displayed_bottombar essb_share essb_template_modern-retina essb_template_modern-slim-retina essb_1135778169 essb_links_center essb_icon_animation13 print-no" id="essb_displayed_bottombar_1135778169" data-essb-postid="4642" data-essb-position="bottombar" data-essb-button-style="button" data-essb-template="modern-retina essb_template_modern-slim-retina" data-essb-counter-pos="hidden" data-essb-url="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" data-essb-twitter-url="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" data-essb-instance="1135778169"><ul class="essb_links_list"><li class="essb_item essb_totalcount_item" data-counter-pos="hidden"><span class="essb_totalcount essb_t_l_big essb_total_icon essb_icon_share-tiny" title="" data-shares-text="shares"><span class="essb_t_nb">219<span class="essb_t_nb_after">shares</span></span></span></li><li class="essb_item essb_link_facebook nolightbox"> <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html&amp;t=Android+User+Registration+and+Login+with+Node.js+and+MongoDB+-+Server+%231&amp;redirect_uri=https://www.learn2crack.com?sharing-thankyou=yes" title="" onclick="essb.window(&#39;https://www.facebook.com/sharer/sharer.php?u=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html&amp;t=Android+User+Registration+and+Login+with+Node.js+and+MongoDB+-+Server+%231&amp;redirect_uri=https://www.learn2crack.com?sharing-thankyou=yes&#39;,&#39;facebook&#39;,&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_facebook"></span><span class="essb_network_name">Facebook</span></a><span class="essb_counter_hidden" data-cnt="189" data-cnt-short=""></span></li><li class="essb_item essb_link_twitter nolightbox"> <a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#" title="" onclick="essb.window(&#39;https://twitter.com/intent/tweet?text=Android+User+Registration+and+Login+with+Node.js+and+MongoDB+-+Server+%231&amp;url=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html&amp;counturl=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html&#39;,&#39;twitter&#39;,&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_twitter"></span><span class="essb_network_name">Twitter</span></a><span class="essb_counter_hidden" data-cnt="12" data-cnt-short=""></span></li><li class="essb_item essb_link_google nolightbox"> <a href="https://plus.google.com/share?url=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" title="" onclick="essb.window(&#39;https://plus.google.com/share?url=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html&#39;,&#39;google&#39;,&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_google"></span><span class="essb_network_name">Google+</span></a><span class="essb_counter_hidden" data-cnt="5" data-cnt-short=""></span></li><li class="essb_item essb_link_love nolightbox"> <a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#" title="" onclick="essb.loveThis(&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_love"></span><span class="essb_network_name">Love This</span></a><span class="essb_counter_hidden" data-cnt="10" data-cnt-short=""></span></li><li class="essb_item essb_link_more_dots nolightbox"> <a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#" title="" onclick="essb.toggle_more(&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_more_dots"></span><span class="essb_network_name essb_noname"></span></a></li><li class="essb_item essb_link_pinterest nolightbox essb_after_more"> <a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#" title="" onclick="essb.pinterest_picker(&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_pinterest"></span><span class="essb_network_name">Pinterest</span></a><span class="essb_counter_hidden" data-cnt="" data-cnt-short=""></span></li><li class="essb_item essb_link_linkedin nolightbox essb_after_more"> <a href="https://www.linkedin.com/shareArticle?mini=true&amp;ro=true&amp;trk=EasySocialShareButtons&amp;title=Android+User+Registration+and+Login+with+Node.js+and+MongoDB+-+Server+%231&amp;url=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" title="" onclick="essb.window(&#39;https://www.linkedin.com/shareArticle?mini=true&amp;ro=true&amp;trk=EasySocialShareButtons&amp;title=Android+User+Registration+and+Login+with+Node.js+and+MongoDB+-+Server+%231&amp;url=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html&#39;,&#39;linkedin&#39;,&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_linkedin"></span><span class="essb_network_name">LinkedIn</span></a><span class="essb_counter_hidden" data-cnt="3" data-cnt-short=""></span></li><li class="essb_item essb_link_stumbleupon nolightbox essb_after_more"> <a href="http://www.stumbleupon.com/badge/?url=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html" title="" onclick="essb.window(&#39;http://www.stumbleupon.com/badge/?url=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html&#39;,&#39;stumbleupon&#39;,&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_stumbleupon"></span><span class="essb_network_name">StumbleUpon</span></a><span class="essb_counter_hidden" data-cnt="" data-cnt-short=""></span></li><li class="essb_item essb_link_reddit nolightbox essb_after_more"> <a href="http://reddit.com/submit?url=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html&amp;title=Android+User+Registration+and+Login+with+Node.js+and+MongoDB+-+Server+%231" title="" onclick="essb.window(&#39;http://reddit.com/submit?url=https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html&amp;title=Android+User+Registration+and+Login+with+Node.js+and+MongoDB+-+Server+%231&#39;,&#39;reddit&#39;,&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_reddit"></span><span class="essb_network_name">Reddit</span></a><span class="essb_counter_hidden" data-cnt="" data-cnt-short=""></span></li><li class="essb_item essb_link_less nolightbox essb_after_more"> <a href="https://www.learn2crack.com/2016/09/android-user-registration-login-node-server.html#" title="" onclick="essb.toggle_less(&#39;1135778169&#39;); return false;" target="_blank" rel="nofollow"><span class="essb_icon essb_icon_less"></span><span class="essb_network_name"></span></a></li></ul></div></div></div></div>  <script>window.__bp_session_timeout = '900';
            window.__bp_session_freezing = 0;
            window.bizpanda||(window.bizpanda={}),window.bizpanda.bp_can_store_localy=function(){return!1},window.bizpanda.bp_ut_get_cookie=function(e){for(var n=e+"=",i=document.cookie.split(";"),o=0;o<i.length;o++){for(var t=i[o];" "==t.charAt(0);)t=t.substring(1);if(0==t.indexOf(n))return decodeURIComponent(t.substring(n.length,t.length))}return!1},window.bizpanda.bp_ut_set_cookie=function(e,n,i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3);var t="expires="+o.toUTCString();document.cookie=e+"="+encodeURIComponent(n)+"; "+t+"; path=/"},window.bizpanda.bp_ut_get_obj=function(e){var n=null;if(!(n=window.bizpanda.bp_can_store_localy()?window.localStorage.getItem("bp_ut_session"):window.bizpanda.bp_ut_get_cookie("bp_ut_session")))return!1;n=(n=n.replace(/\-c\-/g,",")).replace(/\-q\-/g,'"');try{n=JSON.parse(n)}catch(e){return!1}return n.started+1e3*e<(new Date).getTime()&&(n=null),n},window.bizpanda.bp_ut_set_obj=function(e,n){e.started&&window.__bp_session_freezing||(e.started=(new Date).getTime()),(e=JSON.stringify(e))&&(e=(e=e.replace(/\"/g,"-q-")).replace(/\,/g,"-c-")),window.bizpanda.bp_can_store_localy()?window.localStorage.setItem("bp_ut_session",e):window.bizpanda.bp_ut_set_cookie("bp_ut_session",e,5e3)},window.bizpanda.bp_ut_count_pageview=function(){var e=window.bizpanda.bp_ut_get_obj(window.__bp_session_timeout);e||(e={}),e.pageviews||(e.pageviews=0),0===e.pageviews&&(e.referrer=document.referrer,e.landingPage=window.location.href,e.pageviews=0),e.pageviews++,window.bizpanda.bp_ut_set_obj(e)},window.bizpanda.bp_ut_count_locker_pageview=function(){var e=window.bizpanda.bp_ut_get_obj(window.__bp_timeout);e||(e={}),e.lockerPageviews||(e.lockerPageviews=0),e.lockerPageviews++,window.bizpanda.bp_ut_set_obj(e)},window.bizpanda.bp_ut_count_pageview();</script>  <script>if ( !window.bizpanda ) window.bizpanda = {};
            if ( !window.bizpanda.lockerOptions ) window.bizpanda.lockerOptions = {};
            window.bizpanda.lockerOptions['onpLock484801'] = {"lockerId":4979,"tracking":"true","postId":4642,"ajaxUrl":"https:\/\/www.learn2crack.com\/wp-admin\/admin-ajax.php","options":{"demo":0,"actualUrls":false,"text":{"header":"This content is locked!","message":"Please support us, use one of the buttons below to unlock the content."},"theme":"flat","lang":"en_US","overlap":{"mode":"full","position":"middle","altMode":"transparence"},"highlight":1,"googleAnalytics":1,"locker":{"counter":1,"loadingTimeout":20000,"tumbler":false,"naMode":"show-error","inAppBrowsers":"visible_with_warning","inAppBrowsersWarning":"You are viewing this page in the {browser}. The locker may work incorrectly in this browser. Please open this page in a standard browser.","close":0,"mobile":1,"expires":0},"proxy":"https:\/\/www.learn2crack.com\/wp-admin\/admin-ajax.php?action=opanda_connect","groups":["social-buttons"],"socialButtons":{"counters":1,"order":["facebook-like","google-plus","twitter-follow"],"behaviorOnError":"show_error","behaviorError":"Unable to create social buttons. Please make sure that nothing blocks loading of social scripts in your browser. Some browser extentions (Avast, PrivDog, AdBlock, Adguard etc.) or usage of private tabs in FireFox may cause this issue. Turn them off and try again.","facebook":{"appId":"117100935120196","lang":"en_US","version":"v2.6","like":{"url":"https:\/\/www.facebook.com\/Learn2CrackOfficial","title":"like","theConfirmIssue":0},"share":{"url":"https:\/\/www.learn2crack.com\/2016\/09\/android-user-registration-login-node-server.html","shareDialog":0}},"twitter":{"lang":"en","tweet":{"url":"https:\/\/www.learn2crack.com\/2016\/09\/android-user-registration-login-node-server.html","doubleCheck":0,"title":"tweet"},"follow":{"url":"https:\/\/twitter.com\/learn2crack","title":"follow us","doubleCheck":0,"hideScreenName":0}},"google":{"clientId":"1082972534860-l2fhon3o7rg5942alad4k16v7nl6avum.apps.googleusercontent.com","lang":"en","plus":{"url":"https:\/\/plus.google.com\/+Learn2crackOfficial","title":"+1 us"},"share":{"url":"https:\/\/www.learn2crack.com\/2016\/09\/android-user-registration-login-node-server.html","title":"share"}},"youtube":{"subscribe":{"clientId":"1082972534860-l2fhon3o7rg5942alad4k16v7nl6avum.apps.googleusercontent.com","title":"Youtube"}},"linkedin":{"share":{"url":"https:\/\/www.learn2crack.com\/2016\/09\/android-user-registration-login-node-server.html","title":"share"}}},"lazy":false},"_theme":"flat","_style":null,"ajax":false,"stats":true};</script> <script type="text/javascript">/* <![CDATA[ */ // <![CDATA[
        var disqus_shortname = 'learn2crack';
        (function () {
            var nodes = document.getElementsByTagName('span');
            for (var i = 0, url; i < nodes.length; i++) {
                if (nodes[i].className.indexOf('dsq-postid') != -1 && nodes[i].parentNode.tagName == 'A') {
                    nodes[i].parentNode.setAttribute('data-disqus-identifier', nodes[i].getAttribute('data-dsqidentifier'));
                    url = nodes[i].parentNode.href.split('#', 1);
                    if (url.length == 1) { url = url[0]; }
                    else { url = url[1]; }
                    nodes[i].parentNode.href = url + '#disqus_thread';
                }
            }
            var s = document.createElement('script');
            s.async = true;
            s.type = 'text/javascript';
            s.src = '//' + disqus_shortname + '.disqus.com/count.js';
            (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
        }());
        // ]]> /* ]]> */</script> <script type="text/javascript">$us.headerSettings = {"default":{"options":{"orientation":"hor","sticky":true,"scroll_breakpoint":100,"transparent":"0","width":300,"elm_align":"center","top_show":"0","top_height":40,"top_sticky_height":0,"top_fullwidth":0,"middle_height":100,"middle_sticky_height":50,"middle_fullwidth":0,"bg_img":"","bg_img_wrapper_start":"","bg_img_size":"cover","bg_img_repeat":"repeat","bg_img_attachment":1,"bg_img_position":"top center","bgimage_wrapper_end":"","bottom_show":"0","bottom_height":50,"bottom_sticky_height":50,"bottom_fullwidth":0},"layout":{"top_left":[],"top_center":[],"top_right":[],"middle_left":["image:2"],"middle_center":[],"middle_right":["menu:1","search:1"],"bottom_left":[],"bottom_center":[],"bottom_right":[],"hidden":[]}},"tablets":{"options":{"orientation":"hor","sticky":true,"scroll_breakpoint":100,"transparent":"0","width":300,"elm_align":"center","top_show":0,"top_height":36,"top_sticky_height":36,"top_fullwidth":0,"middle_height":80,"middle_sticky_height":50,"middle_fullwidth":0,"bg_img":"","bg_img_wrapper_start":"","bg_img_size":"cover","bg_img_repeat":"repeat","bg_img_attachment":1,"bg_img_position":"top center","bgimage_wrapper_end":"","bottom_show":0,"bottom_height":50,"bottom_sticky_height":50,"bottom_fullwidth":0,"breakpoint":900},"layout":{"top_left":[],"top_center":[],"top_right":[],"middle_left":["image:2"],"middle_center":[],"middle_right":["menu:1","search:1"],"bottom_left":[],"bottom_center":[],"bottom_right":[],"hidden":[]}},"mobiles":{"options":{"orientation":"hor","sticky":"1","scroll_breakpoint":50,"transparent":"0","width":300,"elm_align":"center","top_show":0,"top_height":36,"top_sticky_height":36,"top_fullwidth":0,"middle_height":50,"middle_sticky_height":50,"middle_fullwidth":0,"bg_img":"","bg_img_wrapper_start":"","bg_img_size":"cover","bg_img_repeat":"repeat","bg_img_attachment":1,"bg_img_position":"top center","bgimage_wrapper_end":"","bottom_show":0,"bottom_height":50,"bottom_sticky_height":50,"bottom_fullwidth":0,"breakpoint":600},"layout":{"top_left":[],"top_center":[],"top_right":[],"middle_left":["menu:1"],"middle_center":["image:2"],"middle_right":["search:1"],"bottom_left":[],"bottom_center":[],"bottom_right":[],"hidden":[]}}};</script> <script type="text/javascript" src="./config_files/custom_front-6e3aa96f07176bed6142b49a9849c148.js.download" data-minify="1"></script> <script type="text/javascript" src="./config_files/effect.min-1.11.4.js.download"></script> <script type="text/javascript" src="./config_files/effect-highlight.min-1.11.4.js.download"></script> <script type="text/javascript">/* <![CDATA[ */ var facebookSDK = {"appId":"117100935120196","lang":"en_US"};
var __pandalockers = {"lang":[],"postId":"4642","visibility":[],"managedInitHook":""}; /* ]]> */</script> <script type="text/javascript" src="./config_files/lockers.020300.min.js.download"></script> <script type="text/javascript" src="./config_files/jquery.magnific-popup-7e97a8ee36e6e43eb4b1bf93b93a78b1.js.download" data-minify="1"></script> <script type="text/javascript" src="./config_files/us.core.min-4.10.2.js.download"></script> <script type="text/javascript">var q2w3_sidebar_options = new Array();
q2w3_sidebar_options[0] = { "sidebar" : "default_sidebar", "margin_top" : 65, "margin_bottom" : 650, "stop_id" : "", "screen_max_width" : 1000, "screen_max_height" : 512, "width_inherit" : true, "refresh_interval" : 1500, "window_load_hook" : false, "disable_mo_api" : false, "widgets" : ['text-7'] };</script> <script type="text/javascript" src="./config_files/q2w3-fixed-widget.min-5.0.4.js.download"></script> <script type="text/javascript">/* <![CDATA[ */ var newsletter = {"messages":{"email_error":"The email is not correct","name_error":"The name is not correct","surname_error":"The last name is not correct","privacy_error":"You must accept the privacy statement"},"profile_max":"20"}; /* ]]> */</script> <script type="text/javascript" src="./config_files/validate-795103c6a2898db2c763ec4148c27083.js.download" data-minify="1"></script> <script type="text/javascript" src="./config_files/wp-embed.min.js.download"></script> <script type="text/javascript" src="./config_files/jquery.royalslider.min-9.5.7.js.download"></script> <script type="text/javascript" src="./config_files/comment-reply.min.js.download"></script> <script type="text/javascript">/* Zephyr elements customizations */

	// w-search
	!function($){
		"use strict";

		$.fn.wSearch = function(){

			return this.each(function(){
				var $container = $(this),
					$form = $container.find('.w-search-form'),
					$btnOpen = $container.find('.w-search-open'),
					$btnClose = $container.find('.w-search-close'),
					$input = $form.find('[name="s"]'),
					$overlay = $container.find('.w-search-background'),
					$window = $(window),
					searchOverlayInitRadius = 25,
					showHideTimer = null,
					isFullScreen = $container.hasClass('layout_fullscreen'),
					searchHide = function(){
						$container.removeClass('active');
						$input.blur();
						if (isFullScreen) {
							$form.css({
								'-webkit-transition': 'opacity 0.4s',
								transition: 'opacity 0.4s'
							});
							window.setTimeout(function(){
								$overlay
									.removeClass('overlay-on')
									.addClass('overlay-out')
									.css({
										'-webkit-transform': 'scale(0.1)',
										'transform': 'scale(0.1)'
									});
								$form.css('opacity', 0);
								clearTimeout(showHideTimer);
								showHideTimer = window.setTimeout(function(){
									$form.css('display', 'none');
									$overlay.css('display', 'none');
								}, 700);
							}, 25);
						}
					};

				// Handling virtual keyboards at touch devices
				if (isFullScreen && jQuery.isMobile) {
					$input
						.on('focus', function(){
							// Transforming hex to rgba
							var originalColor = $overlay.css('background-color'),
								overlayOpacity = $overlay.css('opacity'),
								matches;
							// RGB Format
							if (matches = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(originalColor)) {
								$form.css('background-color', "rgba(" + parseInt(matches[1]) + "," + parseInt(matches[2]) + "," + parseInt(matches[3]) + ", " + overlayOpacity + ")");
							}
							// Hex format
							else if (matches = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/.exec(originalColor)) {
								$form.css('background-color', "rgba(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + ", " + overlayOpacity + ")");
							}
							// Fault tolerance
							else {
								$form.css('background-color', originalColor);
							}
							$overlay.addClass('mobilefocus');
						})
						.on('blur', function(){
							$overlay.removeClass('mobilefocus');
							$form.css('background-color', 'transparent');
						});
				}

				$btnOpen.click(function(){

					$container.addClass('active');

					if (isFullScreen) {
						var searchPos = $btnOpen.offset(),
							searchWidth = $btnOpen.width(),
							searchHeight = $btnOpen.height();
						// Preserving scroll position
						searchPos.top -= $window.scrollTop();
						searchPos.left -= $window.scrollLeft();
						var overlayX = searchPos.left + searchWidth / 2,
							overlayY = searchPos.top + searchHeight / 2,
							winWidth = $us.canvas.winWidth,
							winHeight = $us.canvas.winHeight,
						// Counting distance to the nearest screen corner
							overlayRadius = Math.sqrt(Math.pow(Math.max(winWidth - overlayX, overlayX), 2) + Math.pow(Math.max(winHeight - overlayY, overlayY), 2)),
							overlayScale = (overlayRadius + 15) / searchOverlayInitRadius;

						$overlay.css({
							width: searchOverlayInitRadius * 2,
							height: searchOverlayInitRadius * 2,
							left: overlayX,
							top: overlayY,
							"margin-left": -searchOverlayInitRadius,
							"margin-top": -searchOverlayInitRadius
						});
						$overlay
							.removeClass('overlay-out')
							.show();
						$form.css({
							opacity: 0,
							display: 'block',
							'-webkit-transition': 'opacity 0.4s 0.3s',
							transition: 'opacity 0.4s 0.3s'
						});
						window.setTimeout(function(){
							$overlay
								.addClass('overlay-on')
								.css({
									"-webkit-transform": "scale(" + overlayScale + ")",
									"transform": "scale(" + overlayScale + ")"
								});
							$form.css('opacity', 1);
							clearInterval(showHideTimer);
							showHideTimer = window.setTimeout(function(){
								$input.focus();
							}, 700);
						}, 25);
					} else {
						showHideTimer = window.setTimeout(function(){
							$input.focus();
						}, 700);
					}

				});

				$input.keyup(function(e){
					if (e.keyCode == 27) searchHide();
				});

				$btnClose.on('click touchstart', searchHide);
			});
		};

		$(function(){
			jQuery('.l-header .w-search').wSearch();
		});
	}(jQuery);


	// w-tabs
	!function($){

		// Extending some of the methods for material design animations
		$us.WTabs.prototype._init = $us.WTabs.prototype.init;
		$us.WTabs.prototype.init = function(container, options){
			this.$tabsBar = $();
			this.curTabWidth = 0;
			this.tabHeights = [];
			this.tabTops = [];
			this._init(container, options);
		};
		$us.WTabs.prototype._cleanUpLayout = $us.WTabs.prototype.cleanUpLayout;
		$us.WTabs.prototype.cleanUpLayout = function(from){
			this._cleanUpLayout(from);
			if (from == 'default' || from == 'ver') {
				this.$tabsBar.remove();
			}
		};
		$us.WTabs.prototype._prepareLayout = $us.WTabs.prototype.prepareLayout;
		$us.WTabs.prototype.prepareLayout = function(to){
			this._prepareLayout(to);
			if (to == 'default' || to == 'ver') {
				this.$tabsBar = $('<div class="w-tabs-list-bar"></div>').appendTo(this.$tabsList);
			}
		};
		$us.WTabs.prototype._measure = $us.WTabs.prototype.measure;
		$us.WTabs.prototype.measure = function(){
			this._measure();
			if (this.basicLayout == 'default') {
				this.minWidth = Math.max.apply(this, this.tabWidths) * this.count;
				this.curTabWidth = this.tabs[0].outerWidth(true);
			}
			else if (this.basicLayout == 'ver') {
				this.tabHeights = [];
				for (var index = 0; index < this.tabs.length; index++) {
					this.tabHeights.push(this.tabs[index].outerHeight(true));
					this.tabTops.push(index ? (this.tabTops[index - 1] + this.tabHeights[index - 1]) : 0);
				}
			}
		};
		// Counts bar position for certain element index and current layout
		$us.WTabs.prototype.barPosition = function(index){
			if (this.curLayout == 'default') {
				var barStartOffset = this.curTabWidth * index,
					barEndOffset = this.curTabWidth * (this.count - index - 1);
				return {
					left: this.isRtl ? barEndOffset : barStartOffset,
					right: this.isRtl ? barStartOffset : barEndOffset
				};
			}
			else if (this.curLayout == 'ver') {
				return {
					top: this.tabTops[index],
					height: this.tabHeights[index]
				};
			}
			else {
				return {};
			}
		};
		$us.WTabs.prototype._openSection = $us.WTabs.prototype.openSection;
		$us.WTabs.prototype.openSection = function(index){
			this._openSection(index);
			if (this.curLayout == 'default' || this.curLayout == 'ver' || this.curLayout == 'modern' || this.curLayout == 'trendy') {
				this.$tabsBar.performCSSTransition(this.barPosition(index), this.options.duration, null, this.options.easing);
			}
		};
		$us.WTabs.prototype._resize = $us.WTabs.prototype.resize;
		$us.WTabs.prototype.resize = function(){
			this._resize();
			if (this.curLayout == 'default' || this.curLayout == 'ver' || this.curLayout == 'modern' || this.curLayout == 'trendy') {
				this.$tabsBar.css(this.barPosition(this.active[0]), this.options.duration, null, this.options.easing);
			}
		};

		jQuery('.w-tabs').wTabs();

	}(jQuery);


	// w-blog
	!function($){
		// TODO Make proper reveal grid animation for "load more"
		$us.WBlog.prototype.beforeAppendItems = function($items){
			//this.$list.addClass('animate_revealgrid');
			//$items.addClass('animate_reveal');
		};
		$us.WBlog.prototype.afterAppendItems = function($items){
			//$items.revealGridMD();
		};
		$(function(){
			$('.w-blog').wBlog();
		});
	}(jQuery);


	// w-portfolio
	jQuery(function($){
		// TODO Make proper reveal grid animation for "load more"
		$us.WPortfolio.prototype.itemLoaded = function(itemID){
			if (this.$container.hasClass('animate_revealgrid')) {
				this.items[itemID].usMod('animate', false).css('opacity', 0);
			}
		};
		$us.WPortfolio.prototype.itemsLoaded = function($items){
			if (this.$container.hasClass('animate_revealgrid')) {
				$items.revealGridMD();
			}
		};

		$('.w-portfolio').wPortfolio();
	});


	// Fixing contact form 7 semantics, when requested
	jQuery('.wpcf7').each(function(){
		var $form = jQuery(this);

		// Removing wrong newlines
		$form.find('br').remove();

		// Fixing quiz layout
		$form.find('.w-form-row .wpcf7-quiz').each(function(){
			var $input = jQuery(this),
				$row = $input.closest('.w-form-row'),
				$field = $row.find('.w-form-row-field:first'),
				$label = $row.find('.wpcf7-quiz-label');
			$label.insertBefore($field).attr('class', 'w-form-row-label');
			$input.unwrap();
		});

		// Removing excess wrappers
		$form.find('.w-form-row-field > .wpcf7-form-control-wrap > .wpcf7-form-control').each(function(){
			var $input = jQuery(this);
			if (($input.attr('type') || '').match(/^(text|email|url|tel|number|date|quiz|captcha)$/) || $input.is('textarea')) {
				// Moving wrapper classes to .w-form-field, and removing the span wrapper
				var wrapperClasses = $input.parent().get(0).className;
				$input.unwrap();
				$input.parent().get(0).className += ' ' + wrapperClasses;
			}
		});

		// Transforming submit button
		$form.find('.w-form-row-field > .wpcf7-submit').each(function(){
			var $input = jQuery(this),
				classes = $input.attr('class').split(' '),
				value = $input.attr('value') || '';
			$input.siblings('p').remove();
			if (jQuery.inArray('w-btn', classes) == -1) {
				classes.push('w-btn');
			}
			var buttonHtml = '<button id="message_send" class="' + classes.join(' ') + '">' +
				'<div class="g-preloader"></div>' +
				'<span class="w-btn-label">' + value + '</span>' +
				'<span class="ripple-container"></span>' +
				'</button>';
			$input.replaceWith(buttonHtml);
		});

		// Adjusting proper wrapper for select controller
		$form.find('.wpcf7-form-control-wrap > select').each(function(){
			var $select = jQuery(this);
			if (!$select.attr('multiple')) $select.parent().addClass('type_select');
		});

		jQuery('<span class="w-form-row-field-bar"></span>').appendTo($form.find('.wpcf7-form-control-wrap'));

		$form.on('mailsent.wpcf7', function(){
			$form.find('.w-form-row.not-empty').removeClass('not-empty');
		});
	});


	// Zephyr special Material Design animations
	jQuery(function($){
		"use strict";

		/**
		 * Material Design Ripples
		 */
		var $body = document.body || document.documentElement,
			$bodyStyle = $body.style,
			isTransitionsSupported = $bodyStyle.transition !== undefined || $bodyStyle.WebkitTransition !== undefined;
		var removeRipple = function($ripple){
			$ripple.off();
			if (isTransitionsSupported) {
				$ripple.addClass("ripple-out");
			} else {
				$ripple.animate({
					"opacity": 0
				}, 100, function(){
					$ripple.trigger("transitionend");
				});
			}
			$ripple.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
				$ripple.remove();
			});
		};

		$.fn.mdRipple = function(){
			return this.each(function(){
				var $element = $(this),
					$container, containerOffset,
					startTimer = null;

				if (!$element.find('.ripple-container').length) {
					$element.append('<span class="ripple-container"></span>');
				}

				$container = $element.find(".ripple-container");

				// Storing last touch event for touchEnd coordinates
				var lastTouch = null;
				if ($.isMobile) {
					$element.on('touchstart touchmove', function(e){
						e = e.originalEvent;
						if (e.touches.length === 1) {
							lastTouch = e.touches[0];
						}
					});
				}

				$element.on($.isMobile ? 'touchend' : 'mouseup', function(e){
					var offsetLeft, offsetTop, offsetRight,
						$ripple = $('<span class="ripple"></span>'),
						rippleSize = Math.max($element.outerWidth(), $element.outerHeight()) / Math.max(20, $ripple.outerWidth()) * 2.5;

					containerOffset = $container.offset();

					// get pointer position
					if (!$.isMobile) {
						offsetLeft = e.pageX - containerOffset.left;
						offsetTop = e.pageY - containerOffset.top;
					} else if (lastTouch !== null) {
						offsetLeft = lastTouch.pageX - containerOffset.left;
						offsetTop = lastTouch.pageY - containerOffset.top;
						lastTouch = null;
					} else {
						return;
					}

					if ($('body').hasClass('rtl')) {
						offsetRight = $container.width() - offsetLeft;
						$ripple.css({right: offsetRight, top: offsetTop});
					} else {
						$ripple.css({left: offsetLeft, top: offsetTop});
					}

					(function(){
						return window.getComputedStyle($ripple[0]).opacity;
					})();
					$container.append($ripple);

					startTimer = setTimeout(function(){
						$ripple.css({
							"-webkit-transform": "scale(" + rippleSize + ")",
							"transform": "scale(" + rippleSize + ")"
						});
						$ripple.addClass('ripple-on');
						$ripple.data('animating', 'on');
						$ripple.data('mousedown', 'on');
					}, 25);

					setTimeout(function(){
						$ripple.data('animating', 'off');
						removeRipple($ripple);
					}, 700);

				});
			});
		};

		// Initialize MD Ripples
		jQuery('.w-btn, .w-nav-anchor, .w-portfolio-item-anchor, .w-tabs-item, .w-gallery-item, .g-filters-item, a > .w-blog-post-preview, .w-person.layout_card .w-person-image a, .w-iconbox.style_circle a .w-iconbox-icon, .cl-btn').mdRipple();

		/**
		 * Material Design Reveal Grid: Show grid items with hierarchical timing
		 * @param {Function} onFinish Function to call when the overall grid is revealed
		 */
		$.fn.revealGridMD = function(onFinish){
			var items = $(this),
				shown = false,
				isRTL = $('.l-body').hasClass('rtl');
			if (items.length == 0) return;
			var countSz = function(){
				// The vector between the first item and the opposite x/y
				var mx = isRTL ? 100000 : 0,
					my = 0;
				// Retrieving items positions
				var sz = items.map(function(){
					var $this = jQuery(this),
						pos = $this.position();
					pos.width = $this.width();
					pos.height = $this.height();
					// Center point
					pos.cx = pos.left + parseInt(pos.width / 2);
					pos.cy = pos.top + parseInt(pos.height / 2);
					mx = Math[isRTL ? 'min' : 'max'](mx, pos.cx);
					my = Math.max(my, pos.cy);
					return pos;
				});
				var wx = mx - sz[0].cx,
					wy = my - sz[0].cy,
					wlen = Math.abs(wx * wx + wy * wy);
				// Counting projection lengths
				for (var i = 0; i < sz.length; i++) {
					// Counting vector to this item
					var vx = sz[i].cx - sz[0].cx,
						vy = sz[i].cy - sz[0].cy;
					sz[i].delta = (vx * wx + vy * wy) / wlen;
				}
				return sz;
			};
			var sz = countSz();
			items.css('opacity', 0).each(function(i, item){
				var $item = $(item);
				$item.performCSSTransition({
					opacity: 1
				}, 400, function(){
					$item.removeClass('animate_reveal');
					if (onFinish && typeof onFinish == 'function' && i == items.length - 1) onFinish();
				}, null, 750 * sz[i].delta);
			});
		};

		$('.animate_revealgrid').each(function(){
			$us.scroll.addWaypoint($(this), '15%', function($elm){
				var $items = $elm.find('.animate_reveal');
				if ($us.$body.hasClass('disable_effects')) return $items.removeClass('animate_reveal');
				$items.revealGridMD(function(){
					// Compatibility with isotope
					if (!$.fn.isotope) return;
					var isotope = $items.parent().data('isotope');
					if (isotope) {
						$.each(isotope.items, function(index, item){
							item.disableTransition();
						});
					}
				});
			});
		});
	});</script><meta property="fb:pages" content="268375233305564"> <script type="text/javascript">function _dmBootstrap(file) {
        var _dma = document.createElement('script');
        _dma.type = 'text/javascript';
        _dma.async = true;
        _dma.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + file;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_dma);
    }
    function _dmFollowup(file) { if (typeof DMAds === 'undefined') _dmBootstrap('cdn2.DeveloperMedia.com/a.min.js'); }
    (function () { _dmBootstrap('cdn1.DeveloperMedia.com/a.min.js'); setTimeout(_dmFollowup, 2000); })();</script> <script type="text/javascript">(function() {
        function async_load(script_url){
            var protocol = ('https:' == document.location.protocol ? 'https://' : 'http://');
            var s = document.createElement('script'); s.src = protocol + script_url;
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        }
        bm_website_code = '34F17DA71AE148D8';
        jQuery(document).ready(function(){async_load('asset.pagefair.com/measure.min.js')});
        jQuery(document).ready(function(){async_load('asset.pagefair.net/ads.min.js')});
    })();</script><script type="text/javascript">(function() {
				var po = document.createElement('script'); po.type = 'text/javascript'; po.async=true;;
				po.src = 'https://www.learn2crack.com/wp-content/plugins/easy-social-share-buttons3/assets/js/essb-core.min.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();</script><script type="text/javascript">var essb_handle_stats = function(oService, oPostID, oInstance) { var element = jQuery('.essb_'+oInstance); var instance_postion = jQuery(element).attr("data-essb-position") || ""; var instance_template = jQuery(element).attr("data-essb-template") || ""; var instance_button = jQuery(element).attr("data-essb-button-style") || ""; var instance_counters = jQuery(element).hasClass("essb_counters") ? true : false; var instance_nostats = jQuery(element).hasClass("essb_nostats") ? true : false; if (instance_nostats) { return; } var instance_mobile = false; if( (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent) ) { instance_mobile = true; } if (typeof(essb_settings) != "undefined") { jQuery.post(essb_settings.ajax_url, { 'action': 'essb_stat_log', 'post_id': oPostID, 'service': oService, 'template': instance_template, 'mobile': instance_mobile, 'position': instance_postion, 'button': instance_button, 'counter': instance_counters, 'nonce': essb_settings.essb3_nonce }, function (data) { if (data) { }},'json'); } };var essb_clicked_lovethis = false; var essb_love_you_message_thanks = "Thank you for loving this."; var essb_love_you_message_loved = "You already love this today.";</script>  <script>(function($){ if ( window.bizpanda && window.bizpanda.initLockers ) { window.bizpanda.initLockers(); } })(jQuery); (function($){ $(function(){ if ( window.bizpanda && window.bizpanda.initLockers ) return; $.getScript( "https://www.learn2crack.com?2b6e51feb86b46=c14be324d4", function() { if ( window.bizpanda && window.bizpanda.initLockers ) window.bizpanda.initLockers(); }); }); })(jQuery);</script> 
<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me - Debug: cached@1518892815 --><iframe style="display: none;" src="./config_files/saved_resource(2).html"></iframe><div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe name="fb_xdm_frame_https" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" src="./config_files/lY4eZXm_YWu.html" style="border: none;"></iframe></div></div><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe name="fd5ac87bcd246c" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" src="./config_files/ping.html" style="display: none;"></iframe></div></div></div></body></html>