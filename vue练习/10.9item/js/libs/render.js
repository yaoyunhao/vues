define(["jquery", "hand"], function($, hand) {
    var render = function(childs, data, parends, flag) {
        var sur = $(childs).html();
        var template = hand.compile(sur);
        var html = template(data);
        if (flag) {
            $(parends).append(html)
        } else {
            $(parends).html(html)
        }
    }
    return render

})