import React from "react";
import { Link } from "react-router-dom";


export const PersonajeApp = ({
    name,
    hair,
    eyes,
    skin,
    gender,
    height,
    weigth,
    birthday,
  }) => {

    
  return (
    <div >
                <div className='Cpersonajes'>
                    <center><h4><strong className='fuerte'></strong>{name}</h4></center><br/>
                    <p><strong className='fuerte'>Altura: </strong>{height}</p>
                    <p><strong className='fuerte'>Masa: </strong>{weigth}</p>
                    <p><strong className='fuerte'>Color de cabello: </strong>{hair}</p>
                    <p><strong className='fuerte'>Color de piel: </strong>{skin}</p>
                    <p><strong className='fuerte'>Color de ojos: </strong>{eyes}</p>
                    <p><strong className='fuerte'>Fecha de nacimiento: </strong>{birthday}</p>
                    <p><strong className='fuerte'>Genero: </strong>{gender}</p>
                    <div>
                    <Link to={`/DetallePersonaje/${name}`} key={name}></Link>
                    <button className="btn btn-warning"  href='/DetallePersonaje'>Ver detalle</button>
                    </div>
                </div>
    </div>
  )
}

export default PersonajeApp;
