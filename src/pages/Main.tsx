import React, { useEffect, useState } from "react";
import Posts from "../components/posts/Posts";
import Searchbar from "../components/searchbar/Searchbar";
import { useDispatch } from "react-redux";
import useThrottle from "../hooks/useThrottle";
import "./main.css";
type Props = {};

const Main = (props: Props) => {
  const [titleQuery, setTitleQuery] = useState<string>("");
  const [pageQuery, setPageQuery] = useState(1);

  const throttledTitle = useThrottle(titleQuery, 500);

  return (
    <div className="container main-wrapper">
      <Searchbar
        value={titleQuery}
        setValue={setTitleQuery}
        setPageQuery={setPageQuery}
      />
      <Posts title={throttledTitle} page={pageQuery} setPage={setPageQuery} />
    </div>
  );
};

export default Main;