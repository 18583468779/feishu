import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home.jsx";
import Calendar from "../page/Calendar.jsx";

// 定义路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
]);
export default router;
