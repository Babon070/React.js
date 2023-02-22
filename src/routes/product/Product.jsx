import React from 'react';
import "./Product.scss"
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Container from "../../utilis/Container";


const Product = () => {
    const productIdData = useParams();
    const [data, isLoading] = useFetchData(`/products/${productIdData.id}`)
    console.log(data);
    return (
        <section className='single__product'>
           <Container>
            <div className='single__product--wrapper'>
                    <img width={400} src={data.images?.at(0)} alt="" />
                    <div className='single__wrap'>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <div className='btn__price'>
                            <strong>${data.price}</strong>
                            <button className='btn__card--product'>Add to card</button>
                        </div>
                       
                    </div>
            </div>
           </Container>
        </section>
    );
}

export default Product;
