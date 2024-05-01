# Ecommerce App with Payload CMS

This is a sample ecommerce application built using Payload CMS. It showcases how Payload can be used to create a powerful and flexible ecommerce platform.

## Features

- **Product Management**: Easily add, edit, and remove products using the Payload CMS admin interface.
- **Order Management**: Manage orders and track their status through the admin dashboard.
- **User Authentication**: Allow users to create accounts, log in, and manage their profile information.
- **Shopping Cart**: Users can add products to their cart and proceed to checkout.
- **Payment Processing**:Secure payment processing using Stripe integration.
- **Responsive Design**: The app is designed to work seamlessly on desktop and mobile devices.

## Installation

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

   ```plaintext
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

4. Start the development server:

   ```bash
   yarn run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

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
    Payment Confirmation: Customers receive a confirmation email upon successful payment.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.