function setLevel(level) {
  var label = document.getElementById('level');
  label.innerHTML = level;

  for (var i = 1; i < 10; i++) {
    var l = document.querySelectorAll('[data-ruby-level="' + i + '"]');
    for (var j = 0; j < l.length; j++) {
      if (i < level) {
        l[j].classList.add('hidden');
      } else {
        l[j].classList.remove('hidden');
      }
    }
  }
}

var slider = document.getElementById('furigana_slider');
if (slider) {
  slider.oninput = function(event) {
    var level = parseInt(event.target.value);
    setLevel(level);
  }

  var defaultLevel = '4'
  slider.value = defaultLevel;
  setLevel(defaultLevel);
}