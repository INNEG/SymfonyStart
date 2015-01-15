/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function crearDenunciado(valor,texto,lugar) {
    numDenunciados++;
    fi = document.getElementById(lugar); // 1
    contenedor = document.createElement('div'); // 2
    contenedor.id = 'div'+numDenunciados; // 3
    fi.appendChild(contenedor); // 4

    ele = document.createElement('label'); // 5
    //ele.setAttribute('href', '#'); 
    var aTexto = document.createTextNode(texto+ ' ');
    ele.appendChild(aTexto); 
    contenedor.appendChild(ele); // 7

    ele = document.createElement('input'); // 5
    ele.type = 'hidden'; // 6
    ele.value = valor; // 8
    ele.name = 'idDenunciado['+numDenunciados+']'; // 6
    contenedor.appendChild(ele); // 7

    var lblocu= document.createElement('label');
    lblocu.innerHTML = 'Ocupaci&oacute;n';
      
    ele = document.createElement('input'); // 5
    ele.type = 'text'; // 6
   // ele.value = valor; // 8
    ele.name = 'ocupacion['+numDenunciados+']'; // 6
    contenedor.appendChild(lblocu); //  
    contenedor.appendChild(ele); // 7
 
   
    var radioNo = document.createElement('input');
    radioNo.type = 'radio'; // 6
    radioNo.value = '0'; // 8
    radioNo.name = 'instruccion['+numDenunciados+']'; // 6

    var lblNo = document.createElement('label');
    lblNo.innerHTML = 'No';
    contenedor.appendChild(radioNo);
    contenedor.appendChild(lblNo); // 7


    var radioSi = document.createElement('input');
    radioSi.type = 'radio'; // 6
    radioSi.value = '1'; // 8
    radioSi.name = 'instruccion['+numDenunciados+']'; // 6

    var lblSi = document.createElement('label');
    lblSi.innerHTML = 'Si';
    contenedor.appendChild(radioSi);
    contenedor.appendChild(lblSi); // 7

    ele = document.createElement('input'); // 5
    ele.type = 'hidden'; // 6
    ele.value = texto; // 8
    ele.name = 'denunciado['+numDenunciados+']'; // 6
    contenedor.appendChild(ele); // 7
    
    
}

function crearElemento(id,tipo,cantidad,unidad, envase , lugar) {
    //unidad,
    //alert("tipo "+tipo+ " cant " +cantidad+ " lugar "+ lugar +" id "+id);
      numElemento++;
      fi = document.getElementById(lugar); // 1
      contenedor = document.createElement('div'); // 2
      contenedor.id = 'divD'+numElemento; // 3
      fi.appendChild(contenedor); // 4
 
      ele = document.createElement('label'); // 5
      var aTexto = document.createTextNode(tipo);
      ele.appendChild(aTexto); 
      contenedor.appendChild(ele); // 7
 
      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = id; // 8
    //  ele.name = 'idElementoD['+numElemento+']'; // 6
      ele.name = 'idElementoD[]'; // 6
      contenedor.appendChild(ele); // 7
 
      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = tipo; // 8
      ele.name = 'tipoDroga[]'; // 6
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = cantidad; // 8
      ele.name = 'cantidadDroga[]'; // 6
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = unidad; // 8
      ele.name = 'unidadDroga['+numElemento+']'; // 6
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = envase; // 8
      ele.name = 'envase['+numElemento+']'; // 6
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'button'; // 6
      ele.value = 'X'; // 8
      ele.name = 'divD'+numElemento; // 8
      ele.setAttribute("class", "bt_criterio"); 
      ele.setAttribute("className", "bt_criterio");
              ele.setAttribute("title", "Eliminar");
   //   ele.onclick = function () {borrar(this.name,lugar)}; // 9
      contenedor.appendChild(ele); // 7
}

function crearElementoComer(id,elementoComer,cantidadElementoComer, lugar) {
      numElementoComer++;
      fi = document.getElementById(lugar); // 1
      contenedor = document.createElement('div'); // 2
      contenedor.id = 'divE'+numElementoComer; // 3
      fi.appendChild(contenedor); // 4

      ele = document.createElement('label'); // 5
      //ele.setAttribute('href', '#'); 
      var aTexto = document.createTextNode(elementoComer);
      ele.appendChild(aTexto); 
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = id; // 8
      ele.name = 'idElementoComer['+numElementoComer+']'; // 6
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = elementoComer; // 8
      ele.name = 'elementoComer['+numElementoComer+']'; // 6
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = cantidadElementoComer; // 8
      ele.name = 'cantidadElementoComer['+numElementoComer+']'; // 6
      contenedor.appendChild(ele); // 7

      
      ele = document.createElement('input'); // 5
      ele.type = 'button'; // 6
      ele.value = 'X'; // 8
      ele.name = 'divE'+numElementoComer; // 8
      ele.setAttribute("class", "bt_criterio"); 
      ele.setAttribute("className", "bt_criterio");
              ele.setAttribute("title", "Eliminar");
   //   ele.onclick = function () {borrar(this.name,lugar)} // 9
      contenedor.appendChild(ele); // 7
}

function crearMoneda(id,moneda,cantidadMoneda, lugar) {
      numMoneda++;
      fi = document.getElementById(lugar); // 1
      contenedor = document.createElement('div'); // 2
      contenedor.id = 'divM'+numMoneda; // 3
      fi.appendChild(contenedor); // 4

      ele = document.createElement('label'); // 5
      //ele.setAttribute('href', '#'); 
      var aTexto = document.createTextNode(moneda);
      ele.appendChild(aTexto); 
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = id; // 8
      ele.name = 'idMoneda['+numMoneda+']'; // 6
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = moneda; // 8
      ele.name = 'moneda['+numMoneda+']'; // 6
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = cantidadMoneda; // 8
      ele.name = 'cantidadMoneda['+numMoneda+']'; // 6
      contenedor.appendChild(ele); // 7

      
      ele = document.createElement('input'); // 5
      ele.type = 'button'; // 6
      ele.value = 'X'; // 8
      ele.name = 'divM'+numMoneda; // 8
      ele.setAttribute("class", "bt_criterio"); 
      ele.setAttribute("className", "bt_criterio");
              ele.setAttribute("title", "Eliminar");
    //  ele.onclick = function () {borrar(this.name,lugar)}; // 9
      contenedor.appendChild(ele); // 7
}

function borrar(obj,lugar) {
    fi = document.getElementById(lugar); // 1 
    fi.removeChild(document.getElementById(obj)); // 10
}



