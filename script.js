const dropDwns = document.querySelectorAll('.drop-dwn-container');
const dropDwnBtns = document.querySelectorAll('.drop-dwn-btn')
const dropDwnIcons = document.querySelectorAll('.drop-dwn-icon');
const menuItems = document.querySelectorAll('.menu-itm');
const arrows = document.querySelectorAll('.up-arrow');
const dropDwnMenus = document.querySelectorAll('.drop-dwn-menu');

dropDwns.forEach((dropDwn, index) => {
  dropDwn.addEventListener('mouseover', () => {
    dropDwnBtns[index].style = 'background-color: #8FD5A6;';
    dropDwnIcons[index].innerHTML = '&#x25BC;'
    arrows[index].style.display = 'block';
    dropDwnMenus[index].style.display = 'flex';
  });
  
  dropDwn.addEventListener('mouseout', () => {
    dropDwnBtns[index].style = 'background-color: none';
    dropDwnIcons[index].innerHTML = '&#x25B2;'
    arrows[index].style.display = 'none';
    dropDwnMenus[index].style.display = 'none';
  });
});



menuItems.forEach(menuItem => {
  menuItem.addEventListener('mouseover', () => {
    menuItem.style = 'background-color: #8FD5A6;';
  });

  menuItem.addEventListener('mouseout', () => {
    menuItem.style = 'background-color: white;';
  })
});