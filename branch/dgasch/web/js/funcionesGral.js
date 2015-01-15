function aviso(data){
    $('body').prepend('<div class="avisoContainer" style="display:none" align="center"><div class="aviso"  align="center">'+data+'</div></div>');
    $('.avisoContainer').fadeIn('slow',function(){
        window.location='#';
        setTimeout("$('.avisoContainer').fadeOut('slow',function(){   $('.avisoContainer').remove();   })",4000)
    });
}
  
