import React from 'react';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className='card bg-light'>
      <h3 className='text-prmary text-left'>
        {name}{' '}
        <span
          className={
            'badge' +
            (type === 'prpfessional' ? 'badge-success' : 'badge-primary')
          }
        ></span>
      </h3>
    </div>
  );
};

export default ContactItem;
