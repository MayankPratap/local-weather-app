var tempC,tempF;
$(document).ready(function(){

  if(navigator.geolocation){

     navigator.geolocation.getCurrentPosition(function(position){
        var latitude=position.coords.latitude;
        var longitude=position.coords.longitude;
        var apiUrl="http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=9bb8ffb7868bb72fb575bb9cba652046";

        $.getJSON(apiUrl,function(json){

          //console.log(JSON.stringify(json));
          //console.log(json.main.temp);
          tempC=parseInt(json.main.temp)-275;
          tempF=1.8*tempC+32;
          var condition=json.weather[0].main,
          wdescription=json.weather[0].description,
          wicon="http://openweathermap.org/img/w/"+json.weather[0].icon+".png",
          wid=json.weather[0].id,
          country=json.sys.country,
          city=json.name,
          backgroundId=[299,499,599,699,799,800],
          backgroundImg=[

               "https://github.com/MayankPratap/local-weather-app/blob/master/images/thunderstorm.jpg?raw=true",
               "https://github.com/MayankPratap/local-weather-app/blob/master/images/sprinkle.jpg?raw=true",
               "https://github.com/MayankPratap/local-weather-app/blob/master/images/rainy.jpg?raw=true",
               "https://github.com/MayankPratap/local-weather-app/blob/master/images/snowy.jpg?raw=true",
               "https://github.com/MayankPratap/local-weather-app/blob/master/images/foggy.jpg?raw=true",
               "https://github.com/MayankPratap/local-weather-app/blob/master/images/clear.jpg?raw=true",
               "https://github.com/MayankPratap/local-weather-app/blob/master/images/cloudy.jpg?raw=true",
          ];

          backgroundId.push(wid);
          bgIndex=backgroundId.sort().indexOf(wid);

          $('body').css('background-image','url('+backgroundImg[bgIndex]+')');


          $('#temperature').text(tempC.toString()+'° C');
          $('#condition').html("<h4 style='color:white'>"+wdescription+"</h4>"+" <img src="+wicon+">");

        /*
          console.log(tempC.toString());
          console.log(tempF.toString());
          console.log(condition);
          console.log(country);
          console.log(city);   */


          /*html+="<div class='temp'>";
            html+="<h4 id='celcius'>Temperature is: "+tempCelcius.toString() +"<button id='celciusButton'>°C</button></h4>";
            html+="<h4 id='fahrenheit' style='display:none'>Temperature is: "+tempFahrenheit.toString()+"<button id='fahrenheitButton'>°F</button></h4>";
            html+="</div><br>";
            html+="<div class='weather'>";
            html+="<h4>"+json.weather[0].main+"</h4>";
            html+="</div><br>";    */
            //console.log(JSON.stringify(json));


        });

    });

 }
});

$('#convert-button').click(function(){

   if($('#temperature').text().indexOf('F')>-1){

      $('#temperature').text(tempC+'° C')

   }

   else{

    $("#temperature").text(tempF+'° F');

   }

  this.blur(); // removes focus from button after click

});
