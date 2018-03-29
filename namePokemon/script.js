$(document).ready(
    function(){
        var mySource = "";
        for(var x = 1; x < 152; x++){
            var newimg = '<img class="' + x + '"src="http://pokeapi.co/media/img/' + x + '.png">'
            $(".images").append(newimg);
        }
    $(document).on('click', 'img', function(){
        mySource = $(this).attr("class");
        $.get("https://pokeapi.co/api/v2/pokemon/" + mySource + "/", function(res) {
                var name = res.name;
                console.log(res);
                var height = res.height;
                var weight = res.weight;
                var html_str = "";
                    html_str += "<h1>" + name + "</h1>";
                    html_str += '<img class="' + mySource + '"src="http://pokeapi.co/media/img/' + mySource + '.png">';
                    html_str += "<h3> Types </h3>";
                    html_str += "<ul>";
                    for(var i = 0; i < res.types.length; i++) {
                        html_str += "<li>" + res.types[i].type.name + "</li>";
                    }
                    html_str += "</ul>";
                    html_str += "<h3> Height </h3>";
                    html_str += "<h4>" + height + "</h4>";
                    html_str += "<h3> Weight </h3>";
                    html_str += "<h4>" + weight + "</h4>";
                $(".selector").html(html_str);
                }, "json");
    })
})