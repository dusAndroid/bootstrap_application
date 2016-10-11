/**
 * Created by dusheng on 2016/9/22.
 */
'use strict'

$(function () {

    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_ad > .carousel-inner > .item').each(function (i, item) {
            //��ȡjQuery����
            var $item = $(item);
            var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            // Сͼʱ�ߴ�ȱ����仯 ����ʹ�ñ���ͼ Ӧʹ��img��ǩ
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
     *���Ƙ˻`퓵Ę˺�����
     */
    var $ulContainer = $(".nav-tabs");

    // �@ȡ������Ԫ�صČ��ȵĺ�
    var width = 0;
    // ��v��Ԫ��
    $ulContainer.children().each(function (index, element) {
        //console.log($(element).width());
        width += element.clientWidth;
        console.log(width);
    });

    $ulContainer.css("width", width);


//     ���Ű��
    var $newsTitle = $('.new-title');
    // ע�����¼�
    $("#news .nav-pills a").on("click", function () {
        // ��ȡ��ǰ�����Ԫ��
        var $this = $(this);
        // ��ȡ��Ӧ��titleֵ
        var title = $this.data("title");
        // ��title���õ���Ӧ��λ��
        $newsTitle.text(title);
    });

    // �ֲ�ͼ���ֻ������ϵ��󻬡��һ�

    var $carousel = $('.carousel');
    var startX, endx;
    var offset = 50;
    // 1 ��ȡ��ָ��������
    // ע�Ử���¼�
        $carousel.on("touchstart", function (e) {
            // ��ָ������ʼʱ��¼һ����ָ���ڵ�����X
            startX = e.originalEvent.touches[0].clientX;
        });

        $carousel.on("touchmove",function(e){
            // �����ظ���ֵ
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