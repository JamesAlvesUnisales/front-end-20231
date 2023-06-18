import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import Page404 from './pages/Page404.js';
import UserForm from './pages/UserForm.js';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users/:id" element={<UserForm />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
