/**
 * Created by weeb on 2017/8/9.
 */
var str = "zhufeng2017zhufeng2018";
//----------------解决不了
//->需求：把所有的'zhufeng'都替换为'zhufengpeixun'
// str = str.replace('zhufeng', 'zhufengpeixun');
// console.log(str);//->"zhufengpeixun2017zhufeng2018"
// str = str.replace('zhufeng', 'zhufengpeixun');
// console.log(str);//->"zhufengpeixunpeixun2017zhufeng2018"

//-----------使用正则
str = str.replace(/zhufeng/g, 'zhufengpeixun');
console.log(str);//=>'zhufengpeixun2017zhufengpeixun2018'
