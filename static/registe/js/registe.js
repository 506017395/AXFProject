$(function () {

    $(".register").width(innerWidth)

    var is_account = false
    // 账号验证
    var check_account = /^[a-zA-Z]\w{5,15}$/;
    // 监听input值
    $("input[name='account']").on("keyup blur", function () {
        if ($(this).val() == '') return
        if (check_account.test($(this).val())) {
            $.get("/check_account/", {"account": $("input[name='account']").val()}, function (data) {
                if (data.status == 1) {
                    $('#account i').html('')
                    $('#account').removeClass('has-error').addClass('has-success')
                    $('#account span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                    is_account = true
                } else {
                    $('#account i').html(data.msg)
                    $('#account').removeClass('has-success').addClass('has-error')
                    $('#account span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                    is_account = false
                }
            });

        } else {
            $('#account i').html('账号由字母开头6-16位组成')
            $('#account').removeClass('has-success').addClass('has-error')
            $('#account span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            is_account = false
        }
    });

    var is_password = false
    // 密码验证
    var check_password = /^\S{6,18}$/;
    $("input[name='password']").on("keyup blur", function () {
        if ($(this).val() == '') return
        if (check_password.test($(this).val())) {
            $('#password i').html('')
            $('#password').removeClass('has-error').addClass('has-success')
            $('#password span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            is_password = true
        } else {
            $('#password i').html('密码输入不正确')
            $('#password').removeClass('has-success').addClass('has-error')
            $('#password span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            is_password = false
        }
    });
    var is_passwd = false
    $("input[name='passwd']").on("keyup blur", function () {
        if ($(this).val() == '') return
        if ($("input[name='password']").val() == $(this).val()) {
            $('#passwd i').html('')
            $('#passwd').removeClass('has-error').addClass('has-success')
            $('#passwd span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            is_passwd = true
        } else {
            $('#passwd i').html('两次密码不一致')
            $('#passwd').removeClass('has-success').addClass('has-error')
            $('#passwd span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            is_passwd = false
        }
    });

    var is_name = false
    // 昵称
    $("input[name='name']").on("keyup blur", function () {
        if ($(this).val() == '') return
        if ($(this).val() != "") {
            $('#name i').html('')
            $('#name').removeClass('has-error').addClass('has-success')
            $('#name span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            is_name = true
        } else {
            $('#name i').html('昵称含非法字符')
            $('#name').removeClass('has-success').addClass('has-error')
            $('#name span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            is_name = false
        }
    });

    var is_phone = false
    // 电话
    var check_phone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    $("input[name='phone']").on("keyup blur", function () {
        if ($(this).val() == '') return
        if (check_phone.test($(this).val())) {
            $('#phone i').html('')
            $('#phone').removeClass('has-error').addClass('has-success')
            $('#phone span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            is_phone = true
        } else {
            $('#phone i').html('手机号码格式不正确')
            $('#phone').removeClass('has-success').addClass('has-error')
            $('#phone span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            is_phone = false
        }
    });

    var is_address = false
    // 地址
    $("input[name='address']").on("keyup blur", function () {
        if ($(this).val() == '') return
        if ($(this).val() != "") {
            $('#address i').html('')
            $('#address').removeClass('has-error').addClass('has-success')
            $('#address span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            is_address = true
        } else {
            $('#address i').html('地址输入错误')
            $('#address').removeClass('has-success').addClass('has-error')
            $('#address span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            is_address = false
        }
    });


    $("#sub_button").click(function () {
        if (is_account == true && is_password == true && is_passwd == true && is_name == true && is_phone == true && is_address == true) {
            $("#form_reg").submit()
        }
    });
});