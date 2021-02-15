import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = props => {
    const { options, name, onChange } = props;
    const renderOptions = () => {
        return options.map((option, index) => {
            const { innerText, value } = option

            return (
                <option value={value} key={index}>
                    {innerText}
                </option>
            )
        })
    }
    return (
        <div>
            <select name={name} onChange={onChange}>
                {renderOptions()}
            </select>
        </div>
    )
}

Dropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    name: PropTypes.string
};
Dropdown.defaultProps = {
    value: '',
    name: '',
};

export default Dropdown