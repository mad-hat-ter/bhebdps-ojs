const fontSizes = document.querySelectorAll('.book__control_font-size .font-size');
const bookContent= document.getElementsByClassName('book__content')[0];
const fontColor = document.querySelectorAll('.book__control_color .color');
const background = document.querySelectorAll('.book__control_background .color');
fontSizes.forEach((fontLink) => {
  fontLink.onclick = function (event) {
    event.preventDefault();
    bookContent.classList.remove('font-size_small', 'font-size_big');
    if (fontLink.dataset.size) {
      bookContent.classList.add(`font-size_${fontLink.dataset.size}`);
    }
    fontSizes.forEach(size => size.classList.remove('font-size_active'));
    fontLink.classList.add('font-size_active');
  }
});

fontColor.forEach((fontLink) => {
  fontLink.onclick = function (event) {
    event.preventDefault();
    bookContent.classList.remove('text_color_whitesmoke', 'text_color_gray', 'text_color_black');
    if (fontLink.dataset.textColor) {
      bookContent.classList.add(`text_color_${fontLink.dataset.textColor}`);
    }
    fontColor.forEach(color => color.classList.remove('color_active'));
    fontLink.classList.add('color_active');
  }
});

background.forEach((fontLink) => {
    console.log(fontLink.dataset)
  fontLink.onclick = function (event) {
    event.preventDefault();
    bookContent.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white');
    if (fontLink.dataset.bgColor) {
      bookContent.classList.add(`bg_color_${fontLink.dataset.bgColor}`);
    }
    background.forEach(bg => bg.classList.remove('color_active'));
    fontLink.classList.add('color_active');
  }
});