import Layout from "../layout/Layout";
import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Main";
import User from "../../pages/user/User";
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
          </Routes>
        </div>
      </Layout>
    </div>
  );
};

export default Router;
