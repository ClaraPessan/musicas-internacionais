import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Cabecalho from "./componentes/Cabecalho";
import Favoritos from "./paginas/Favoritos";
import Player from "./paginas/Player";
import FavoritosProvider from "./contextos/Favoritos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho/>
            <FavoritosProvider>
                <Routes>
                    <Route index element={<Inicio/>}></Route>
                    <Route path='favoritos' element={<Favoritos/>}></Route>
                    <Route path=":id" element={<Player/>}></Route>
                </Routes>
            </FavoritosProvider>
            
        </BrowserRouter>
    )
}

export default AppRoutes;