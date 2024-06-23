import './../App.css';

function Consulta () {
    return(
        <div className="container-cons" >
             <h2 className = "title">Actividades del Usuario XXXXXX</h2> <br /> <br />
        <table>
            <thead>
                <tr>
                    <th className="items.mat"> Nombre Actividad </th> 
                    <th className="items.mat"> Fecha Inicio </th>
                    <th className="items.mat"> Fecha Final</th>
                    <th className="items.mat"> Estado </th>
                    <th className="items.mat"> Observación </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" name="cell11" /></td>
                    <td><input type="text" name="cell12" /></td>
                    <td><input type="text" name="cell13" /></td>
                    <td><input type="text" name="cell14" /></td>
                    <td><input type="text" name="cell15" /></td>
                </tr>
                <tr>
                    <td><input type="text" name="cell21" /></td>
                    <td><input type="text" name="cell22" /></td>
                    <td><input type="text" name="cell23" /></td>
                    <td><input type="text" name="cell24" /></td>
                    <td><input type="text" name="cell25" /></td>
                </tr>
                <tr>
                    <td><input type="text" name="cell31" /></td>
                    <td><input type="text" name="cell32" /></td>
                    <td><input type="text" name="cell33" /></td>
                    <td><input type="text" name="cell34" /></td>
                    <td><input type="text" name="cell35" /></td>
                </tr>
                <tr>
                    <td><input type="text" name="cell41" /></td>
                    <td><input type="text" name="cell42" /></td>
                    <td><input type="text" name="cell43" /></td>
                    <td><input type="text" name="cell44" /></td>
                    <td><input type="text" name="cell45" /></td>
                </tr>
                <tr>
                    <td><input type="text" name="cell51" /></td>
                    <td><input type="text" name="cell52" /></td>
                    <td><input type="text" name="cell53" /></td>
                    <td><input type="text" name="cell54" /></td>
                    <td><input type="text" name="cell55" /></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Consulta