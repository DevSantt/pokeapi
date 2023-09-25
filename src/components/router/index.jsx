import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Profile } from "../pages/profile";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path='/profile/:id' element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    )

    
}

export {Router}