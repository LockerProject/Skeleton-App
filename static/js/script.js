var baseUrl = '';

$(function() {
    $.getJSON(baseUrl + '/query/getPhoto', {'sort':sort}, function(data) {
        // display your data!
    });
});

