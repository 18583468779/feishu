import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home.jsx";
import Calendar from "../page/Calendar.jsx";
import Messenger from "../page/Messenger.jsx";

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
  {
    path: "/messenger",
    element: <Messenger />,
  },
]);
export default router;
