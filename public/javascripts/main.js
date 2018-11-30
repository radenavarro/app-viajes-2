$(document).ready(function () {
    let btnRegEnviar = $("#regEnviar");//                   Botón de enviar registro
    // Login

    // =========== EVENTOS =============

    btnRegEnviar.on('submit', function (ev) {
        ev.preventDefault();
        // Registro
        let regInputPassw = $("#regInputPassw");//              Input contraseña
        let regInputPasswAgn = $("#regInputPasswAgn");//        Input confirmar contraseña


        if (regInputPassw.val() === regInputPasswAgn.val()){
            window.location('/benis');
        }
    })

});