import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import List from "./pages/List/List";
import Navbar from "./layouts/Navbar/Navbar";

import styles from "./assets/app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
