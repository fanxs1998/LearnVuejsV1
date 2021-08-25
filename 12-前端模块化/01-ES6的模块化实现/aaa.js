var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(20,30))
}

//导出方式1
export {
    flag, sum
}
//导出方式2：定义的时候导出
export var num1 = 100

//导出函数或导出类
export function f() {
    console.log('f')
}

export class Person{
    run(){
        console.log("ren")
    }
}

//export default在同一个模块中不允许存在多个
export  default function (value) {
    console.log(value)
}