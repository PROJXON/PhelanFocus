import { Email } from './interfaces';

export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export type EmailFormActionType = 'NAME' | 'EMAIL' | 'MESSAGE';

export type EmailFormAction =
  | { type: EmailFormActionType; text: string }
  | { type: 'RESET' | 'DEFAULT' };

export type EmailFieldsOptional = Partial<Email>;

export type ImagePath = `/${string}.${'jpeg' | 'jpg' | 'png'}`;
