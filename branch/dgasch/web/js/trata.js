function crearElemento(fecha,hora,lug_calle,lug_numero,lug_torre_bloque,lug_piso,
                        lug_departamento,lug_localidad,lug_departamento_municipio,
                        lug_provincia,lug_longitud,lug_latitud,lug_tipo,lug_nombre,
                        lug_ffss,lug_org_pub,lug_ffss_2,lug_org_pub_2,lug_ffss_3,
                        lug_org_pub_3,lugar) {
    
    numElemento++;
    fi = document.getElementById(lugar); // 1
    contenedor = document.createElement('div'); // 2
    contenedor.id = 'div'+numElemento; // 3
    fi.appendChild(contenedor); // 4
    
    ele = document.createElement('label'); // 5
    var aTexto = document.createTextNode('Eleccion de Campo ');
    ele.appendChild(aTexto); 
    contenedor.appendChild(ele); // 7
    
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =fecha;ele.name = 'fecha['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =hora;ele.name = 'hora['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_calle;ele.name = 'lug_calle['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_numero;ele.name = 'lug_numero['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_torre_bloque;ele.name = 'lug_torre_bloque['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_piso;ele.name = 'lug_piso['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_departamento;ele.name = 'lug_departamento['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_localidad;ele.name = 'lug_localidad['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_departamento_municipio;ele.name = 'lug_departamento_municipio['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_provincia;ele.name = 'lug_provincia['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_longitud;ele.name = 'lug_longitud['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_latitud;ele.name = 'lug_latitud['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_tipo;ele.name = 'lug_tipo['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_nombre;ele.name = 'lug_nombre['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_ffss;ele.name = 'lug_ffss['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_org_pub;ele.name = 'lug_org_pub['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_ffss_2;ele.name = 'lug_ffss_2['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_org_pub_2;ele.name = 'lug_org_pub_2['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_ffss_3;ele.name = 'lug_ffss_3['+numElemento+']';contenedor.appendChild(ele);
    ele = document.createElement('input'); ;ele.type = 'hidden';ele.value =lug_org_pub_3;ele.name = 'lug_org_pub_3['+numElemento+']';contenedor.appendChild(ele);


    ele = document.createElement('input'); // 5
    ele.type = 'button'; // 6
    ele.value = 'X'; // 8
    ele.name = 'div'+numElemento; // 8
    ele.setAttribute("class", "bt_criterio"); 
    ele.setAttribute("className", "bt_criterio");
            ele.setAttribute("title", "Eliminar");
 //   ele.onclick = function () {borrar(this.name,lugar)}; // 9
    contenedor.appendChild(ele); // 7
}