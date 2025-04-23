# Vistaar-Assessment

--- VISTAAR DIGITAL ASSESSMENT ---
Recreating The Figma Store Website

Folder Structure -
/images
products.json
index.html
category.html
product-item.html
script.js
style.css

Tech Stack - (As mentioned in requirements)
- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- JSON (data file)

Features and Functionalities Added - 
- Responsive Layout and Design, throughout.
- A few smooth animations and transitions.
- Dynamic rendering of elements, on all pages.
- Category page routing (Mens, Womens, Accessories).
- Clean and Optimized approach to design as well as code.

My Method and Approach -
- I began by analyzing the original Figma Store structure to identify reusable UI patterns and layout grids.
- Followed a responsive, component based approach using Bootstrap 5 and Javascript as the key tech for styling and functionalities.
- Created dynamic and reusable sections through Javascript logic building.
- Sections and functionalities like -
    > Header and Footer 
    > Toggle on SHOP button
    > Search Input Bar 
    > Grid Rendering on Homepage, and Dyanmic linking
    > Using single data source (products.json) to render products listing accross all 3 categories
    > Quantity Management and Form Visibility logic on product-item page
    > Displaying Category Cards on category page through Dropdown click and fetching relevant data from a single json file
    > Focus was on Clean Code, Responsive Design, Smooth UI
    > Smooth Animations for Dropdown, Carousel, Form Visibility, Scroll to Top, Search Bar Toggle, etc

How to Run -
- Clone or Download the repsitory locally.
- Ensure all files are in the same directory structure (refer Folder Structure to identify all files).
- Open index.html or any desired page through Live Server or a local server.
    > The browsers I was testing on, were blocking fetch() method of my local .json file.
- The Homepage Layout is pretty straighforward. The grid items redirect to category.html (category fetching from json file).
- Click on SHOP on Header to reveal a dropdown. Then click on the desired category. That will redirect to category.html
- Category.html follows dynamic rendering of grid cards, based on the category clicked.
- Click on the card item to redirect to the individual product item page (product-item page).
- The functionalities on the product-item page are as mentioned in your doc requirements. 

Possible Enhancements - 
- Making use of Favicons wherever needed for emojis or symbols/icons.
    > Although Favicon was used in the header section to show the approach and idea.

- Considering a Mobile-first approach.
    > Although, the design was kept responsive for most of the elements in the webpages, to show the idea and approach.
    
- More enhancements and improvements can be made. 
  The main idea of my methodologies used was to showcase the basic approach, which can be reused or improved wherever needed. 


---Developed by Prachi Vyas---
