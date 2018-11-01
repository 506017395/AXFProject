$(function () {
    // 隐藏滚动条
    $(".home_content").width(innerWidth)
    //头部轮播图
    new Swiper("#topSwiper", {
        pagination: ".swiper-pagination",
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });
    //闪购轮播图
    new Swiper("#mustbuySwiper", {
        // pagination: '.swiper-pagination',
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true
    });
});