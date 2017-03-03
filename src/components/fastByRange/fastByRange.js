
import noUiSlider from 'nouislider';
import css from '../../../node_modules/nouislider/distribute/nouislider.css';
import sass from './fastByRange.scss';
// var range = require('html-loader!./range.html');
console.log('range');
// document.getElementById('range').innerHTML = range;

var slider = document.getElementById('slider'),
    rangeNum = document.getElementById('rangeNum'),
    offset = 0,
    range = [7, 9, 11, 15, 17, 19, 25, 35, 51],
    rangeLength = range.length-1;

noUiSlider.create(slider, {
  start: [0],
  step: 1,
  connect: [true, false],
  range: {
    'min': 0,
    'max': rangeLength
  }
});
slider.noUiSlider.on('update', function(values, handle){
  offset = parseInt(values[handle]);
  rangeNum.innerHTML = range[offset];
});
document.getElementById('rangePlus').onclick = function(){
  if(offset < rangeLength)
    slider.noUiSlider.set(++offset);
};
document.getElementById('rangeMinus').onclick = function(){
  if(offset > 0)
    slider.noUiSlider.set(--offset);
};