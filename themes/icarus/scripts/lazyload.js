'use strict';
var cheerio = require('cheerio');
var cdnUrl = "https://blogstatic.ccsyue.com";//"http://blogstatic.ccsyue.com";http://blogccsyuecom.b0.upaiyun.com
var baseUrl = '/';
var loading = cdnUrl+"/images/loading.gif";
var oldsrc = '';

function stringStartsWith(string, prefix) {
    return string.slice(0, prefix.length) == prefix;
}
function lazyloadImg(source) {
    var $ = cheerio.load(source, {
        decodeEntities: false
    });
    $('img').each(function(index, element) {
        oldsrc = $(element).attr('src');
	if(stringStartsWith(oldsrc, '/source')){
	    oldsrc= oldsrc.substr(7);	
	}
        if (oldsrc && stringStartsWith(oldsrc, baseUrl)  && !$(element).hasClass('hx_lazyimg') && !$(element).hasClass('skip')) {
	    $(element).addClass('hx_lazyimg');
            $(element).attr({
                src: loading,
                'data-original': cdnUrl + oldsrc
            });
			
        }
    });
	
     	/*$('link').each(function(index, element) {
		oldsrc = $(element).attr('href');
		if(oldsrc && stringStartsWith(oldsrc, '/')){
		    oldsrc= cdnUrl + oldsrc;	
		    $(element).attr('href',oldsrc);
		}
	        
    	});
	
	$('script').each(function(index, element) {
		oldsrc = $(element).attr('src');
		if(oldsrc && stringStartsWith(oldsrc, '/')){
		    oldsrc= cdnUrl + oldsrc;
		    $(element).attr('src',oldsrc);
		}
		
    	});*/
    return $.html();
}
hexo.extend.filter.register('after_render:html', lazyloadImg);
