import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import "./App.css";

// MUI Stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Auth
import Signup from "./Auth/Signup/Signup";
import Login from "./Auth/Login/Login";

// Components
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";

// Pages
import home from "./pages/LandingPage/landingPage";
import about from "./pages/About/about";
import memeGenerator from "./pages/MemeGenerator/memeGenerator";
import archives from "./pages/Archives/archives";
import interactions from "./pages/Interactions/interactions";
import PageNotFound from "./pages/PageNotFound/pageNotFound";
import privacyPolicy from "./pages/PrivacyPolicy/privacyPolicy";
import members from "./pages/Members/members";
import articles from "./pages/Articles/articles";

// Utils Stuff
import themeObjectContent from "./utils/theme";

const theme = createMuiTheme(themeObjectContent);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/become-a-member" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/social" component={memeGenerator} />
            <Route exact path="/about" component={about} />
            <Route exact path="/interactions" component={interactions} />
            <Route exact path="/archives" component={archives} />
            <Route exact path="/privacypolicy" component={privacyPolicy} />
            <Route exact path="/members" component={members} />
            <Route exact path="/articles" component={articles} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
