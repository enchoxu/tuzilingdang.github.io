(function(){
	var _textlogo = document.getElementById("textlogo");
	var _siteName = document.getElementsByClassName("site-name")[0];
	var _blogMotto = document.getElementsByClassName("blog-motto")[0];
	var _articleInfo = document.getElementsByClassName("article-info")[0];
	var _time = document.getElementsByClassName("article-time")[0];

	_siteName.innerHtml = "姬马婧雯";
	_blogMotto.style.display = "none";
	_articleInfo.style.display = "none";
	_time.style.display = "none";

	console.log(_siteName.innerHtml)
})();



