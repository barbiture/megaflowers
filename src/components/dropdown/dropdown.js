import dropdown from './dropdown.scss';

var dropdownContent =  document.getElementsByClassName('dropdown__content')[0],
    dropdownSelected =  document.getElementsByClassName('dropdown__selected');
console.log(dropdownContent);
dropdownSelected[0].onclick = function() {
  if (dropdownContent.style.display == '') {
    dropdownContent.style.display = 'block';
    setTimeout(function() {
      dropdownContent.style.opacity = 1;
    },10);
  } else {
    dropdownContent.style.opacity = 0;
    setTimeout(function() {
      dropdownContent.style.display = '';
    },400);
  }
};

for(var x = 0; x < dropdownContent.childElementCount; x++){
  dropdownContent.children[x].onclick = function() {
    dropdownSelected[0].innerHTML = this.innerHTML;
  }
}

