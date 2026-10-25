# Dreamy Pixel Studio – Internship Hiring Website

A static React/Vite internship portal with:
- Home page
- Internship roles listing
- 12 dedicated role pages
- Skills needed + 5 practical tasks for every role
- Application form
- Resume upload
- No database
- Email delivery through FormSubmit
- Responsive design

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Email setup

The application form posts to:

`https://formsubmit.co/dreamypixel1504@gmail.com`

FormSubmit normally requires an activation/confirmation step the first time an address is used. Complete that activation from the email you receive.

After activation, form submissions are delivered to the Dreamy Pixel Studio email without this site needing a database or custom backend.

## Important

Because the form uses a third-party form endpoint, the resume is uploaded through that service. Review the provider's current privacy/retention terms before collecting applicant data in production.

For higher privacy/control later, replace FormSubmit with a small serverless function or a transactional email service.
