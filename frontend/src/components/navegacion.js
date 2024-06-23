import React from "react";
import './../App.css';

class Navegacion extends React.Component {
    render(){
        function home_view(){
            window.location = "/"
        }
        let registro_view = () => {
            window.location = "/registro_page"
        }
        let consulta_view = () => {
            window.location = "/consulta_page"
        }
        let contacto_view = () => {
            window.location = "/contacto_page"
        }
       
        return(
            <div id="bloq-nav">
                <h1 className="title">Sistema de Gestión de Actividades.</h1>
                <button className="button" onClick={home_view}> Home </button>       
                <button className="button" onClick={registro_view}> Registro de Usuario </button>        
                <button className="button" onClick={consulta_view}> Actividades </button>       
                <button className="button" onClick={contacto_view}> Contacto </button>         
            </div>
        )
        }
}
export default Navegacion;