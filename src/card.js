import React from 'react'




export default function card(props) {
    return (

<div className="total-cards" > 
             
{props.card.map(el=>
 <div id="cards-container" className={el.class} > 
<p className="card-parag">{el.title}<h3 className="card-title">{el.parag}    

{!el.country ? null : <select className="btn">{el.country.map(el=>
  <option >{el}</option>
  )} </select>} 
  <img src={el.img} className={el.classimg}/> 
</h3></p> 
</div>  )}

        </div>
    )
}

