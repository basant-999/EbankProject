// const autoPassword = ()=>{
//     let string = "qwertyuiopasdfghjklzxcvbnm1234567890{}:><?@QWERTYUIOPASDFGHJKLZXCVBNM"
//     let pass = ""
//     for(var i = 0 ; i<8;i++)
//     {
//      let myno = Math.floor(Math.random()*string.length)
//      pass += string.charAt(myno)
//     }
//     return pass;
// }
// module.exports = {
//     autoPassword
// }


const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="@";
const allChar =uppercase+lowercase+number+symbol;
const lengt =12;
let Password="";
const createPassword=()=>{
   
    Password+= symbol[Math.floor(Math.random()*symbol.length)]
    Password+= uppercase [Math.floor(Math.random()*uppercase.length)];
    Password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    Password+= number[Math.floor(Math.random()*number.length)];
    // console.log(Password);
    while(lengt >Password.length){
        Password += allChar[Math.floor(Math.random()*allChar.length)];
    }
    return Password;
    // console.log(inputText.value)

}

module.exports =createPassword;



