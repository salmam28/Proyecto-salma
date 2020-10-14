window.crearBaseDatos();
$(function () {
    $('#frmlogin').submit(function (e) {
        const usu = $('#usuarioInput').val();
        const pass = $('#passInput').val();

        console.log(usu,pass);
        
        sql = 'SELECT *, rowid FROM users WHERE usuario=? and password=?';

             window.query(sql, [usu,pass]).then(function (result) {

                console.log(result);
                if (result.length > 0) {

                    const usuario = result[0];
                    localStorage.setItem('usuario',JSON.stringify(usuario));
                    window.location.href = '../../index.html'; 
                } else {
                    alert('Datos no validos');
                }
             }, function (error) {
                 console.log('Lo sentimos,ha ocurrido un error', error);
            })

        e.preventDefault();
    })
})