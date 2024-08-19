import "./App.css";
import { ConfigProvider } from "antd";
import { header } from "./theme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <ConfigProvider theme={header}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
