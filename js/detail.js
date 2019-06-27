 $(function() {
     var name = getCookie("name");

     //欢迎
     if (location.search.substring(1).split("=")[1] != undefined) {
         $(".fore1").css("display", "none");
         $("#hello").css("display", "block");
         $("#hello span").html(name)
     }

     function getParam(paramName) {
         paramValue = "", isFound = !1;
         if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
             arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
             while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
         }
         return paramValue == "" && (paramValue = null), paramValue
     }
     var id = getParam('id');
     var token = getParam('token');

     //调转首页判断
     if (location.search.substring(1).split("=")[1] != "null") {
         $("#ttbar-home a").attr("href", 'http://localhost:8080/index.html?token=' + token);
         $(".logo").attr("href", 'http://localhost:8080/index.html?token=' + token);
     } else {
         $("#ttbar-home a").attr("href", 'http://localhost:8080/index.html');
         $(".logo").attr("href", 'http://localhost:8080/index.html');
     }


     $.get("http://47.104.244.134:8080/goodsbyid.do", {
         id: id,
     }).done(data => {
         var str = `
            <img src='${data.picurl}'/>
         `;
         var str1 = `
                <p class="dian">${data.info}</p>
                <p class="name">${data.name}</p>
                <p class="price">${'¥' +data.price}</p>
                <input type="text" class="num" value="1"/>
                <input type="button" value="+" class="jia"/>
                <input type="button" value="-" class="jian"/>
                <button class="btn" >加入购物车</button>
         `
         $(".simg").append(str);
         $(".detail").append(str1);
         $(".bimg").append(str)

         //+-
         $(".jia").on("click", function() {
             if ($(".num").val() === "") {
                 $(".num").val(1)
             } else {
                 $(".num").val(parseInt($(".num").val()) + 1)
             }
         })
         $(".jian").on("click", function() {
                 if ($(".num").val() === "") {
                     $(".num").val(1)
                 } else {
                     $(".num").val(parseInt($(".num").val()) - 1)
                 }
                 if ($(".num").val() <= 1) {
                     $(".num").val(1);
                 }
             })
             //加入购物车
         $(".btn").on("click", function() {
             if (token != "null") {
                 for (var i = 0; i < $(".num").val(); i++) {
                     $.get("http://47.104.244.134:8080/cartsave.do", {
                         gid: id,
                         token: token,
                     }).done(data => {

                     })
                 }
                 if (i == $(".num").val()) {
                     console.log(i)
                     var msg = confirm("你即将添加多件该商品确定吗?")
                     if (msg) {
                         window.open('http://localhost:8080/cart.html?token=' + token);
                     }
                 }
             } else {
                 alert("请登录 即将调转到登录页面")
                 window.open('http://localhost:8080/login.html');
             }

         })

     })

 })


 //放大镜
 $(function() {
     $(".img").mouseover(function() {
         $("#move,.bimg").show(); //鼠标移入放大镜和大图显示
         $(".detail").hide();
         $("#move").mousemove(function(e) {
             var x = e.pageX - $(this).width() / 2 - $(".img").offset().left;
             var y = e.pageY - $(this).height() / 2 - $(".img").offset().top;
             //判断小图(上下——左右)边界
             if (x <= 0) {
                 x = 0;
             } else if (x >= $(".img").width() - $(this).width()) {
                 x = $(".img").width() - $(this).width()
             }

             if (y <= 0) {
                 y = 0;
             } else if (y >= $(".img").height() - $(this).height()) {
                 y = $(".img").height() - $(this).height()
             }
             $(this).css({
                 "left": x,
                 "top": y
             });

             var bx = x / $(".img").width() * $(".bimg img").width();
             var by = y / $(".img").height() * $(".bimg img").height();

             $(".bimg img").css({
                 "left": -bx,
                 "top": -by
             });
         })
     })
     $(".img").mouseout(function() {
         $("#move,.bimg").hide(); //鼠标移出放大镜和大图隐藏
         $(".detail").show();
     })

     //tab切换
     $(".tab").find("img").click(function() {

         Index = $(".tab").find("img").index($(this)) + 1;

         $(".simg").find("img").attr("src", "img/" + Index + ".jpg");
         $(".bimg").find("img").attr("src", "img/" + Index + ".jpg");
     })
 })