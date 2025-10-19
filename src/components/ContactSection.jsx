import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from '@/lib/emailService';

const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await sendEmail(formData);

            if (result.success) {
                toast({
                    title: "Message sent!",
                    description: "Thank you for your message. I'll get back to you soon.",
                });
                // Reset form
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast({
                    title: "Error sending message",
                    description: result.message,
                    variant: "destructive",
                });
            }
        } catch {
            toast({
                title: "Error sending message",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'> Touch</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Looking for a talented frontend developer?
                    I'm actively seeking new opportunities to contribute to innovative projects and dynamic teams.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>
                            Contact Information
                        </h3>

                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:surya0380@gmail.com"
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        surya0380@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+916361820140"
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        +91 6361820140
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        Bengaluru, Karnataka, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/surya-cp-319677247/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="https://www.instagram.com/im_s_u_n/" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitch />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>
                            Send a Message
                        </h3>

                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Surya CP..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="john@gmail.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className={cn('cosmic-button w-full flex items-center justify-center gap-2',
                                    isSubmitting && 'opacity-70 cursor-not-allowed'
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
