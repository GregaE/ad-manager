import Reflux from "reflux";
import NavBar from "./components/navView/NavBar";
import { Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router';

import AdStore from "./reflux/AdStore";

import ProductList from "./components/indexView/ProductList";
import AdList from "./components/readView/AdList";
import CreateAd from "./components/createView/CreateAd";
import UpdateAd from "./components/updateView/UpdateAd";

class App extends Reflux.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
        this.store = AdStore;
    }

    render()
    {
      const { adList } = this.state;
      console.log(this.state)

      return (
        <div className="App">
          <NavBar/>
          <div className="Dashboard">
            <Routes>
              <Route path="/" exact element={<ProductList/>} />
              <Route
                path="/adList/:productId"
                exact element={ <AdList adList={adList} /> }
              />
              <Route
                path="/ad/create/:productId"
                exact element={ <CreateAd adList={adList} /> }
              />
              <Route
                path="/ad/edit/:adId"
                exact element={ <UpdateAd adList={adList} /> }
              />
            </Routes>
            <Outlet></Outlet>
          </div>
        </div>
      )
    }
}

export default App;
