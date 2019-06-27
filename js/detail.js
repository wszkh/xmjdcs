 $(function() {

     function getParam(paramName) {
         paramValue = "", isFound = !1;
         if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
             arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
             while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
         }
         return paramValue == "" && (paramValue = null), paramValue
     }
     var id = getParam('id');
     var token = getParam('token')
     console.log(id)
     console.log(token)
     $.get("http://47.104.244.134:8080/goodsbyid.do", {
         id: id,
     }).done(data => {
         console.log(data)
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
     })

     //  $(".btn").on("click", function() {
     //      $.get("http://47.104.244.134:8080/cartsave.do", {
     //          gid:id, 
     //token:
     //      })

     //  })

 })



 //放大镜
 $(function() {
     $(".img").mouseover(function() {
         $("#move,.bimg").show(); //鼠标移入放大镜和大图显示
         $(".detail").hide();
         $("#move").mousemove(function(e) {
             var x = e.clientX - $(this).width() / 2 - $(".img").offset().left;
             var y = e.clientY - $(this).height() / 2 - $(".img").offset().top;
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
 })