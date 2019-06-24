$(function() {
    $(".chaoshi_top_close").on("click", function() {
        $("#o-header-2013").css("display", "none");
        $('.chaoshi_top_lk').click(function(event) {
            event.preventDefault();
        });
    })
    $(".headerqrcode").on("mouseover", function() {
        $(".headerqrcode_qc").css({ "opacity": "1", "visibility": "visible" });
    })
    $(".headerqrcode").on("mouseout", function() {
        $(".headerqrcode_qc").css({ "opacity": "0", "visibility": "hidden" });
    })
    $("#ttbar-myjd").on("mouseover", function() {
        $(this).addClass("hover ");
    })
    $("#ttbar-myjd").on("mouseout", function() {
        $(this).removeClass("hover ");
    })
    $(".dropdown_wrap").on("mouseover", function() {
        $(".dropdown_box").addClass("hover")
    })
    $(".dropdown_wrap").on("mouseout", function() {
        $(".dropdown_box").removeClass("hover")
    })

})

$(function() {
    var index = 0; //用index记录下标,默认为0
    var lis = $('.chaoshi_carousel_main li');
    //1.右边箭头点击事件
    $('.chaoshi_carousel_next').click(right);
    //右箭头点击事件处理函数
    function right() {
        index++;
        //如果当前是最后一张,
        // 此时应让index=0
        if (index == lis.length) {
            index = 0;
        }
        $('.chaoshi_carousel_main li').eq(index).addClass('chaoshi_carousel_item_on')
            .css({ "opacity": "1", "display": "block", "z-index": "5" })
            .siblings().removeClass('chaoshi_carousel_item_on')
            .css({ "opacity": "0", "display": "none", "z-index": "0" });
        //显示对应下标的图片,让其他兄弟隐藏
        lis.eq(index).fadeIn().siblings().fadeOut();
        //给对应下标的小圆点按钮添加类名,其他兄弟移除类名
        $('.chaoshi_carousel_nav a').eq(index).addClass('chaoshi_carousel_nav_btn_on')
            .css("width", "129.167px")
            .siblings().removeClass('chaoshi_carousel_nav_btn_on');
    }
    //2.左边箭头点击事件
    $('.chaoshi_carousel_prev').click(function() {
            index--;
            //如果当前是第一张(index=0),index--后,index<0,此时应显示最后一张,让index=lis.length-1
            if (index < 0) {
                index = lis.length - 1;
            }
            $('.chaoshi_carousel_main li').eq(index).addClass('chaoshi_carousel_item_on')
                .css({ "opacity": "1", "display": "block", "z-index": "5" });
            //显示对应下标的图片,让其他兄弟隐藏
            lis.eq(index).fadeIn().siblings().fadeOut();
            //给对应下标的小圆点按钮添加类名,其他兄弟移除类名
            $('.chaoshi_carousel_nav a').eq(index).addClass('chaoshi_carousel_nav_btn_on')
                .css("width", "129.167px")
                .siblings().removeClass('chaoshi_carousel_nav_btn_on');

        })
        //3.底部按钮鼠标移入事件
    var btn = $(".chaoshi_carousel_nav a");
    for (let i = 0; i < btn.length; i++) {
        btn.eq(i).on("mouseover", function() {
            $(this).addClass("chaoshi_carousel_nav_btn_on")
                .css("width", "129.167px")
                .siblings().removeClass("chaoshi_carousel_nav_btn_on");
            $(".chaoshi_carousel_main li")
                .eq(i).addClass("chaoshi_carousel_item_on")
                .css({ "opacity": "1", "display": "block", "z-index": "5" });
        })
    }

    //4.自动轮播
    //先执行一次定时器
    var timeid = setInterval(function() {
            right()
        }, 5000)
        //鼠标移出p时,设置定时器,调用右边箭头的点击事件
    $('.chaoshi_carousel_main').mouseout(function() {
            var timeid = setInterval(function() {
                right()
            }, 5000)
        })
        //鼠标移入时,清除定时器
    $('.chaoshi_carousel_main').mouseover(function() {
        clearInterval(timeid);
    })
})


$(function() {
    var index = 0; //用index记录下标,默认为0
    var lis = $('.chaoshi_handy_carousel_main li');
    var timerid = null;

    function move() {
        index++;
        //如果当前是最后一张,
        // 此时应让index=0
        if (index == lis.length) {
            index = 0;
        }
        $('.chaoshi_handy_carousel_main li').eq(index)
            .addClass('on')
            .css({ "opacity": "1", "display": "block", "z-index": "5" })
            .siblings()
            .removeClass('on')
            .css({ "opacity": "0", "display": "none", "z-index": "0" });
        //显示对应下标的图片,让其他兄弟隐藏
        lis.eq(index).fadeIn().siblings().fadeOut();
        //给对应下标的小圆点按钮添加类名,其他兄弟移除类名
        $('.chaoshi_handy_carousel_nav a').eq(index).addClass('on')
            .siblings().removeClass('on');
    }
    //3.底部按钮鼠标移入事件
    var btn = $(".chaoshi_handy_carousel_nav a");
    for (let i = 0; i < btn.length; i++) {
        btn.eq(i).on("mouseover", function() {
            $(this).addClass("on")
                .siblings().removeClass("on");
            $('.chaoshi_handy_carousel_main li').eq(i).addClass('on')
                .css({ "opacity": "1", "display": "block", "z-index": "5" })
                .siblings().removeClass('on')
                .css({ "opacity": "0", "display": "none", "z-index": "0" });
        })
    }

    //4.自动轮播
    //先执行一次定时器
    var timeid = setInterval(function() {
            move();
        }, 3000)
        //鼠标移出时,设置定时器
    $('.chaoshi_carousel_main').mouseout(function() {
            var timeid = setInterval(function() {
                move();
            }, 3000)
        })
        //鼠标移入时,清除定时器
    $('.chaoshi_carousel_main').mouseover(function() {
        clearInterval(timeid);
    })
})


$(function() {
    $.get("http://47.104.244.134:8080/goodstypelist.do", {
        l: 2,
    }).done(data => {
        console.log(data)
    })

})