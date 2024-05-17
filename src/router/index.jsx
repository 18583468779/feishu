import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home.jsx";

// 定义路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
export default router;
