import { Email } from '@/types/interfaces';

export default function confirmationParagraphs({ name, email, message }: Email) {
  return [
    <>
      My name is <strong>{name}</strong>
      {". I'm reaching out to you regarding a matter I’d like to discuss."}
    </>,
    <>
      You can reach me at:{' '}
      <a href={`mailto:${email}`} className="text-[#007BFF]">
        {email}
      </a>
      .
    </>,
    <>{message}</>,
  ];
}
