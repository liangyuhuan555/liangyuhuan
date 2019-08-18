 /*
  * n到m-1之间的随机整数
  * */
 function random(n, m) {
    return Math.floor(Math.random() * (m + 1 - n) + n);
 }
 console.log(random(1, 10));