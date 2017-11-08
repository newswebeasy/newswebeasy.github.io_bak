function showFurigana(value) {

  var l = document.getElementsByTagName('rt');
  for (var i = 0; i < l.length; i++) {
    if (value) {
      l[i].classList.remove('hidden');
    } else {
      l[i].classList.add('hidden');
    }
  }
}

var toggle = document.getElementById('furigana_toggle');
if (toggle) {
  toggle.onchange = function(event) {
    var value = event.target.checked;
    showFurigana(value);
  }

  toggle.checked = "checked";
}