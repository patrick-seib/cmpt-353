import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Create from "./pages/Create";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="create" element={<Create />} />
        </Route>
        </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);