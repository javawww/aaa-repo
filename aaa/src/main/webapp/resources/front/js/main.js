//页面默认设置
function indexBOX() {
    $('#GameBox').css("display", "none"); //退出登录隐藏界面

}
var services = {};
$(document).ready(function () {
    //默认打开登录页

    //显示植物状态
    $(".dui-di").hover(function () {
            $(this).find(".diinfo").fadeTo("fast", 1);
        },
        function () {
            $(this).find(".diinfo").fadeTo("fast", 0.0);
        }
    );

    //手机获取input焦点时固定页面

    $("input").focus(function () {

    });
    $("input").blur(function () {

    });


});
var js = document.scripts;
js = js[js.length - 1].src.substring(0, js[js.length - 1].src.lastIndexOf("/") - 20);
baseUrl = js + 'Public/';
nc = {
    sendAjax: function ($param) {
        var $params = $.extend(true, {}, $param);
        var $data = $params.data;
        var key = md5($data.service);
        if (services[key]) {
            return;
        }
        if (!$data) {
            return
        }
        var $ajax = $.extend({}, {
            type: 'post', dataType: 'json', url: js, complete: function () {
                delete services[key];
            }
        }, $params);
        $.ajax($ajax);
    },
};
function checkMobile(value) {
    if (!(/^1[34578]\d{9}$/.test(value))) {
        return false;
    }
    return true;
}
+(function ($) {
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (this.name.indexOf('[') == -1) {
                o[this.name] = this.value || '';
            } else if (this.name.indexOf('[]') == -1) {
                var begin = this.name.indexOf('[');
                var end = this.name.indexOf(']');
                if (!o[this.name.substr(0, begin)]) {
                    o[this.name.substr(0, begin)] = {};
                }
                o[this.name.substr(0, begin)][this.name.substr(begin + 1, end - begin - 1)] = this.value;
            } else {
                this.name = this.name.replace('[]', '');
                if (!o[this.name]) {
                    o[this.name] = [];
                }
                o[this.name].push(this.value || '');
            }

        });
        return o;
    }
})(jQuery);
function successMsg(data, $callback) {
    var msg = data.msg || data || '';
    layui.use('layer', function () {
        layer.msg(msg, {
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
        }, $callback || function () {
            });

    });
}
function alertMsg(data) {
    var msg = data.msg || data || '';
    if (data.code == 40002) {
        parent.secConfirm();
        return;
    }

    layui.use('layer', function () {
        layer.msg(msg, {
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
        });
    });
}

function sendFormAjax($form, $success_callback) {
    var button = $($form).find(':input[type="submit"]');
    var succes = $success_callback || function (data) {
            if (data.code == 40000) {
                successMsg(data)
            } else {
                alertMsg(data)
            }
        };
    var data = $($form).serializeObject();
    nc.sendAjax({
        data: data, complete: function () {
            button.removeClass('disabled')
        }, success: succes
    });
}

function bindFormAjax(target, $success_callback) {
    target.on('submit', function () {
        var button = $(this).find(':input[type="submit"]');
        if (button.attr('disabled')) {
            return false
        }
        sendFormAjax($(this), $success_callback)
    });
}

/*横竖屏切换检测*/
(function () {
    var supportOrientation = (typeof window.orientation == "number" && typeof window.onorientationchange == "object");
    var updateOrientation = function () {
        if (supportOrientation) {
            updateOrientation = function () {
                var orientation = window.orientation;
                switch (orientation) {
                    case 90:
                    case -90:
                        orientation = "landscape";
                        break;
                    default:
                        orientation = "portrait";
                }
                document.body.parentNode.setAttribute("class", orientation);
                wbox()
            };
        } else {
        	
            updateOrientation = function () {
                var orientation = (window.innerWidth > window.innerHeight) ? "landscape" : "portrait";
                document.body.parentNode.setAttribute("class", orientation);
                wbox()
            };
        }
        updateOrientation();
    };

    var init = function () {
        updateOrientation();

        if (supportOrientation) {
            window.addEventListener("orientationchange", updateOrientation, false);
        } else {
            //window.setInterval(updateOrientation, 1000);
        }
    };

    window.addEventListener("DOMContentLoaded", init, false);

})();
//根据屏幕适应大小
function wbox() {
    var w = $(window).width();
    var h = $(window).height();
    var wbg = $("#GameBg").width();
    var hbg = $("#GameBg").height();
    if (w <= 768) {
        /*alert("浏览器宽度小于768属于手机屏幕")*/
        if ($("html").hasClass("portrait")) {
            $("#GameContainer").css({
                "transform": "rotate(90deg)",
                "transform-origin": "0px 0px 0px",
                "width": h,
                "height": w,
                "margin-left": w
            });
        } else {
            $("#GameContainer").css({
                "transform": "rotate(0deg)",
                "transform-origin": "0px 0px 0px",
                "width": w,
                "height": h,
                "margin-left": "0"
            });
        }

    } else {
        /*alert("浏览器宽度大于768不属于手机屏幕")*/
        $("#GameCanvas").css({"width": wbg, "height": hbg, "max-width": "100%", "max-height": "100%"});
        $("#GameContainer").css({
            "transform": "rotate(0deg)",
            "transform-origin": "0px 0px 0px",
            "width": "100%",
            "height": "100%",
            "margin-left": "0"
        });

    }
    //************************判断横屏  竖屏***********************
    //console.dir($("html").hasClass("portrait"));
    //console.dir($("html").hasClass("landscape"));
}
function shouhuo2() {
    var div = $(".dui-Land li");
    var i = 0;
    $(".dui-Land li .dui-reward").each(function () {
        if ($(this).css("display") == "block") {
            i++;
            var $this = $(this);
            setTimeout(function () {
                $this.trigger('click');
            }, 300 * i);

        }
    })
}
function kaiico() {
    var select1 = $(".kaiico")
    var select2 = $(".zhongico")
    var select3 = $(".touico")
    $(select1).click(function (e) {
        // $('#chatAudio')[0].play(); //播放声音
        e.stopPropagation();
        if ($("body").hasClass("kaiico-on")) {
            $("body").removeClass("kaiico-on touico-on zhongico-on")
        } else {
            $("body").removeClass("kaiico-on touico-on zhongico-on")
            $("body").addClass("kaiico-on");

        }
    });
    $(select2).click(function (e) {
        // $('#chatAudio')[0].play(); //播放声音
        e.stopPropagation();
        if ($("body").hasClass("touico-on")) {
            $("body").removeClass("kaiico-on touico-on zhongico-on")
        } else {
            $("body").removeClass("kaiico-on touico-on zhongico-on")
            $("body").addClass("zhongico-on")

        }
    });
    $(select3).click(function (e) {
        // $('#chatAudio')[0].play(); //播放声音
        e.stopPropagation();
        if ($("body").hasClass("touico-on")) {
            $("body").removeClass("kaiico-on touico-on zhongico-on")
            $("body").removeClass("touico-on");
        } else {
            $("body").removeClass("kaiico-on touico-on zhongico-on")
            $("body").addClass("touico-on");

        }
    });
}
function duiselect() {
    $(document).click(function () {
        if ($("body").hasClass("kaiico-on")) {
            $("body").removeClass("kaiico-on")
        } else if ($("body").hasClass("zhongico-on")) {
            $("body").removeClass("zhongico-on")
        } else if ($("body").hasClass("touico-on")) {
            $("body").removeClass("touico-on")
        }
    })
}
//设置Canvas动画
function canvas2() {
    var wbtn = $("#GameBg").width();
    var hbtn = $("#GameBg").height();
    $("#canvas").css({"width": wbtn, "height": hbtn});
    $("#canvas").attr('width', wbtn);
    $("#canvas").height(hbtn);
}
//页面加载时调用
$(function () {
    wbox();
    //kaiico();
    //duiselect();
});

$(window).resize(function () {
    if ($(":input").blur) {  
        wbox();
      //  console.dir($("html").hasClass("portrait"));
      //  var height = $('iframe').parent().parent().height();
      //  $('iframe').parent().parent().width("18rem");
       // $('iframe').css("background-repeat","repeat-y");
        $('iframe').each(function () {//GameContainer
        	//$(this).parent().attr("id","GameContainer");
            var height = $(this).parent().height()*0.91;
            var width = $(this).parent().width()*0.92;
            $(this).height(height);
            $(this).width(width);
        });
    }
});
//******************************苹果手机 横屏 竖屏  动态调整弹出框的高宽
if(typeof index == 'undefined'){
    var device = layui.device();
    if (device.ios) {
        var iframe = $(parent.document).find('#'+window.name);
        var parenta = iframe.parent();
        var  height = parenta.height()*0.91;
        iframe.css('height',height);
        if ($('#wrapper').length == 0) {
            $('body').children().not('script').wrapAll('<div id="wrapper"></div>');
            $("body").css('overflow','hidden');
            $('html,body,#wrapper').css('height',height);
        }
    }
}