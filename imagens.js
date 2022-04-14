$(document).ready(function e(){
    $('.mini div').click(function(quem){

        foto = $(this).children('img');
        console.log(foto);
        end = $(foto[0]).attr('src');
        end = end.replace('small','large');
        $('#fotoGrande').attr('src',end);


    });


});