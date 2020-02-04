import React from "react";

class ReadFile extends React.Component {
  handleFileSelect = file => {
    this.setState({ loading: true });
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  };
  handleFileRead = e => {
    const content = this.fileReader.result;
    this.props.setData(content);
  };
  render() {
    return (
      <form>
        <div class="custom-file">
          <label className="custom-file-label" for="file">
            Please select the txt file...
          </label>
          <input
            type="file"
            id="file"
            className="custom-file-input"
            accept=".txt"
            onChange={e => this.handleFileSelect(e.target.files[0])}
          />
        </div>
      </form>
    );
  }
}

export default ReadFile;
