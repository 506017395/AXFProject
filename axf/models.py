from django.db import models


# Create your models here.
# 基础类
class Base(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    trackid = models.CharField(max_length=10, unique=True)

    class Meta:
        abstract = True


# 首页 开始
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
# 首页 结束


# 闪购超市 开始
#  商品类型
class Foodtypes(models.Model):
    typeid = models.CharField(max_length=10)  # 类型ID
    typename = models.CharField(max_length=100)  # 分类名称
    childtypenames = models.CharField(max_length=256)  # 子类名称
    typesort = models.IntegerField()  # 顺序

    class Meta:
        db_table = "axf_foodtypes"


# 商品信息
class Goods(models.Model):
    productid = models.CharField(max_length=10)  # ID
    productimg = models.CharField(max_length=100)  # 图片
    productname = models.CharField(max_length=100)  # 名称
    productlongname = models.CharField(max_length=100)  # 长名称
    isxf = models.BooleanField(default=False)  # 精选
    pmdesc = models.BooleanField(default=False)  # 买一送一
    specifics = models.CharField(max_length=100)  # 规格
    price = models.DecimalField(max_digits=10, decimal_places=2)  # 价格
    marketprice = models.DecimalField(max_digits=10, decimal_places=2)  # 商场价格
    categoryid = models.IntegerField()  # 分类ID
    childcid = models.IntegerField()  # 子类ID
    childcidname = models.CharField(max_length=100)  # 分类名称
    dealerid = models.CharField(max_length=10)  # 详情ID
    storenums = models.IntegerField()  # 库存
    productnum = models.IntegerField()  # 销量

    class Meta:
        db_table = 'axf_goods'
# 闪购超市 结束
