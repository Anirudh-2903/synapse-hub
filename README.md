<div align="center">
  <br />
    <a  >
      <img src="https://github.com/Anirudh-2903/synapse-hub/blob/main/homepage.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Payload_CMS-black?style=for-the-badge&link=https%3A%2F%2Fpayloadcms.com%2F" alt="Payload_CMS" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
  </div>

  <h3 align="center">Synapse Hub - A Full Stack Ecommerce App with Payload CMS</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)


## <a name="introduction">Introduction</a>
Welcome to our Payload CMS eCommerce App, where managing your online store is a breeze. With a user-friendly admin interface powered by Payload CMS, you can easily add, edit, and remove products, keeping your inventory up-to-date effortlessly. Track orders and manage their status through the intuitive dashboard, ensuring smooth operations. User authentication allows customers to create accounts, log in, and manage their profile information securely. The shopping cart feature enables seamless shopping experiences, while Stripe integration ensures secure payment processing. Designed with a responsive layout, our app delivers a consistent and enjoyable shopping experience across all devices.


## <a name="tech-stack">Tech Stack</a>

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Payload CMS
- React Hook Form


## <a name="features">Features</a>

- **Effortless Product Management**: Easily add, edit, and remove products using the intuitive Payload CMS admin interface. Update product details, images, and availability with just a few clicks.

- **Streamlined Order Management**: Efficiently manage orders and track their status through the admin dashboard. Keep customers informed about their order progress from purchase to delivery.

- **Robust User Authentication**: Enable users to create accounts, log in securely, and manage their profile information. Ensure a personalized shopping experience and easy order tracking for registered users.

- **Seamless Shopping Cart Experience**: Allow users to add products to their cart and seamlessly proceed to checkout. Enhance user satisfaction with a smooth and hassle-free shopping experience.

- **Secure Payment Processing**: Ensure secure payment processing using the integrated Stripe payment gateway. Provide users with a safe and reliable payment experience for their purchases.

- **Responsive Design for All Devices**: Deliver a consistent user experience across all devices with a responsive design. Whether users access your store on desktop or mobile, they'll enjoy a seamless browsing and shopping experience.

- **Customizable and Scalable**: Tailor the app to meet your specific business needs and scale it as your business grows. Add new features, integrate third-party services, and adapt the app to evolving market trends.

- **Optimized for Performance**: Built with performance in mind, the app delivers fast loading times and smooth navigation. Provide users with a snappy and responsive interface that keeps them engaged.

- **SEO Friendly**: Boost your store's visibility and reach with SEO-friendly features. Optimize product descriptions, meta tags, and URLs to rank higher in search engine results and attract more organic traffic.

- **Dedicated Support and Updates**: Receive dedicated support and regular updates to ensure your store stays secure, up-to-date, and optimized for performance. Get help when you need it and stay ahead of the competition with the latest features and improvements.

## <a name="quick-start">Quick Start</a>

1. Clone the repository:

   ```bash
   git clone https://github.com/Anirudh-2903/synapse-hub.git
   ```

2. Install dependencies:

   ```bash
   yarn install --save
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   # Run on a specific port
      PORT=3000

    # Database connection string
    DATABASE_URI=your_mongodb_uri

    # Used to encrypt JWT tokens
    PAYLOAD_SECRET=ad_custom_secret

    # Used to format links and URLs
    PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
    NEXT_PUBLIC_SERVER_URL=http://localhost:3000

    # Enable Stripe integration
    STRIPE_SECRET_KEY=your_stripe_key
    PAYLOAD_PUBLIC_STRIPE_IS_TEST_KEY=true
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key


    # Used to preview drafts
    PAYLOAD_PUBLIC_DRAFT_SECRET=demo-draft-secret
    NEXT_PRIVATE_DRAFT_SECRET=demo-draft-secret

    # Used to revalidate static pages
    REVALIDATION_KEY=demo-revalation-key
    NEXT_PRIVATE_REVALIDATION_KEY=demo-revalation-key
   ```
   Replace the placeholder values with your actual credentials


4. Start the development server:

   ```bash
   yarn run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## <a name="usage">Usage</a>

1. Access the Payload CMS admin interface:

   Open [http://localhost:3000/admin](http://localhost:3000/admin) in your browser and log in using the default credentials (username: admin, password: password).

2. Add products:

   Navigate to the "Products" section in the admin interface and click on "Add Product" to add new products to the store.

3. Manage orders:

   View and manage orders in the "Orders" section of the admin interface.

4. User Authentication:

    Registration: Users can create an account by providing their email address and password.

    Login: Registered users can log in using their email address and password.

    Profile Management: Users can manage their profile information, including updating their email address and password.

5. Payment Processing with Stripe:

    Secure Payments: Payments are processed securely using Stripe's payment gateway.

    Card Payments: Customers can pay using their credit or debit card information.
    (Use Stripe Test Card 4000 0035 6000 0008 for test payment)
    
## <a name="contributing">Contributing</a>

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request.

## <a name="license">License</a>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
