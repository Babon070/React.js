import React, { useState } from "react";
import Container from "../../utilis/Container";
import { Link, useLocation } from "react-router-dom";
import { BiHeart, BiMessageRounded, BiUser } from "react-icons/bi";
import "../../header.scss"
// import { RedirectButton } from "../../utilis/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import {useSelector} from "react-redux"


const Header = () => {
  
  const { t } = useTranslation();
  const storeInfo = useSelector(state => state.mainReducer);
  const location = useLocation();
console.log(storeInfo);
  


  return location.pathname.includes("/auth")  ? ( 
    <></> ) : (
    <header>
      <Container>
        <div className="header-wrapper">
          <Link to="/home">
            <img
              to="/home"
              className="header-logo"
              src="https://lindeal.com/images/2022/10/top-8-luchshikh-kazakhstanskikh-marketplejsov-olx.png"
              alt=""
            />
          </Link>
          
          <nav>
            <ul className="language-select">
              <li onClick={()=> i18n.changeLanguage("uz")} >UZ&nbsp;|</li>
              <li onClick={()=> i18n.changeLanguage("ru")} >&nbsp;RU</li>
            </ul>
            <Link to='/message' className="header__icon-link">
              <BiMessageRounded />
              {t("header_message")}
            </Link>
            <Link to="/likes" className="header__icon-heart">
              <BiHeart/>
            </Link>
            <Link to="/auth" className="header__icon-user">
              <BiUser/>
              {
                 storeInfo.user?.email ? storeInfo.user?.email :  t("header_account") 
              }
            </Link>
            {/* <RedirectButton  headerButton="/create-new" title="E'lon berish" type="light" ></RedirectButton> */}
            <Link to='/new-product'  className="header__button">
                <span>{t("header_button")}</span>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
