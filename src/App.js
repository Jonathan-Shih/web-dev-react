import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/explore.css'
import HelloWorld from "./components/HelloWorld";
import Lab from "./components/Lab/labPage";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes, useParams}
    from "react-router-dom";
import A6 from "./components/Lab/A6";
import A7 from "./components/Lab/A7";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index
                               element={<HelloWorld/>}/>
                        <Route path="lab"
                               element={<Lab/>}>
                        </Route>
                        <Route path = "lab/a6"
                               element={<A6/>}/>
                        <Route path="lab/a7"
                               element={<A7/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;