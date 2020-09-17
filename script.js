var city = "hello";

$(document).ready(function(){
    $("#search").click(function(){
        $(".card-body").css("height","100%")
        $(".weather-container").css("display","block");
        city = $("#city-name").val();
        console.log(city);
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=418d13552f9593b66c9411c801035aa2", function(data){
    console.log(data);
    var cont = data.sys.country;
    var loc = data.name;
    $('.place').text(`${loc},${cont}`);
    var icon = "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
    console.log(icon);
    var weather = data.weather[0].main;
    
    $('.weather').text(weather);
    $('.icon').attr('src',icon);
    var temp  = Math.floor(data.main.temp);
    var feel = Math.floor(data.main.feels_like);
    
    $('.temp').html(temp-273+'<sup> <i class="fa fa-circle-o" aria-hidden="true"></i></sup>');
    
    $('.temp2').html(feel-273+'<sup> <i class="fa fa-circle-o" aria-hidden="true"></i></sup>');
    
});
    });
});
