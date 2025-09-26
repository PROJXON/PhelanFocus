'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { ContactModalContextType } from '@/types/interfaces';

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ContactModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider');
  return ctx;
}
