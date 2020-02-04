import React from "react";
import Pagination from "./pagination";
import SearchBox from "./searchbox";
import _ from "lodash";

const defaultDelimiter = "|";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: null,
      displayData: [],
      delimiter: defaultDelimiter,
      lines: 2
    };
  }

  componentDidMount() {
    this.createTable();
  }
  componentDidUpdate(prevProps, prevState) {
    const { delimiter, linesPerPage } = this.state;
    if (prevState.delimiter !== this.state.delimiter) {
      console.log("component updated with", delimiter);
      this.createTable();
    }
  }
  myDataToMatrix = myData => {
    const delimiter = this.state.delimiter || defaultDelimiter;
    const matrix = myData.split("\n").map(row => row.split(delimiter));
    this.setState({ tableData: matrix });
  };
  textToTableRows = matrix =>
    matrix.map(row => (
      <tr>
        {row.map(el => (
          <td>{el}</td>
        ))}
      </tr>
    ));

  createTable = () => {
    const { myData } = this.props;
    if (myData) {
      this.myDataToMatrix(myData);
    }
  };

  setDelimiter = delimiter => {
    console.log("new delimiter is" + delimiter);
    this.setState({ delimiter });
  };
  setLines = lines => {
    const parsedValue = Number(lines);
    if(isNaN(parsedValue)) {
      alert('Please insert a numeric value');
      this.setState({ linesPerPage: 2 })
    } else {
      this.setState({ linesPerPage: parsedValue })
    }
  };

  onChangePage = pageOfItems => {
    this.setState({ displayData: pageOfItems });
  };

  render() {
    const { tableData, displayData, linesPerPage } = this.state;
    this.myKey = !this.myKey || false;
    if (!(this.props.myData && tableData)) return <div>loading...</div>;
    console.log(tableData);

    return (
      <div>
        <form className="form-inline text-elements">
            <SearchBox
              onChange={this.setDelimiter}
              placeholder="Enter delimiter"
              label="Delimiter:"
              name="delimiter"
            />
            <SearchBox
              classes= 'lines-text'
              onChange={this.setLines}
              placeholder="Enter no. of lines"
              label="No. of Lines:"
              name="lines"
            />
        </form>
        <table className="table table-striped table-bordered table-hover">
          <tbody>{this.textToTableRows(displayData)}</tbody>
        </table>
        <Pagination
          items={tableData}
          onChangePage={this.onChangePage}
          linesPerPage={linesPerPage}
        />
      </div>
    );
  }
}

export default App;