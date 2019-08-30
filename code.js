/********************************************************/
/********************************************************/

// 封装获取当前时间

// 获取当前时间
function formatDate() {
    var time = new Date();
    var year = time.getFullYear();//获取年
    var month = time.getMonth() + 1;//或者月
    var day = time.getDate();//或者天
    var hour = time.getHours();//获取小时
    var minu = time.getMinutes();//获取分钟
    var second = time.getSeconds();//或者秒
    var data = year + "-";
    if (month < 10) {
        data += "0";
    }
    data += month + "-";
    if (day < 10) {
        data += "0"
    }
    data += day + " ";
    if (hour < 10) {
        data += "0"
    }
    data += hour + ":";
    if (minu < 10) {
        data += "0"
    }
    data += minu + ":";
    if (second < 10) {
        data += "0"
    }
    data += second;
    return data;
}

let time = formatDate();
console.log(time)



/********************************************************/
/********************************************************/



// 封装了一个可以循环倒计时的函数

kits.randomInterval = function (element) {
    // 定义一个时间的变量
    let time = 60;
    // 禁用按钮
    element.disabled = true;
    // 为了保证点下的一瞬间就计时，先在点的瞬间修改文字一次
    element.value = "获取验证码(" + time + ")";
    // 每隔一段时间，修改文字，即用循环定时
    let intervalId = setInterval(function () {
        // 修改时间
        time--;
        // 修改文字
        btn.value = "获取验证码(" + time + ")";
        // 如果计时到0了，需要停止
        if (time === 0) {
            // 停止倒计时
            clearInterval(intervalId);
            // 让按钮恢复原状
            element.disabled = false;
            element.value = "获取验证码";
        }
    }, 1000)
}


/********************************************************/
/********************************************************/


// 封装本地存储

// 本地存储中读取数据
/**
 * 
 * @description 
 * @param {string}
 * @returns {object}
*/
// 从本地存储中读取数据
kits.getArrayLocalStorage = function (key) {
    // 通过键来读取本地存储中的数据
    let json = localStorage.getItem(key);
    // 将其转换为json格式的对象
    let arr = JSON.parse(json);
    // 如果本地存储中没有数据就返回一个空数组，如果有数据就返回它自身
    return arr || [];
};
/**
 * @description 
 * @param {string}    是字符串
 * @param {object}    是一个对象
 * 
*/
// 把数据存储到本地存储里面
kits.getsetLocalStorage = function (key, obj) {
    // 将对象转换为json格式的字符串
    let json = JSON.stringify(obj);
    // 将json格式的字符串存储到本地存储中
    localStorage.setItem(key, json);
};
// 向本地存储中追加一个数据对象
kits.appendDataIntoArray = function (key, data) {
    // 通过本地存储的键来读取本地存储的数据
    let arr = kits.getArrayLocalStorage(key);
    // 将新的内容添加到本地存储中
    kits.getsetLocalStorage(key, data);
}
// 通过id删除本地存储的数据
kits.deleteLocalDataById = function (key, id) {
    // 通过键来读取本地存储的数据，返回一个伪数组
    let arr = kits.getArrayLocalStorage(key);
    // 遍历伪数组
    arr.forEach((e, i) => {
        // 判断当输入的id和本地存储中的id相等时删除数据
        if (e.id == id) {
            // 通过数组对象中的方法实现删除
            arr.splice(i, 1);
        }
    })
    // 覆盖到本地存储中
    kits.getsetLocalStorage(key, arr);
}
// 修改本地存储中的数据
kits.modifyLocalDataById = function (key, id, data) {
    // 通过本地存储已有的键来读取数据
    let arr = kits.getArrayLocalStorage(key);
    // 遍历获得的伪数组
    arr.forEach((e, i) => {
        //  判断输入的id是否和本地存储中的id相等，如果相等就修改本地存储中的数据
        if (e.id == id) {
            //  修改本地存储的数据
            arr[i] = data;
        }
    })
    //  覆盖回本地存储
    kits.getsetLocalStorage(key, arr);
}