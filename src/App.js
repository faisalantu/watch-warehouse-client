import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div className='container mx-auto px-2 lg:px-0'>
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
