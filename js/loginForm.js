let userName=document.getElementById("exampleInputEmail1");
let passWord=document.getElementById("exampleCheck1");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let user1=document.getElementById("user1");
// function loginValidate(){
//     regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})(\.[a-z]{2,3})?$/
//     if(userName.value==""){
//         error1.innerHTML="username cannot be empty";
//         error1.style.borderColor="red";
        
//     }
//     if(regexp.test("userName.value")){
//         error1.innerHTML="valid id"
//         error1.style.borderColor="green";
                
//     }
    
// }
form.addEventListener('submit', (e) => {
    let messages=[]
    if(userName.value==""){
        messages.push('username is required');
    }
    if(messages.length>0){
        e.preventDefault();
        error1.innerHTML=messages.join(', ');
        
    }
})