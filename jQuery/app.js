var links = [
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150"
]

var $gallery = $('.gallery');
$body = $("body");

$body.prepend('<h1>Amazing galery</h1>');

for (var i = 0; i < links.length; i++) {
    var element = links[i];
    var img = $("<img>");
    img.attr("src", element)
    $gallery.append(img)
}

$("img").each(function (index, element) {
    var random = Math.random() * (500 - 50) +50;
    
    $(element).css("width", random);
    var random = Math.random() * (100 - 10) +10;
    $(element).css("padding", random);
});