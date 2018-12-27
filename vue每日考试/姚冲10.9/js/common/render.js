define(['jquery', 'handlebars'], function($, handlebars) {
    function render(tpl, data, target) {
        // 第一步
        var source = $(tpl).html();
        // 第二步
        var template = handlebars.compile(source);
        // 第三步
        var str = template(data);
        // 第四步
        $(target).html(str);
    }
    return render;
})