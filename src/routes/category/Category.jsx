import React, { useEffect, useState } from "react";
import "./Category.scss";
import useFetchData from "../../hooks/useFetchData";
import { Link, useParams } from "react-router-dom";
import Container from "../../utilis/Container";

const Category = () => {
  const categoryIdData = useParams();
  const [data, isLoading] = useFetchData(
    `/categories/${categoryIdData.id}/products`
  );

  return (
    <section>
      <Container>
        <button  className="btn__category"> <Link to="/home" >Orqaga</Link> </button>

        <div className="category__products">
          {data.map((item) => (
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
    </section>
  );
};

export default Category;
