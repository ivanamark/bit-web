$body = $("body");
$img = $('img');
//DEO IZ DOMA
// var elem = document.querySelector('body');
// var img = document.querySelector('img');

// function movePosition(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     offsetX = img.width/2;
//     offsetY = img.height/2;

//     img.style.top = y - offsetY + "px";
//     img.style.left = x - offsetX + "px";
//}
$body.on('click', function (event) {
    var x = event.offsetX;
    var y = event.offsetY;
    var playerHeight = $img.height() / 2;
    var playerWidth = $img.width() / 2;
// MOZE I OVAKO
    // $img.css({
    //     'top': y - playerHeight + 'px',
    //     'left': x - playerWidth + 'px'
    // });
    $('img').offset({top:y - playerHeight,left:x - playerWidth})
});

// elem.addEventListener('click', movePosition);