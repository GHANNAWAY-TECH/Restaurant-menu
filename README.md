# Restaurant Menu Webpage

This repository contains the code for a simple restaurant menu webpage for Ghannaway tech Retaurant, located in Ruiru, Kiambu County, Kenya. The menu data, including names, descriptions, prices, and image URLs, is dynamically fetched from a Google Sheet using SheetDB.

## Features

* **Dynamic Menu Display:** Fetches and displays menu items from a SheetDB-connected Google Sheet.
* **Image Support:** Displays images for each menu item using URLs from the Google Sheet.
* **Search Functionality:** Allows users to search the menu by item name or description.
* **Category Filtering:** Enables users to filter the menu by categories using a dropdown.

## Setup Instructions

To use this menu, you will need to:

1.  **Create a Google Sheet:**
    * Create a new Google Sheet with the following column headers in the first row: `name`, `description`, `price`, and `image_url`, `category`.
    * Populate the sheet with your menu items, ensuring the `image_url` column contains publicly accessible URLs of the images. The `category` column should contain the category for each item (e.g., "Appetizer", "Main Course", "Dessert", "Drink").
    * Ensure the `price` column contains numerical values.

2.  **Connect to SheetDB:**
    * Go to [https://sheetdb.io/](https://sheetdb.io/) and connect your Google Sheet to create a SheetDB API endpoint URL.

3.  **Update `index.html`:**
    * Open the `index.html` file in a text editor.
    * Locate the line:
        ```javascript
        const sheetDbUrl = 'YOUR_SHEETDB_API_URL'; // Replace with your SheetDB API URL
        ```
    * Replace `'YOUR_SHEETDB_API_URL'` with the actual API endpoint URL you obtained from SheetDB.

4.  **Host the Webpage:**
    * To make the menu accessible online (for use with a QR code and for customers to view), you will need to host the `index.html` file and any associated image assets on a web server.
    * **GitHub Pages (Recommended for simple static sites):**
        * Create a new public repository on GitHub named `your-github-username.github.io` (replace `your-github-username` with your GitHub username).
        * Upload the `index.html` file and any `images` folder to the root of this repository.
        * Your menu will typically be accessible at `https://your-github-username.github.io/`.
    * Alternatively, you can use other web hosting services like Netlify, Vercel, or a local Kenyan hosting provider.

## Using the Menu

Once the webpage is hosted:

* Users can access the menu by navigating to its URL in a web browser.
* A search bar is available to find specific menu items by name or description.
* A dropdown allows filtering the menu by category.

## Creating a QR Code

To easily share the menu with your customers:

1.  Get the public URL of your hosted menu webpage (e.g., `https://your-github-username.github.io/` or your custom domain).
2.  Use a free online QR code generator (e.g., qrcode-monkey.com) to create a QR code from this URL.
3.  Download the QR code image and display it in your restaurant for customers to scan.

## Further Improvements

Possible future enhancements include:

* Improved styling and branding.
* "Add to Order" functionality (client-side simulation).
* Displaying item availability.
* Showing dietary information.
* Local currency formatting (KES).

## Contact

For any questions or issues, please contact Email:ghannawaytechsystem@gmail.com.
