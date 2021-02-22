import React,{useContext} from 'react'
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider"

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    console.log(menu)

    const toogleMenu = () =>{
        setMenu(!menu)
    }

    return (
       <header>
           <a href='/'>
               <div className="logo">
                   <img src={Nike} alt="logo" width="150" />
               </div>
           </a>
           <ul>
              <li>
                 <Link to="/">INICIO</Link>      
              </li>
              <li>
                 <Link to="/productos">PRODUCTOS</Link>  
              </li>
           </ul>
           <div className="cart" onClick={toogleMenu}>
               <box-icon name="cart"></box-icon>
               <span className="item_total">{carrito.length}</span>
           </div>
       </header>
    )
}