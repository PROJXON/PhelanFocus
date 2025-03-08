import * as React from 'react';

export const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <h1>{name}!</h1>
      <p>{email}</p>
      <p>{message}</p>
      <p>This is a test</p>
    </div>
  );
} 