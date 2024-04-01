function encriptar (){
   passSistema="9Eg7587THUy";
   msgError = "error en la contraseña, vuelva a intertarlo";
   var mensaje = document.getElementById("msg").value;
   var password = document.getElementById ("pass").value;
   //alert (mensaje+ "+" +password)
   if(passSistema ==password){
       //alert("contraseña correcta");
       document.getElementById("error").innerHTML="";
       var encryted =btoa(mensaje);
       //alert(encryted);
       document.getElementById("demo1").innerHTML = encryted;
   
   }else{
       //alert("error"); 
       document.getElementById("error").innerHTML=msgError;
   
   }
   
   
   }
   
   
   
   
   
   function desencriptar (){
   
   var mensajecodigo= document.getElementById("msgcodigo")
   var decrypted = atob(mensajecodigo)
   document.getElementById("demo2").innerHTML =decrypted;
   
   }