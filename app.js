var btnhovers = document.querySelectorAll('.btn-hover');
var src =["image/blog.PNG","image/piroll.PNG","image/responsive.PNG","image/stdiohue.PNG","image/notify.PNG"];
var nameOfProject =["BLOG CIONE","PIROLL","RESPONSIVE PROJECT","STDIOHUE","NOTIFY THEME"];
var language =["HTML, CSS", "HTML,CSS", "HTML, CSS", "HTML,CSS", "HTML,CSS"];
var tech =["NONE", "RESPONSIVE", "RESPONSIVE", "RESPONSIVE", "NONE"];
var link =["https://ducphuc1202.github.io/PROJECT_WEB_BLOG/", "https://ducphuc1202.github.io/PIROLL-PROJECT/",
          "https://ducphuc1202.github.io/REPONSIVE-WEB/","https://ducphuc1202.github.io/STDIOHUE/",
          "https://ducphuc1202.github.io/NOTIFY-PSD-THEME-CIONE/"];
document.addEventListener('mouseover', function(evt) {
    if(evt.target.matches('.about')){
        document.querySelector('.myself').classList.add('moveleft');
    }
    if(evt.target.matches('.skill')) {
        document.querySelector('.html').classList.add('movewidth90');
        document.querySelector('.css').classList.add('movewidth70');
        document.querySelector('.js').classList.add('movewidth50');
    }
    if(evt.target.matches('.content')) {
        evt.target.lastElementChild.classList.add('move-up');
        setTimeout(function() {
            evt.target.lastElementChild.classList.add('fixed-text');
        }, 2000);
    }
    if(evt.target.matches('.main-text')) {
        evt.target.classList.add('move-up');
        setTimeout(function() {
            evt.target.classList.add('fixed-text');
        }, 2000);
    }
    if(evt.target.matches('.square')) {
        evt.target.parentElement.classList.add('hover-up');
    }
    if(evt.target.matches('.fa')) {
        evt.target.parentElement.parentElement.classList.add('hover-up');
    }
//     if(evt.target.matches('.btn-hover')) {
//         var index = 0;
//         for(let i = 0; i < btnhovers.length; i++) {
//             if(btnhovers[i].isSameNode(evt.target)) {
//                 index = i;
//                 break;
//             }  
//         }
//         var picture = document.querySelector('.pr');
//         if(picture.classList.contains('visible')) {
//             picture.classList.remove('visible');
//         }
//          setTimeout(function() {
//             picture.setAttribute('src', src[index]);
//             picture.classList.add('visible');
//          },200);
//         var info = document.querySelector('.current-info');
//         if(info.classList.contains('moveleft')) {
//             info.classList.remove('moveleft');
//         }
//         setTimeout(function() {
//             document.querySelector('.title-name').textContent = nameOfProject[index];
//             document.querySelector('.language-name').textContent = language[index];
//             document.querySelector('.tech-name').textContent = tech[index];
//             document.querySelector('.view').setAttribute('href',link[index]);
//             info.classList.add('moveleft');
//         },400);
//     }
})
var btnhovers = document.querySelectorAll('.btn-hover');
for(let t = 0; t < btnhovers.length; t++) {
    btnhover = btnhovers[t];
    btnhover.addEventListener('mouseover', function(evt) {
    var index = 0;
        for(let i = 0; i < btnhovers.length; i++) {
            if(btnhovers[i].isSameNode(evt.target)) {
                index = i;
                break;
            }  
        }
        var picture = document.querySelector('.pr');
        if(picture.classList.contains('visible')) {
            picture.classList.remove('visible');
        }
         setTimeout(function() {
            picture.setAttribute('src', src[index]);
            picture.classList.add('visible');
         },200);
        var info = document.querySelector('.current-info');
        if(info.classList.contains('moveleft')) {
            info.classList.remove('moveleft');
        }
        setTimeout(function() {
            document.querySelector('.title-name').textContent = nameOfProject[index];
            document.querySelector('.language-name').textContent = language[index];
            document.querySelector('.tech-name').textContent = tech[index];
            document.querySelector('.view').setAttribute('href',link[index]);
            info.classList.add('moveleft');
        },400);
    })
}
document.addEventListener('mouseout', function(evt) {
    if(evt.target.matches('.square')) {
       evt.target.parentElement.classList.remove('hover-up');
    }
})
var i = 0;

document.addEventListener('click', function(evt) {
//     if(evt.target.matches('.menu-icon') || evt.target.matches('.fa-bars')) {
//         document.querySelector('.list').classList.toggle('hidden');
//     }
    if(evt.target.matches('.btn-goup') || evt.target.matches('.fa-chevron-up')) {
        window.scroll( {
            top: 0,
            behavior: "smooth"
        });
    }
})
var menuicon = document.querySelector('.menu-icon');
menuicon.addEventListener('click', function(evt) {
    document.querySelector('.list').classList.toggle('hidden');
})
var sendbtn = document.querySelector('#send');
sendbtn.addEventListener('click', function(evt) {
        var it = document.createElement('i');
        evt.preventDefault();
        it.classList.add('fa', 'fa-check');
        evt.target.textContent = "";
        evt.target.appendChild(it);
        evt.target.classList.add('sended');
})

var height = window.innerHeight;
console.log(height);
var pos = height - 85;
var goup = document.querySelector('.btn-goup');
    goup.setAttribute('style', 'top:' + pos + 'px');

document.addEventListener('scroll', function(evt) {
    if(window.scrollY >= 500) {
        goup.classList.remove('hidden');
    }
    else {
        goup.classList.add('hidden');
    }
})
