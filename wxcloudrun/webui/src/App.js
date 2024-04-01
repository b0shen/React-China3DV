// 引入 React 和 React Router
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ForumPage from "./pages/ForumPage";
import ForumsPage from "./pages/ForumsPage";
import SchedulePage from "./pages/SchedulePage";
import BottomNav from "./components/BottomNav";
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import PersonPage from "./pages/PersonPage";
import data from "./api/data";

// 定义一个 App 组件，使用 HashRouter 包裹路由和链接
function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    data
      .getNotifications()
      .then((res) => setNotes(res))
      .catch((reason) => console.warn(reason));
  }, []);
  // const now = new Date();
  // const init_tab =
  //   now.getFullYear() > 2023
  //     ? 2
  //     : now.getFullYear() < 2023
  //     ? 0
  //     : now.getMonth() > 11
  //     ? 2
  //     : now.getMonth() < 11
  //     ? 0
  //     : now.getDate() < 30
  //     ? 0
  //     : now.getDate() === 30
  //     ? 1
  //     : now.getDate() === 31
  //     ? 2
  //     : 2;
  const [tabidx, setTabidx] = useState(1);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/intro"
          element={<IntroPage notes={notes} setNotes={setNotes} />}
        />
        <Route path="/forums" element={<ForumsPage />} />
        <Route path="/forum" element={<ForumPage />}></Route>
        <Route path="/person" element={<PersonPage />}></Route>
        <Route
          path="/schedule"
          element={<SchedulePage tabidx={tabidx} setTabidx={setTabidx} />}
        />
      </Routes>
      <BottomNav notes={notes} />
    </>
  );
}

export default App;
