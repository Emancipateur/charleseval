import React from 'react';
import Nav from '../components/Nav';
import { useState } from 'react';
import { send } from 'emailjs-com';
import logo from '../logo.png'

const Contact = () => {


    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_2yjwmnx',
          'template_hy2bdc5',
          toSend,
          'user_uiBDUMqG4IUm5KWzwDiv0'
        )
          .then((response) => {
            alert('Votre message a bien été envoyé');
          })
          .catch((err) => {
            alert('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

      
    return (
        <div className='contact'>
            <Nav />
            <div className="contactContent">
            <form onSubmit={onSubmit} className='form'>
 <label htmlFor="name">Votre nom</label>
  <input
    id='name'
    type='text'
    name='from_name'
    placeholder='Votre noms'
    value={toSend.from_name}
    onChange={handleChange}
  />
<label htmlFor="message">Votre message</label>
  <textarea
    id='message'
    type='text'
    name='message'
    placeholder='Votre message'
    value={toSend.message}
    onChange={handleChange}
  />

  <label htmlFor="email">Votre email</label>
  <input
  id='email'
    type='text'
    name='reply_to'
    placeholder='Votre email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button type='submit'>Envoyer</button>
</form>
            </div>
       <img className='logo' src={logo} alt="logo du site" />
        </div>
    );
};

export default Contact;