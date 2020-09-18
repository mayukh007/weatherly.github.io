var city = "hello";


$(document).ready(function(){
    $("#search").click(function(){
        city = $("#city-name").val();
       /// console.log(city);
       if(city === ""){
           alert("enter a valid city name");
           return;
       }
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=418d13552f9593b66c9411c801035aa2", function(data){
    console.log(data);
    var cont = data.sys.country;
    var loc = data.name;
   console.log(city);
    $('.place').text(`${loc},${cont}`);
    var icon = "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
    console.log(icon);
    var weather = data.weather[0].main;
    
    $('.weather').text(weather);
    $('.icon').attr('src',icon);
    
    var temp  = Math.floor(data.main.temp);
    var feel = Math.floor(data.main.feels_like);
    
    $('.temp').html(temp-273+'<sup> <i class="fa fa-circle-o" aria-hidden="true"></i></sup>');
    
    $('.temp2').html(feel-273+'<sup> <i class="fa fa-circle-o" aria-hidden="true"></i></sup>');

        $(".card-body").css("height","100%");
        $(".weather-container").css("display","block");
       
        var today = new Date();
        var utc = today.getTime() + (today.getTimezoneOffset() * 60000);
        var fs = (data.timezone)/3600;
        var ntoday = new Date(utc + (3600000*fs));
        $(".date").html(ntoday.toDateString());
        var time = ntoday.getHours() + ":" + ntoday.getMinutes() + ":" + ntoday.getSeconds();
        $(".time").html(time);
        if(ntoday.getHours()>19){
            $(".card-body").css("background", 'url("photo/Night_.jpg")');
            $(".card-body").css("background-size","cover");         
            $(".card-body").css("opacity", "0.8");
             $(".card-body").css("border-radius", "0px 0px 20px 20px");
             $(".card-body").css("background-repeat","no-repeat");
             $(".card-body").css("object-fit","cover");
        }else if(ntoday.getHours()>=17&&today.getHours()<=19){
            $(".card-body").css("background", 'url("photo/evening.jpg")');
            $(".card-body").css("background-size","cover");         
            $(".card-body").css("opacity", "0.8");
             $(".card-body").css("border-radius", "0px 0px 20px 20px");
             $(".card-body").css("background-repeat","no-repeat");
             $(".card-body").css("object-fit","cover");
        }else if(ntoday.getHours()<=10){
            $(".card-body").css("background", 'url("photo/day1..jpg")');
            $(".card-body").css("background-size","cover");         
           $(".card-body").css("opacity", "0.8");
            $(".card-body").css("border-radius", "0px 0px 20px 20px");
            $(".card-body").css("background-repeat","no-repeat");
            $(".card-body").css("object-fit","cover");
        }
        else if(ntoday.getHours()>10&&ntoday.getHours()<17){
            $(".card-body").css("background-image", 'url("photo/day.jpg")');
            $(".card-body").css("background-size","cover");         
           $(".card-body").css("opacity", "0.8");
            $(".card-body").css("border-radius", "0px 0px 20px 20px");
            $(".card-body").css("background-repeat","no-repeat");
            $(".card-body").css("object-fit","cover");

        }
        
    });
 
    });
});
