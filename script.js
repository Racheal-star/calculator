let num1;
let num2;
let operator;
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