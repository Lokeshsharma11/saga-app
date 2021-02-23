import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "../App.css";
import Centerspinner from "../Centerspinner/Centerspinner";
const { SearchBar } = Search;

const Tablewrapper = ({ data, columns, loading }) => {

  return (
    <div>
      <ToolkitProvider keyField="id" data={data} columns={columns} search>
        {(props) => (
          <div>
            <div className="table-style">
              <SearchBar {...props.searchProps} />
            </div>
            {loading ? (
                <Centerspinner/>
                ) : (
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory({
                sizePerPage: 10,
              })}
            />
            )}
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

export default Tablewrapper;
