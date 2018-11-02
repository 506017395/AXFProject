from django.conf.urls import url

from axf import views

urlpatterns = [
    url("^$", views.home, name="home"),  # 首页
    url("^market/(\d+)/(\d+)$", views.market, name="market"),  # 闪购超市
    url("^cart/$", views.cart, name="cart"),  # 购物车
    url("^mine/$", views.mine, name="mine"),  # 我的
]
