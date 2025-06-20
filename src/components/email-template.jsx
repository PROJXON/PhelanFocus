export function EmailTemplate({ name, email, message }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '500px' }}>
      <h1 style={{ color: '#333' }}>Hello Phelan,</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>
        My name is <strong>{name}</strong>. I'm reaching out to you regarding a matter I’d like to discuss.
      </p>
      <p style={{ fontSize: '16px', color: '#555' }}>
        You can reach me at: <a href={`mailto:${email}`} style={{ color: '#007BFF' }}>{email}</a>.
      </p>
      <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
        {message}
      </p>
    </div>
  );
}
