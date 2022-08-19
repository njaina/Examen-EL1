import "./Styles/App.css";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Main from './components/Main'
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import PrivateHome from "./pages/PrivateHome/PrivateHome";

function App() {
    return (
        <>
            <BrowserRouter>
                <SignUpModal/>
                <SignInModal/>
                <Main/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/private/private-home" element={<PrivateHome/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
