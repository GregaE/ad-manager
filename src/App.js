import Reflux from "reflux";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import AdStore from "./reflux/AdStore";
import AdActions from "./reflux/actions/AdActions";

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
          <Dashboard/>
          <button onClick={() => AdActions.createAd("new", "my header", "description", "https://bestofreactjs.com/repo/reflux-refluxjs-react-code-design")}>hello</button>
        </div>
      )
    }
}

export default App;
