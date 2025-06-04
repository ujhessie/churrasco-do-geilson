import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { MonitorPage } from "../pages/MonitorPage/MonitorPage";


export const MyRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/monitor' element={<MonitorPage />} />
                    {/* <Route
                        path='/projetos/:projeto'
                        element={<ProjetoPage />}
                    /> */}
                </Routes>
            </Router>
        </>
    );
};