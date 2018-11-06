$(function () {
    $(".login").width(innerWidth)

    var is_acount = false
    var check_account = /^[a-zA-Z]\w{5,15}$/;
    $("input[name='account']").on("keyup blur", function () {
        if ($(this).val() == '') return
        if (check_account.test($(this).val())) {
            $('#account i').html('')
            $('#account').removeClass('has-error').addClass('has-success')
            $('#account span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            is_acount = true
        } else {
            $('#account i').html('账号由字母开头6-16位组成')
            $('#account').removeClass('has-success').addClass('has-error')
            $('#account span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            is_acount = false
        }
    });

    var is_password = false
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

    $("#sub_button").click(function () {
        if (is_acount == true && is_password == true) {
            $.ajax({
                url: "/login/",
                type: "post",
                headers: {"X-CSRFToken": $.cookie('csrftoken')},
                data: {
                    account: $("input[name='account']").val(),
                    password: $("input[name='password']").val()
                },
                dataType: "json",
                success: function (data) {
                    if (data.status == 0) {
                        console.log(0)
                        window.location.href = "/mine/"
                    } else if (data.status == 1) {
                        console.log(1)
                        $('#account i').html(data.msg)
                        $('#account').removeClass('has-success').addClass('has-error')
                        $('#account span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                        is_acount = false
                    } else {
                        console.log(-1)
                        $('#password i').html(data.msg)
                        $('#password').removeClass('has-success').addClass('has-error')
                        $('#password span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                        is_password = false
                    }
                }
            });
        }
    });
});