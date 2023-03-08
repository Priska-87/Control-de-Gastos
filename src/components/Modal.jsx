import { useState, useEffect } from 'react'
import cerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = 
({setModal, 
  animarModal, 
  setAnimarModal, 
  guardarGasto, 
  gastoEditar,
  setGastoEditar
}) => {

const [mensaje, setMensaje] = useState('')
const [nombre, setNombre] = useState('')
const [cantidad, setCantidad] = useState('')
const [categoria, setCategoria] = useState(false)
const [fecha, setFecha] = useState('')
const [id, setId] = useState('')


useEffect(() => {
 if(Object.keys(gastoEditar).length > 0){
  setNombre(gastoEditar.nombre)
  setCantidad(gastoEditar.cantidad)
  setCategoria(gastoEditar.categoria)
  setId(gastoEditar.id)
  setFecha(gastoEditar.fecha)
 }
}, [])

const ocultarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout( () => {
      setModal(false)
    }, 500)
}



const handleSubmit = e => {
  e.preventDefault()

  if([nombre, cantidad, categoria].includes('')){
    setMensaje('Todos los campos son obligatorios')

    setTimeout(() => {
      setMensaje('')
    }, 3000);
    return;
            
  }

  guardarGasto({nombre, cantidad, categoria, id, fecha})
  
}


  return (
    <div className="modal">
        <div className='cerrar-modal'>
            <img 
            src={cerrarModal}
            alt="cerrar-modal" 
            onClick={ocultarModal}
            />
        </div>

        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend className='legend'>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo Gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            
            <div className='campo'>
              <label htmlFor="nombre">Nombre Gasto</label>
              <input 
              type="text" 
              id='nombre'
              placeholder='Ingresa el nombre de tu gasto'
              value={nombre}
              onChange={ e => setNombre(e.target.value)}
              />
            </div>

            <div className='campo'>  
              <label htmlFor="cantidad">Importe</label>
              <input 
              type="number" 
              id='cantidad'
              placeholder='Ingresa la cantidad de tu gasto. Ej: 300'
              value={cantidad}
              onChange={e => setCantidad(Number(e.target.value))}
              />
            </div>

            <div className='campo'>
              <label htmlFor="categoria">Categoría</label>
              <select 
              id="categoria"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
              >
                <option value=""> --Opciones-- </option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos Varios</option>
                <option value="ocio">Ocio </option>
                <option value="salud">Salud </option>
                <option value="suscripciones">Suscripciones </option>
              </select>
            </div>

            <input 
            type="submit" 
            value={gastoEditar.nombre ? 'Guardar Cambios' : 'Nuevo Gasto'}
            />

        </form>

    </div>
  )
}

export default Modal
