var calendar = new lCalendar();
calendar.init({
    'trigger': '#timer',
    'type': 'date'
});
var typeArr = ["生活", "工作"];
var repeatArr = ['重复', "不重复"];
var mobileSelect1 = new select({
    trigger: '#type',
    wheels: [
        { data: typeArr }
    ]
});
var mobileSelect2 = new select({
    trigger: '#repeat',
    wheels: [
        { data: repeatArr }
    ]
});