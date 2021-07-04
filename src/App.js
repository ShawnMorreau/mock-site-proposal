import "./App.css";
import Nav from "./components/Nav/Nav";
import SidePanel from "./components/SidePanel/SidePanel";
import ShipHeader from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Nav/>
      <SidePanel/>
      <ShipHeader/>
      
      <main>
        <div className="mainContainer"></div>
        <button>import List</button>
        <button>item</button>
        <input type="text" name="" id="" />
        <section>Big Table</section>
      </main>
    </div>
  );
}

export default App;
