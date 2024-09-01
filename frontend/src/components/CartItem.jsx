import { useState } from "react"
import { useEffect } from "react"

const CartItem = ({id, name, price, img, cantidadActual, addTotalPizza}) => {
    const [cantidad, setCantidad] = useState (cantidadActual)
    const agregar = () => {
        setCantidad(cantidad + 1)
    }
    const restar = () => {
        if (cantidad > 0)
            setCantidad(cantidad - 1)
    }
    let isVisible = true
    if (cantidad <= 0) {
        isVisible = false
    }

    // useEffect(() => {
    //     addTotalPizza(id, price * cantidad)
    // }, [])

    addTotalPizza(id, price * cantidad)
    

  return (
    isVisible ? 
    <div className='item d-flex justify-content-start pt-3' key={id}>     
        <div>
            <img className='img-thumbnail' style={{width: "50%"}} src={img} alt={name} />
        </div>
        <div className="d-flex flex-column align-items-start">
            <h3>Pizza {name}</h3>
            <p>$ {numberWithCommas(price)}</p>
            <p> Cantidad:{cantidad}</p>
            <div className='d-flex mb-2 gap-3 justify-content-center'>
                <button className='btn btn-primary' onClick={agregar}> + </button>
                <button className='btn btn-primary' onClick={restar}> - </button>
            </div>
        </div>
    </div>
    : null
  )
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default CartItem
