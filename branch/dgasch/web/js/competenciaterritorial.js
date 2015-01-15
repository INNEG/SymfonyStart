function crear(iprovincia,idepartamento,selected1,selected2,selected3,lugar) {//ilocalidad,
      num++;
      fi = document.getElementById(lugar); // 1
      contenedor = document.createElement('tr'); // 2
      contenedor.id = 'div'+num; // 3
      contenedor.className = 'success'; // 3
      fi.appendChild(contenedor); // 4

//fiscalia
      ele = document.createElement('td'); // 5
      //ele.setAttribute('href', '#'); 
      var aTexto = document.createTextNode(selected3);
      ele.appendChild(aTexto); 
      contenedor.appendChild(ele); // 7
      
      //provincia
      ele = document.createElement('td'); // 5
      //ele.setAttribute('href', '#'); 
      var aTexto = document.createTextNode(selected1);
      ele.appendChild(aTexto); 
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = iprovincia; // 8
      ele.name = 'provincias['+num+']'; // 6
      contenedor.appendChild(ele); // 7
//depto
      ele = document.createElement('td'); // 5
      //ele.setAttribute('href', '#'); 
      var aTexto = document.createTextNode(selected2);
      ele.appendChild(aTexto); 
      contenedor.appendChild(ele); // 7

      ele = document.createElement('input'); // 5
      ele.type = 'hidden'; // 6
      ele.value = idepartamento; // 8
      ele.name = 'departamentos['+num+']'; // 6
      contenedor.appendChild(ele); // 7

     

//      ele = document.createElement('input'); // 5
//      ele.type = 'hidden'; // 6
//      ele.value = ilocalidad; // 8
//      ele.name = 'localidades['+num+']'; // 6
//      contenedor.appendChild(ele); // 7

       ele = document.createElement('input'); // 5
      ele.type = 'button'; // 6
      ele.value = 'X'; // 8
      ele.name = 'div'+num; // 8
      ele.setAttribute("class", "bt_criterio"); 
      ele.setAttribute("className", "bt_criterio");
              ele.setAttribute("title", "Eliminar");
      ele.onclick = function () {borrar(this.name,lugar)} // 9
      contenedor.appendChild(ele); // 7
}
function borrar(obj,lugar) {
    fi = document.getElementById(lugar); // 1 
    fi.removeChild(document.getElementById(obj)); // 10
}