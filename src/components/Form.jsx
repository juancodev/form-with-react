import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import { useGetInfo } from '../hook/useGetInfo';
import 'react-intl-tel-input/dist/main.css';
import styles from '../styles/Form.module.scss';

const Form = () => {
  const DOMAIN = "https://ipinfo.io/";
  const TOKEN = "token=8008fa9f33e9c6";

  const currentCountryFlag = useGetInfo(DOMAIN, TOKEN);
  console.log(`currentCountryFlag: ${currentCountryFlag}`);

  const submit = (event) => {
    event.preventDefault();
    console.log('click');
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <div className={styles['form_input']}>
        <label htmlFor="fullName">FullName</label>
        <input type="text" id='fullName' />
      </div>
      <div className={styles['form_input']}>
        <label htmlFor="dni">DNI</label>
        <input type="number" name="" id="dni" />
      </div>
      <div className={styles['form_input']}>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" />
      </div>
      <div className={styles['form_input']}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <IntlTelInput
          containerClassName='intl-tel-input'
          inputClassName='form-control'
          defaultCountry={currentCountryFlag}
        />
        {/* <input type="tel" name="" id="phoneNumber" /> */}
      </div>

      <button type='submit'>Submit</button>
    </form>
  );

};

export { Form };

/*
Instrucciones.

Realizar un formulario con los siguientes inputs

Nombre y Apellido
Cédula
Correo Electrónico
Teléfono (Con ubicación por IP, según su país) +58 si reconoce el dispositivo en Venezuela o +57 si ingresa en Colombia, etc.

Todo estos datos deben guardarse en una base de datos la cual podamos consultar cada vez que hay un registro o login.
*/