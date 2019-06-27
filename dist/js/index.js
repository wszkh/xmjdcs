$(function() {
    var name = getCookie("name");
    console.log(name)

    //欢迎
    if (location.search.substring(1).split("=")[1] != "null") {
        $(".fore1").css("display", "none");
        $("#hello").css("display", "block");
        $("#hello span").html(name)
    }


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

//大轮播
$(function() {
        var index = 0; //用index记录下标,默认为0
        var lis = $('.chaoshi_carousel_main li');
        $('.chaoshi_carousel_next').click(right);
        //右箭头点击事件处理函数
        function right() {
            index++;
            //如果当前是最后一张,
            if (index == lis.length) {
                index = 0;
            }
            $('.chaoshi_carousel_main li').eq(index).addClass('chaoshi_carousel_item_on')
                .css({ "opacity": "1", "display": "block", "z-index": "5" })
                .siblings().removeClass('chaoshi_carousel_item_on')
                .css({ "opacity": "0", "display": "none", "z-index": "0" });
            lis.eq(index).fadeIn().siblings().fadeOut();
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
                lis.eq(index).fadeIn().siblings().fadeOut();
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
        var timeid = setInterval(function() {
            right()
        }, 5000)
        $('.chaoshi_carousel_main').mouseout(function() {
                timeid = setInterval(function() {
                    right()
                }, 5000)
            })
            //鼠标移入时,清除定时器
        $('.chaoshi_carousel_main').mouseover(function() {
            clearInterval(timeid);
        })
    })
    //小轮播
$(function() {
    var index = 0;
    var lis = $('.chaoshi_handy_carousel_main li');

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
        lis.eq(index).fadeIn().siblings().fadeOut();
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
    var timeid = setInterval(function() {
        move();
    }, 3000)
    $('.chaoshi_carousel_main').mouseout(function() {
        timeid = setInterval(function() {
            move();
        }, 3000)
    })
    $('.chaoshi_carousel_main').mouseover(function() {
        clearInterval(timeid);
    })
})

//列表轮播
$(function() {
        var index = 0;
        var lis = $('.goods_list_items ');
        $('.chaoshi_buy_goods_next').click(right);
        //右箭头点击事件处理函数
        function right() {
            index++;
            //如果当前是最后一张,
            if (index == lis.length) {
                index = 0;
            }
            $(this).addClass("on")
                .siblings().removeClass('on');;
            $(".chaoshi_buy_goods_list  ").css("left", index * -'1194px')
            lis.eq(index).fadeIn().siblings().fadeOut();
        }
        //2.左边箭头点击事件
        $('.chaoshi_buy_goods_prev').click(function() {
            index--;
            //如果当前是第一张(index=0),index--后,index<0,此时应显示最后一张,让index=lis.length-1
            if (index < 0) {
                index = lis.length - 1;
            }
            $(this).addClass("on")
                .siblings().removeClass('on');
            $(".chaoshi_buy_goods_list ").css("left", index * -'1194px');
            lis.eq(index).fadeIn().siblings().fadeOut();
        })

        //4.自动轮播
        var timeid = setInterval(function() {
            right()
        }, 5000)
        $('.chaoshi_buy_goods_list ').mouseout(function() {
                timeid = setInterval(function() {
                    right()
                }, 5000)
            })
            //鼠标移入时,清除定时器
        $('.chaoshi_buy_goods_list ').mouseover(function() {
            clearInterval(timeid);
        })
    })
    // 数据

$(function() {
    function getParam(paramName) {
        paramValue = "", isFound = !1;
        if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
            arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
            while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
        }
        return paramValue == "" && (paramValue = null), paramValue
    }
    var token = getParam('token');
    //首页调转到首页判断
    if (location.search.substring(1).split("=")[1] != "null") {
        console.log($("#ttbar-home a"))
        $("#ttbar-home a").attr("href", 'http://localhost:8080/index.html?token=' + token);
        $("#logo-2014 a").attr("href", 'http://localhost:8080/index.html?token=' + token);
        $(".chaoshi_menu_list_link_on").attr("href", 'http://localhost:8080/index.html?token=' + token);
    } else {
        $("#ttbar-home a").attr("href", 'http://localhost:8080/index.html');
        $("#logo-2014 a").attr("href", 'http://localhost:8080/index.html');
        $(".chaoshi_menu_list_link_on").attr("href", 'http://localhost:8080/index.html');
    }


    //商品列表
    $.get("http://47.104.244.134:8080/goodstypelist.do", {
        l: 2
    }).done(data => {
        var $ul = $(".lists");
        for (var i = 0; i < data.length; i++) {
            var $li = $('<a href="#"><li class="list"></li></a>');

            $ul.append($li);
            var $divBox = $('<div class="box"></div>');
            var $p = $('<p class="tex"></p>');
            $li.append($divBox);
            $li.append($p);
            $p.html(data[i].name);
            $divBox.html(data[i].name);
        }
        for (let i = 0; i < $(".list").length; i++) {
            $(".tex").eq(i).on("mouseover", function() {
                $(".box").eq(i).css("display", "block");
                $(".box").eq(i).on("mouseover", function() {
                    $(this).css("display", "block")
                })
                $(".box").eq(i).on("mouseout", function() {
                    $(this).css("display", "none")
                })
            })
            $(".tex").eq(i).on("mouseout", function() {
                $(".box").eq(i).css("display", "none")
            })
            $(".lists a").eq(i).on("click", function() {
                $(this).attr("href", 'http://localhost:8080/list.html?token=' + token + '&&id=' + data[i].id);
            })

        }
    })

    //商品
    $.get("http://47.104.244.134:8080/goodsbytid.do", {
        tid: 13,
        page: 10,
        limit: 50
    }).done(data => {
        var $img = $(".csi_img");
        var $title = $(".csi_name");
        var $price = $(".csi_price_new");
        var $priceOri = $(".csi_price_origin")
        for (let i = 0; i < data.data.length; i++) {

            $img.eq(i).attr("src", data.data[i].picurl);
            $title.eq(i).html(data.data[i].name);
            $price.eq(i).html('¥' + data.data[i].price);
            $priceOri.eq(i).html('¥' + data.data[i].id);

            $(".cdb_pic .J_goods_img").eq(i).attr("src", data.data[i].picurl);
            $(".cdb_name").eq(i).html(data.data[i].name);
            $(".chaoshi_discount_big em").eq(i).html('¥' + data.data[i].price);

            $(".cdi_pic_lk img").eq(i).attr("src", data.data[i].picurl);
            $(".cdi_name").eq(i).html(data.data[i].name);
            $(".cdi_price .cdi_price_new").eq(i).html('¥' + data.data[i].price);

            $(".chaoshi_brand_row img").eq(i).attr("src", data.data[i].picurl);
            $(".chaoshi_brand_row img").eq(0).attr("src", " //img10.360buyimg.com//babel/jfs/t1/60267/21/2741/103773/5d106e43E91feb3ed/3ed0ab9963be7bca.jpg!q80.webp");

            $(".chaoshi_brand_item img").eq(i).attr("src", data.data[i].picurl);

            $(".goods_list_items .goods_img").eq(i).attr("src", data.data[i].picurl);
            $(".goods_title").eq(i).html(data.data[i].name);
            $(".goods_price").eq(i).html('¥' + data.data[i].price);

            $(".chaoshi_category_ul img").eq(i).attr("src", data.data[i].picurl);
            $(".chaoshi_category_focus_key_inner a").eq(i).html(data.data[i].typename);

            $(".chaoshi_seckill_bd a").eq(i).on("click", function() {
                $(this).attr("href", 'http://localhost:8080/list.html?token=' + token + '&&id=' + data.data[i].id);
            })
            $(".cdi_pic  a").eq(i).on("click", function() {
                $(this).attr("href", 'http://localhost:8080/list.html?token=' + token + '&&id=' + data.data[i].id);
            })
            $(".chaoshi_menu_list_item  a:not(:first)").eq(i).on("click", function() {
                $(this).attr("href", 'http://localhost:8080/list.html?token=' + token + '&&id=' + data.data[i].id);
            })
            $(".chaoshi_menu_list_item  a:first").on("click", function() {
                $(this).attr("href", 'http://localhost:8080/index.html?token=' + token);
            })


            $(".cdb_bd a").eq(i).on("click", function() {
                $(this).attr("href", 'http://localhost:8080/list.html?token=' + token + '&&id=' + data.data[i].id);
            })

            $(".goods_pic").eq(i).on("click", function() {
                $(this).attr("href", 'http://localhost:8080/list.html?token=' + token + '&&id=' + data.data[i].id);
            })
            $(".chaoshi_brand_item").eq(i).on("click", function() {
                    $(this).attr("href", 'http://localhost:8080/list.html?token=' + token + '&&id=' + data.data[i].id);
                })
                //首页添加购物车
            $(".cdb_add_txt").eq(i).on("click", function() {
                if (location.search.substring(1).split("=")[1] != undefined) {
                    $.get("http://47.104.244.134:8080/cartsave.do", {
                        gid: data.data[i].id,
                        token: token,
                    }).done(data => {
                        if (data.msg === "成功") {
                            $(".btn").on("click", function() {
                                window.open('http://localhost:8080/cart.html?token=' + token)
                            })
                        }
                    })
                    $(".J_goods_add").attr("href", 'http://localhost:8080/cart.html?token=' + token);
                } else {
                    $(".J_goods_add").attr("href", 'http://localhost:8080/login.html');
                }
            })
            $(".cdi_add").eq(i).on("click", function() {
                if (location.search.substring(1).split("=")[1] != undefined) {
                    $.get("http://47.104.244.134:8080/cartsave.do", {
                        gid: data.data[i].id,
                        token: token,
                    }).done(data => {
                        if (data.msg === "成功") {
                            $(".btn").on("click", function() {
                                window.open('http://localhost:8080/cart.html?token=' + token)
                            })
                        }
                    })
                    $(".cdi_add").attr("href", 'cart.html?token=' + token);
                } else {
                    $(".cdi_add").attr("href", 'login.html');
                }
            })
            $(".goods_add").eq(i).on("click", function() {
                if (location.search.substring(1).split("=")[1] != undefined) {
                    $.get("http://47.104.244.134:8080/cartsave.do", {
                        gid: data.data[i].id,
                        token: token,
                    }).done(data => {
                        if (data.msg === "成功") {
                            $(".btn").on("click", function() {
                                window.open('http://localhost:8080/cart.html?token=' + token)
                            })
                        }
                    })
                    $(".goods_add").attr("href", 'cart.html?token=' + token);
                } else {
                    $(".goods_add").attr("href", 'login.html');
                }
            })


        }
    })
})


//定时
$(function() {
        var timer = setInterval(function() {
            var $text = $(" .time_item_txt");
            var starTime = new Date();
            var endTime = new Date("2019/6/25 16:00:00")
            var ss = (endTime - starTime) / 1000;
            var day = Math.floor(ss / 24 / 3600);
            var hours = Math.floor(ss / 60 / 60 % 24);
            var minute = Math.floor(ss / 60 % 60);
            var seconds = Math.floor(ss % 60);
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minute < 10) {
                minute = "0" + minute;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            $text.eq(0).html(hours);
            $text.eq(1).html(minute);
            $text.eq(2).html(seconds);


            if (ss <= 0) {
                clearInterval(timer);
                $(".chaoshi_seckill_time_main").html("本场抢购结束");
            }
        }, 1000);

    })
    //左侧楼梯

$(function() {
    var flag = true;
    $(window).scroll(function() {
        if (flag) {
            var st = $(this).scrollTop();
            if (st > 1000) {
                $(".chaoshi_lift_list").fadeIn();
                $(".chaoshi_lift").css("display", "block");
            } else {
                $(".chaoshi_lift_list").fadeOut();
                $(".chaoshi_lift_list li").removeClass("chaoshi_lift_item_btn_active");
            }
            $(".o2data-lazyload ").each(function() {
                if (st >= $(this).offset().top - $(this).outerHeight() / 2) {
                    var index = $(this).index() - 1;
                    $(".chaoshi_lift_list li").eq(index).addClass("chaoshi_lift_item_btn_active").siblings().removeClass("chaoshi_lift_item_btn_active");
                }
            })
        }
    })
    $(".chaoshi_lift_list li:not(:last)").click(function() {
        flag = false;
        var index = $(this).index() + 2;
        console.log(index)
        $(this).addClass("chaoshi_lift_item_btn_active").siblings().removeClass("chaoshi_lift_item_btn_active");
        $("body,html").animate({ "scrollTop": $(".o2data-lazyload").eq(index).offset().top }, 200, function() {
            flag = true;
        });
    });
    $(".chaoshi_lift_list li:last").click(function() {
        $("body,html").animate({ "scrollTop": 0 }, 200);
        $(".chaoshi_lift").css("display", "none");

    })
})