/**
 * Created by dusheng on 2016/9/22.
 */
'use strict'

$(function () {

    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_ad > .carousel-inner > .item').each(function (i, item) {
            //获取jQuery对象
            var $item = $(item);
            var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            // 小图时尺寸等比例变化 则不能使用背景图 应使用img标签
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt=""/>');
            } else {
                //$item.html('<img src="" alt=""/>');
                $item.empty();
            }
        });
    }

    $(window).on('resize', resize).trigger('resize');


    /**
     *控制標籤頁的標簽寬度
     */
    var $ulContainer = $(".nav-tabs");

    // 獲取所有子元素的寬度的和
    var width = 0;
    // 遍歷子元素
    $ulContainer.children().each(function (index, element) {
        //console.log($(element).width());
        width += element.clientWidth;
        console.log(width);
    });

    $ulContainer.css("width", width);


//     新闻板块
    var $newsTitle = $('.new-title');
    // 注册点击事件
    $("#news .nav-pills a").on("click", function () {
        // 获取当前点击的元素
        var $this = $(this);
        // 获取对应的title值
        var title = $this.data("title");
        // 将title设置到相应的位置
        $newsTitle.text(title);
    });

    // 轮播图在手机界面上的左滑、右滑

    var $carousel = $('.carousel');
    var startX, endx;
    var offset = 50;
    // 1 获取手指滑动方向
    // 注册滑动事件
        $carousel.on("touchstart", function (e) {
            // 手指触摸开始时记录一下手指所在的坐标X
            startX = e.originalEvent.touches[0].clientX;
        });

        $carousel.on("touchmove",function(e){
            // 变量重复赋值
            endx = e.originalEvent.touches[0].clientX;
        });

        $carousel.on("touchend",function(e){
           var distance = Math.abs(startX-endx);
            if(distance>offset){
                $(this).carousel(startX > endx ? 'next' : 'prev');
            }
        });
    // 2
})