$(document).ready(
    function(){
        $('.userentry').submit(
            function(){
                mySource = $('#city').val();
                console.log('in submit');
                $.get("http://api.openweathermap.org/data/2.5/weather?q=" + mySource + "&&appid=0bbe9917a892fe33f9180e25eda732ca", function(res) {
                console.log(res);
                var html_str = "";
                    html_str += "<h1>City Name:</h1>";
                    html_str += "<h3>" +  mySource + "</h3>";
                    html_str += "<h1>Temperature</h1>";
                    html_str += "<h3>" + (1.8 * ((res.main.temp) - 273) + 32) + "</h3>";
                $(".selector").html(html_str);
                }, "json");
                return false;
        })
})
// ° F = 1.8(K - 273) + 32
// http://api.openweathermap.org/data/2.5/weather?q=California,us&&appid=(with your API id)