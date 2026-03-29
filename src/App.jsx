import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
  const date = new Date()
  return (
    <>
      <Header />
      <Main />
      <footer>copy; {date.getFullYear()}</footer>
    </>
  );
}

export default App;
