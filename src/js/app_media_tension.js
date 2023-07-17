function agregarFila() {
    var tablaBody = document.getElementById("tabla-body");

    var codigo = prompt("Ingrese el Código");
    var op = prompt("Ingrese la OP");
    var descripcion = prompt("Ingrese la Descripción");
    var cliente = prompt("Ingrese el Cliente");
    var proximoProceso = prompt("Ingrese el Próximo Proceso");
    var original = prompt("Ingrese la cantidad Original");
    var aFabricar = prompt("Ingrese la cantidad A Fabricar");
    var fechaDisponibilidadMat = prompt("Ingrese la Fecha de Disponibilidad Mat");
    var estado = prompt("Ingrese el Estado (trefilado, cuerda, aislacion, encintado, pantalla, cableado 203, vaina int, flejado, vaina 201, terminado, pantalla (1,03), pantalla (0,55))");
    var kilos = prompt("Ingrese los Kilos");
    var tnConductor = prompt("Ingrese las Tn de Conductor");
    var bobinaCant1 = prompt("Ingrese la Cantidad de Bobina");
    var bobinaTamano = prompt("Ingrese el Tamaño de Bobina");
    var bobinaCant2 = prompt("Ingrese la Cantidad de Bobina");

    var fila = document.createElement("tr");
    fila.innerHTML = "<td class='py-2 px-4'>" + codigo + "</td>" +
      "<td>" + op + "</td>" +
      "<td>" + descripcion + "</td>" +
      "<td>" + cliente + "</td>" +
      "<td>" + proximoProceso + "</td>" +
      "<td>" + original + "</td>" +
      "<td>" + aFabricar + "</td>" +
      "<td>" + fechaDisponibilidadMat + "</td>" +
      "<td>" + estado + "</td>" +
      "<td>" + kilos + "</td>" +
      "<td>" + tnConductor + "</td>" +
      "<td>" + bobinaCant1 + "</td>" +
      "<td>" + bobinaTamano + "</td>" +
      "<td>" + bobinaCant2 + "</td>";
    tablaBody.appendChild(fila);
  }

  
  

 

  