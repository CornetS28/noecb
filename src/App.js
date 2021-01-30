import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

// MUI Stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Auth
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

// Pages
import home from "./pages/landingPage";

import about from "./pages/about";
import memeGenerator from "./pages/memeGenerator";
import resources from "./pages/resources";
import chat from "./pages/chat";
import PageNotFound from "./pages/pageNotFound";

import privacyPolicy from "./pages/privacyPolicy";

// Utils Stuff
import themeObjectContent from "./utils/theme";

const theme = createMuiTheme(themeObjectContent);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Router>
          {/* <Navbar /> */}
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/become-a-member" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/social" component={memeGenerator} />
              <Route exact path="/about" component={about} />
              <Route exact path="/chat" component={chat} />

              <Route exact path="/resources" component={resources} />

              <Route exact path="/privacypolicy" component={privacyPolicy} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
