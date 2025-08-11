export const ConfirmationEmail = ({ name }: { name: string }) => {
    return (
        <div className='font-[Arial, sans-serif] p-[20px] border border-solid border-[#ddd] rounded-[8px] max-w-[500px]'>
            <h1 className="text-[#333]">Hi {name},</h1>
            <p className='text-[16px] text-[#555]'>
                Thanks for reaching out! We’ve received your message and will get back to you shortly.
            </p>
            <p className='text-[16px] text-[#555]'>
                Best regards, <br />
                Phelan
            </p>
        </div>
    );
};