import Reflux from "reflux";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import AdStore from "./reflux/AdStore";

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
      const { productList } = this.state;
      console.log(this.state)

      return (
        <div className="App">
          <NavBar/>
          <Dashboard/>
        </div>
      )
    }
}

export default App;
