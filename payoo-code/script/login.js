
 document.getElementById('login-btn').addEventListener('click', function(){
    // get the mobile number
 const mobile = document.getElementById('text-n')
 const mobileNumber = mobile.value;
 const pin = document.getElementById('text-p')
 const pinNumber = pin.value;
 
 if(mobileNumber == '01401734651' && pinNumber =='1710'){
    alert('login Success');
    window.location.assign("/home.html")
 }
 else{
    alert('Login failed');
    return;
    
 }
 
})