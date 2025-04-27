Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces;
    decSeparator = decSeparator == undefined ? "." : decSeparator;
    thouSeparator = thouSeparator == undefined ? "," : thouSeparator;
    var n = this,
    sign = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

function clickMe(hide, show) {
    $(hide + " .yesno").click(function() {
        $(hide).hide();
        $(show).show();
    });
}
function countdown(time) {
    $("#timer").html(time + " seconds");
    var interval = setInterval(function() {
        if (time < 4) {
            $("#timer").html("few seconds");
            clearInterval(interval);
        } else {
            $("#timer").html(time + " seconds");
            time--;
        }
    }, 1000);
}
$(document).ready(function() {
    $("#stop, #spin2, #stop2, #stop3, #spin3, .miss, .question, #q2, #q3, .loading, .finaldiv, .comments").hide();
    setInterval(function() {
        $(".blink").fadeOut(500).fadeIn(500);
    });
    $("#spin").click(function() {
        $("#spin, .info, #WebCall").hide();
        $("#stop").show();
        var rot = 0;
        var interval = setInterval(function() {
            if(rot < 360) {
                $(".wheel").css({
                    "-webkit-transform":"rotate("+rot+"deg)",
                    "-moz-transform":"rotate("+rot+"deg)",
                    "transform":"rotate("+rot+"deg)",
                });
                rot = rot+20;
            } else {
                rot = 0;
            }
        }, 1);
        $("#numleft").html("2");
        $("#stop").click(function() {
            clearInterval(interval);
            $(this).hide();
            $("#spin2").show();
            $(".wheel").css({
                "-webkit-transform":"rotate(180deg)",
                "-moz-transform":"rotate(180deg)",
                "transform":"rotate(180deg)",
            });
            setTimeout(function() {
                $(".wheel").css({
                    "-webkit-transform":"rotate(380deg)",
                    "-moz-transform":"rotate(3080deg)",
                    "transform":"rotate(380deg)",
                });
                setTimeout(function() {
                    $(".wheel").css({
                        "-webkit-transform":"rotate(280deg)",
                        "-moz-transform":"rotate(280deg)",
                        "transform":"rotate(280deg)",
                    });
                    $(".miss").fadeIn(1000, function() {
                        setTimeout(function() {
                            $(".miss").fadeOut(1000);
                            $("#number").html("2");
                        }, 1500);
                    });
                }, 50);
            }, 50);
        });
    });
    $("#spin2").click(function() {
        $("#spin2, .miss").hide();
        $("#stop2").show();
        var rot = 0;
        var interval = setInterval(function() {
            if(rot < 360) {
                $(".wheel").css({
                    "-webkit-transform":"rotate("+rot+"deg)",
                    "-moz-transform":"rotate("+rot+"deg)",
                    "transform":"rotate("+rot+"deg)",
                });
                rot = rot+20;
            } else {
                rot = 0;
            }
        }, 1);
        $("#numleft").html("1");
        $("#stop2").click(function() {
            clearInterval(interval);
            $(this).hide();
            $("#spin3").show();
            $(".wheel").css({
                "-webkit-transform":"rotate(190deg)",
                "-moz-transform":"rotate(190deg)",
                "transform":"rotate(190deg)",
            });
            setTimeout(function() {
                $(".wheel").css({
                    "-webkit-transform":"rotate(210deg)",
                    "-moz-transform":"rotate(210deg)",
                    "transform":"rotate(210deg)",
                });
                setTimeout(function() {
                    $(".wheel").css({
                        "-webkit-transform":"rotate(200deg)",
                        "-moz-transform":"rotate(200deg)",
                        "transform":"rotate(200deg)",
                    });
                    $(".miss").fadeIn(1000, function() {
                        setTimeout(function() {
                            $(".miss").fadeOut(1000);
                            $("#number").html("1");
                        }, 1500);
                    });
                }, 50);
            }, 50);
        });
    });
    $("#spin3").click(function() {
        $("#spin3, .miss").hide();
        $("#stop3").show();
        var rot = 0;
        var interval = setInterval(function() {
            if(rot < 360) {
                $(".wheel").css({
                    "-webkit-transform":"rotate("+rot+"deg)",
                    "-moz-transform":"rotate("+rot+"deg)",
                    "transform":"rotate("+rot+"deg)",
                });
                rot = rot+20;
            } else {
                rot = 0;
            }
        }, 1);
        $(".received").html("🎉 恭喜您！抽中了今天的優惠！");
        $(".receivedbot").html("領取你的獎勵");
        $("#stop3").click(function() {
            clearInterval(interval);
            $(".wheel").css({
                "-webkit-transform":"rotate(29deg)",
                "-moz-transform":"rotate(29deg)",
                "transform":"rotate(29deg)",
            });
            setTimeout(function() {
                $(".wheel").css({
                    "-webkit-transform":"rotate(49deg)",
                    "-moz-transform":"rotate(49deg)",
                    "transform":"rotate(49deg)",
                });
                setTimeout(function() {
                    $(".wheel").css({
                        "-webkit-transform":"rotate(39deg)",
                        "-moz-transform":"rotate(39deg)",
                        "transform":"rotate(39deg)",
                    });
                    $(".miss").fadeIn(1000, function() {
                        setTimeout(function() {
                            $(".roll").hide();
                            $(".question").show();
                        }, 1500);
                    });
                }, 50);
            }, 50);
        });
    });
    clickMe("#q1", "#q2");
    clickMe("#q2", "#q3");
    $("#q3 .yesno").click(function() {
        $("#q3, .threeq").hide();
        $(".loading").show();
        $(".active").animate({"width": "100%"}, 3500, function() {
            setTimeout(function() {
                $(".question, .everyday").hide();
                $(".finaldiv, .comments").show();
                countdown(60);
                setInterval(function() {
                    $(".blinkfinal").fadeOut(250).fadeIn(250);
                });
            });
        });
    });
});

function FBcom(a,b) {
    setTimeout(function() {
        var m = 0, n = true, op = 0;
        $(a+", "+a+" .comtxt, "+a+" .combot").slideDown(500);
        $().slideDown(500);
        var t = setInterval(function() {
            op += 0.2;
            $(a).css({"opacity":op});
            m++;
            if(m == 5) clearInterval(t);
        }, 100);
    }, b);
}
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function checkZero(a) {
    if(a<10) {
        return "0"+a;
    } else {
        return a;
    }
}
function timer(a,b) {
    var min = checkZero(Math.round((a-30)/60));
    var sec = checkZero(a%60);
    $(b).html(min+":"+sec);
    var t = setInterval(function() {
        a--;
        min = checkZero(Math.round((a-30)/60));
        sec = checkZero(a%60);
        $(b).html(min+":"+sec);
        if(a == 0) {
            clearInterval(t);
        }
    }, 1000);
    return false;
}
$(document).ready(function() {
    timer(231, "#timer");
    $(".like").click(function() {
        if($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            $(this).html("Like");
            $("#youand").html("");
        } else {
            $(this).addClass("selected");
            $(this).html("Unlike");
            $("#youand").html("You and ");
        }
    });
    $(".fblike").click(function() {
        if($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            $(this).html("Like");
        } else {
            $(this).addClass("selected");
            $(this).html("Unlike");
        }
    });
    FBcom("#fb1",3000);
    FBcom("#fb2",8000);
    FBcom("#fb3",15000);
    FBcom("#fb4",19000);
    FBcom("#fb5",30500);
    FBcom("#fb6",53000);
    FBcom("#fb7",75000);
    FBcom("#fb8",90000);
    var ct = 48;
    (function loop() {
        var rand = random(2500,5500);
        var ctrand = random(1,4);
        ct = ct - ctrand;
        if(ct > 1) {
            setTimeout(function() {
                loop();
            }, rand);
        } else {
            ct = "few";
        }
        $("#count").html(ct);
    }());
});

var hoursleft = 1;
var minutesleft = 2;
// you can change these values to any value greater than 0
var secondsleft = 23;
var millisecondsleft = 10;
var finishedtext = "Last Chance!"; // text that appears when the countdown reaches 0
end = new Date();
//end.setHours(end.getHours()+hoursleft);
end.setMinutes(end.getMinutes()+minutesleft);
end.setSeconds(end.getSeconds()+secondsleft);
end.setMilliseconds(end.getMilliseconds()+millisecondsleft);
function cd(){
    now = new Date();
    diff = end - now;
    diff = new Date(diff);
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    //var hr = diff.getHours();
    if (min < 10){
        min = "0" + min;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    if(msec < 10){
        msec = "00" +msec;
    }
    else if(msec < 100){
        msec = "0" +msec;
    }
    if(now >= end){
        clearTimeout(timerID);
        document.getElementById("cdtime").innerHTML = finishedtext;
    }
    else{
        document.getElementById("cdtime").innerHTML = "00:"+min + ":" + sec + ":" + msec;
    }
    // you can leave out the + ":" + msec if you want...
    // If you do so, you should also change setTimeout to setTimeout("cd()",1000)
    timerID = setTimeout("cd()", 45);
}
cd();


