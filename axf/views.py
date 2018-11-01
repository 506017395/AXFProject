from django.shortcuts import render

# Create your views here.
# 首页
from axf.models import Wheel, Nav, Mustbuy


def home(request):
    # 获取轮播数据
    wheels = Wheel.objects.all()
    navs = Nav.objects.all()
    mustbuys = Mustbuy.objects.all()
    print(len(mustbuys))
    result = {
        "wheels": wheels,
        "navs": navs,
        "mustbuys": mustbuys,
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
