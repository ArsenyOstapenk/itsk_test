const itemFocus = document.querySelectorAll('.item-unit__elem');
const itemFocusLenght = itemFocus.length;

for (let i = 0; i < itemFocusLenght; i++) {
   itemFocus[i].addEventListener('click', function (e) {


      if (itemFocus[i].classList.contains('item-unit__elem--active')) {
         itemFocus[i].classList.remove('item-unit__elem--active')
      } else {
         for (let i = 0; i < itemFocusLenght; i++) {
            itemFocus[i].classList.remove('item-unit__elem--active')
         }
         itemFocus[i].classList.add('item-unit__elem--active')
      }
   })
}


const itemFocus2 = document.querySelectorAll('.item-unit__elem-two');
const itemFocusLenght2 = itemFocus2.length;

for (let i = 0; i < itemFocusLenght2; i++) {
   itemFocus2[i].addEventListener('click', function (e) {


      if (itemFocus2[i].classList.contains('item-unit__elem-two--active')) {
         itemFocus2[i].classList.remove('item-unit__elem-two--active')
      } else {
         for (let i = 0; i < itemFocusLenght2; i++) {
            itemFocus2[i].classList.remove('item-unit__elem-two--active')
         }
         itemFocus2[i].classList.add('item-unit__elem-two--active')
      }
   })
}


const mount = document.querySelectorAll('.list-mountains__item');
const mountLenght = mount.length;

for (let i = 0; i < mountLenght; i++) {
   mount[i].addEventListener('click', function (e) {
      if (!mount[i].classList.contains('list-mountains__item--active')) {
         mount[i].classList.add('list-mountains__item--active');
         let x = document.createElement('div');
         x.className = 'check';
         mount[i].append(x);
         x.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
         // mount[i].firstChild.style.display = 'block';
      } else {
         mount[i].classList.remove('list-mountains__item--active');
         let x = mount[i].lastChild;
         x.remove();
         // mount[i].firstChild.style.display = 'none';
      }
   })
}

