from django.shortcuts import render

# Create your views here.
# 首页
from axf.models import Wheel, Nav, Mustbuy, Shop, Mainshow, Goods, Foodtypes


def home(request):
    # 获取轮播数据
    wheels = Wheel.objects.all()
    # 获取导航数据
    navs = Nav.objects.all()
    # 获取闪购轮播
    mustbuys = Mustbuy.objects.all()
    # 获取商品
    shop = Shop.objects.all()
    shophead, shoptabs, shopclasss, shopcommends = shop[0], shop[1:3], shop[3:7], shop[7:]
    # 主体部分
    mainshows = Mainshow.objects.all()

    result = {
        "wheels": wheels,
        "navs": navs,
        "mustbuys": mustbuys,
        "shophead": shophead,
        "shoptabs": shoptabs,
        "shopclasss": shopclasss,
        "shopcommends": shopcommends,
        "mainshows": mainshows,
    }
    return render(request, "home/home.html", context=result)


# 闪购超市
def market(request, chilecid=0, sort_index=0):
    foodtypes = Foodtypes.objects.all()  # 获取商品类型
    food_index = request.COOKIES.get("foot_index", 0)  # 获取商品类型id
    if food_index:
        food_id = foodtypes[int(food_index)].typeid  # 根据商品类型索引找他的id
    else:
        food_id = foodtypes[0].typeid  # 一开始没有索引的情况下给他默认为第一个
    # 获取商品子类型的信息
    childtypenames = foodtypes.get(typeid=food_id).childtypenames  # 获取选中商品类型的子类型(string)
    child_type_list = []  # 定义列表把处理后的商品子类型存起来
    for childtypename in childtypenames.split("#"):  # 按#号拆分
        name_id_list = childtypename.split(":")  # 按:号拆分
        child_type_list.append({"childtype_name": name_id_list[0], "childtype_id": name_id_list[1]})
    # 获取商品信息
    goods = Goods.objects.filter(categoryid=food_id, childcid=str(chilecid)) if int(chilecid) else Goods.objects.filter(
        categoryid=food_id)  # python中三目运算
    # 排序
    goods = goods.order_by("-productnum") if sort_index == "1" else (
        goods.order_by("price") if sort_index == "2" else (goods.order_by("-price") if sort_index == "3" else goods))

    result = {
        "foodtypes": foodtypes,
        "goods_list": goods,
        "child_type_list": child_type_list,
        "childc_id": chilecid,
    }
    return render(request, "market/market.html", context=result)


# 购物车
def cart(request):
    return render(request, "cart/cart.html")


# 我的
def mine(request):
    return render(request, "mine/mine.html")
