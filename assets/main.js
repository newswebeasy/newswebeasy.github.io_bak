$(function() {
    var $sliderTrack = $('#sliderTrack'),
        $sliderHandler = $('#sliderHandler'),
        $sliderValue = $('#sliderValue');

    var totalLen = $('#sliderInner').width(),
        startLeft = 0,
        startX = 0;

    function onTouchStart(e) {
      startLeft = parseInt($sliderHandler.css('left')) * totalLen / 100;
      startX = e.changedTouches[0].clientX;
      e.preventDefault();
    }

    function onDragStart(e) {
      startLeft = parseInt($sliderHandler.css('left')) * totalLen / 100;
      startX = e.clientX;
    }

    function onTouchMove(e) {
      var dist = startLeft + e.changedTouches[0].clientX - startX;
      dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
      var percent = parseInt(dist / totalLen * 100);
      $sliderTrack.css('width', percent + '%');
      $sliderHandler.css('left', percent + '%');
      var rate = (dist / totalLen * (1.5 - 0.5) + 0.5).toFixed(1);
      $sliderValue.text(rate);

      document.getElementById('player').playbackRate = parseFloat(rate);
      e.preventDefault();
    }

    function onDrag(e) {
      var dist = startLeft + e.clientX - startX;
      dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
      var percent = parseInt(dist / totalLen * 100);
      $sliderTrack.css('width', percent + '%');
      $sliderHandler.css('left', percent + '%');
      var rate = (dist / totalLen * (1.5 - 0.5) + 0.5).toFixed(1);
      $sliderValue.text(rate);
      document.getElementById('player').playbackRate = parseFloat(rate);
    }


    $sliderHandler
      .on('touchstart', onTouchStart)
      .on('touchmove', onTouchMove)
      .on('dragstart', onDragStart)
      .on('drag', onDrag)
      .on('dragend', onDrag)
      .on('dragover', function(e){
        e.preventDefault();
      })

    // $sliderHandler[0].ondragstart = onDragStart;
    // $sliderHandler[0].ondrag = onDrag;
    // $sliderHandler[0].
});
