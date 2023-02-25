import React from 'react'
import "./Likes.scss"
import { useSelector } from "react-redux"
import Container from '../../utilis/Container';

const Likes = () =>{
  const { likedProducts } = useSelector(state => state.likeReducer);


  return (
    <div>
        <Container>
          <h2 className='title_head'>You liked</h2>
            <div className="category__product">
              {likedProducts.map((item) => (
                <div key={item.id} className="single__category--product">
                  <img width={400} src={item.images?.at(0)} alt="" />
                  <div className="single__wrap">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <div className="btn__price">
                      <strong>${item.price}</strong>
                      <button className="btn__card--product">Add to card</button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        </Container>
    </div>
  )
}

export default Likes
