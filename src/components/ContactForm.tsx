'use client';
import { useState, useReducer, ChangeEvent, FormEvent } from 'react';
import { EmailFormAction, EmailFormActionType, EmailFieldsOptional } from '@/types/types';
import { Email } from '@/types/interfaces';

const initialEmailState: Email = { name: '', email: '', message: '' };

const reducer = (state: Email, action: EmailFormAction): Email => {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.text };
    case 'EMAIL':
      return { ...state, email: action.text };
    case 'MESSAGE':
      return { ...state, message: action.text };
    case 'RESET':
      return { name: '', email: '', message: '' };
    case 'DEFAULT':
      return state;
  }
};

const ContactForm = () => {
  const [emailState, dispatch] = useReducer(reducer, initialEmailState);
  const [errors, setErrors] = useState<EmailFieldsOptional>({});
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const action = name.toUpperCase() as EmailFormActionType;
    dispatch({ type: action, text: value }); //
    setErrors({ ...errors, [name]: value.trim() ? '' : errors[name as keyof Email] });
  };

  const validateForm = () => {
    const newErrors: EmailFieldsOptional = {};
    if (!emailState.name.trim()) newErrors.name = 'Please enter your name';
    if (!emailState.email.trim()) newErrors.email = 'Please enter your email';
    if (!emailState.message.trim()) newErrors.message = 'Please enter your message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailState),
      });

      if (!res.ok) {
        setStatusMessage('❌ There was an error. Please try again.');
      } else {
        setStatusMessage('✅ Your message has been sent!');
        dispatch({ type: 'RESET' });
        setErrors({});
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage('❌ There was an error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      {['name', 'email', 'message'].map((field) => {
        const key = field as keyof Email;
        return (
          <div className="mb-4" key={key}>
            {field !== 'message' ? (
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={emailState[key]}
                onChange={handleChange}
                className="min-h-[48px] w-full px-5 py-3 rounded-xl border bg-[#0e2a47] text-white placeholder-gray-400 focus:ring focus:ring-blue-500/40"
                placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              />
            ) : (
              <textarea
                name={field}
                value={emailState[key]}
                onChange={handleChange}
                className="min-h-[120px] w-full px-5 py-3 rounded-xl border bg-[#0e2a47] text-white placeholder-gray-400 resize-none focus:ring focus:ring-blue-500/40"
                placeholder="Enter Message"
              />
            )}
            {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
          </div>
        );
      })}
      {statusMessage && <p className="text-green-600 pb-2">{statusMessage}</p>}
      <div className="text-end">
        <button
          type="submit"
          disabled={loading}
          className={`btn-gold relative ${loading ? 'disabled-btn' : ''}`}
        >
          <span>{loading ? 'Submitting...' : 'Send Message'}</span>
          <span></span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
