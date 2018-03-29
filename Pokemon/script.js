$(document).ready(
    function(){
            for(var x = 1; x < 152; x++){
                    var newimg = '<img src="http://pokeapi.co/media/img/' + x + '.png">'
                    $("#wrapper").append(newimg);
                }
})