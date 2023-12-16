import React from 'react';

const Footer = () =>{
    const update = new Date()
    const year = update.getFullYear()
    return(
        <>
         <footer>
            <p>copyright © {year}</p>
         </footer>
        </>
    )
}

export default Footer;