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
    //调转首页判断
    if (location.search.substring(1).split("=")[1] != "null") {
        $("#ttbar-home a").attr("href", 'http://localhost:8080/index.html?token=' + token);
        $(".logo").attr("href", 'http://localhost:8080/index.html?token=' + token);
    } else {
        $("#ttbar-home a").attr("href", 'http://localhost:8080/index.html');
        $(".logo").attr("href", 'http://localhost:8080/index.html');
    }

    $.get("http://47.104.244.134:8080/goodsbytid.do", {
        tid: 13,
        page: 10,
        limit: 60
    }).done(data => {


        var data = data.data;
        var str = "";
        for (var i = 0 in data) {
            str += `
            <li ">
                <a href="detail.html?token=${token}&&id=${data[i].id}"><img src = "${data[i].picurl}"></a>
                <a href="detail.html?token=${token}&&id=${data[i].id}"><p class="price">${'¥' +data[i].price}</p></a>
                <a href="detail.html?token=${token}&&id=${data[i].id}"> <p>${data[i].name}</p></a>
                <input type="button" class="btn" value="加入购物车">
            </li>
            `;
            $("#hotwords a").eq(i).html(data[i].name);

        }
        $(".list").html(str);
        //列表页添加购物车
        console.log(token)
        for (let i = 0; i < $(".btn").length; i++) {

            $(".btn").eq(i).click(function() {
                console.log(data[i].id)
                if (token != "null") {
                    $.get("http://47.104.244.134:8080/cartsave.do", {
                        gid: data[i].id,
                        token: token,
                    }).done(data => {
                        if (data.msg === "成功") {}
                    })
                    window.open('http://localhost:8080/cart.html?token=' + token)
                } else {
                    window.open('http://localhost:8080/login.html')
                }

            })


        }

    })


})


$(function() {

    $.get("http://47.104.244.134:8080/goodstypelist.do", {
        l: 2
    }).done(data => {
        var $ul = $(".lists");
        for (var i = 0; i < data.length; i++) {
            var $li = $('<a href="list.html"><li class="list1"></li></a>');
            $ul.append($li);
            var $divBox = $('<div class="box"></div>');
            var $p = $('<p class="tex"></p>');
            $li.append($divBox);
            $li.append($p);
            $p.html(data[i].name);
            $divBox.html(data[i].name);
        }
        for (let i = 0; i < $(".list1").length; i++) {
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
        }
    })
    $(".nav2").on("mouseover", function() {
        $(".lists").css("display", "block");
        $(".lists").on("mouseover", function() {
            $(".lists").css("display", "block");
        })
        $(".lists").on("mouseout", function() {
            $(".lists").css("display", "none");
        })
    })


})