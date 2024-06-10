import AppNavbar from "./components/navbar";
import AppFooter from "./components/footer";
import Home from "./components/home";

function App() {
  return (
    <>
      <AppNavbar />
      <main>
        <Home />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
