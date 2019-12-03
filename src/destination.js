import React from 'react'

export default function destination(props) {
    return (
        <div className="picture-destination">
            {props.listdestion.map(el=>
                <div className="cards-destination"><img src={el.img}/>
              <div className="bas-picture-destination">  <p className="parag-destinat">{el.namedest}</p>
            <button className="btn-destination">SEE OPENING</button>
                </div></div>
                )}
            
        </div>
    )
}
