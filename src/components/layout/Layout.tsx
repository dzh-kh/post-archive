import React, { FC } from "react";
import Header from "../header/Header";
import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Main";
import UserInfo from "../../pages/userInfo/UserInfo";
// type Props = {
//   children: React.ReactNode;
// };

const Layout: FC = () => {
  return (
    <div>
      <Header />
      {/* {children} */}
      <Routes>
        <Route path="/user/:id" element={<UserInfo id={1} />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};
export default Layout;
