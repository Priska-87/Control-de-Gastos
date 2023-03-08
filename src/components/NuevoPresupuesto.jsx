import { Children, useState } from "react";
import Mensaje from "./Mensaje";



const NuevoPresupuesto = ({presupuesto, setPresupuesto, setPresupuestoValido}) => {

  const [mensaje, setMensaje] = useState('')


// Validación y reseteo de la alerta
  const handlePresupuesto = (e) => {
        e.preventDefault();
        
        if(!(presupuesto) || (presupuesto) < 0) {
          setMensaje('No es un presupuesto válido')
          return
        } 

        setMensaje('')
        setPresupuestoValido(true)
 }


  return (
    <div className=" contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">

            <div className="campo">
                <label>Definir Presupuesto</label>

                 <input
                 className="nuevo-presupuesto"
                 type="number"
                 placeholder="Añade tu presupuesto"
                 value={presupuesto}
                 onChange={e => setPresupuesto(Number(e.target.value))}
                 />
            </div>

                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form> 
    </div>
  )
}

export default NuevoPresupuesto
