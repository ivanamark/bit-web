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

$body.prepend('<h1>Amazing galery</h1>');
$body.css("background-color","#ffffcc");
for (var i = 0; i < links.length; i++) {
    var element = links[i];
    var img = $("<img>");
    img.attr("src", element)
    $gallery.append(img)
}

$("img").each(function (index, element) {
    var random = Math.random() * (300 - 50) + 50;
    $(element).css("width", random);
    var random = Math.random() * (30 - 5) + 5;
    $(element).css("padding", random);
});