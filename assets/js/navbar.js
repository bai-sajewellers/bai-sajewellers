const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
const links = document.getElementsByClassName('links')[0]
const menu = document.getElementsByClassName('menu')[0]
const main = document.getElementsByClassName('main')[0]
var click = 1

toggleMenu.addEventListener('click', () => {
    links.classList.toggle('active');
    if (click % 2 == 0) {
        menu.style.display = 'none';
        main.style.marginTop = '0';
    }
    else {
        menu.style.display = 'flex';
        main.style.marginTop = '6rem';
    }
    click++;
    
})