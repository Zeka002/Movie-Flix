import React from "react";
import {DfHomePage} from './components/DfHomePage'
import { DfDiscoverPage } from "./components/DfDiscoverPage";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router'

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DfHomePage/>}/>
                <Route path="/DfDiscoverPage" element={<DfDiscoverPage/>}/>
            </Routes>
       </BrowserRouter>
    )
}

export default App;