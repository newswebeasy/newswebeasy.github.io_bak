function isAndroid() {
  return /android/i.test(navigator.userAgent);
}

function isIos() {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
}

function isWechat() {
  return /MicroMessenger/i.test(navigator.userAgent);
}

function is_weixin() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;

function loadHtml() {
  var div = document.createElement('div');
  div.id = 'weixin-tip';
  div.innerHTML = '<p><img src="/assets/open_in_browser.png" alt="ブラウザーで開く"/></p>';
  document.body.appendChild(div);
}

function loadStyleText(cssText) {
  var style = document.createElement('style');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  try {
    style.appendChild(document.createTextNode(cssText));
  } catch (e) {
    style.styleSheet.cssText = cssText; //ie9以下
  }
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
}
var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.7); filter:alpha(opacity=70); width: 100%; height:100%; z-index: 2147483647;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;} #weixin-tip img{max-width: 100%;}";

function onDownloadClick() {
  if (isWechat() && isAndroid()) {
    var p = document.getElementById("player");
    if (p) {
      p.pause();
      loadHtml();
      loadStyleText(cssText);
    }
  }
}

function onloaded() {
  var d = document.getElementById("downloadLink");
  if (d) {
    d.style.display = isIos() ? "none" : "inherit";
  }
}
