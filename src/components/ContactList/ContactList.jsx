import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { deteleContact } from '../../redux/contactsSlice';
import { ContactsList, ContactItem, Button } from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filteredContacts = getVisibleContacts(contacts, filter);

  return (
    <ContactsList>
      {contacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <BsFillPersonLinesFill style={{ color: '#f21d6a' }} />
              {name} : {number}
              <Button onClick={() => dispatch(deteleContact(id))}>
                Delete
              </Button>
            </ContactItem>
          );
        })
      ) : (
        <div>There are no contacts</div>
      )}
    </ContactsList>
  );
};
