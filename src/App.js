import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./ContextProvider/AuthContext";
import "./App.css";
import "./layouts.css";
import RouterHandler from "./routerTools/RouterHandler";
const App = () => {
  return (
    <div className="wrapper">
      <AuthProvider>
        <div className="wrapper__content">
          <RouterHandler />
          <Footer />
        </div>
      </AuthProvider>
    </div>
  );
};

export default App;