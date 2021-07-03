import "./App.css";
import Nav from "./components/Nav";
import SidePanel from "./components/SidePanel";
function App() {
  return (
    <div className="App">
      <Nav/>
      <SidePanel/>
      <header className="App-header">
        qr code
        ship Name
        <h3>SHIP NAME</h3>
        <section>
          <button>print</button>
          <button>download</button>
        </section>
        <section>
          <a href="">Other Details</a>
          <a href="">Penguin Shiping</a>
          <a href="">Start Timer</a>
        </section>

        <section>Table</section>
        <section>graph</section>
        <section>graph</section>
      </header>
      
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
