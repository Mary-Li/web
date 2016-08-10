/**
 * Created by LENOVO on 2016/6/28.
 */
//商品列表
$(function(){
    $("h2").mouseover(function(){
        $(".main_menu").removeClass("none");
        $(".menu_list").mouseover(function(){
            $(".menu_list").removeClass("none");
        });

    });
    $(".main_menu").mouseout(function(){
        $(".main_menu").addClass("none");
    });
});
$(function(){
    $(".main_menu li").mouseover(function(){
        $(".menu_list").css("display","block");
        $(".menu_list").mouseover(function(){
            $(".menu_list").css("display","block");
        });
        $(".menu_list").mouseout(function(){
            $(".menu_list").css("display","none");
        });
    });
    $(".main_menu li").mouseout(function(){
        $(".menu_list").css("display","none");
    });
});
//关注
//function animateHeart(){
//    $(".goods_list li span p").animate({"font-size":"24px"},10,function(){
//        $(".goods_list li span p").animate({"font-size":"18px"});
//    });
//}
//function animateHeart() {
//    $(".goods_list li span p").animate({
//        fontSize: $(".goods_list li span p").css('fontSize') == '24px' ? '18px' : '24px'
//    }, 5, animateHeart);
//}
$(function(){
    var isClick = true;
    $(".goods_list li").mouseover(function(){
        $(".goods_list li span").removeClass("block");
        $(this).find("span").addClass("block");
        $(this).find("span").mouseover(function(){
            $(this).find("strong").html("❤");
            isClick = true;
            //h=setInterval("animateHeart()",10);
        });
        $(this).find("span").mouseout(function(){
            if(isClick==true){
                $(this).find("strong").html("♡");
            }else{
                $(this).find("strong").html("❤");
            }
            //$(this).find("p").css("font-size","24px");
            //clearInterval(h);
        });
    });
    $(".goods_list li span").click(function(){
        $(this).find("strong").html("❤");
        $(this).find("p").html("已关注");
        $(this).addClass("block bg6 w65");
        isClick = false;
    });
});
function big_sml(){
    var w = 17+"px";
    $(this).animate({width:w});
}
//商品详情
//tel_list
function tel_over(a){
    var arr = ["img/tel11.jpg","img/tel21.jpg","img/tel31.jpg","img/tel41.jpg","img/tel51.jpg"];
    var list = $(".pho");
    $(".tel_img").attr({src:arr[a]});
    $(list).removeClass("bor4");
    $(list[a]).addClass("bor4");
}
$(function(){
   $(".send a").hover(function(){
       $(".tel_loc").addClass("block");
       $(".send a").addClass("sty2");
       $(".tel_loc").hover(function(){
           $(".tel_loc").addClass("block");
           $(".send a").addClass("sty2");
       });
       $(".tel_loc").mouseout(function(){
           $(".tel_loc").removeClass("block");
           $(".send a").removeClass("sty2");
       });
   });
    $(".send a").mouseout(function(){
        $(".tel_loc").removeClass("block");
        $(".send a").removeClass("sty2");
    });
});
function tel_clc(a,b){
    var dl = $(".dl"+a);
    $(dl).removeClass("bor2");
    $(dl[b]).addClass("bor2");
}
$(function(){
    var val = $(".ipt1").val();
    $(".add").click(function(){
        val++;
        $(".ipt1").val(val);
    });
    $(".reduce").click(function(){
        if(val>1){
            val--;
            $(".ipt1").val(val);
        }
    });
});
//放大镜
function f(obj,e){
    $(".big").addClass("block");
    $(".large").attr("src",obj.src);
    var x= e.clientX;
    var y= e.clientY;
    $(".large").css("left",-x);
    $(".large").css("top",-y);
}
function f1(){
    $(".big").removeClass("block");
}
/*商品介绍*/
$(function(){
    $(".rgt_list li a").mouseover(function(){
        $(".rgt_list li a").removeClass("coe");
        $(this).addClass("coe");
        $(".bg8").removeClass("coe");
    });
    $(".rgt_list li a").mouseout(function(){
        $(this).removeClass("coe");
    });
    $(".rgt_list li a").click(function(){
        $(".rgt_list li a").removeClass("bg7");
        $(this).addClass("bg7");
    });
    //$(".right4").click(function(){
    //    $(".right4").addClass("block");
    //});
});
$(window).scroll(function(){
    var top=$(window).scrollTop();
    var height=$(window).height();
    if(top>=1800-height){
        $(".rgt_list").addClass("po");
    }else{
        $(".rgt_list").removeClass("po");
    }
});
//留言板
var s = 1;
function txt(){
    var cont = document.getElementById("cont1");
    var div =document.getElementById("a").cloneNode(true);
    var name = document.getElementById("name");
    var main = document.getElementById("main");
    var div1 = div.getElementsByTagName("div");
    var date = new Date();
    var date1 = date.getFullYear();
    var date2 = date.getMonth()+1;
    var date3 = date.getDate();
    var date4 = date.getDay();
    var time1 = date.getHours();
    var time2 = date.getMinutes();
    var time3 = date.getSeconds();
    if(!name.value){
        alert("请输入名字！");
    }else if(!main.value){
        alert("请输入留言！");
    }else{
        cont.appendChild(div);
        div.style.display = "block";
        div1[0].innerHTML = "李美琪";
        div1[1].innerHTML = name.value;
        div1[2].innerHTML = main.value;
        div1[3].innerHTML =  date1+"年"+date2+"月"+date3+"日"+"  " +"星期"+date4+"  "+time1+":"+time2+":"+time3;
        div.id = "a"+1;
        s++;
    }
}
//热门帖\晒单帖
$(function(){
    $(".Mes_list a").click(function(){
        $(".Mes_list a").removeClass("coe");
        $(this).addClass("coe");
    });
});
function Mes(i){
    if(i==0){
        $(".hot"+0).removeClass("none");
        $(".hot"+0).addClass("block");
        $(".hot"+1).removeClass("block");
    }else{
        $(".hot"+1).addClass("block");
        $(".hot"+0).addClass("none");
    }
}
//注册页
$(function(){
    $(".ipt_dl input").focus(function(){
        $(this).parent().parent().next().addClass("coc5");
    });
    $(".ipt_dl input").blur(function(){
        $(this).parent().parent().next().addClass("sp");
        $(this).parent().parent().next().removeClass("coc5");
        if(this.value==""){
            $(this).removeClass("bg10");
        }else{
            $(this).addClass("bg10");
        }
    });
    $("#pas").blur(function(){
        var pas=$("#pas").val();
        if(pas.length<=5){
            $(this).removeClass("bg10");
            $(this).parent().parent().next().removeClass();
            $(this).parent().parent().next().addClass("sp");
            $(this).parent().parent().addClass("coe2");
            $(this).parent().parent().next().addClass("coc51");
            $(this).parent().parent().next().html("长度只能在6-20个字符之间");
        }else if(pas.length>=6&&pas.length<=8){
            $(this).addClass("bg10");
            $(this).parent().parent().next().removeClass();
            $(this).parent().parent().next().addClass("sp");
            $(this).parent().parent().removeClass("coe2");
            $(this).parent().parent().next().addClass("coc52");
            $(this).parent().parent().next().html("有被盗风险，建议使用字母、数字和符号两种及以上的组合");
        }else if(pas.length>=9&&pas.length<=13){
            $(this).addClass("bg10");

            $(this).parent().parent().next().removeClass();
            $(this).parent().parent().next().addClass("sp");
            $(this).parent().parent().next().addClass("coc53");
            $(this).parent().parent().next().html("安全强度适中，可以使用三种以上的组合来提高安全强度");
        }else{
            $(this).parent().parent().removeClass("coe2");
            $(this).parent().parent().next().removeClass();
            $(this).parent().parent().next().addClass("sp");
            $(this).parent().parent().next().addClass("coc54");
            $(this).parent().parent().next().html("你的密码很安全");
        }
    });
});
var arr5 = new Array();
function People(){
    this.user;
    this.pas;
    this.pass;
    this.tel;
    this.num;
    this.tel_num;
}
function t2(){
    var user = document.getElementById("user").value;
    var pas = document.getElementById("pas").value;
    var pass = document.getElementById("pass").value;
    var tel = document.getElementById("tel").value;
    var num = document.getElementById("num").value;
    var tel_num = document.getElementById("tel_num").value;
    var user1 = document.getElementById("user");
    var pas1 = document.getElementById("pas");
    var pass1 = document.getElementById("pass");
    var tel = document.getElementById("tel");
    var num1 = document.getElementById("num");
    var tel_num1 = document.getElementById("tel_num");
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    if(user == ""){
        alert("请输入用户名！");
    }else if(pas1 == ""){
        alert("请输入密码！");
    }else if(pass == ""){
        alert("请再次输入密码！");
    }else if(tel == ""){
        alert("请输入常用电话号码！");
    }else if(num == ""){
        alert("请输入验证码！");
    }else if(tel_num == ""){
        alert("请输入手机验证码！");
    }else{
        var p = new People();
        p.user = user;
        p.pas = pas;
        p.pass = pass;
        p.tel = tel;
        p.num = num;
        p.tel_num = tel_num;
        arr5.push(p);
        document.getElementById("box").innerHTML = "注册成功了";
    }
}