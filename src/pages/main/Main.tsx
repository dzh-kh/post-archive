import Posts from '@components/posts/Posts';
import Searchbar from '@components/searchbar/Searchbar';
import { useState } from 'react';

import './main.css';

type Props = {};

const Main = (props: Props) => {
    const [titleQuery, setTitleQuery] = useState<string>('');
    const [pageQuery, setPageQuery] = useState(1);

    return (
        <div className="main-wrapper">
            <Searchbar
                value={titleQuery}
                setValue={setTitleQuery}
                setPageQuery={setPageQuery}
            />
            <Posts title={titleQuery} page={pageQuery} setPage={setPageQuery} />
        </div>
    );
};

export default Main;
