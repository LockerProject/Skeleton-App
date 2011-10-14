var baseUrl = false;

$(document).ready(function() {
    if(baseUrl == false) window.alert("Couldn't find your locker, you might need to add a config.js (see dev.singly.com)");
});

$(function() {
    // be careful with the limit, some people have large datasets ;)
    $.getJSON(baseUrl + '/Me/photos/', {'limit':10}, function(data) {
        console.log(data);
        if(!data || !data.length) return;
        var html = "";
        for(var i in data)
        {
            html += "<img src='"+data[i].url+"' width='200' /> ";
        }
        $("#test").html(html);
    });
});

