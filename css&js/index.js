$(document).ready(()=>{
   $('.blue').click(()=>{
    $('img').attr("src","blue.jpg")  && $('.red').removeClass('border')  && $('.silver').removeClass('border')
    && $('.grey').removeClass('border') && $('.blue').addClass('border')
    && $('#CR').css('width','40%')  && $('#prmc').css('width','60%') && $('#intr').css('width','55%')
    && $('#sft').css('width','40%') && $('#rlbt').css('width','90%')

    && $('#crs').text('40')  &&  $('#prmcs').text('60') && $('#intrs').text('55')
    && $('#sfts').text('40') && $('#rlbts').text('90') 
    && $('#rating').text('70') && $('#niddle').css("transform","rotate(30deg)")
   })
   
   $('.red').click(()=>{
    $('img').attr("src","red.jpg") && $('.red').addClass('border')
     && $('.blue').removeClass('border')  && $('.silver').removeClass('border')
     && $('.grey').removeClass('border')
     && $('#CR').css('width','70%')  && $('#prmc').css('width','80%') && $('#intr').css('width','55%')
     && $('#sft').css('width','80%') && $('#rlbt').css('width','85%') &&

      $('#crs').text('70')  && $('#prmcs').text('80') && $('#intrs').text('55')
     && $('#sfts').text('80') && $('#rlbts').text('85')
     && $('#rating').text('80') && $('#niddle').css("transform","rotate(40deg)")
   })
   $('.grey').click(()=>{
    $('img').attr("src","grey.jpg")  && $('.blue').removeClass('border')  && $('.silver').removeClass('border')
    && $('.red').removeClass('border') && $('.grey').addClass('border') 
    && $('#CR').css('width','30%')  && $('#prmc').css('width','40%') && $('#intr').css('width','50%')
    && $('#sft').css('width','70%') && $('#rlbt').css('width','45%')
    && $('#crs').text('30')  && $('#prmcs').text('40') && $('#intrs').text('50')
    && $('#sfts').text('70') && $('#rlbts').text('45')
    && $('#rating').text('50') && $('#niddle').css("transform","rotate(50deg)")
   })
   $('.silver').click(()=>{
    $('img').attr("src","silver.jpg")  && $('.blue').removeClass('border')  && $('.silver').addClass('border')
    && $('.grey').removeClass('border') && $('.red').removeClass('border')
    && $('#CR').css('width','40%')  && $('#prmc').css('width','50%') && $('#intr').css('width','95%')
    && $('#sft').css('width','90%') && $('#rlbt').css('width','70%')
    && $('#crs').text('40')  && $('#prmcs').text('50') && $('#intrs').text('95')
    && $('#sfts').text('90') && $('#rlbts').text('70')
    && $('#rating').text('90') && $('#niddle').css("transform","rotate(60deg)")


    
   })



   


 
   
})