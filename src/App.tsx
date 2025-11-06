import { Routes,Route } from "react-router-dom";
import { FormExpense, FormIncome } from "./components/forms";
import { Layout } from "./components/Layout/Layout";
import { ShowItems } from "./components/ShowItems";
import { Home } from "./components/Layout/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="form-expense" element={<FormExpense/>} />
        <Route path="form-income" element={<FormIncome/>} />
        <Route path="show-items" element={<ShowItems/>} />
      </Route>
    </Routes>
  );
}

export default App;
