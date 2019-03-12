import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
  render() {
    if (this.props.active) return <span>{this.props.children}</span>;
    return (
      <span
        onClick={e => {
          e.preventDefault();
          this.props.onClick();
        }}>
        {this.props.children}  
      </span>
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};
