// 定义一个回调函数
function animate(time) {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    let hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    const ctx = document.getElementById('canvas').getContext('2d');

    ctx.save();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);



    ctx.translate(300,300);

    ctx.save();
    ctx.font = "30px system-ui"
    ctx.fillText(hr + ':' + min + ':' + sec, -55, 100)
    ctx.restore()

    ctx.rotate(-Math.PI/2);
    // 绘制时钟外圆
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";

    // 时钟线
    ctx.save()
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(170, 0);
        ctx.lineTo(200, 0);
        ctx.stroke();
    }
    ctx.restore()

    // 分钟线
    ctx.save()
    for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.rotate(Math.PI / 30);
        ctx.moveTo(185, 0);
        ctx.lineTo(200, 0);
        ctx.stroke();
    }
    ctx.restore()

    // 绘制时针
    ctx.save()
    ctx.lineWidth = 14;
    ctx.rotate(Math.PI / 6 * hr + Math.PI / 360 * min + Math.PI / 21600 * sec)
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(110, 0);
    ctx.stroke();
    ctx.restore()

    // 绘制分针
    ctx.save()
    ctx.lineWidth = 10;
    ctx.rotate(Math.PI / 30 * min + Math.PI / 1800 * sec)
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(150, 0);
    ctx.stroke();
    ctx.restore()

    // 绘制秒针
    ctx.save()
    ctx.lineWidth = 6;
    ctx.rotate(Math.PI / 30 * sec)
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(-30, 0);
    ctx.lineTo(200, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.restore();



    ctx.beginPath();
    ctx.restore();

    //请求下一次动画帧
    window.requestAnimationFrame(animate);
}

// 开始动画循环
window.requestAnimationFrame(animate)