async function load() {
    const text = 'Darren Ho'
    let chars = text.split('');
    console.log(chars)
    var vis = true;
    var ele = document.getElementById('typetext');
    ele.setAttribute('style', 'color: white;')

    
    var interval = setInterval(function () {
        if (chars[ele.innerText.length] == undefined){
            setTimeout(() => { ele.classList.add('loadanimate')}, 200);
            clearInterval(interval)
        } else if (chars[ele.innerText.length] == ' '){
          ele.innerHTML = ele.innerHTML + '&nbsp'
        } else {
            ele.innerHTML = ele.innerHTML + chars[ele.innerText.length]
        }
    }, 150)

    ele.addEventListener('animationend', function() {
        document.getElementById('loading').classList.add('hidden')
        document.getElementById('main').classList.remove('hidden')
    })
}

$(document).ready(function() {
    $(window).scroll(function() {
        $('.page').each(function(i) {
            var bottomofobj = $(this).position().top + $(this).outerHeight();
            var topofobj = $(this).position().top
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop()
            var midofobj = (topofobj + bottomofobj) / 2
            var middle_of_window = (top_of_window + bottom_of_window)/5;
            var opacity;
            if (bottom_of_window < bottomofobj) {
                opacity = (bottom_of_window - midofobj) / ($(window).height() / 3) 
            } else {
                opacity = (midofobj - top_of_window) / ($(window).height() / 3)
            }


            $(this).css('opacity', opacity)
        })
    })
})


function email(){
    navigator.clipboard.writeText('dho6342568911@gmail.com');
}