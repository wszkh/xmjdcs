$(function() {

        // 二维码账号登录点击切换
        $("button").eq(1).on("click", function() {
            $(".info-middle").css("display", "block");
            $(".qrcode-login").css("display", "none");
            $(this).css("color", "red");
            $("button").eq(0).css("color", "#333")
        })
        $("button").eq(0).on("click", function() {
                $(".info-middle").css("display", "none");
                $(".qrcode-login").css("display", "black");
                $(this).css("color", "red");
                $("button").eq(1).css("color", "#333");
                $(".qrcode-error-2016").css("left", "-64px");
                $(".qrcode-img").css("left", "0");
                $(".qrcode-help").css("display", "block");
            })
            //点击登录按钮
        $("button").eq(2).on("click", function() {
                if ($("input").val() == "") {
                    $(".msg-wrap").css("display", "block")
                }
                $("input").eq(1).css("border", "1px solid #f00");
                $("input").on("focus", function() {
                    $(this).css("border", "0");
                    $("input").not($(this)).css("border", "1px solid #f00")
                })

                $("input").eq(0).on("focus", function() {
                    $(".name-label").css('background-position', "0 -95px")
                })
                $("input").eq(0).on("blur", function() {
                    $(".name-label").css('background-position', "0 0")
                })
                $("input").eq(1).on("focus", function() {
                    $(".pwd-label").css('background-position', "0 -95px")
                })
                $("input").eq(1).on("blur", function() {
                    $(".pwd-label").css('background-position', "0 0")
                })

            })
            //点击文本框
        $("input").eq(0).on("focus", function() {
            $(".name-label").css('background-position', "0 -48px")
        })
        $("input").eq(0).on("blur", function() {
            $(".name-label").css('background-position', "0 0")
        })
        $("input").eq(1).on("focus", function() {
            $(".pwd-label").css('background-position', "0 -48px")
        })
        $("input").eq(1).on("blur", function() {
                $(".pwd-label").css('background-position', "0 0")
            })
            //鼠标移入手机图片出现
        $(".qrcode-main").on("mouseover", function() {
            $(".qrcode-error-2016").css("left", "-64px");
            $(".qrcode-img").css("left", "0");
            $(".qrcode-help").css("display", "block");
        })
        $(".qrcode-main").on("mouseout", function() {
            $(".qrcode-error-2016").css("left", "0");
            $(".qrcode-img").css("left", "64px");
            $(".qrcode-help").css("display", "none");
        })
        setTimeout(function() {
            $(".qrcode-error-2016").css("display", "block")
        }, 100000)
    })
    //点击刷新
$(".refresh-btn").on("click", function() {
    $(".qrcode-error-2016").css("display", "none")
})

//数据
$(function() {

    $("#log").on("click", function(event) {
        setCookie("name", $(".username input ").val())
        $.post("http://47.104.244.134:8080/userlogin.do", {
            name: $(".username input").val(),
            password: $(".password input").val(),
        }).done(data => {
            setCookie("token", data.data.token)

            console.log(data.data.token)
            if (data.msg === "OK") {
                window.open('index.html?token=' + data.data.token)
            }
        })
    })
})