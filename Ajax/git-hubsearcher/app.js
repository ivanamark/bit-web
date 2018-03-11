var $input = $('#search');
var $button = $('button');
var $h2 = $("h2");


$($button).on('click', function (event) {
    var $value = $input.val();
    var request = $.ajax({
        url: 'https://api.github.com/search/users?q=' + $value,
        method: "GET"
    });
    request.done(function (msg) {
        $(".image").html(msg);
        console.log(msg.items);
        var result = msg.items;
        for (var i = 0; i < 6; i++) {
            var currentUser = result[i];
            var $img=$('<img>')// img elemen
            $img.attr('src',currentUser.avatar_url);
            var $p=$('<p>');
            $p.text(currentUser.login);
            // img.src = currentUser.avatar_url
            // p element
            // p.textContent = currentUser.login
            var $div=$(".image");
            $($div).append($img);
            $($div).append($p);

        }

        // msg.items
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
    $('#click-history').append($value);

});