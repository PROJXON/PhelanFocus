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

  const fields: { name: keyof Email; label: string; placeholder: string; type: string }[] = [
    { name: 'name', label: 'Name', placeholder: 'Your name', type: 'text' },
    { name: 'email', label: 'Email', placeholder: 'you@example.com', type: 'email' },
    { name: 'message', label: 'Message', placeholder: 'How can I help?', type: 'text' },
  ];

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 transition-colors focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30';

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      {fields.map(({ name, label, placeholder, type }) => (
        <div key={name}>
          <label htmlFor={name} className="block text-sm font-medium text-white/80 mb-1.5">
            {label}
          </label>
          {name !== 'message' ? (
            <input
              id={name}
              type={type}
              name={name}
              value={emailState[name]}
              onChange={handleChange}
              className={inputClasses}
              placeholder={placeholder}
            />
          ) : (
            <textarea
              id={name}
              name={name}
              value={emailState[name]}
              onChange={handleChange}
              className={`${inputClasses} min-h-[120px] resize-none`}
              placeholder={placeholder}
            />
          )}
          {errors[name] && <p className="text-red-400 text-sm mt-1">{errors[name]}</p>}
        </div>
      ))}
      {statusMessage && <p className="text-sm text-white/90">{statusMessage}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[var(--gold)] text-[var(--slateBlue)] font-semibold py-3 rounded-xl transition-colors hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
