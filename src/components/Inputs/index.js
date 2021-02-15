import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { onChange, type, value } = props;
  return (
    <input
      onChange={e => onChange(e.target.value)}
      type={type}
      value={value}
    />
  );
};


Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text']),
};
Input.defaultProps = {
  value: '',
  type: 'text',
};

export default Input;