# EmailJS Setup Guide for Your Portfolio

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. You get 200 emails/month for free

## Step 2: Set Up Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Subject:
```
New message from {{from_name}} - Portfolio Contact
```

### Content:
```
Hello {{to_name}},

You have received a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Update Your Code
Open `src/lib/emailService.js` and replace:
- `'your_service_id'` with your Service ID
- `'your_template_id'` with your Template ID  
- `'your_public_key'` with your Public Key

## Example Configuration:
```javascript
const EMAILJS_CONFIG = {
  serviceId: 'service_1a2b3c4d', // Your actual service ID
  templateId: 'template_xyz123', // Your actual template ID
  publicKey: 'abcd1234567890', // Your actual public key
};
```

## Testing
1. Save the changes
2. Run your portfolio locally
3. Fill out the contact form
4. Check your email inbox!

## Security Note
The public key is safe to expose in frontend code - it's designed for this purpose. EmailJS handles the email sending securely on their servers.

## Alternative: Other Email Services
If you prefer other solutions:
- **Formspree**: Simple form handling service
- **Netlify Forms**: Built-in forms for Netlify hosting
- **EmailJS**: Most flexible, works with any hosting
- **Custom Backend**: Node.js + Nodemailer (more complex)

EmailJS is recommended for portfolios because it's free, reliable, and doesn't require backend setup!