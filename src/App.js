import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Lab from "./components/Lab";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes}
    from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/lab"
                           exact={true}
                           element={<Lab/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;