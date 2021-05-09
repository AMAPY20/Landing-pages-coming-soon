$(document).ready(function() {
    // Count-Down
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#defaultCountdown').countdown({until: austDay, format: 'odHMS'});
    });
});

/* اظهار التنبيه بادخال البريد الالكتروني صحيح أم لا*/

$('.form-control').blur(function(){
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf('@');
        var dotpos = x.lastIndexOf('.');
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
        {
            $(this).parent().find(".alert-danger").fadeIn(300);
            console.log("error")
        }
        else {
            $(this).parent().find(".alert-success").fadeIn(300);
            console.log($(this).parent());
            console.log("success")
        }
    });

    //Form Validation for footer
    $('.form-control2').blur(function(){
        var x = document.forms["myForm2"]["email2"].value;
        var atpos = x.indexOf('@');
        var dotpos = x.lastIndexOf('.');
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
        {
            $(this).parent().find(".alert-danger").fadeIn(300);
            console.log("error2")
        }
        else{
            $(this).parent().find(".alert-success").fadeIn(300);
        }
    });

/* إخفاء رسالة الصح في حالة قام المستخدم بإدخال إميل خاطئ، وإخفاء رسالة الخطأ في حالة قام المستخدم بكتابة إميل صحيح.*/

// if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
//   $(this).parent().find(".alert-success").fadeOut(200);
//   $(this).parent().find(".alert-danger").fadeIn(50);
// } else {
//   $(this).parent().find(".alert-danger").fadeOut(200);
//   $(this).parent().find(".alert-success").fadeIn(200);
// }

var wow = new WOW({ mobile:false });
wow.init();