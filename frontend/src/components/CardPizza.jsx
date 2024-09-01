// import pizzas from './pizzas'

const CardPizza = ({id, name, price, ingredientes, img}) => {
    return (
        <div className="card d-flex tarjetas">
            <div className="card-img-top">
                <img style={{width: '90%'}} src={img} alt={name} />
            </div>
            <div className="tarjeta-pizza">
                <h3> Pizza {name}</h3>
                <p> 🍕Ingredientes:</p>
                <div className="list-group ps-0 pb-3 ">
                    <ul className="list-group" style={{}}>
                        {ingredientes.map((ingrediente, index) => {
                            return <li className="list-group" key={index}>{ingrediente}</li>
                        })
                        }
                    </ul>
                </div>
                <p>${numberWithCommas(price)}</p>
                <div className="btn-primary d-flex">
                    <button>Ver más</button>
                    <button>Añadir al carro</button> 
                </div>
                 
            </div>
        </div>
    )
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default CardPizza
