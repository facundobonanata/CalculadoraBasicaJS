//funcion por vada operacion

function suma(){
    //guardo en num1 y 2 los valores ingresados, obteniendolos por su id (del input)
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    //declaro variable total y sumo los numeros ingresados almacenados en num1 y num2
    let total = (num1 + num2);
    
    //muestro el resultado cambiando el valor del input por el total
    document.getElementById("total").value = total;
  
  }
  function resta(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let total = (num1 - num2);
    
    document.getElementById("total").value = total;
  
  }
  function multiplicacion(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let total = (num1 * num2);
    
    document.getElementById("total").value = total;
  
  }
  function division(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let total = (num1 / num2);
    
    document.getElementById("total").value = total;
  
  }


