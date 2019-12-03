import React from 'react'

function helthcare(props) {
    return (
        <div className="healthcar">
           <div className="gauche">
           <h1 className="title-healthcare"> The world's <br/> biggest healthcare platform</h1> 
           <p className="prg-healthcare"> We work from 6 offices all over the world, bringing Docplanner <br/>Group to life in almost 20 countries.</p>
           <img src ="https://www.docplanner.com/img/logo.png" className="img-logo-healthcare"></img>
           </div>
  
  <div className="container-forcarte">
           {props.forcarte.map(el=>
           <div id="cards-healthcare" className={el.classcart}>
                <img src={el.img} className="img-cards-healthcare"/> 
                <h3 className="title-cards-healthcare">{el.title}</h3>
                <p className="prg-cards-healthcare">{el.parag} </p>
                </div>
            )}
            </div>
</div>
          
    )
}
export default helthcare