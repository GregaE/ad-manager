import { Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router';
import ProductList from "./indexView/ProductList";
import AdList from "./readView/AdList";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Routes>
          <Route path="/" exact element={<ProductList/>} />
          <Route path="/adList/:productId" exact element={<AdList/>}/>
          {/* <Route path="/adList/:productId" exact element={<Ad/>}/>
          <Route path="/adList/:productId" exact element={<AdList/>}/> */}
      </Routes>
      <Outlet></Outlet>
    </div>
  );
}

export default Dashboard;