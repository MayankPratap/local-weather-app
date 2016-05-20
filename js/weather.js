$(document).ready(function(){



    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(function(position){
        var latitude=position.coords.latitude;
        var longitude=position.coords.longitude;
        var apiUrl="http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=9bb8ffb7868bb72fb575bb9cba652046";

        var html="";

        $.getJSON(apiUrl,function(json){

            //console.log(JSON.stringify(json));
            //console.log(json.main.temp);


            html+="<div class='temp'>";
            html+="<h4>Temperature is: "+json.main.temp+" </h4>";
            html+="</div><br>";
            html+="<div class='weather'>";
            html+="<h4>"+json.weather[0].main+"</h4>";
            html+="</div>"
            //console.log(JSON.stringify(json));
            $(".message").html(html);

        });


    });

  }

});
