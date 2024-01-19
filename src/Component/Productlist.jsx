import React from 'react'
import Productitem from './Productitem'

export default function Productlist(props) {
    console.log(props.data)
  return (
    <div className="productList">
    <Productitem dataItem={props.data[0]}/>
    <Productitem dataItem={props.data[1]}/>
    <Productitem dataItem={props.data[2]}/>
    <Productitem dataItem={props.data[3]}/>
    <Productitem dataItem={props.data[4]}/>
    </div>
  )
}
