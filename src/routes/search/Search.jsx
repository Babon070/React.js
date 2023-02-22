import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Container from "../../utilis/Container";
import "./Search.scss";
import SearchCom from "../../component/search/Search";
import { instance } from "../../api/instance";
// import { v4 as uuidv4 } from 'uuid';

const Search = () => {
  const [selectFilterStart, setSelectFilterStart] = useState(1);
  const [selectFilterEnd, setSelectFilterEnd] = useState(1);
  const [filterResult, setFilterResult] = useState([]);

  const productInfo = useParams();
  var [data, isloading] = useFetchData(`/products/?title=${productInfo.productName}`);

  var price = [1, 10, 100, 1000, 10000, 100000];

  useEffect(() => {
    if (selectFilterStart > selectFilterEnd) {
      setSelectFilterStart(selectFilterEnd);
      setSelectFilterEnd(selectFilterStart);
    }

    instance
      .get(
        `/products/?title=${productInfo.productName}&price_min=${selectFilterStart}&price_max=${selectFilterEnd}`
      )
      .then(response => setFilterResult(response.data));
  }, [selectFilterStart, selectFilterEnd]);
  console.log(filterResult);

  if (filterResult.length > 0) {
    data = filterResult
  }

  return (
    <section className="search__result">
      <SearchCom />
      <Container>
        <div className="search__filters">
          <select
            value={selectFilterStart}
            onChange={(e) => setSelectFilterStart(e.target.value)}
          >
            {price.map((price) => (
              <option  value={`${price}`}>{price}</option>
            ))}
          </select>

          <select
            value={selectFilterEnd}
            onChange={(e) => setSelectFilterEnd(e.target.value)}
          >
            {price.map((price) => (
              <option value={`${price}`}>{price}</option>
            ))}
          </select>
        </div>
        <div className="search__result--wrapper">
          {data.map((searchItem) => (
            <div className="search__item--wrapper">
              <Link to={`/product/${searchItem.id}`}>
                <img width={350} src={searchItem.images?.at(0)} alt="" />
              </Link>
              <div className="search__card--info">
                <h2>{searchItem.title}</h2>
                <p>{searchItem.description}</p>
                <strong>${searchItem.price}</strong>
                <button className="btn__card--product">Add to card</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Search;
