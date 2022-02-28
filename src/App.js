import { SideBar } from "./compoents";
import { Invoices } from "./pages";
import "./app.css";
function App() {
  return (
    <div className="App">
      <SideBar />
      <main className="main">
        <Invoices />
      </main>
    </div>
  );
}

export default App;
