// 自己在这个js文件里面，封装一些常见的移动端的手势操作
//     - 单击
//     - 双击
//     - 缩放
//     - 滑动
//     ...
// * /


// 封装第一个： tap事件 - 移动端的单击事件
// 在触摸开始的时候，判断是否是单指操作，记录触摸开始的时间，触摸开始的位置

// 在触摸结束的时候，记录触摸结束的时间，触摸结束的位置，判断触摸的时间是否过长，位置偏移是否过大


/**
 * @description 封装好的移动端的单击事件
 * @param { element } element 要注册单击事件的元素
 * @param { function } fn 单击事件的处理程序
 */

function tap(element) {
    // 获取元素
    // let element = document.querySelector('.element');

    // 定义变量 开始记录触摸开始的时间
    let startTime;
    // 定义一个变量记录开始位置
    let startX, startY;
    // 注册触摸事件
    element.addEventListener('touchstart', function (e) {
        console.log('点击成功')
        // 检测触摸点是不是一个
        if (e.touches.length !== 1) {
            console.log('这不是单指操作');
            return;
        }
        // 开始记录触摸时间 也就是获取当前时间到1970年的所有毫秒数
        startTime = Date.now();

        // 记录触摸的开始点 一个点两个坐标XY
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;

    })
    // 注册触摸结束
    element.addEventListener('touchend', function (e) {
        let endX = e.changedTouches[0].pageX;
        let endY = e.changedTouches[0].pageY;
        if (Math.abs(endX - startX) > 50 || Math.abs(endY - startY) > 50) {
            console.log('偏移过大')
            return;
        }

        let endTime = Date.now();
        if (endTime - startTime > 150) {
            console.log('按下时间太长了')
            return;
        }

    })
}

