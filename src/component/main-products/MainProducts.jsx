import React from 'react';
import "./MainProducts.scss"
import Container from "../../utilis/Container";
import { Link } from 'react-router-dom';
import {FiHeart} from "react-icons/fi"
import useFetchData from '../../hooks/useFetchData';



const MainProducts = () => {

    const [data, isLoading] = useFetchData("/products?offset=0&limit=24");

    function trimDescription(str){
        return str.split(" ").slice(0, 10).join(" ") + "..."
    }
    return (
        <section className='main__products'>
            <h2 className="main__products--title">PREMIUM E`LONLAR</h2>
            <Container>
                <div className="main__product--wrapper">
                    {!isLoading ?
                        data.map( product =>
                            <div className='product__item' key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                   {
                                     product.images?.at(0) && product.images?.at(0).startsWith("https://")
                                     ? 
                                     <img  className='product__image' src={product.images?.at(0)} alt="" />
                                     : 
                                     <img className='product__image' src='https://avatars.mds.yandex.net/i?id=74061e540998b0a7e99da029152a6c485dd1c0cb-8312178-images-thumbs&n=13'/>
                                   }
                                    <h3>{product.title}</h3>
                                </Link>
                                <div className='product__info'>
                                    <div>
                                        <p>{trimDescription(product.description)}</p>
                                        <strong>${product.price}</strong>
                                    </div>
                                    <FiHeart/>
                                </div>
                                
                            </div>
                            )
                            : <p className='loading'>Loading...</p>
                    }
                </div>
            </Container>
        </section>
    );
}

export default MainProducts;
