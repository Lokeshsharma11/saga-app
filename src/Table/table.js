import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "../App.css";
import { Loader } from "../loader";
import { useSelector } from "react-redux"
// import { connect } from "react-redux";

const { SearchBar } = Search;


const Tablewrapper = ({ data, columns }) => {
  const loader = useSelector(state => state.LoaderReducer.loader)
  return (
    <div>
      <ToolkitProvider keyField="id" data={data} columns={columns} search>
        {(props) => (
          <div>
            <div className="table-style">
              <SearchBar {...props.searchProps} />
            </div>
            <div>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory({
                  sizePerPage: 10,
                })}
              />
              {loader && <Loader />}
            </div>
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   console.log("IIVstate", state);
//   return {
//     loader: state.LoaderReducer.loader,
//   };
// };

// export default connect(mapStateToProps)(Tablewrapper);
export default Tablewrapper

