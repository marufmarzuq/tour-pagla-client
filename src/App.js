import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import ControlAllBooking from './Pages/ControlAllBooking/ControlAllBooking';
import AddPlan from './Pages/AddPlan/AddPlan';
import MyBooking from './Pages/MyBooking/MyBooking';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import ScrollToTop from './ScrollTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop/>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/control-all-booking">
              <ControlAllBooking></ControlAllBooking>
            </Route>
            <Route path="/add-plan">
              <AddPlan></AddPlan>
            </Route>
            <Route path="/my-booking">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
