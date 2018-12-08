 $(function(){
   layer.open({
     type: 1,
     area: '255',
     title:null,
     shadeClose: true, 
     content: '<a href="http://t.cn/EyuqN6F" target="_blank"><img width="200" height="200" src="https://www.luolipapa.ml/05.gif" /></a>' //è¿™é‡Œæ˜¯ä¿®æ”¹å›¾ç‰‡åœ°å€å’Œå›¾ç‰‡é“¾æŽ¥çš„
   });
   var top = ($(window).height() - 180) / 2;
   var left = $(window).width() / 2 - 180/ 2;
   layer.style(1, {
     top: top,
     left:left
   });
});
