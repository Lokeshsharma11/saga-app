import { useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { tableColumns } from '../utils/constant';
import { facilitytableColumns } from '../utils/constant';
const Dashboard = ({
    getTableData,
    tableData,
    facilitytableData,
    getFacilityTableData
  }) => {
    console.log("userData", tableData);
    console.log("facilityData", facilitytableData)
    useEffect(() => {
        getTableData();
        getFacilityTableData();
    }, []);
    return (
      <div>
        <h2>CUSTOMER</h2>
        <div className="">
        <BootstrapTable keyField='id' data={ tableData } columns={ tableColumns } />
        </div>
        <h2>FACILITY</h2>
        <div className="container">
        <BootstrapTable keyField='id' data={ facilitytableData } columns={ facilitytableColumns } />
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  