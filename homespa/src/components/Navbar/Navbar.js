import React, { useState }  from 'react';
import  {MenuItems} from'../Navbar/MenuItems';
import '../Navbar/Navbar.css';
import '../Button';
import {Button} from "../Button";

function Navbar(){
    const [click,setClick]=useState(false)
    const [button,setButton]=useState(true)

    const handleClick= () =>setClick(!click)
    const closeMobileMenu =()=> setClick(false)
    const showButton=() =>{
        if(window.innerWidth <=960){setButton(false);
        } else{
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton)

        return(
            <>

                <nav className='Navbar'>
                    <h3 className='Logo101'>HOME SPUR</h3>
                    <div className='Navbar-items'>
                    <ul className='list'>
                       {MenuItems.map((item,index)=>{
                        return(
                            <li key={index} onClick={closeMobileMenu} className='list-items'>
                        <a className='item-cName' href='item.url'>
                          {item.title}
                        </a>
                            </li>
                        )
                        })}
                        <li>{Button &&<Button >Sign Up</Button>}</li>
                    </ul>
                    </div>
            </nav>

                </>
        );

}
export default Navbar;
