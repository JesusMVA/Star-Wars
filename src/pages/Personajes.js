import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js'

const Personajes = ({characters = []}) => {
  return (
    <>
    <NavScrollExample/>
    <div className='cartas'>
        {
            characters.map((item,index) => (
                <div key={index} className='col'>
                    <div className='card'>
                       <img src={item.image}></img>
                       <center><h1>{item.name}</h1></center>
                        <p>Status: {item.status}</p>
                        <p>Specie: {item.species}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Origin: {item.origin.name}</p>
                    </div>
                </div>
            ))
        }
    </div>
    <FooterApp/>
    </>
  )
}

export default Personajes