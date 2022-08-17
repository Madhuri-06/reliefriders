const clickLogin=()=>{
   var username= prompt ("Enter user name")
   var password= prompt ("Enter password")
   if(password==localStorage.getItem(username)){
    alert("welcome "+username)
   }
   else{
    alert("User not found")
   }
}
const clickRegister=()=>{
    var username= prompt ("Enter user name")
    var password= prompt ("Enter password")
    localStorage.setItem(username,password)
 }