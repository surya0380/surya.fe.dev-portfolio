import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
    serviceId: 'service_dkjbc3j', // Replace with your EmailJS service ID
    templateId: 'template_s50jmia', // Replace with your EmailJS template ID
    publicKey: 'v1e7Iq8NFCfwMriaa', // Replace with your EmailJS public key
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export const sendEmail = async (formData) => {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Surya', // Your name
            to_email: 'surya0380@gmail.com', // Your email
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        );

        console.log('Email sent successfully:', response);
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, message: 'Failed to send email. Please try again.' };
    }
};