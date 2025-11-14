let num1=''
let num2;
let operator;
let numDisplayed;

const display = document.getElementById('display')
const myNum1 = document.getElementById('myNum1')

const Key1 = document.getElementById('1')
const Key2 = document.getElementById('2')
const Key3 = document.getElementById('3')
const Key4 = document.getElementById('4')
const Key5 = document.getElementById('5')
const Key6 = document.getElementById('6')
const Key7 = document.getElementById('7')
const Key8 = document.getElementById('8')
const Key9 = document.getElementById('9')
const Key0 = document.getElementById('0')
const minus = document.getElementById('-')
const  plus = document.getElementById('+')
const times = document.getElementById('*')
const division = document.getElementById('/')


function getNum1()  {
    let operands = ['*', '/', '-', '+']
if(operands.includes(numDisplayed)){
    return num1
}
num1 += numDisplayed;
console.log(num1)
return num1;
}
Key1.addEventListener('click', () => {
    numDisplayed = '1'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1

})
Key2.addEventListener('click', () => {
             numDisplayed = '2'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1
})
Key3.addEventListener('click', () => {
     numDisplayed = '3'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1

})
Key4.addEventListener('click', () => {
      numDisplayed = '4'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1
})
Key5.addEventListener('click', () => {
      numDisplayed = '5'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1

})
Key6.addEventListener('click', () => {
      numDisplayed = '6'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1

})
Key7.addEventListener('click', () => {
numDisplayed = '7'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1
})
Key8.addEventListener('click', () => {
      numDisplayed = '8'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1

})
Key9.addEventListener('click', () => {
           numDisplayed = '9'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1

})
Key0.addEventListener('click', () => {
       numDisplayed = '0'
    let resultOfNum1 =  getNum1()
      myNum1.textContent = resultOfNum1

})


minus.addEventListener('click', () => {
   display.style.display = 'none'
    numDisplayed = '-'
    nums.textContent = numDisplayed
 let resultNum1 =  getNum1()
      nums.textContent = resultNum1

})
plus.addEventListener('click', () => {
   display.style.display = 'none'
    numDisplayed = '+'
    display.textContent = numDisplayed
 let resultNum1 =  getNum1()
      nums.textContent = resultNum1

})
times.addEventListener('click', () => {
   display.style.display = 'none'
    numDisplayed = '*'
    display.textContent = numDisplayed
 let resultNum1 =  getNum1()
      nums.textContent = resultNum1

})
division.addEventListener('click', () => {
   display.style.display = 'none'
    numDisplayed = '/'
    display.textContent = numDisplayed
 let resultNum1 =  getNum1()
      nums.textContent = resultNum1
})
const add = (num1, num2) => {
console.log('added')
}
const subtract = (num1, num2) => {
    console.log('subtract')
}
const multiply = (num1, num2) => {
    console.log('multiply')
}
const divide = (num1, num2) => {
    console.log('divide')
}

const operate = ( nums1,oprt, nums2) => {
 if(oprt === '+') {
add(nums1, nums2)
 }else if(oprt === '-') {
subtract(nums1, nums2)
 }
 else if(oprt === '*') {
multiply(nums1, nums2)
 }
else if(oprt === '/') {
divide(nums1, nums2)
 }
}