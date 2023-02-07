import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import IntlTelInput from 'react-intl-tel-input';
import { useGetInfo } from '../hook/useGetInfo';
import 'react-intl-tel-input/dist/main.css';
import styles from '../styles/Form.module.scss';

const Form = () => {
  const [inputMessage, setInputMessage] = React.useState({
    dni: '',
    phone: '',
  })
  const [data, setData] = React.useState();

  const auth = getAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    const saveData = async () => {
      const dataAsync = await data;
      if (dataAsync !== undefined && dataAsync !== {}) {
        await addDoc(collection(db, "users"), dataAsync);
      } else {
        console.log('object is undefined');
      }
    }
    saveData();
  }, [data]);

  React.useEffect(() => {
    const createUser = async () => {
      const dataAsync = await data;
      try {
        await createUserWithEmailAndPassword(auth, dataAsync.email, dataAsync.password);
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
    createUser();
  }, [data])

  const DOMAIN = "https://ipinfo.io/";
  const TOKEN = "8008fa9f33e9c6";

  const currentCountryFlag = useGetInfo(DOMAIN, TOKEN);

  const submit = (event) => {
    event.preventDefault();
    if (event.target[1].value.length < 7 || event.target[1].value.length > 9) {
      setInputMessage({
        ...inputMessage,
        dni: 'Error: You have an incorrect id length',
        phone: ''
      });
    } else if (event.target[4].value === '' || event.target[4].value.length < 9 || event.target[4].value.length > 11) {
      setInputMessage({
        ...inputMessage,
        phone: 'Error: You have an incorrect phone length',
        dni: ''
      });
    } else {
      setInputMessage({
        ...inputMessage,
        dni: '',
        phone: '',
      });
      setData({
        name: event.target[0].value,
        dni: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value,
        phone: event.target[4].value,
      });
    }
  };



  return (
    <>
      {((inputMessage.dni || inputMessage.phone) || (inputMessage.dni && inputMessage.phone)) && <div
        className={styles['error_div']}
      >
        <p className={styles['error_p']}>
          {inputMessage.dni}
          {inputMessage.phone}
        </p>
      </div>}

      <form onSubmit={submit} className={styles.form}>
        <div className={styles['title-form']}>
          <p>REGISTER</p>
        </div>
        <div className={styles['form_input']}>
          <label htmlFor="fullName">FullName</label>
          <input type="text" id='fullName' placeholder="Juan Montilla" required />
        </div>
        <div className={styles['form_input']}>
          <label htmlFor="dni">ID</label>
          <input type="number" id="dni" placeholder="20225488" required />
        </div>
        <div className={styles['form_input']}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="juancodev@example.com" required />
        </div>
        <div className={styles['form_input']}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="*********" minLength='6' required />
        </div>
        <div className={styles['form_input']}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <IntlTelInput
            containerClassName='intl-tel-input'
            inputClassName='form-control'
            defaultCountry={currentCountryFlag}
          />
        </div>

        <div className={styles['form_button']}>
          <button type='submit'>Register</button>
        </div>

        <NavLink
          style={({ isActive }) => (isActive) ? { color: 'blue' } : {
            color: '#acd9b2',
            textDecoration: 'none',
            marginTop: '2px',
            textAlign: 'center'
          }}
          to="/login">
          You have an account?
        </NavLink>
      </form>
    </>
  );

};

export { Form };
