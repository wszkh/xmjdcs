$(function() {
        //模态框
        var timer = setTimeout(function() {
            $("#myModal").addClass("in")
                .css("display", "block")
        }, 2000)
        $(".btn-primary").on("click", function() {
            $("#myModal").removeClass("in")
                .css("display", "none")
        })
        $(".btn-default").on("click", function() {
            $("#myModal").removeClass("in")
                .css("display", "none")
            $(window).attr("location", "index.html")
        })
        $(".close").on("click", function() {
            $("#myModal").removeClass("in")
                .css("display", "none")
            $(window).attr("location", "index.html")
        })



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
            //随机验证
        $("input").eq(1).on("click", function() {
            var val = $("input").eq(0).val();
            // 手机 
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

        //重新获取按钮
        $(".yanzheng input").eq(0).on("focus input blur", function() {
                if ($(".yanzheng input").eq(0).val() == $(".yanzheng input").eq(1).val()) {
                    $(".yanzheng").css("display", "none");
                    $(".v").css("display", "block");
                    $(".x").css("display", "none");
                    $(".check input").css("display", "none");
                    $(".form-item-phonecode").css("display", "block");
                    $(".field").css("display", "block");
                    $(".phoneyz").css("display", "block")
                    let i = 10;
                    var timer = setInterval(() => {
                        i--;
                        var str = i + "s" + '后重新获取';
                        $("#getPhoneCode").html(str);
                        if (i == 0) {
                            clearInterval(timer);
                            let str1 = '重新获取';
                            $("#getPhoneCode").html(str1);
                            $(".audio-tip").css("display", "block ");
                            $(".input-tip").css("display", "none");
                            $("#getPhoneCode").on("click", function() {
                                $(".audio-tip").css("display", "none ");
                                $(".input-tip").css("display", "block");
                                let j = 10;
                                var timer = setInterval(() => {
                                    j--;
                                    var str2 = j + "s" + '后重新获取';
                                    $("#getPhoneCode").html(str2);
                                    if (j == 0) {
                                        clearInterval(timer);
                                        let str = '重新获取';
                                        $(".audio-tip").css("display", "block ");
                                        $(".input-tip").css("display", "none");
                                        $("#getPhoneCode").html(str);
                                    }
                                }, 1000);
                            })
                        }
                    }, 1000);
                }
            })
            //手机验证 第二步
        $(".phoneyz input").val(function() {
                var Num = "";
                for (var i = 0; i < 6; i++) {
                    Num += Math.floor(Math.random() * 10)
                }
                return Num;
            })
            //出现第二步
        $(".phonecode").on("focus change blur", function() {
                if ($(".phonecode").val() == $(".phoneyz input").val()) {
                    $(".next input").on("click", function() {
                        $("#reg-form").css("display", "none");
                        $("#step2-wrap").css("display", "block");
                        $(".phoneyz").css("display", "none");
                        $(".sz p").eq(0).css("color", "#0f0");
                        $(".two").eq(0).css("color", "#0f0");
                        $(".tzxx").eq(0).css("color", "#0f0")
                        $("footer").css("top", "10px");
                    })
                }
            })
            //下方提示
        for (let i = 0; i < $(".field").length; i++) {
            $(".field").eq(i).on("focus", () => {
                $(".input-tip").eq(i).css("display", "block");
            })
        }
        $(".field").on("blur", () => {
            $(".input-tip").css("display", "none");
            $(".field").eq(3).on("blur", () => {
                if ($("#form-equalTopwd").val() != $("#form-pwd").val()) {
                    $(".input-tip").eq(3).html("请确认两次输入的密码一样")
                        .css("display", "block")
                } else {
                    $(".input-tip").eq(3)
                        .css("display", "none")
                }
            })
        })

        $(".feedback").on("mouseover", function() {
            $(this).css("background-position", "-334px 0")
        });
        $(".feedback").on("mouseout", function() {
            $(this).css("background-position", "-367px 0")
        })

    })
    //数据 验证
$(function() {
    $("#form-account").on("blur", function() {
        if ($("#form-account").val() === "") {
            alert("用户名不能为空请填写用户名")
        } else {
            $.get("http://47.104.244.134:8080/username.do", {
                username: $("#form-account").val(),
            }).done(data => {
                console.log(data)
                console.log($("#form-account").val())
                if (data.msg === "失败") {
                    alert("用户名可用");
                    $('.btn-register').attr('disabled', false);
                } else {
                    alert('用户名重复');
                    $('.btn-register').attr('disabled', true);
                }
            })
        }

    })

    //邮箱验证


    $("#form-email").on("blur", function() {
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        var val = $("#form-email").val();
        if (!reg.test(val)) {
            alert("邮箱格式不正确 请输入正确的邮箱")
        } else {
            $.get("http://47.104.244.134:8080/useremail.do", {
                email: $("#form-email").val(),
            }).done(data => {
                if (data.msg === "失败") {
                    alert("邮箱可用")
                    $('.btn-register').attr('disabled', false);
                } else {
                    alert('邮箱重复');
                    $('.btn-register').attr('disabled', true);
                }
            })
        }

    });

    $("#form-register").on("click", function(event) {
        event.preventDefault();

        $.post("http://47.104.244.134:8080/usersave.do", {
            username: $("#form-account").val(),
            password: $("#form-pwd").val(),
            email: $("#form-email").val(),
            sex: 1
        }).done(data => {
            console.log(data)
            if (data.msg === "成功") {

                alert("注册成功")
                var timer = setTimeout(function() {
                    $(window).attr('location', 'login.html');
                }, 1000)
            } else {
                alert("注册失败 请重新填写")
            }
        })
    })

})