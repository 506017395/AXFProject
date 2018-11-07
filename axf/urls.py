from django.conf.urls import url

from axf import views

urlpatterns = [
    url("^$", views.home, name="home"),  # 首页
    url("^market/(\d+)/(\d+)$", views.market, name="market"),  # 闪购超市
    url("^cart/$", views.cart, name="cart"),  # 购物车
    url("^addcart/$", views.addcart, name="addcart"),  # 添加到购物车
    url("^delcart/$", views.delcart, name="delcart"),  # 删除购物车数量
    url("^mine/$", views.mine, name="mine"),  # 我的
    url("^login/$", views.login, name="login"),  # 登录
    url("^logout/$", views.logout, name="logout"),  # 注销
    url("^registe/$", views.registe, name="registe"),  # 注册
    url("^check_account/$", views.check_account, name="check_account"),  # 检测账户是否存在
]
