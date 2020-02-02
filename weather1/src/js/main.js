// import { helloWorld } from './index.js';
import '../css/styles.css';
import '../css/sketchyBootstrap.min.css';




// $(document).ready(function() {
//   $('#greeting').submit(function(event) {
//     event.preventDefault();
//     var name = $('#name').val();
//     $('#display').append("<li>" + helloWorld(name) + "</li>");
//   });
// });


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {

      console.log("event listner firing");

      if (this.readyState === 0) {
        console.log("0: not sent yet");
      }
      else if (this.readyState === 1) {
        console.log("1: open() has been called");
      }
      else if (this.readyState === 2) {
        console.log("2: send() has been called, and headers and status are available");
      }
      else if (this.readyState === 3) {
        console.log("3: downloading; responseText holds partial data");
      }
      else if (this.readyState === 4 && this.status === 200) {
        console.log("4: operation complete");
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    };
  });
});
