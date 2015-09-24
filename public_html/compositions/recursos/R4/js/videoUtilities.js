function setVideoTag(containerObj, videoId, videoSource){
	var videoTag = jQuery('<video/>', {
		id: videoId,
		class:'video-js vjs-default-skin',
		controls: '',
		preload: 'auto'
	});

	videoTag.attr("data-setup", "{}");
	var sourceTag  = jQuery('<source/>', {
		src: videoSource,
		type: 'video/mp4'
	});

	var noHTMLMesageTag = jQuery('<p/>', {
		class: 'vjs-no-js',
	}).html('To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>');
	
	videoTag.append(sourceTag);
	videoTag.append(noHTMLMesageTag);
	
	containerObj.html(videoTag);
	videojs(videoId, {}, function(){
			$("#"+videoId).removeAttr("style");
			$("#"+videoId).css({height: containerObj.height, width: containerObj.width});
			var boton = $("#"+videoId).find("div.vjs-big-play-button");
			boton.css("top", ((containerObj.height()/2)-(boton.height()/2))+"px");
			boton.css("left",((containerObj.width()/2)-(boton.width()/2))+"px");
	});
	
}