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
var token = getParam('token');

//调转首页判断
if (location.search.substring(1).split("=")[1] != "null") {
    $("#ttbar-home a").attr("href", 'http://localhost:8080/index.html?token=' + token);
    $("#logo").attr("href", 'http://localhost:8080/index.html?token=' + token);
} else {
    $("#ttbar-home a").attr("href", 'http://localhost:8080/index.html');
    $("#logo").attr("href", 'http://localhost:8080/index.html');
}

class Cart {
    constructor(data) {
            this.data = data;
        }
        //更新购物车数据
    upData(uid, ugid, unum) {
        $.get("http://47.104.244.134:8080/cartupdate.do", { id: uid, gid: ugid, num: unum, token: token })
            .done((data) => {
                console.log(data)
            })
    }

    show(objid, allid) {
        this.oul = document.getElementById(objid);

        var str = "";
        for (let i = 0; i < this.data.length; i++) {
            str += `
		<li data-id="${this.data[i].id}" data-gid="${this.data[i].gid}">
		    <input type="checkbox" class="chk" checked="checked">        
			<a href="detial.html?id=${this.data[i].goods.gid}"><img src='${this.data[i].goods.picurl}'></a>					
			<p class="title">${this.data[i].goods.name}<br>单价：<span class="dj">${this.data[i].goods.price}</span></p>
			<p class="js">
            <span class="jian" }">-</span>
		 	<input type="text" value="${this.data[i].count}" class="num">
			<span class="jia" }">+</span>	
			 </p>						
            <span class="jg">${this.data[i].goods.price * this.data[i].count}</span>
            <span class="del" data-id="${this.data[i].id}" data-gid="${this.data[i].gid}">删除该商品</span>
        </li>`;
        }
        this.oul.innerHTML = str;
        this.ali = document.getElementsByTagName("li");
        this.ajian = document.getElementsByClassName("jian");
        this.ajia = document.getElementsByClassName("jia");
        this.anum = document.getElementsByClassName("num");
        this.ajg = document.getElementsByClassName("jg");
        this.adelbtn = document.getElementsByClassName("del");
        this.achk = document.getElementsByClassName("chk");
        this.zj = document.getElementById("zj");
        this.all = document.getElementById(allid);
        this.all.checked = true;
        this.alldel = document.getElementsByClassName('alldel');
        this.allchecked();
        this.all.onclick = () => {
            if (this.all.checked) {
                for (let j = 0; j < this.achk.length; j++) {
                    this.achk[j].checked = true
                }
            } else {
                for (let k = 0; k < this.achk.length; k++) {
                    this.achk[k].checked = false;
                }
            }
            this.getzj();
            this.allchecked()
        }
        var _this = this;
        for (let i = 0; i < this.ajian.length; i++) {
            this.ajia[i].onclick = () => {
                this.anum[i].value = parseInt(this.anum[i].value) + 1;
                var id = this.ajia[i].parentNode.parentNode.getAttribute("data-id");
                var gid = this.ajia[i].parentNode.parentNode.getAttribute("data-gid");
                console.log(id)
                console.log(gid)
                this.upData(id, gid, 1);
                this.getzj();
                this.allchecked()
            }
            this.ajian[i].onclick = () => {
                var id = this.ajia[i].parentNode.parentNode.getAttribute("data-id");
                var gid = this.ajia[i].parentNode.parentNode.getAttribute("data-gid");
                this.anum[i].value -= 1;
                if (this.anum[i].value <= 1) {
                    this.anum[i].value = 1
                }
                this.upData(id, gid, -1);
                this.getzj();
                this.allchecked()
            }
            this.anum[i].onchange = () => {
                var id = this.anum[i].parentNode.parentNode.getAttribute("data-id");
                var gid = this.anum[i].parentNode.parentNode.getAttribute("data-gid");
                if (this.anum[i].value <= 0) {
                    this.anum[i].value = 0
                    this.upData(id, gid, 0);
                }
                this.upData(id, gid, this.anum[i].value);
                this.getzj();
                this.allchecked()
            }

            this.adelbtn[i].onclick = function() {
                var id = this.getAttribute("data-id");
                var gid = this.getAttribute("data-gid");
                _this.oul.removeChild(this.parentNode);
                delete _this.data[id]
                _this.upData(id, gid, 0);
                _this.getzj();
                _this.allchecked()
            }
            this.achk[i].onclick = () => {
                this.getzj();
                this.allchecked()
            }
        }
    }
    getzj() {
        var total = 0;
        this.adj = document.getElementsByClassName("dj")

        for (let i = 0; i < this.ajg.length; i++) {
            this.ajg[i].innerText = this.anum[i].value * this.adj[i].innerText
        }
        var flag = true;
        for (let i = 0; i < this.achk.length; i++) {
            if (this.achk[i].checked) {
                total += parseInt(this.ajg[i].innerText)
            } else {
                flag = false;
            }
        }
        this.all.checked = flag;
        this.zj.innerText = "总计：" + total;
    }
    allchecked() {
        var s = this.oul.children;
        if (s.length == 0) {
            this.zj.style.display = "none";
            this.all.checked = false;
        }
    }
}