import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DivSection, Title, TitleTwo } from './App.styled';
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const App = () => {
  return (
    <DivSection>
      <Title>PhoneBook</Title>
      <Form />
      <TitleTwo>Contacts</TitleTwo>
      <Filter />
      <ContactList />
      <ToastContainer />
    </DivSection>
  );
};
