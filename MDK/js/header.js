var menu = document.getElementById('menu'); 
var blind_menu = document.getElementById('blind_menu');

function menuOpen() {
    blind_menu.classList.remove('blind_menu_close');
    blind_menu.classList.add('blind_menu_open');
    menu.classList.remove('menu_close');
    menu.classList.add('menu_open');
    document.body.style.overflow = 'hidden';
}
function menuClose() {
    blind_menu.classList.remove('blind_menu_open');
    blind_menu.classList.add('blind_menu_close');
    menu.classList.remove('menu_open');
    menu.classList.add('menu_close');
    document.body.style.overflow = 'visible';
}
document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        menuClose();
    }
}
