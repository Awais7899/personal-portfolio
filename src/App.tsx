import "./App.css";
import "./assets/css/fonts.css";
import { ConfigProvider } from "antd";
import { header } from "./theme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App(): JSX.Element {
  return (
    <ConfigProvider theme={header}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
