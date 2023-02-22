import React from 'react';
import Auth from "./auth/Auth";
import Category from "./category/Category";
import Product from './product/Product';
import Home from "./home/Home";
import { Route, Switch } from "react-router-dom";
import Search from './search/Search';

const Routes = () => {
    return (
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/home" component={Home} />
          <Route path="/category/:id" component={Category} />
          <Route path="/product/:id" component={Product} />
          <Route path="/search/:productName" component={Search} />
      </Switch>
    );
}

export default Routes;
