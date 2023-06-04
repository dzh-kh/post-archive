import { FC, useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./searchbar.css";
import crossMark from "../../assets/error.png";

type Props = { value: any; setValue: any; setPageQuery: any };

const Searchbar: FC<Props> = ({ value, setValue, setPageQuery }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageQuery(1);
    setValue(event.target.value);
  };
  return (
    <div className="searchbar_wrapper">
      {value && (
        <img
          onClick={() => setValue("")}
          src={crossMark}
          className="cross-mark"
          width="30"
          height="30"
        />
      )}
      <Form.Control
        value={value}
        onChange={handleChange}
        className="mb-4 px-5 py-3"
        type="text"
        placeholder="search post by title"
      ></Form.Control>
    </div>
  );
};

export default Searchbar;
