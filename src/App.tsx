import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { SingIn } from "./pages/sing-in/sing-in";
import { Create } from "./pages/Addcategory/addcategory";
import { CategoryList } from "./pages/category/category";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/app" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<CategoryList />} />
        <Route path="create" element={<Create />} />
        {/* <Route path="edit/:id" element={<EditCategory />} />
      <Route path="sub-category" element={<SubCategory />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
