function setLevel(level) {
  var label = document.getElementById('level');
  label.innerHTML = value;

  for (var i = 1; i < 10; i++) {
    var l = document.querySelectorAll('rt[data-level="' + i + '"]');
    for (var j = 0; j < l.length; j++) {
      if (i < value) {
        l[j].classList.add('hidden');
      } else {
        l[j].classList.remove('hidden');
      }
    }
  }
}

var slider = document.getElementById('slider');
if (slider) {
  slider.oninput = function(event) {
    var value = parseInt(event.target.value);
    setLevel(value);
  }

  slider.value = '4';
}

