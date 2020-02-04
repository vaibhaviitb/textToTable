import React from "react";

class searchbox extends React.Component {
  render() {
    const { placeholder, onChange, label, name, classes } = this.props;
    const allClasses = classes ? ('form-group ' + classes) : 'form-group';
    return (
      <div className={allClasses}>
       <label for={name}><strong>{label}</strong></label>
        <input id={name} type="text" className="form-control" pl aceholder={placeholder} onChange={e=>onChange(e.target.value.trim())} />
      </div>
    );
  }
}

export default searchbox;
