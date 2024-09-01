import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import napolitana from '../assets/imgs/napolitana.png'
import española from '../assets/imgs/española.png'
import pepperoni from '../assets/imgs/pepperoni.png'


const url = "http://localhost:9000/api/pizzas"

const Home = () => {
    const [totalPizzas, setTotalPizzas] = useState([])

    const getDatos = async () => {
        const response = await fetch(url)
        const pizzas = await response.json()


        setTotalPizzas(pizzas)
    }
    
    useEffect(() => {
        getDatos()
    }, [])


    return (
        <div className="tarjetas-home">
            <Header />
            <div className="row mt-5 gap-5">
                {totalPizzas.map(pizza => (
                <CardPizza key={pizza.id} 
                img={pizza.img}
                name={pizza.name} 
                price={pizza.price}
                ingredientes={pizza.ingredients}
                />
                ))}
                
            </div>
        </div>
    )
}
export default Home