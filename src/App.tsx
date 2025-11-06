import { Routes,Route } from "react-router-dom";
import { Form } from "./components/FormExpense";
import { FormIncome } from "./components/FormIncome";
import { Layout } from "./components/Layout/Layout";
import { ShowItems } from "./components/showItems";
import { Home } from "./components/Layout/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="form-expense" element={<Form/>} />
        <Route path="form-income" element={<FormIncome/>} />
        <Route path="show-items" element={<ShowItems/>} />
      </Route>
    </Routes>
  );
}

export default App;
