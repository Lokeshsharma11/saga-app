import screen from "./screen";
import { connect } from "react-redux";
const {
    getTableData,
} = require(`../redux/action`);



const mapStateToProps = (state) => {
  console.log("IIIstate", state);
  return {
    tableData: state.TableReducer.tableData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTableData: () => dispatch(getTableData()),
  };
};

const Dashboardd = connect(mapStateToProps, mapDispatchToProps)(screen);

export default Dashboardd;
