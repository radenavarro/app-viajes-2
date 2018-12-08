$(document).ready(function () {
    // =========== EVENTOS =============

    // $('.linkEliminaViaje').on('click', function (ev) {
    //     ev.preventDefault();
    //
    //     // A partir de cada atributo id de cada enlace, obtengo su id
    //     let idViaje = $(this).attr('id');
    //     idViaje = idViaje.substr(idViaje.indexOf("-")+1);
    //     eliminaviaje(idViaje);
    // });
});

function eliminaviaje(idViaje){
    $.ajax({
        url: "/eliminaviaje",
        data: {idviaje: idViaje},
        type: 'post',
        success: (datos)=> datos
    })
}