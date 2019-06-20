import React from 'react';

class Button extends React.Component {
  render() {
    const { isSelected = true } = this.props;
    const type = isSelected ? 'primary' : 'outline-secondary';

    return (
      <button
        style={{
          width: "100%",
          fontSize: '1.2rem',
          textTransform: 'uppercase',
        }}
        className={`btn btn-${type}`}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;