$(function() {
    $("input").eq(0).on("focus", function() {
        $(".yan").css("display", "block");
        $(".yan1").css("display", "none");
        $(".yan2").css("display", "none");
    })


    $("input").eq(0).on("blur", function() {
        $(".yan").css("display", "none");
    })

    $("input").eq(0).on("input", function() {
        $(".x").css("display", "block");
    })
    $(".x").on("click", function() {
        $("input").eq(0).val("");
        $(this).css("display", "none")
    })

    $("input").eq(2).on("click", function() {
        var val = $("input").eq(0).val();
        var pattern = /^1[34578]\d{9}$/;
        if ($("input").eq(0).val() == "") {
            $(".yan1").css("display", "block");
            $(".yan").css("display", "none");
            $(".yan2").css("display", "none");
        } else if (!pattern.test(val)) {
            $(".yan2").css("display", "block")
        }
    })
    $("input").eq(1).on("click", function() {

        var val = $("input").eq(0).val();
        var pattern = /^1[34578]\d{9}$/;
        if ($("input").eq(0).val() == "") {
            $(".yan1").css("display", "block");
            $(".yan").css("display", "none");
            $(".yan2").css("display", "none");
        } else if (!pattern.test(val)) {
            $(".yan2").css("display", "block")
        }
        if (pattern.test(val)) {
            $(".yanzheng").css("display", "block");
            $(".yanzheng input").eq(1).val(function() {
                var Num = "";
                for (var i = 0; i < 6; i++) {
                    Num += Math.floor(Math.random() * 10)
                }
                return Num;
            })
        }

    })
    $(".yanzheng input").eq(0).on("focus input blur", function() {
        if ($(".yanzheng input").eq(0).val() == $(".yanzheng input").eq(1).val()) {
            $(".yanzheng").css("display", "none");
            $(".v").css("display", "block");
            $(".x").css("display", "none");
            $(".check input").css("display", "none");
            $(".form-item-phonecode").css("display", "block");
            $(".field").css("display", "block");

            function s() {
                var i = 120;
                var timer = setInterval(() => {
                    i--;
                    var str = i + "s" + '重新获取';

                }, 1000);
            }
            s();
        }
    })




    $(".feedback").on("mouseover", function() {
        $(this).css("background-position", "-334px 0")
    })
    $(".feedback").on("mouseout", function() {
        $(this).css("background-position", "-367px 0")
    })




})