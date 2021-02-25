import screen from "./screen";
import { connect } from "react-redux";
const {
    getTableData,
    getFacilityTableData
} = require(`../redux/action`);



const mapStateToProps = (state) => {
  console.log("IIIstate", state);
  return {
    tableData: state.TableReducer.tableData,
    loader: state.LoaderReducer.loader,
    facilitytableData: state.FacilityTableReducer.facilitytableData
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTableData: () => dispatch(getTableData()),
    getFacilityTableData: () => dispatch(getFacilityTableData())
  };
};

const Dashboardd = connect(mapStateToProps, mapDispatchToProps)(screen);

export default Dashboardd;
