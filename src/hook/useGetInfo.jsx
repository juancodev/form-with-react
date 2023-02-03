import React from "react";
import axios from "axios";
// import { useGetIP } from '../hook/useGetIP';

const useGetInfo = (domain, token) => {
  const [location, setLocation] = React.useState({});

  React.useEffect(() => {
    setTimeout(() => {
      const countryFlag = async () => {
        const info = await axios(domain + 'json?' + token);
        console.log(info);
        const currentCountry = info.data.country;
        setLocation(currentCountry.toLowerCase());
      };
      countryFlag();
    }, 500);
  }, []);
  return location;
};

export { useGetInfo };