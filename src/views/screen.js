import { useEffect } from "react";
import { tableColumns } from "../utils/constant";
import { facilitytableColumns } from "../utils/constant";
import Tablewrapper from "../Table/table";
import { useSelector, useDispatch } from "react-redux"
import {getTableData, getFacilityTableData } from "../redux/action"

const Dashboard = ({
  // getTableData,
  // tableData,
  // facilitytableData,
  // getFacilityTableData
}) => {
  const tableData = useSelector(state => state.TableReducer.tableData)
  const facilitytableData = useSelector(state => state.FacilityTableReducer.facilitytableData)
  const dispatch = useDispatch()
  console.log("userData", tableData );
  console.log("facilityData", facilitytableData);

  useEffect(() => {
    dispatch(getTableData())
    dispatch(getFacilityTableData());
  },[]);
  return (
    <div>
      <h2>CUSTOMER</h2>
      <div> 
        <Tablewrapper
          keyField="id"
          data={tableData}
          columns={tableColumns}
          search
        />
      </div>
      <hr/>
      <h2>FACILITY</h2>
      <div>
        <Tablewrapper
          keyField="id"
          data={facilitytableData}
          columns={facilitytableColumns}
          search
        />
      </div>
    </div>
  );
};

export default Dashboard;
