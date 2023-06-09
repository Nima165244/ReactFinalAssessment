import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./account/login/Login";
import Registration from "./account/register/registration";
import Dashboard from "./features/dashboard/Dashboard";
import Password from "./account/forgot-password/password";
import ProductInfo from "./features/products/productInfo";
import Users from "./features/users/UserListing";
import Todo from "./features/todos/index";
import Post from "./features/posts/post";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/registration", element: <Registration /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/password", element: <Password /> },
  { path: "/productinfo", element: <ProductInfo /> },
  { path: "/userslisting", element: <Users /> },
  { path: "/todo", element: <Todo /> },
  { path: "/post", element: <Post /> }
]);
function App() {
  //const store = configureStore();
  return <RouterProvider router={router} />;
    // <Provider store={store}>
  //   <App/>
  //  </Provider>
  
}

export default App;
