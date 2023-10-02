import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { ThemeContextProvider } from "../../contexts/theme";

const Router = () => {
    return (
        <BrowserRouter>
            <ThemeContextProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path='/profile/:id' element={<Profile />} />
                </Routes>
            </ThemeContextProvider>
        </BrowserRouter>
    )


}

export { Router }