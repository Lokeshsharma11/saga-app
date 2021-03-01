import React from "react";
import ReactLoading from "react-loading";
// import SyncLoader from "react-spinners/SyncLoader";
import "./styles.scss";

export const Loader = () => {
  return (
    <div className="loader-wrap">
      {/* <SyncLoader color={"rgb(246,92,46)"} size="10"/> */}
      <ReactLoading
        color={"rgb(246,92,46)"}
        height={"50px"}
        width={"50px"}
        type={"spokes"}
      />
    </div>
  );
};
