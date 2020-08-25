**NOTE: This readme.md file is written with markdown. Please use [ Atom > Packages > Markdown Preview ] or go to github website to read it.**


## Part 1: Website introduction
In the real life, when we choose post cards for our friends or family, it is hard to get satisfied with design and words on cards at the same time. This website is to solve this problem.

This website with name "iCard" is an e-Commerce website which sells post cards with customized texts to customers. Customer can choose the photo design they like and then enter their own customized texts. We assume the website staff will print out the post cards and deliver to the shipping address.

Suggested sequence to visit pages on the website and description:
1. index.html(home page): customer browse post cards designs and can click heart to add to favorite list, can change display style with dropdown list, click the item photo to go to product.html
2. product.html: customer enter customized text and preview here, click "add to cart" button which adds the item to the shopping cart, go to cart.html
3. cart.html: view all items in shopping cart and manage items, click "proceed to checkout" to continue checkout process, go to shipping_address.html
4. shipping_address.html: choose or edit shipping address, click "Deliver to this address" or "Use this address and checkout" button to go to checkout.html
5. checkout.html: manage items to buy and view order summary, click "place the order" to complete the check out process, go to order_confirm.html
6. order_confirm.html: order is created and show customer order number, click "Have Fun" in the header menu to go to about_us.html
7. about_us.html: Have fun with the animation and new jokes by clicking "get a new joke" button

## Part 2: Technical Specifications

### Overview
#### Layout
Flexbox are mainly used for layout purpose. No special framework are used for styling.

#### Interactive parts for html pages:
- index.html/index.js:
  - display style selected with dropdown menu;
  - toggle heart for each post card item
- product.html/product.js:
  - preview of customize text printed on post card
  - toggle heart
- cart.html/cart.js
  - increase the number of quantity, subtotal will be recalculated
  - click the "Delete", the item will be removed from the page and subtotal is recalculated
- shipping_address.html/shipping_address.js
  - click "Validate Form" button to submit and validate form and show alert message if the result is OK
- checkout.html/checkout.js
  - increase the number of quantity, order total will be recalculated
  - click the "Delete", the item will be removed from the page and order total is recalculated
- about_us.html/about_us.js
  - Click the "Get a new joke" button, a new joke is displayed by using AJAX/JSON to fetch a random joke from public api

#### Two optional ones from deliverable are done
- Host on Github
  - Github link:
- A public api for joke is used in about_us.html/about_us.js
  - public api (http://www.icndb.com/api/)

#### NOTE
Since only front-end work is done, the website is not fully functional.
images or price may not match and form can not be truly submitted and validated as expected.

For the purpose of addressing Regex requirements, use "Validate Form" button to test.Validation is passed when alert message is given.

### Technical requirements/specifications details:
Except for "Use SASS/SCSS (Optional)" which is not applied, all other core requirements or optional ones are met.

For each technical requirement in the document, the corresponding usage or applied web page is provided after it.

#### HTML

* Have at least 3 pages, keep the grid system consistent as much as possible: **7 pages, same basic and header styles**
* Use at least 10 different HTML tags: **h1, div, form, input, button, table, tr, td, label, select, a, etc**
* Use HTML tables: **e.g. order_confirm.html**
* Implement at least two uses for forms: **product.html and shipping_address.html, etc**
* Dropped Down Menu: **index.html-display style**
* Use web fonts: **google font - Roboto**
* Use different types of content in the form of text, images, videos, and GIFs: **text, images**
* Use regex validation: **shipping_address.html, pattern with regex used for zip code checking, click "Validate Form" button to check for this function, then use other buttons to continue website journey**

#### CSS

* Inline, internal, and external styling: **e.g. Inline - about_us.html, internal/external - product.html**
* Use five different CSS selectors: **much more are used, e.g. checkout.css**,
* Don’t use too many fonts: **Two fonts are used**
* Use colors that complement each other: **Two kinds of colors are mainly used**
* Use Flexbox (Optional): **index.html, product.html etc.**
* Use SASS/SCSS (Optional): **N/A**
* Use animations (Optional): **used in about_us.js applied to about_us.html**

#### Javascript

* External scripts: **all external javascript stored in the folder js**
* Use variables, if statements, loops, at least one form of collections, functions/call back, and events: **All these are used in index.js file applied to index.html and some other js files**
* Use AJAX (Optional): **used in about_us.js applied to about_us.html**
* Use JSON or XML (Optional): **used in about_us.js applied to about_us.html**
* Use JQuery (Optional): **used in about_us.js applied to about_us.html**
