import React from "react";

// import Signup from "./Signup";
import { Container } from "react-bootstrap";
// import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Login from "./Login";
// import PrivateRoute from "./PrivateRoute";
// import ForgotPassword from "./ForgotPassword";
// import UpdateProfile from "./UpdateProfile";
// import UITest from "./FirebaseStyledSignedup";
import SignInScreen from "./FirebaseStyledSignedup";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import { StoreProvider } from "./components/utils/GlobalState";
import YourOrders from "./pages/YourOrders";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100">
        <Router>
          <StoreProvider>
            {/* <AuthProvider> */}
            <Switch>
              {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
              {/* <PrivateRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            /> */}
              <Route exact path="/ui">
                {/* <UITest /> */}
                <SignInScreen />
              </Route>
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/yourorder" component={YourOrders} />
              {/* <Route exact path="/signup" component={Signup} /> */}
              {/* <Route exact path="/login" component={Login} /> */}
              {/* <Route exact path="/forgot-password" component={ForgotPassword} /> */}
            </Switch>
            {/* </AuthProvider> */}
          </StoreProvider>
        </Router>{" "}
      </div>
    </Container>
  );
}

export default App;
