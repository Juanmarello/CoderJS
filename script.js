function solicitarDatos (){
    //Declaración de la variable "nombre" mediante "prompt"
     nombre = prompt("Ingresá tu nombre");
    
     //Saludo de bienvenida con concatenación y "alert"
     alert("Bienvenid@ " + nombre + "." + " Por favor, acepta para continuar.");
    
     //Declaración de las variables "fechaNacimiento" y "edad" mediante "prompt"
     fechaNacimiento = parseInt(prompt("Ingresá tu año de nacimiento"));
     edad = 2021 - fechaNacimiento;
     
     //Salida del resultado mediante "alert"
     alert(nombre + ": tu edad es  " + edad + ", o los cumples este año.");
     } 
 
 
     function cambioTotal(){
     // Declaracion de las variables mediante "prompt"
     totalCompra = parseInt(prompt("Ingresa el total de la compra"));
     montoRecibido = parseInt(prompt("Con cuánto abonas?"));
     
     //Operación aritmética
     cambio = montoRecibido - totalCompra;
     
     //Salida de resultado madiante "alert"
     alert("tu cambio es de: $" + cambio);
 }