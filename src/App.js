import { SideBar, InvoiceDetails } from "./components";
import { Invoices } from "./pages";
import { Routes, Route } from "react-router-dom";
import "./app.css";
function App() {
  return (
    <div className="App">
      <header className="header">
        <SideBar />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Invoices />} />
          <Route path="/invoices/:id" element={<InvoiceDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
