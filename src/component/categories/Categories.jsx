import React from "react";
import { Link } from "react-router-dom";
import UseFetchData from "../../hooks/useFetchData";
import Container from "../../utilis/Container";
import "./Categories.scss";


const Categories = ({}) => {

  const [data, isloading] = UseFetchData("/categories");

  return (
    <section className="categories">
      <h2 className="categories__head">Bosh toifalar</h2>
      <Container>
        <div className="categories__wrapper">
          {data.map((category) => (
            <Link to={`/category/${category.id}`} className="category-wrap" key={category.id}>
              <div className="category__image-wrapper">
                <img className="category-img" src={category.image} alt="" />
              </div>
              <h3>{category.name}</h3>
            </Link>
          ))
          }
        </div>
      </Container>
    </section>
  );
};
export default Categories;
