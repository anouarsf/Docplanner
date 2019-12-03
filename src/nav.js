import React from 'react'
import logodoc from './logodoc.svg';

export default function Nav(props) {
    return (
        <div className="Menu">
     <img className="logo" src={logodoc} alt="h"/>

        <ul className="Dropdown">
            {props.menu.map(el=> 
            <li className="Drop-li">{el.title}
            {!el.contenu ? null :
            <ul className="Dropdown-content">
                {el.contenu.map(el=> <li>
                    {el}
                </li>)}
            </ul>}
            </li>)}
        </ul>
        </div>
       
)
}
