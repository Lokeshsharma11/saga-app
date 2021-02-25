import { useEffect } from "react";
import { tableColumns } from "../utils/constant";
import { facilitytableColumns } from "../utils/constant";
import Tablewrapper from "../Table/table";

const Dashboard = ({
  getTableData,
  tableData,
  facilitytableData,
  getFacilityTableData
}) => {
  console.log("userData", tableData );
  console.log("facilityData", facilitytableData);
  useEffect(() => {
    getTableData();
    getFacilityTableData();
  }, []);
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
