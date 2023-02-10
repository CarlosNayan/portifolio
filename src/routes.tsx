import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home";
import Contatos from "./pages/Contatos/Contatos";
import Projetos from "./pages/Projetos/Projetos";
import Sobre from "./pages/Sobre mim/Sobre";

export default () => {
   return(
        <Routes>
            <Route element = { <Home /> }  path="/"  />
            <Route element = { <Contatos /> }  path="/contatos"  />
            <Route element = { <Projetos /> }  path="/projetos"  />
            <Route element = { <Sobre /> }  path="/sobre"  />
        </Routes>
   )
}
