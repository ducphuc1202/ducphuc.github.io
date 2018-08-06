var $btnhovers = $('.btn-hover');
var src =["image/blog.PNG","image/piroll.PNG","image/responsive.PNG","image/stdiohue.PNG","image/notify.PNG"];
var nameOfProject =["BLOG CIONE","PIROLL","RESPONSIVE PROJECT","STDIOHUE","NOTIFY THEME"];
var language =["HTML, CSS", "HTML,CSS", "HTML, CSS", "HTML,CSS", "HTML,CSS"];
var tech =["NONE", "RESPONSIVE", "RESPONSIVE", "RESPONSIVE", "NONE"];
var link =["https://ducphuc1202.github.io/PROJECT_WEB_BLOG/", "https://ducphuc1202.github.io/PIROLL-PROJECT/",
          "https://ducphuc1202.github.io/REPONSIVE-WEB/","https://ducphuc1202.github.io/STDIOHUE/",
          "https://ducphuc1202.github.io/NOTIFY-PSD-THEME-CIONE/"];
/*
    @scroll and click to scroll up button
*/
var height = window.innerHeight;
var pos = height - 85;
var $goup = $('.btn-goup');
$goup.attr('style', 'top:' + pos + 'px');
document.addEventListener('scroll', function(evt) {
    if(window.scrollY >= 500) {
        $goup.removeClass('hidden');
    }
    else {
        $goup.addClass('hidden');
    }
})
$('.btn-goup').click(function() {
    window.scroll( {
            top: 0,
            behavior: "smooth"
        });
})

/*
    @menu-icon
*/
$('.menu-icon').click(function() {
    $('.list').toggleClass('hidden');
    if(!$('.list').hasClass('hidden'))
        $(this).children('i').removeClass('fa-bars').addClass('fa-times');
    else $(this).children('i').removeClass('fa-times').addClass('fa-bars');
})

/*
    @time-card
*/
$('.about').mouseover(function() {
    $(this).find('.myself').addClass('moveleft');
})

/*
    @skill animation
*/
$('.skill').mouseover(function() {
    $('.html').addClass('movewidth90');
    $('.css').addClass('movewidth75');
    $('.js').addClass('movewidth50');
})
/*
    @time-card
*/
$('.content').mouseover(function() {
    $(this).find('.main-text').addClass('move-up fixed-text');
});

/*
    @social button
*/
$('.btn-social').hover(function() {
    $(this).animate({
        top: "-10px"
    }, 800)
}, function() {
    $(this).animate({
        top: "0px"
    }, 800)
})

/*
    @hover btn project
    Note: To check 2 two is Same or Not, use $Node1.is($Node2);
*/
var index = 0;
$('.hover-view').on('mouseover','.btn-hover', function() {
    for(let i = 0; i <$btnhovers.length; i++){
        if($($btnhovers[i]).is($(this))) {
            index = i;
            break;
        }   
    }
    var $picture = $('.pr');
    if($picture.hasClass('visible'))
        $picture.removeClass('visible');
    setTimeout(function() {
        $picture.attr('src', src[index]);
        $picture.addClass('visible');
    },300);
    var $info = $('.current-info');
    if($info.hasClass('moveleft')) {
        $info.removeClass('moveleft');
    }
    setTimeout(function() {
        $('.title-name').text(nameOfProject[index]);
        $('.language-name').text(language[index]);
        $('.tech-name').text(tech[index]);
        $('.view').attr('href',link[index]);
        $info.addClass('moveleft');
    },400);
})

/* 
    @Check form
*/
function checkLength($selector) {
    if($selector.val().length > 0)
        return true;
    return false;
}

/*
    @send-form-button
*/
$('#send').click(function(evt) {
    if(checkLength($("#name")) && checkLength($("#mail")) && checkLength($("#form-content"))) {
        var $check = $('<i class="fa fa-check"></i>');
        $(this).text("");
        $(this).append($check).animate({
            width: "30px",
            height: "30px",
            borderRadius: "50%"
        }, 400);
//        alert("Gui thong tin thanh cong");
    }
    else {
        evt.preventDefault();
        alert("Vui lòng điền thông tin đầy đủ trước khi gửi");
    }
})
