$(document).ready(function(){
    
  const guardarConsulta = [];
  const guardarReserva = [];
  const guardarDiaHora = [];
  const URLJSON = '/datos.json';
  
  escribirServicio();                        
  detalles();                               
  
  
  $("#diaHora").flatpickr({
      inline:true,
      enableTime: true,
      minTime: "09:00",
      maxTime: "17:00",
      minDate: "today",
      dateFormat: "j F, Y - H:i",
      "disable": [
          function(date) {

              return (date.getDay() === 0 || date.getDay() === 7);
  
          }
      ],
      locale: {
          firstDayOfWeek: 1,
          weekdays: {
            shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
            longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],         
          }, 
          months: {
            shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
            longhand: ['Enero', 'Febreo', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          },
      }
  });
  

  function escribirServicio() {
      $("select").append(() => {
      $.getJSON(URLJSON, function (respuesta, estado) { 
          if (estado === "success") {
              let misDatos = respuesta;
              for (i = 0; i < misDatos[0].serviciosunas.length; i++) {
                  $("#selectServi").append(`<option>${misDatos[0].serviciosunas[i]}</option>`);
                  }
              }
          });
          });
  };
  
  

  $("#btnCalend").click((event) => {
      let diaHora = $(".flatpickr").val();
      localStorage.setItem("turno", diaHora);
      guardarDiaHora.push({turno: diaHora});
      $(location).attr('href','turnos.html');
      event.preventDefault();
  });
  

  function detalles() {
      $("#detalleReserv").append(`<div class="containerDet">
                                      <div class="divDetalle">
                                          <h6><u>Profesional</u></h6>
                                          <p>Laura Garcia</p>
                                      </div>
                                      <div class="divDetalle">
                                          <h6><u>Forma de pago</u></h6>
                                          <p>Efectivo o Débito</p>
                                      </div>
                                      <div class="divDetalle">
                                          <h6><u>Día y Hora</u></h6>
                                          <p>${localStorage.getItem("turno")}</p>
                                      </div>
                                      <div class="divDetalle">
                                          <h6><u>Ubicación</u></h6>
                                          <p>Estomba 3449</p>
                                      </div>
                                  </div>`);
  };
  
  

  $("#btnConsul").click((event) => {
      event.preventDefault();
      let nom = $("#nomb").val();
      let ape = $("#apell").val();
      let correo = $("#correo").val();
      let texto = $("#text").val();
      guardarConsulta.push({nombre: nom, apellido: ape, email: correo, mensaje: texto});
      $.ajax({
          method: "POST",
          url: "https://jsonplaceholder.typicode.com/posts",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(guardarConsulta),
      })
          .done(function(msg) {
              Swal.fire({
                  icon: 'success',
                  title: 'Consulta enviada!',
                })
          })
          .fail(function() {
              Swal.fire({
                  icon: 'error',
                  title: 'Ocurrió un error',
                })
          })
      console.log(guardarConsulta);
      $("#formulario").trigger("reset");
  });
      
  
  
  $("#btnReserva").click((event) => {
      event.preventDefault();
      let nomApe = $("#nombApell").val();
      let numCel = $("#numCel").val();
      let correo = $("#correo").val();
      let servi = $("#selectServi").val();
      let texto = $("#text").val();
      guardarReserva.push({nombre: nomApe, celular: numCel, email: correo, servicio: servi, mensaje: texto});
      $.ajax({
          method: "POST",
          url: "https://jsonplaceholder.typicode.com/posts",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(guardarReserva),
      })
          .done(function(msg) {
              Swal.fire({
                  icon: 'success',
                  title: 'Reserva confirmada!',
                })
          })
          .fail(function() {
              Swal.fire({
                  icon: 'error',
                  title: 'Ocurrió un error',
                })
          })
      console.log(guardarReserva);
      $("#formulario").trigger("reset");
  });
  
  });
