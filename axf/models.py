from django.db import models


# Create your models here.
# 基础类
class Base(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    trackid = models.CharField(max_length=10, unique=True)

    class Meta:
        abstract = True


# 轮播图
class Wheel(Base):
    class Meta:
        db_table = "axf_wheel"


# 导航
class Nav(Base):
    class Meta:
        db_table = "axf_nav"


# 每日必购
class Mustbuy(Base):
    class Meta:
        db_table = "axf_mustbuy"


# 商品部分
class Shop(Base):
    class Meta:
        db_table = "axf_shop"


# 主体内容
class Mainshow(models.Model):
    trackid = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    img = models.CharField(max_length=100)
    categoryid = models.CharField(max_length=20)
    brandname = models.CharField(max_length=20)

    img1 = models.CharField(max_length=100)
    childcid1 = models.CharField(max_length=20)
    productid1 = models.CharField(max_length=20)
    longname1 = models.CharField(max_length=100)
    price1 = models.DecimalField(max_digits=10, decimal_places=2)
    marketprice1 = models.DecimalField(max_digits=10, decimal_places=2)

    img2 = models.CharField(max_length=100)
    childcid2 = models.CharField(max_length=20)
    productid2 = models.CharField(max_length=20)
    longname2 = models.CharField(max_length=100)
    price2 = models.DecimalField(max_digits=10, decimal_places=2)
    marketprice2 = models.DecimalField(max_digits=10, decimal_places=2)

    img3 = models.CharField(max_length=100)
    childcid3 = models.CharField(max_length=20)
    productid3 = models.CharField(max_length=20)
    longname3 = models.CharField(max_length=100)
    price3 = models.DecimalField(max_digits=10, decimal_places=2)
    marketprice3 = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = "axf_mainshow"
