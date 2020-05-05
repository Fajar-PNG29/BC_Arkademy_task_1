const isUserVal = (user) =>{
    let huruf = /[a-z]/g;
    let simbol = /[-#@!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
    let number = /[0-9]/;
    if((user.length > 5) && (user.match(huruf)) && (user.match(number)) && !(user.match(simbol))){
        return true
    }else{
        return false
    }
}
const isPassVal = (pass) => {
  if ((pass.length == 8)){
    return true
  }else {
  return false}
}

console.log(isUserVal('TriFajarP123'))
console.log(isUserVal('@TriFajar'))
console.log(isPassVal('12345678'))
console.log(isPassVal('1234'))

module.export