import * as React from 'react';

export const ConfirmationEmail = ({ name }) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '500px' }}>
            <h1 style={{ color: '#333' }}>Hi {name},</h1>
            <p style={{ fontSize: '16px', color: '#555' }}>
                Thanks for reaching out! We’ve received your message and will get back to you shortly.
            </p>
            <p style={{ fontSize: '16px', color: '#555' }}>
                Best regards, <br />
                Phelan
            </p>
        </div>
    );
};
