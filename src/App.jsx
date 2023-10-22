import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navi from "./components/Navi";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div>
      <Header />
      <Welcome/>
      <Navi />
      
      <Main />
      <Footer />
    </div>
  );
}