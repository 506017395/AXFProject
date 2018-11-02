$(function () {
    $(".market").width(innerWidth);//去除滚动条
    var foot_type_id = $.cookie("foot_index")// 从cookie里获取商品类型id
    if (foot_type_id) {
        $(".type-item").eq(foot_type_id).addClass("active");     //高亮选中项
    } else {
        $(".type-item").first().addClass("active");    //如果没选中择默认高亮第一个
    }
    $(".type-item").click(function () {
        // 把商品类型id存到cookie里
        $.cookie("foot_index", $(this).index(), {expires: 5, path: "/"});  //expires为过期时间,path为路径
    });

    // 商品子类型筛选
    var $chitype = $("#chitype_status") //获取子类型筛选节点对象
    var $chitype_sort = $("#chitype_sort_status");  //获取子类型排序节点对象
    var $type_icon = $('#all_type i');
    var $sort_icon = $('#com_sort i');
    $("#all_type").click(function () {
        $chitype_sort.hide();   //关闭排序
        $chitype.is(":hidden") ? $chitype.show() : $chitype.hide(); //判断元素是否隐藏,使用三目运算做处理
        $type_icon.toggleClass("glyphicon-triangle-top glyphicon-triangle-bottom")  //点击时切换图标
        $('#com_sort i').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top') //把排序的图标设置默认

    });
    $("#com_sort").click(function () {
        $chitype.hide();    //关闭类型筛选
        $chitype_sort.is(":hidden") ? $chitype_sort.show() : $chitype_sort.hide();  //判断元素是否隐藏,使用三目运算做处理
        $sort_icon.toggleClass("glyphicon-triangle-top glyphicon-triangle-bottom") //点击时切换图标
        $('#all_type i').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top') //把类型图标设置默认

    });
});