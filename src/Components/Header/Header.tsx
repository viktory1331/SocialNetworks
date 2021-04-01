import React from 'react';
import s from  './Header.module.css';

// let hd = {
//   'header' : 'header'
// }

export const Header = () => {
    return(
      <header className={s.header}>
            <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"/>
      </header> 
    );
}