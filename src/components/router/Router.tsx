import { ABOUT_PAGE_PATH, MAIN_PAGE_PATH, USER_PAGE_PATH } from '@consts';
import { AboutMe, Main, User } from '@pages';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '../layout/Layout';

import './router.css';

type Props = {};

const Router = (props: Props) => {
    return (
        <div>
            <Layout>
                <div className="container router-wrapper">
                    <Routes>
                        <Route
                            path={`${USER_PAGE_PATH}/:id`}
                            element={<User />}
                        />
                        <Route path={MAIN_PAGE_PATH} element={<Main />} />
                        <Route path={ABOUT_PAGE_PATH} element={<AboutMe />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </Layout>
        </div>
    );
};

export default Router;
