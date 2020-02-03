import React from 'react';

class ReadFile extends React.Component {
  handleFileSelect = (file) => {
    this.setState({loading: true})
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  }
  handleFileRead = (e) => {
    const content = this.fileReader.result;
    this.props.setData(content);
  };
  render(){
      return (
        <div className='App'>
          <p><strong>Please select the JSON file to be rendered</strong></p>
          <input type='file'
                id='file'
                className='input-file'
                accept='.txt'
                onChange={e => this.handleFileSelect(e.target.files[0])}
            />
        </div>
      );
    }
}

export default ReadFile;
