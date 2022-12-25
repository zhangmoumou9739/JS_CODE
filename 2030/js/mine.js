var login=document.getElementById('login');
var bg=document.getElementById('bg');
var adminBtn=document.getElementById('adminBtn');
adminBtn.onclick=function(){
    login.style.height = "70%";
    error1.innerHTML = "";    
    error2.innerHTML = "";     
    
     // login.style.display = "block";
}
var closeBtn=document.getElementById('closeBtn');
closeBtn.onclick=function(){
    login.style.height = "0%";
    // login.style.display="none";
    
}
var user = document.getElementById("user");
var error = document.getElementsByClassName("error");
var pwd = document.getElementById("pwd");
var input = document.getElementsByClassName("input");
function checkform(){
    if(user.value.length >=6 && pwd.value.length >= 6){
      window.location.replace("./mainpage.html");
    }
    else{
      alert("账号或密码格式错误");
    }
} 
function testFocus1(that) {
    if ((that.value.length >= 0 && that.value.length < 6) || that.value.length >11){
        document.getElementById("error1").innerHTML = "请输入6~11位的用户名";
    }
}
function testBlur1(that) {
    if ((that.value.length>0 && that.value.length<6) || that.value.length >11){
        document.getElementById("error1").innerHTML = "用户名应为6-11位";
    }else if(that.value.length >= 6 &&that.value.length <= 11){
        document.getElementById("error1").innerHTML = "";
    }else{
        document.getElementById("error1").innerHTML = "用户名不能为空"
    }
}
function testFocus(that) {
    if ((that.value.length >= 0 && that.value.length < 6) || that.value.length >18){
        document.getElementById("error2").innerHTML = "请输入6~18位的密码";
    }
}
function testBlur(that) {
    if ((that.value.length>0 && that.value.length<6) || that.value.length >11){
        document.getElementById("error2").innerHTML = "密码应为6-11位";
    }else if(that.value.length >= 6 &&that.value.length <= 18){
        document.getElementById("error2").innerHTML = "";
    }else{
        document.getElementById("error2").innerHTML = "密码不能为空";
    }
}    