import {
    useEffect,useState
}from "react";
import Cards from "./card";





const Products=()=> {
    const [data, setData]=useState([]);
    useEffect(
        ()=>{
            fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>{
                setData(json);
            })
        },
        []
    )
    
    return (
        <div>
        { data.map((d)=>(
            <div>
                <Cards title={d.title} description={d.description} image={d.image}/>
                {/* <div>{d.title}</div>
                <div>{d.description}</div> */}
            </div>
        )) }
        </div>
    )
}

export default Products;
