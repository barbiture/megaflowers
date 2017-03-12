import sass from './fastByDropdown.scss';

var fastByDropdown =  document.getElementById('fastByDropdown'),
    toggle =  document.getElementById('toggle');

toggle.onclick = function() {
  if (fastByDropdown.style.display == '') {
    fastByDropdown.style.display = 'block';
    setTimeout(function() {
      fastByDropdown.style.opacity = 1;
    },10);
  } else {
    fastByDropdown.style.opacity = 0;
    setTimeout(function() {
      fastByDropdown.style.display = '';
    },400);
  }
};
// fastByDropdown

// }

for(var x = 0; x < fastByDropdown.childElementCount; x++){
  fastByDropdown.children[x].onclick = function() {
    toggle.innerHTML = this.innerHTML;
  }
}
