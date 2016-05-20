

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(function(position){
      var latitude=position.coords.latitude;
      var longitude=position.coords.longitude;
      var apiUrl="http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=9bb8ffb7868bb72fb575bb9cba652046";

      $.getJSON(apiUrl,function(json){

            //console.log(JSON.stringify(json));
            //console.log(json.main.temp);
          
            var html="";
            html+="<div class='temp'>";
            html+="<h4>Temperature is: "+json.main.temp+" </h4>";
            html+="</div>";
            console.log(html);

      });

      $(".message").html(html);

      });

    }
