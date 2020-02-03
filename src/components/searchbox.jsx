import React from "react";

class searchbox extends React.Component {
  render() {
    const { placeholder, onChange } = this.props;
    return (
      <div>
        <input type="text" placeholder={placeholder} onChange={e=>onChange(e.target.value.trim())} />
      </div>
    );
  }
}

export default searchbox;
