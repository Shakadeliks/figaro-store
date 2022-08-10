import {createTheme, ThemeProvider } from "@material-ui/core";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import SignUp from "./pages/SignUp";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#1a1517"
    },
    secondary: {
      main: "#cbc694"
    }
  }
})

function App() {

  const user = useSelector(state => state.user.currentUser);

  return (
    <ThemeProvider MuiTheme={MuiTheme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/products/*" element={ <ProductList /> } />
            <Route path="/product/:id" element={ <ProductPage /> } />

            <Route path="/cart" element={ <Cart /> } />
            <Route path="/success" element={ <Success /> } />

            <Route 
              path="/login" 
              element={ user ? <Navigate replace to="/" /> : <Login /> } 
            />
            <Route 
              path="/signup" 
              element={ user ? <Navigate replace to="/" /> : <SignUp /> } 
            />


          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
