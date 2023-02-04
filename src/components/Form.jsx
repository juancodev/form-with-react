import React from 'react';
import { NavLink } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
import IntlTelInput from 'react-intl-tel-input';
import { useGetInfo } from '../hook/useGetInfo';
import 'react-intl-tel-input/dist/main.css';
import styles from '../styles/Form.module.scss';

const Form = () => {
  const [valueInput, setValueInput] = React.useState({
    fullName: '',
    dni: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const [data, setData] = React.useState();

  React.useEffect(() => {
    const saveData = async () => {
      const dataAsync = await data;
      console.log(dataAsync);
      if (dataAsync !== undefined && dataAsync !== {}) {
        const docRef = await addDoc(collection(db, "users"), dataAsync);
        console.log(docRef);
      } else {
        console.log('object is undefined');
      }
    }
    saveData();
  }, [data]);

  const DOMAIN = "https://ipinfo.io/";
  const TOKEN = "8008fa9f33e9c6";

  const currentCountryFlag = useGetInfo(DOMAIN, TOKEN);

  const newFullName = ({ target: { value } }) => {
    setValueInput({
      ...valueInput,
      fullName: value
    });
  };

  const newDni = ({ target: { value } }) => {
    setValueInput({
      ...valueInput,
      dni: value
    });
  };

  const newEmail = ({ target: { value } }) => {
    setValueInput({
      ...valueInput,
      email: value
    });
  };

  const newPassword = ({ target: { value } }) => {
    setValueInput({
      ...valueInput,
      password: value
    });
  };

  const submit = (event) => {
    event.preventDefault();
    setData({
      name: event.target[0].value,
      dni: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      phone: event.target[4].value,
    });
  };
  console.log(data);

  return (
    <form onSubmit={submit} className={styles.form}>
      <div className={styles['form_input']}>
        <label htmlFor="fullName">FullName</label>
        <input type="text" id='fullName' value={valueInput.fullName} onChange={newFullName} required />
      </div>
      <div className={styles['form_input']}>
        <label htmlFor="dni">DNI</label>
        <input type="number" name="" id="dni" value={valueInput.dni} onChange={newDni} required />
      </div>
      <div className={styles['form_input']}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={valueInput.email} onChange={newEmail} required />
      </div>
      <div className={styles['form_input']}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={valueInput.password} onChange={newPassword} required />
      </div>
      <div className={styles['form_input']}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <IntlTelInput
          containerClassName='intl-tel-input'
          inputClassName='form-control'
          defaultCountry={currentCountryFlag}
        />
      </div>

      <button type='submit'>User Create</button>

      <NavLink
        style={({ isActive }) => (isActive) ? { color: 'blue' } : {
          color: '#acd9b2',
          textDecoration: 'none',
          marginTop: '2px'
        }}
        to="/login">
        You have an account?
      </NavLink>
    </form>
  );

};

export { Form };
