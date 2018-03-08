var links = [
    "http://via.placeholder.com/300x200/cc3300/000000",
    "http://via.placeholder.com/300x200/0E2F44/000000",
    "http://via.placeholder.com/300x200/ffcc00/000000",
    "http://via.placeholder.com/300x200/009933/000000",
    "http://via.placeholder.com/300x200/cc3300/000000",
    "http://via.placeholder.com/300x200/009933/000000"
]

var $gallery = $('.gallery');
$body = $("body");
var $h1 = $("h1");
$h1.css({
    "color": "red",
    "margin": "0 auto",
    "text-align": "center"
});
$gallery.prepend("<h1>Amazing gallery</h1>");


$gallery.css({
    "background-color": "#ffffcc",
    "width": "50%",
    "margin": "0 auto"


});
for (var i = 0; i < links.length; i++) {
    var element = links[i];
    var img = $("<img>");
    img.attr("src", element)
    $gallery.append(img)
}

$("img").each(function (index, element) {
    var random = Math.random() * (500 - 50) + 50;
    $(element).css("width", random);
    // var random = Math.random() * (30 - 5) + 5;
    // $(element).css("padding", random);
});