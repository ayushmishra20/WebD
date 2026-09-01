// import React from 'react'

const Card = (props) => {


  return (
    <div className="card">
        <img src={props.img} alt=""/>
        <h1>{props.username} , {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit enim alias, magni eos debitis at ad id quia suscipit cum molestias temporibus commodi itaque quos minima voluptates reiciendis possimus!</p>
    </div>
  )
}

export default Card
