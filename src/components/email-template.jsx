import * as React from 'react';

export const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{message}</h2>
    </div>
  );
} 