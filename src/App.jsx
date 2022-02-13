import { Route, Routes } from "react-router-dom";
import {
  CryptoCurrencies,
  CryptoDetails,
  LatestNews,
  Layout,
} from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
        <Route path="/news" element={<LatestNews />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
