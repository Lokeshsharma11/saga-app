import { useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { tableColumns } from '../utils/constant';

const Dashboard = ({
    getTableData,
    tableData,
  }) => {
    console.log("userData", tableData);
    useEffect(() => {
        getTableData();
    }, []);

    return (
      <div>
        <h2>CUSTOMER</h2>
        <div className="">
        <BootstrapTable keyField='id' data={ tableData } columns={ tableColumns } />
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  