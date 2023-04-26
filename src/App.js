import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Tutorials from "./pages/Tutorials";

function App() {
  // return <Home />;
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="tutorials" Component={Tutorials} />
      </Routes>
    </>
  );
}

export default App;
