$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var envlopeWrapper = $(".envlope-wrapper");
  
    envelope.click(function () {
      open();
    });
  
    btn_open.click(function () {
      open();
    });
  
    btn_reset.click(function () {
      close();
    });
  
    function open() {
      envelope.addClass("open").removeClass("close");
      envlopeWrapper.addClass('fade-out');
      $('#userInput').addClass('visible'); // Muestra el área de texto
      setDefaultText(); // Establece el texto predeterminado
      $('.letter').addClass('growing');
    }
  
    function close() {
      envelope.addClass("close").removeClass("open");
      envlopeWrapper.removeClass('fade-out');
      $('#userInput').removeClass('visible'); // Oculta el área de texto
      $('.letter').removeClass('growing');
    }
  
    function setDefaultText() {
      // Puedes ajustar el texto predeterminado aquí
      $('#line1').text('¡Hola amorcito!');
      $('#line2').text('Solo quería recordarte lo especial que eres para mí. Eres mi luz, mi risa y mi razón para sonreír todos los días. Gracias por hacer mi vida increíble.');
      $('#line3').text('Cada momento contigo es un regalo precioso que atesoro con cariño. Gracias por ser mi apoyo  y por compartir risas y lágrimas a mi lado . ');
      $('#line4').text('Con todo mi amor,[Matías]');
    }
  });
  