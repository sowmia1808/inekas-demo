# Inekas Photo Print Demo

This project is a **React/Next.js web page demo** for uploading photos, selecting print sizes, and calculating prices automatically. The main goal is to demonstrate **functional structure and logic** rather than complex visuals. It is designed to be **mobile-friendly and simple**.

---

## Project Overview

The Inekas Photo Print Demo allows users to:

- Upload multiple photos (up to 5 at a time)  
- Preview uploaded photos as thumbnails on the page  
- Select a print size from a dropdown (4×6, 5×7, 8×10)  
- Automatically calculate the total price based on selected sizes  
- Proceed to a secure Stripe Checkout for simulated payment 

> This demo shows React component structure, state management, and dynamic UI updates using Next.js.

---

## Features Explained

- **Photo Upload** – Users can upload up to 5 images. The app handles multiple file selection and stores them temporarily in the browser.  
- **Thumbnail Preview** – Uploaded images are displayed immediately as small thumbnails for easy verification.  
- **Print Size Selection** – Users can select print sizes from a dropdown. Each size has a predefined price.  
- **Automatic Price Calculation** – The app calculates the total price dynamically when the user selects a size.  
-💳 Stripe Payment Integration – Clicking “Pay Now” redirects users to a Stripe Checkout page (test mode) for a simulated payment process.  
- **Responsive Design** – Works smoothly on desktop and mobile devices.  

---

## Live Demo

You can access the deployed demo here: [https://inekas-demo.vercel.app/](https://inekas-demo.vercel.app/)
