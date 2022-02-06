import Reflux from "reflux";
import './styles/App.css';
import NavBar from "./components/navView/NavBar";
import { Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router';
import { AnimatePresence } from "framer-motion"

import AdStore from "./reflux/AdStore";

import ProductList from "./components/indexView/ProductList";
import AdList from "./components/readView/AdList";
import WarningModal from "./components/deleteView/WarningModal";
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
    const { adList, selectedAd } = this.state;

    return (
      <div className="App">
        <NavBar/>
        <div className="dashboard">
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
              path="/ad/edit/:productId"
              exact element={ <UpdateAd adList={adList} /> }
            />
          </Routes>
          <Outlet></Outlet>
        </div>
        <AnimatePresence>
        {this.state.deleteModal &&
          <WarningModal
            selectedAd={ selectedAd }
          />}
      </AnimatePresence>
      </div>
    )
  }
}

export default App;
