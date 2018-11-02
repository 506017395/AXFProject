from django.shortcuts import render

# Create your views here.
# 首页
from axf.models import Wheel, Nav, Mustbuy, Shop, Mainshow


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
def market(request):
    return render(request, "market/market.html")


# 购物车
def cart(request):
    return render(request, "cart/cart.html")


# 我的
def mine(request):
    return render(request, "mine/mine.html")
