# Email Sender API

This project provides a simple API to send emails via HTTP requests.

## Features

- Send emails using a POST request
- Customizable email recipient, subject, and body

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- An SMTP server or email service provider account

## Installation

1. Clone the repository:
   git clone https://github.com/gray-learn/email-sender.git
   cd email-sender
2. Install dependencies:
   npm install
3. Create a `.env` file in the project root and add your environment variables:
   PORT=3000
   SMTP_HOST=your-smtp-host
   SMTP_PORT=your-smtp-port
   SMTP_USER=your-smtp-username
   SMTP_PASS=your-smtp-password
   ## Running the Project

To run the project locally:
npm start
The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Usage

To send an email, make a POST request to the `/emails` endpoint:
POST https://yourwebsite.com/emails
Content-Type: application/json
{
"to": "recipient@example.com",
"subject": "Hello",
"body": "This is a test email."
}

### Response

- Success (200 OK):

  ```json
  {
    "message": "Email sent successfully"
  }
  ```

  Error (500 Internal Server Error)
  {
  "error": "Failed to send email"
  }

  Deployment
  This project is deployed on Vercel. To deploy your own instance:

  1.Install the Vercel CLI
  npm install -g vercel
  2.Run the deployment command from the project root:
  vercel
  3.Follow the prompts to link your project to a Vercel account and configure your deployment.
  4.Once deployed, Vercel will provide you with a public URL for your API.

Contributing
Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.
