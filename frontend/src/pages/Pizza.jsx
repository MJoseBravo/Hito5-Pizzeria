import React, { useState, useEffect } from 'react'
import Header from '../components/Header'

const urlPizza = "http://localhost:9000/api/pizzas/p001"

const Pizza = ({ id, name, price, ingredients, img, desc }) => {
    const [infoPizza, setInfoPizza] = useState([])

    const getDatos = async () => {
        const response = await fetch(urlPizza)
        const pizza = await response.json()
        setInfoPizza(pizza)
    }

    useEffect(() => {
        getDatos()
    }, [])

    return (
        <div>
            <Header />
            <div className="card d-flex gap-2 mt-2">
                <div>
                    <img className='pt-3' style={{ width: '50%' }} src={infoPizza.img} alt="" />
                </div>
                <div className='card-body'>
                    <h5>Pizza {infoPizza.name}</h5>
                    <p>{infoPizza.desc}</p>
                    <p>🍕Ingredientes</p>
                    <div>
                        {
                            infoPizza.ingredients != null && infoPizza.ingredients.length > 0 ?
                                <ul>
                                    {
                                        infoPizza.ingredients.map((detalle, index) => <li key={index} className='list-group'>{detalle}</li>)
                                    }
                                </ul>
                                : <div><p>No existen ingredientes para mostrar</p></div>
                        }
                    </div>
                    <p>${numberWithCommas(infoPizza.price)}</p>
                    <button className='btn btn-info'>Añadir al carro</button>
                </div>

            </div>
        </div>
    )
}

function numberWithCommas(x) {
    if( x == null)
        return ""
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default Pizza
