import React, { FC } from 'react';

import Header from '../header/Header';

type Props = {
    children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};
export default Layout;
