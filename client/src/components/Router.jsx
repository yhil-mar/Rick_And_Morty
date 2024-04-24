import { Route, Routes, useLocation } from "react-router-dom";
import { Auth, Detail, Favorites, Home, Landing } from "../views/index";

function Router() {

    const location = useLocation();

    return (

        <Routes location={location}>

            <Route path='/' element={<Landing />} />

            {/* {Rutas para la autenticación con sus propias animaciones} */}

            <Route path='/auth/login' element={<Auth />} />

            <Route path='/auth/register' element={<Auth />} />

            <Route path='/home' element={<Home />} />

            <Route path='/favorites' element={<Favorites />} />

            <Route path='/detail/:id' element={<Detail />} />

        </Routes>
    )

};

export default Router;