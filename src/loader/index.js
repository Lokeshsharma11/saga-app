import React from "react";
import ReactLoading from "react-loading";
import "./styles.scss";

export const Loader = () => {
  return (
    <div className="loader-wrap">
      <ReactLoading
        color={"rgb(246,92,46)"}
        height={"50px"}
        width={"50px"}
        type={"spin"}
      />
    </div>
  );
};
