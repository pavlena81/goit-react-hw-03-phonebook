// import React from 'react';

import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';



export const Filter = ({ filter, filterContact }) => {
 
    console.log(filterContact);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={filterContact}
      />
    </Label>
  );
};

Label.propTypes = {
    filter: PropTypes.string.isRequired,
    filterContact: PropTypes.func.isRequired,
};