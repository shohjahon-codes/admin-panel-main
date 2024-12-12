import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { SingIn } from "./pages/sing-in/sing-in";
import RoutersDate
import { Create } from "./pages/Addcategory/addcategory";
import { CategoryList } from "./pages/category/category";
import { SubCategoryList } from "./pages/subcategory/subCategory";
import { EditCategory } from "./pages/edit/Edit";
import { RoutersData } from "./router/router";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/app" element={<Layout/>}>
          {RoutersData.map(({ component: Element, id, path }) => (
            <Route
              index={path ? false : true}
              path={path}
              key={id}
              element={<Element />}
            />
          ))}
        </Route>
      </Routes>
  );
};

export default App;
