import './styles.css';
import menu from './data/menu.json';
import createMenu from './templates/menuTemplate.hbs';

const refs = {
    menuList: document.querySelector('.js-menu'),
    body: document.body,
    switchBtn: document.querySelector('.theme-switch__toggle'),
}

refs.menuList.insertAdjacentHTML('beforeend', createMenu(menu));
refs.switchBtn.addEventListener('click', onChangeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switchBtn.checked = localStorage.getItem('Theme') === Theme.DARK;
refs.body.classList.add(localStorage.getItem('Theme') === null ? Theme.LIGHT : localStorage.getItem('Theme'))

function toggleTheme(rem, add) {
  refs.body.classList.replace(rem,add)
  localStorage.setItem('Theme', add)
}

function onChangeTheme(event) {
  if (event.target.checked) {
  toggleTheme(Theme.LIGHT,Theme.DARK)
    return
  }
 toggleTheme(Theme.DARK, Theme.LIGHT)
}
