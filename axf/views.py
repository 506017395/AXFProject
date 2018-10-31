from django.shortcuts import render


# Create your views here.
# 首页
def home(request):
    return render(request, "home/home.html")


# 闪购超市
def market(request):
    return render(request, "market/market.html")


# 购物车
def cart(request):
    return render(request, "cart/cart.html")


# 我的
def mine(request):
    return render(request, "mine/mine.html")
