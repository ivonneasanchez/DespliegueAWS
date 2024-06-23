import './../App.css';

function Registro () {
    return(
        <div className="container" >
        <h2>Registro de Usuario</h2>
        <form action="/registrar_Usuario" method="post">
            <div className="form-group">
                <label>Id_Usuario: </label> <input name="id"/>
            </div>
            <div className="form-group">
                <label>Nombre Completo: </label> <input name="nombre"/>
            </div>
            <div className="form-group">
                <label>Correo Electrónico:  </label> <input name="email"/>
            </div>
            <div className="form-group"> <label>Contraseña:  </label> <input name="passw"/>
            </div>
            <button className="button">Registrarse</button>
        </form>


        </div>
    )
}

export default Registro