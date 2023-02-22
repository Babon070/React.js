import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Container from "../../utilis/Container";
import "./Search.scss";
import {instance} from "../../api/instance"
import {Link} from 'react-router-dom'

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    
    const giveSearchProd = (e) =>{
        setSearchValue(e.target.value)

        instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
        .then(response => setSearchResult(response.data))
        .catch(err => console.log(err))
    }
    

    const giveMoreResult = (e) =>{
      e.preventDefault();

      window.location.pathname = `/search/${searchValue}`
    }

  return (
    <section className="search">
      <Container>
        <form onSubmit={giveMoreResult}>
          <div className="search__wrapper">
            <div >
              <FiSearch />
              <input
                onChange={giveSearchProd}
                className="search__input"
                type="text"
                placeholder="1 036 638 e‘lonlar yoningizda"
              />
              { searchResult?.length > 0 &&  searchValue ? <div className="search__suggestion">
                    {
                        searchResult.map(item => 
                            <Link  to={`/product/${item.id}`} className="search__item--link">
                                <p>{item.title}</p>
                            </Link>
                            )
                    }
              </div> : <></>}
              
            </div>
            <button className="search__btn">
              <FiSearch /> Qidiruv
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Search;
