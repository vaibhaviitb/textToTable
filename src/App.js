import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ReadFile from "./components/readFile";
import Table from "./components/tables2";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myData: null };
  }
  setInputText = data => this.setState({ myData: data });
  render() {
    const { myData } = this.state;
    return (
      <div className="App">
        {myData ? (
          <Table myData={myData} />
        ) : (
          <div>
            <h1>Tool to display text into a table</h1>
            <ReadFile
              setData={this.setInputText}
              setLoading={this.setLoading}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
