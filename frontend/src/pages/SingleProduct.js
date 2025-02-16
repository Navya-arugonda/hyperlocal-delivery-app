import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
	

function SingleProduct() {

    const {id , products} = useParams()

    useEffect(() => {
        getData();
    }, []);
    
    const getData = async() => {
        return fetch(`https://zeptojson.onrender.com/${products}/${id}`)
        .then((res) => res.json())
        .then((res) => {  
               
        })
        .catch(err =>console.log(err)
        )
    }


    
    // console.log(data)
    


  return (
    <h1>Product</h1>
  )
}

export default SingleProduct