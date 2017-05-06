//noinspection JSAnnotator
/**
 * Created by zenghui on 2017/5/7.
 */
var arr = ["0018.jpg", "0020.jpg", "0070.jpg"];
var index = 0;
window.onload = function(){
    var doc = $("#showBox");
    var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    }

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }

        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }
    //手指接触屏幕
    document.addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
               if (index != 0) {
                   index--;
                   doc.src = "images/test-image/" + arr[index];
                   console.log("left");
                   console.log(doc);
               }
                break;
            case 4:
                if (index != arr.length - 1) {
                    index++;
                    doc.src = "images/test-image/" + arr[index];
                    console.log("right");
                    console.log(doc);
                }
                break;
            default:
        }
    }, false);
};