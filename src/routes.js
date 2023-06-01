import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Insert from "./pages/Insert";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios/:id" element={<Details />} />
                <Route path="/criarUsuario" element={<Insert />} />
                <Route path="/EditarUsuario/:id" element={<Update />} />
                <Route path="/DeletarUsuario/:id" element={<Delete />} />
            </Routes>
        </BrowserRouter>
    )
}