/**
 * Created by LENOVO on 2016/6/6.
 */
//$(".loc_txt li a").mouseover(function(){
//    $(this).css({ background:"#f4f4f4", color:"#c81623"});
//});
//$(".loc_txt li a").mouseout(function(){
//    $(this).css({ background:"white", color:"#666"});
//});

//送至地点
$(function(){
    $(".locale").mouseover(function(){
        $(".locale").css({background:"white url('img/icon11.gif') no-repeat 76px 15px","border-left":"1px solid #dddddd","border-right":"1px solid #dddddd"});
        $(".loc_txt").css("display","block");
        $(".loc_txt").mouseover(function(){
            $(".locale").css({background:"white url('img/icon11.gif') no-repeat 76px 15px","border-left":"1px solid #dddddd","border-right":"1px solid #dddddd"});
            $(".loc_txt").css("display","block");
            $(".loc_txt li a").click(function(){
                $(".loc_txt li a").addClass("aaa");
                $(".loc_txt li a").removeClass("abc bgc cow");
                //$(".loc_txt li a").hover().css({ background: "#f4f4f4",color: "#c81623"});
                $(this).addClass("abc");
                $(".locname").html($(this).text());
            });
        });
        $(".loc_txt").mouseout(function(){
            $(".locale").css({background:"#f1f1f1 url('img/icon1.gif') no-repeat 76px 15px",border:"none"});
            $(".loc_txt").css("display","none");
        });
    });
    $(".locale").mouseout(function(){
        $(".locale").css({background:"#f1f1f1 url('img/icon1.gif') no-repeat 76px 15px",border:"none"});
        $(".loc_txt").css("display","none");
    });
    //$(".loc_txt li a").mouseover(function(){
    //    $(this).css({background:"#f4f4f4",color:"#c81623"});
    //});
    //$(".loc_txt li a").mouseout(function(){
    //    $(this).css({background:"#fff",color:"#666"});
    //});
});

//top_list
//fore1
//$(function(){
//   $(".fore1").mouseover(function(){
//       $(".fore1").css({background:"white url('img/icon11.gif') no-repeat 68px 15px","border-left":"1px solid #dddddd","border-right":"1px solid #dddddd"});
//       $(".fore11").css("display","block");
//       $(".fore11").mouseover(function(){
//           $(".fore1").css({background:"white url('img/icon11.gif') no-repeat 68px 15px","border-left":"1px solid #dddddd","border-right":"1px solid #dddddd"})
//           $(".fore11").css("display","block");
//       });
//       $(".fore11").mouseout(function(){
//           $(".fore1").css({background:"#f1f1f1 url('img/icon1.gif') no-repeat 68px 15px","border-left":"1px solid #dddddd","border-right":"1px solid #dddddd"})
//           $(".fore11").css("display","none");
//       });
//   });
//    $(".fore1").mouseout(function(){
//       $(".fore1").css({background:"#f1f1f1",border:"none"});
//       $(".fore11").css("display","none");
//    });
//});
function over(name,i){
    if(i!=2){
        $(".fore"+i).removeClass("cc");
        $(".fore"+i).addClass("bb");
        $("."+name+i).css("display","block");
    }else{
        $(".fore"+i).removeClass("cc");
        $(".fore"+i).addClass("w81 bb1");
        $("."+name+i).css("display","block");
    }
    //$(".top_list li").css("background", "url('img/icon2.gif') no-repeat left 9px");
}
function out(name,i){
    if(i!=2){
        $(".fore"+i).removeClass("bb");
        $(".fore"+i).addClass("cc");
        $("."+name+i).css("display","none");
        //$(".fore"+i).parent().toggleClass("bg2");
    }else{
        $(".fore"+i).removeClass("bb1");
        $(".fore"+i).addClass("w81 cc");
        $("."+name+i).css("display","none");
    }
}

//search
$(function(){
    $(".se").attr({placeholder:"金融"});
    $(".se").focus(function(){
        $(".se").val("");
        $(".se").html().addClass("cob");
    });
    $(".se").blur(function(){
        if($(".se").val()==""){
            $(".se").attr({placeholder:"金融"});
        }else{
            $(".se").html().addClass("cob");
            $(".se").html(this);
        }
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//shop
$(function(){
    $(".shop").mouseover(function(){
        $(".shop").css("background", "#fff url('img/icon4.gif') no-repeat 19px 10px");
        $(".shop img").css("display","block");
    });
    $(".shop").mouseout(function(){
        $(".shop").css("background", "#f9f9f9 url('img/icon4.gif') no-repeat 19px 10px");
        $(".shop img").css("display","none");
    });
    $(".shop a").mouseover(function(){
        $(".shop").css("background", "#fff url('img/icon4.gif') no-repeat 19px 10px");
        $(".shop img").css("display","block");
    });
    $(".shop a").mouseover(function(){
        $(".shop").css("background", "#fff url('img/icon4.gif') no-repeat 19px 10px");
        $(".shop img").css("display","none");
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
//////
//banner
//var i=0;
//var h = null;
//var arr = ["img/ban1.jpg","img/ban2.jpg","img/ban3.jpg","img/ban4.jpg","img/ban5.jpg","img/ban6.jpg"];
//function Ban(){
//    var list = $(".ban_list li");
//    $(".ban").attr("src",arr[i]);
//    $(list).removeClass("bg55");
//    $(list).removeClass("bg5");
//    $(list[i]).addClass("bg5");
//    i++;
//    if(i>=arr.length){
//        i=0;
//    }
//}
//h = setInterval("Ban()",1000);
////ban_list
//function Banlist_over(a){
//    $(".ban_list li").removeClass("bg5");
//    $(this).addClass("bg5");
//    $(".ban").attr("src",arr[a]);
//    clearInterval(h);
//}
//function Banlist_out(a){
//    i=a;
//    $(this).removeClass("bg5");
//    h = setInterval("Ban()",1000);
//}
////bannermouseovermouseout
//function Ban_over(){
//    clearInterval(h);
//    $(".btn").addClass("block");
//}
//function Ban_out(){
//    h = setInterval("Ban()",1000);
//    $(".btn").removeClass("block");
//}
////leftbutton,rightbutton点击两下才变，li的背景颜色没变？？？？？？
//function btn_over(){
//    clearInterval(h);
//    $(".btn").addClass("block");
//}
//
//function lbtncl(){
//    var li = $(".ban_list li");
//    $(li[i]).removeClass("bg5");
//    //clearInterval("Ban_out()");
//    //clearInterval(h);
//    $(".btn").addClass("block");
//    if (i == 0) {
//        i = arr.length - 1;
//        $(".ban").attr("src", arr[i]);
//        $(li[i]).addClass("bg5");
//    } else {
//        i--;
//        $(".ban").attr("src", arr[i]);
//        $(li[i]).addClass("bg5");
//    }
//}
//function rbtncl(){
//    var li = $(".ban_list li");
//    $(li[i]).removeClass("bg5");
//    $(".btn").addClass("block");
//    if (i == (arr.length - 1)) {
//        $(li[i]).removeClass("bg5");
//        i = 0;
//        $(".ban").attr("src", arr[i]);
//        $(li[i]).addClass("bg5");
//    } else {
//        $(li[i]).removeClass("bg5");
//        i++;
//        $(".ban").attr("src", arr[i]);
//        $(li[i]).addClass("bg5");
//    }
//}
//banner
$(function(){
    $("#admin").click(function(){
        $("#show").slideDown("slow");
        setTimeout("up()",2000);
    });
    var bannerSlider= new Slider($("#banner"),{
        time: 3000,
        delay: 400,
        event: 'hover',
        auto: true,
        mode: 'fade',
        controller: $('#bannerCtrl'),
        activeControllerCls: 'active'
    });
    $("#banner .flex-prev").click(function() {
        bannerSlider.prev()
    });
    $("#banner .flex-next").click(function() {
        bannerSlider.next()
    });
    $(".meslider li").mouseenter(function(){
        $(this).children(".mtt").css("visibility","visible");
    });
    $(".meslider li").mouseleave(function(){
        $(this).children(".mtt").css("visibility","hidden");
    });
    $(".meslider .mtt").mousedown(function(){
        $("#left1").css("right","280px");
        $("#show1").css("visibility","visible");
    });
    $(".meslider .mtt").mouseup(function(){
        $("#left1").css("right","0px");
        $("#show1").css("visibility","hidden");
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//right
$(function(){
    //close
    $(".close").click(function(){
        $(".phone").removeClass("block");
        $(".right_list1").removeClass("block");
        $(".right_list").removeClass("none");
    });
    //号码
    $(".tel").focus(function(){
        $(".tel").val("");
    });
    $(".tel").blur(function(){
        if($(".tel").val(null)){
            $(".tel").val("移动、联通、电信");
        }else{
            $(".tel").val($(this).val());
        }
    });
    //面值
    $(".sel").change(function(){
        $(".p1").text($(".sel").val());
    });
});
//open
function l1(f){
    var list = $(".right_list1 li");
    var div1 = $(".div1");
    $(".phone").addClass("block");
    $(".right_list1").addClass("block");
    $(".right_list").addClass("none");
    $(list[f]).addClass("bor1");
    $(div1[f]).addClass("block");
}
function meun(q){
    var list = $(".right_list1 li");
    var div1 = $(".div1");
    for(var i=0;i<=list.length;i++){
        $(list[i]).removeClass("bor1");
        $(div1[i]).removeClass("block");
    }
    $(list[q]).addClass("bor1");
    $(div1[q]).addClass("block");
}
//话费充值
function pho_meun(p){
    var list = $(".pho_list a");
    for(var i=0;i<=list.length;i++){
        $(list[i]).removeClass("bg4");
    }
    $(list[p]).addClass("bg4");
}
//品牌盛典
$(function(){
    var i=0;
    $(".img").mouseover(function(){
        $(".lbtn").addClass("block");
        $(".rbtn").addClass("block");
        $(".lbtn").mouseover(function(){
            $(".lbtn").addClass("block");
            $(".rbtn").addClass("block");
        });
        $(".rbtn").mouseover(function(){
            $(".lbtn").addClass("block");
            $(".rbtn").addClass("block");
        });
    });
    $(".img").mouseout(function(){
        $(".lbtn").removeClass("block");
        $(".rbtn").removeClass("block");
    });
    $(".lbtn").click(function(){
        var left = $(".img").css("left");
        left = parseInt(left)-1000+"px";
        var img = $(".img img");
        if(i<3){
            i++;
            $(".img").animate({left:left});
        }else if(i==3){
            i=0;
            left = 0+"px";
            $(".img").animate({left:left});
        }
    });
    $(".rbtn").click(function(){
        var left = $(".img").css("left");
        left = parseInt(left)+1000+"px";
        var img = $(".img img");
        if(i>0){
            i--;
            $(".img").animate({left:left});
        }else if (i==0){
            i=3;
            left = "-"+3000+"px";
            $(".img").animate({left:left});
        }
    });
});
//猜你喜欢-换一批
$(function(){
    //图片数组
    var imgs = [
        [{src:"img/like1.jpg"},
            {src:"img/like2.jpg"},
            {src:"img/like3.jpg"},
            {src:"img/like4.jpg"},
            {src:"img/like5.jpg"},
            {src:"img/like6.jpg"}
        ],
        [{src:"img/like7.jpg"},
            {src:"img/like8.jpg"},
            {src:"img/like9.jpg"},
            {src:"img/like10.jpg"},
            {src:"img/like11.jpg"},
            {src:"img/like12.jpg"}
        ],
        [{src:"img/like13.jpg"},
            {src:"img/like14.jpg"},
            {src:"img/like15.jpg"},
            {src:"img/like16.jpg"},
            {src:"img/like17.jpg"},
            {src:"img/like18.jpg"}
        ],
        [{src:"img/like19.jpg"},
            {src:"img/like20.jpg"},
            {src:"img/like21.jpg"},
            {src:"img/like22.jpg"},
            {src:"img/like23.jpg"},
            {src:"img/like24.jpg"}
        ]
    ];
    //文字数字
    var txt = [
        [
            "凯舒卡通抱枕靠垫枕办公室午睡枕靠垫坐车用腰枕 美丽俏佳人 40cm*40cm",
            "喜家家 旅行收纳袋 折叠收纳包 环保袋衣物整理袋购物袋 枚红色",
            "洗颜专科 柔澈泡沫 洁面乳 120g（资生堂旗下）",
            "美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）900克（荷兰原装进口）",
            "伊利 安慕希希腊风味酸牛奶常温酸牛奶礼盒装12*205g",
            "日本花王Merries纸尿裤妙而舒大号L54片 9-14kg 保税区发货"
        ],
        [
            "ivvi i3-01 金色 移动联通电信4G手机 双卡双待",
            "喜家家 旅行收纳袋 折叠收纳包 环保袋衣物整理袋购物袋 枚红色",
            "洗颜专科 柔澈泡沫 洁面乳 120g（资生堂旗下）",
            "美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）900克（荷兰原装进口）",
            "伊利 安慕希希腊风味酸牛奶常温酸牛奶礼盒装12*205g",
            "日本花王Merries纸尿裤妙而舒大号L54片 9-14kg 保税区发货"
        ],
        [
            "魅族 魅蓝3 全网通4G手机 白色 标准版(2G RAM+16G ROM)标配]魅族 魅蓝3 全网通4G手机 白色 标准版(2G RAM+16G ROM)标配",
            "美的（Midea）FS40-11L1 落地扇/电风扇¥",
            "花王（Merries）婴儿纸尿裤 大号L54片（9-14kg）（日本原装进口）",
            "Apple iPhone 6s Plus (A1699) 64G 玫瑰金色 移动联通电信4G手机",
            "加多宝凉茶植物饮料利乐包250ml*16 整箱",
            "Nutrilon诺优能 幼儿配方奶粉3段800g（荷兰进口）12-36个月"
        ],
        [
            "福临门 粳米 清香米 中粮出品 大米 5kg",
            "清风（APP） 卷筒卫生纸 原木纯品 3层270段27卷整箱装",
            "伊利 安慕希希腊风味酸牛奶常温酸牛奶礼盒装12*205g",
            "福临门 东北大米 水晶米 中粮出品 大米5kg",
            "欧莱雅（LOREAL）男士火山岩控油清痘洁面膏100ml（祛痘清爽 深层清洁）（洗面奶）",
            "小米 红米 3 全网通版 时尚金色 移动联通电信4G手机 双卡双待"
        ]
    ];
    //价格数组
    var price = [
        ["¥29.00","¥25.00","¥48.00","¥185.00","¥59.40","¥109.00"],
        ["¥699.00","139.00","¥129.00","¥6388.00","¥29.50","¥149.00"],
        ["¥29.90","¥45.90","¥59.40","¥¥29.90","¥36.90","¥699.00"],
        ["¥2499.00","¥25.00","¥48.00","¥185.00","¥59.40","¥109.00"]
    ];
    var j=1;
    $(".huan").click(function(){
        var img = $(".like img");
        var dd = $(".like .dd");
        var like_p =$(".like .like_p");
        for(var i=0;i<6;i++){
            img[i].src = imgs[j][i].src;
            dd[i].innerHTML = txt[j][i];
            like_p[i].innerHTML = price[j][i];
        }
        j++;
        if(j>=4){
            j=0;
        }
    });
});
//换一批划过小红条 356 915?????????????????????????????????????
//var l = 356;
function h_over(){
    $(".mov img").animate({left:915});
}
function h_out(){
    parseInt($(".mov img").css("left"))==356;
}
//floor1
$(function(){
    $(".floor1_list li:first").addClass("border");
    $(".floor1_list li").mouseover(function(){
        $(".floor1_list li").removeClass("border");
        $(this).addClass("border");
    });
});
function mover(a){
    var list = $(".cen_right");
    $(list).removeClass("block");
    $(list[a]).addClass("block");
}
//floor1---图片轮播
var j=0;
var arr1 = ["img/shoe2.jpg","img/shoe3.jpg","img/shoe4.jpg","img/shoe5.jpg"];
var m=setInterval("cenImg()",1000);
function cenImg(){
    var list = $(".cen_list li");
    $(".cen_img").attr("src",arr1[j]);
    $(list).removeClass("bg5");
    $(list[j]).addClass("bg5");
    j++;
    if(j>=arr1.length){
        j=0;
    }
    $(list[j]).mouseover(function(){
        clearInterval(m);
    });
}
//cen_lbtn
function cl(){
    clearInterval(m);
    if(i==0){
        j=arr1.length-1;
    }else{
        j-=2;
        m=setInterval("cenImg()",1000);
    }
}
//cen_rbtn
function cr(){
    clearInterval(m);
    if(i==arr1.length-1){
        j=0;
    }else{
        j+=2;
        m=setInterval("cenImg()",1000);
    }
}
//天天低价
function day_dl(e){
    var list = $(".day_img");
    var left1 =$(".day_img").css("left");
    for(var i=0;i<list.length;i++){
        list[i].style.left = parseInt(left1)+"px";
    }
    list[e].style.left = parseInt(left1)-5+"px";
}
function day_dlout(e){
    var list = $(".day_img");
    list[e].style.left = 0+"px";
}
//热门晒单
var list = ["img/con1.jpg","img/con2.jpg","img/con3.jpg","img/con4.jpg","img/con5.jpg","img/con6.jpg"];
var f = 0;
//floor-number
var arr2 = [];
var arr3=["服装","美妆","手机","电器","数码","运动","居家","母婴","食品","图书","整车","生活"];
var arr4=["1F","2F","3F","4F","5F","6F","7F","8F","9F","10F","11F","12F"];
var tf = true;
function Num_over(a){
    var list=$(".number a");
    $(list[a]).html(arr3[a]);
    tf = true;
}
function Num_out(a){
    var list=$(".number a");
    if(tf == false){
        $(list[a]).html(arr3[a]);
    }else{
        $(list[a]).html(arr4[a]);
    }
}
function Num_clink(a){
    var list=$(".number a");
    $(list[a]).html(arr3[a]);
    tf = false;
}
$(function(){
    var floor = $(".s");
    floor.each(function(i){
        arr2[i]=$(floor[i]).offset().top;
    });
});
$(window).scroll(function(){
    var top=$(window).scrollTop();
    var height=$(window).height();
    if(top>=1990-height&&top<=10000-height){
        $(".number").show();
    }else{
        $(".number").hide();
    }
    $(".number a").removeClass("coc");
    for(var j = 0; j <  arr2.length; j++){
        $(".number a:eq("+ j +")").html(arr4[j]);
    }
    for(var i=0;i<arr2[i];i++){
        //1F  background
        if(i==0){
            $(".f1").addClass("bg11");
        }else{
            $(".f1").removeClass("bg11");
        }
        ////1F  background
        if(top<=arr2[i]){
            $(".number a:eq("+ i +")").addClass("coc");
            $(".number a:eq("+ i +")").html(arr3[i]);
            break;
        }
    }
});
//京东会员
//$(function(){
//    $(".huiyuan"+a).mouseover(function(){
//        $(".huiyuan"+a).addClass("block");
//    });
//})
function h1(a){
    $(".huiyuan"+a).addClass("ddd");
}
function h2(b){
    $(".huiyuan"+b).removeClass("ddd");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
