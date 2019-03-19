import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const {active, children} = this.props;
    const cln = 'App-link';
    return (
      <span
        className={cln}
        onClick={active ? null : this.handleAClick}
        style={{
          cursor: 'pointer',
          textDecoration: active ? 'underline' : 'none'
        }}
      >
        {children}
      </span>
    );
  }

  // event methods
  // ****************************************
  handleAClick = (e) => {
    e.preventDefault();
    this.props.onClick();
  }
  // ****************************************

}
