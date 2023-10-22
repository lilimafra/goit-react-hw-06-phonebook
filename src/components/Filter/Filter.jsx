import { useDispatch, useSelector } from 'react-redux';

import { Label, Input } from './Filter.styled';
import { changeFilter } from '../../redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};
