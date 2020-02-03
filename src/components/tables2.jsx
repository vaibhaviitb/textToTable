import React from "react";
import Pagination from "./pagination";
import SearchBox from "./searchbox";
import _ from "lodash";

const defaultDelimiter='|';
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
  componentDidUpdate(prevProps, prevState){
      const { delimiter, linesPerPage }= this.state;
      if(prevState.delimiter !== this.state.delimiter){
          console.log('component updated with', delimiter)
          this.createTable();
      }
  }
  myDataToMatrix = myData => {
    const delimiter = this.state.delimiter || defaultDelimiter;
    const matrix = myData.split("\n").map(row => row.split(delimiter));
    this.setState({ tableData: matrix });
  };
  textToTableRows = matrix =>
    matrix.map((row) => (
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
  setLines = lines => this.setState({ linesPerPage: lines });

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
        <SearchBox
          onChange={this.setDelimiter}
          placeholder="Enter delimiter character"
        />
        <SearchBox
          onChange={this.setLines}
          placeholder="Enter the number of lines"
        />
        <table>
          <tbody>{this.textToTableRows(displayData)}</tbody>
        </table>
        <Pagination items={tableData} onChangePage={this.onChangePage} linesPerPage={linesPerPage} />
      </div>
    );
  }
}

export default App;

// const addParentBlock = el=><div>{el}</div>;
// class Pagination extends React.Component{
//     constructor(props){
//         super(props);
//         this.state= {currentPage: 1};
//     }
//     displayPages=noOfPages=>{
//         console.log(noOfPages)
//         this.buttons = [];
//         // if(noOfPagescurrentPage){
//         //     return;
//         // }
//         for(let i=1; i<=noOfPages; i++){
//             this.buttons.push(
//             <button>{i}</button>
//             )
//         }
//         return
//     }
//     render(){ //
//         const { myData } = this.props;

//         const noOfPages = myData && Math.ceil(myData.length/10) || 0;
//         this.displayPages(noOfPages);
//         console.log(this.buttons)
//         const render  = this.buttons.length ? addParentBlock(this.buttons) : null
//         return(
//             render
//         );
//     }
// }
