import Layout from "../layout/Layout";
import { Routes, Route } from "react-router-dom";
import Main from "../../pages/main/Main";
import User from "../../pages/user/User";
import AboutMe from "../../pages/aboutMe/AboutMe";
import "./router.css";
type Props = {};

const Router = (props: Props) => {
  return (
    <div>
      <Layout>
        <div className="container router-wrapper">
          <Routes>
            <Route path="/user/:id" element={<User />} />
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
};

export default Router;
