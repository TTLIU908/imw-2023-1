let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active')
}

let cursorl = document.querySelector('.crusor-1');
let cursorl = document.querySelector('.crusor-2');

window.onmousemove = () =>{
    cursorl.style.top = e.pageY + 'px';
    cursorl.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursorl.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursorl.classList.remove('active');
        cursor2.classList.remove('active');
    }

});