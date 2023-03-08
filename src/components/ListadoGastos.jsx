import Gasto from "./Gasto"
  
function ListadoGastos({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) {
  return (
   <div className="listado-gastos contenedor">
   
      
      { filtro ? (
        <>
        <h2>{gastosFiltrados.length ? 'Listado de gastos' : 'No hay gastos registrados en esta categoría'}</h2>

           { gastosFiltrados.map(gasto => ( 
              <Gasto
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              key={gasto.id}
              />
              
          ))} 

        </>

      ) : (
        <>
           <h2>{gastos.length ? 'Listado de gastos' : 'No hay gastos registrados'}</h2>
            { gastos.map(gasto => ( 
                <Gasto
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                key={gasto.id}
                />
            ))}
        </>

     )
   }

  
   </div>
  )
}

export default ListadoGastos