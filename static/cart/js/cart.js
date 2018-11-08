$(function () {
    $('.cart').width(innerWidth)
    total()
    $(".cart .confirm-wrapper").click(function () {
        var $this = $(this);
        $.get("/isselect/", {cart_id: $(this).attr("cartid")}, function (data) {
            data.is_select ? $this.children().removeClass("no").addClass("glyphicon glyphicon-ok") : $this.children().removeClass("glyphicon glyphicon-ok").addClass("no");
            total()
        });
    });

    $(".bill .all span").click(function () {
        var $this = $(this)
        var $this_one = $(".cart .confirm-wrapper")
        var is_select = $this.attr("isselect") == "false" ? true : false;
        $.get("/allselect/", {is_select: is_select}, function (data) {
            $this.attr("isselect", data.is_select)
            // console.log(data.is_select)
            // console.log(typeof(data.is_select))
            if (data.is_select) {
                $this.removeClass("no").addClass("glyphicon glyphicon-ok")
                $this_one.children().removeClass("no").addClass("glyphicon glyphicon-ok")
            } else {
                $this.removeClass("glyphicon glyphicon-ok").addClass("no")
                $this_one.children().removeClass("glyphicon glyphicon-ok").addClass("no")
            }
            total()
        });
    });

    function total() {
        var sum = 0
        $(".goods").each(function () {
            var $confirm = $(this).find(".confirm-wrapper")
            var $content = $(this).find(".content-wrapper")
            if ($confirm.find(".glyphicon-ok").length) {
                var price = $content.find(".price").attr("price")
                var num = $content.find(".num").attr("number")
                sum += price * num
            }
        })
        $(".bill .total b").html(parseInt(sum))
    }


    //下单
    $("#placeorder").click(function () {
        $.get("/placeorder/", function (data) {
            if (data.status == 1) {
                window.open("/orderinfo/" + data.identifier +
                    "/", target = "_self")
            }
        })
    })

})