class Worker {
    constructor(rate,days,firstName,secondName) {
       this.firstName = firstName;
       this.secondName = secondName;
       this.rate = rate;
       this.days = days;
    }
    getSalary(){
        console.log(this.rate * this.days)
    }
}
class Summ extends Worker{
    constructor(rate,days){
        super(rate,days)
    }
    thSumm(){
        console.log(this.rate * this.days)
    }
}
let Andriy = new Summ(10,20)
let Roman = new Summ(40,20)

Andriy.thSumm()
Roman.thSumm()

class MyString{
    reverse(str){
        return str.split("").reverse().join("");
    }
    ucFirst(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    ucWords(string){
        return string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    }

}

const str = new MyString()
console.log(str.reverse('IVAN')); 
console.log(str.ucFirst('arsenal')); 
console.log(str.ucWords('arsenal arsenal arsenal')); 