import React, { FC } from "react";
import Header from "../header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../../pages/Main";
// type Props = {
//   children: React.ReactNode;
// };

const Layout: FC = () => {
  return (
    <div>
      <Header />
      {/* {children} */}
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<div>user</div>} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Layout;
