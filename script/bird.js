$(document).ready(function(){
    $('html,body').animate({scrollTop:'5px'},300);
    $(document).on('touchstart',function(){});
    let second=10;
    let score=0;
    let timer;
    let counter;
    let num=0;
    let num2=0;
    let clickable=false;
    function randomTarget(){
        num=Math.floor(Math.random()*9);
        $('.b'+num).find('img').attr('src','images/bird1.png');
        $('.b'+num).find('img').stop().fadeIn(100).delay(700).fadeOut(100);
        clickable=true;
        num2=Math.floor(Math.random()*2);
        if(num2==1){
            $('.b'+num).find('img').attr('src','images/bird3.png');
        }
    }
    timer=setInterval(randomTarget,600);
    function countdown(){
        second--;
        $('.second').text(second);
        if(second==0){
            clearInterval(counter);
            clearInterval(timer);
            $('.play').hide();
            $('.end').show();
            $('.end').find('.score').text(score*100);
        }
    }
    counter=setInterval(countdown,1500);
    
    $('.bird > .bird1').click(function(){
        if(num2!=1){
            score--;
            $('.play .num').text(score);
            clickable=false;
            $(this).attr('src','images/bird4.png');
        }else if(num2==1){
            score++;
            $('.play .num').text(score);
            $(this).attr('src','images/bird2.png');
        }
    });
    $('.end .again').click(function(){
        second=10;
        score=0;
        num=0;
        clickable=false;
        timer=setInterval(randomTarget,900);
        counter=setInterval(countdown,1000);
        $('.play').show();
        $('.play').find('.num').text(score);
        $('.play').find('.second').text(second);
        $('.end').hide();
    });
});