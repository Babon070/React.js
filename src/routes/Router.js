import React from 'react';
import Auth from "./auth/Auth";
import Category from "./category/Category";
import Product from './product/Product';
import Home from "./home/Home";
import { Route, Switch } from "react-router-dom";
import Search from './search/Search';
import Likes from './likes/Likes';

const Routes = () => {
    return (
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/home" component={Home} />
          <Route path="/likes" component={Likes}/>
          <Route path="/product/:id" component={Product} />
          <Route path="/category/:id" component={Category} />
          <Route path="/search/:productName" component={Search} />
      </Switch>
    );
}

export default Routes;
