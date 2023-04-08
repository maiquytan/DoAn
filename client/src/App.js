import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import NavBar from './Share/Components/NavBar/NavBar.js';
import Footer from './Share/Components/Footer/Footer.js';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import './Share/Style/App.css';
import Shop from './Pages/Shop/Shop.js';
// import ProductDetail from './Share/Components/ProductDetail/ProductDetail.js';
import BLogsPage from './Pages/BlogsPage/BLogsPage.js';
import BLogDetail from './Pages/BlogDetail/BLogDetail.js';
import Purchase from './Pages/Purchase/Purchase.js';
import Profile from './Pages/Profile/Profile.js';
// import Cart from './Share/Components/Cart/Cart.js';

import { store } from './store/store';
import PreviewProductModal from './Share/Modals/PreviewProductModal.js';
import NotFound from './Share/Components/NotFound/index.js';
import OrderDetail from './Pages/OrderDetail/OrderDetail.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <BrowserRouter>

          <NavBar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/favourite" component={Shop}>
              <Shop />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/blogspage">
              <BLogsPage />
            </Route>
            <Route exact path="/blogdetail/">
              <BLogDetail />
            </Route>
            <Route exact path="/purchase">
              <Purchase />
            </Route>
            <Route exact path="/shop/:id">
              <Shop />
            </Route>
            <Route exact path="/purchase">
              <Purchase />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/order/:id">
              <OrderDetail />
            </Route>
            <Route path="*" >
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>

        {/* <ProductDetail/> */}
        {/* <Cart/> */}
        <PreviewProductModal />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
