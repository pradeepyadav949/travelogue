# Travelogue

Travelogue is a fully static HTML and CSS website for a travel agency, created as a project for the NIELIT O Level course. The site offers information about holiday packages, company details, job openings, and contact options. It is designed for easy navigation and a visually appealing experience, using [W3.CSS](w3.css) for styling and custom images for branding.

## Features

- **Home Page**: Quick access to featured travel packages (Singapore, Bali, Manali).  
  The home page is now served as `index.html` for easier navigation and deployment.
- **About Us**: Company background and values.
- **Holiday Packages**: Detailed itineraries for Singapore, Bali, and Manali trips, each with an image slideshow.
- **Job Openings**: Recruitment information and a resume upload form with client-side validation and demo alert.
- **Contact Us**: Contact form for sales inquiries, with client-side validation and demo alert.
- **Login Demo**: Simple login page with demo credentials and a login success page.
- **Consistent Header/Footer**: All pages now use a unified header bar and footer for a seamless experience.
- **Responsive Design**: Uses W3.CSS for mobile-friendly layouts.
- **Social Media Links**: Quick links to Twitter, Facebook, Instagram, YouTube, Telegram, and WhatsApp.
- **Image Gallery**: Each package page features a slideshow of destination images.
- **Form Reset**: Both Contact Us and Job Openings forms reset after successful (demo) submission.

## Project Structure

```
.
├── aboutus.html
├── balitrip.html
├── contactus.html
├── index.html           # Home page (was index.html)
├── login.html
├── loginsuccess.html
├── manalitrip.html
├── openings.html
├── singaporetrip.html
├── w3.css
├── images/
│   └── ... (all images used in the site)
└── .github/
    └── workflows/
        └── static.yml
```

## Demo

The website is hosted on GitHub Pages and can be accessed at:  
[https://pradeepyadav949.github.io/travelogue/](https://pradeepyadav949.github.io/travelogue/)

## Deployment

Deployment is automated using GitHub Actions. On every push to the `main` branch, the site is built and published to GitHub Pages using the workflow defined in [.github/workflows/static.yml](.github/workflows/static.yml).

## Usage

- Clone or fork the repository.
- Edit HTML or CSS files as needed.
- Push changes to the `main` branch to trigger deployment.
- All site content is static; forms are for demonstration and do not process data unless connected to a backend.

## Demo Login

- **Username:** `demo_user`
- **Password:** `Demo#123`

## License

This project is for educational/demo purposes as part of the NIELIT O Level course. All images and content are for illustrative use only.

---

**Author:** Pradeep Yadav  
For queries, contact: [info@travelogue.com](mailto:info@travelogue.com)
