# Timeless Jewelry E-Commerce Website
## Project Report

---

## 1. Project Information

### Project Title
**Timeless: Premium Jewelry E-Commerce Platform**

### Team Members
*[Add your team member names here]*

### Project Duration
*[Add your project timeline]*

---

## 2. Project Description

Timeless is a sophisticated full-stack e-commerce web application designed for a premium jewelry store. The platform provides an elegant and user-friendly interface for customers to browse, search, and purchase high-quality jewelry pieces while offering comprehensive administrative tools for inventory and user management.

The website embodies the brand philosophy of "Jewelry beyond time," offering timeless pieces across various categories including rings, necklaces, bracelets, earrings, charms, and watches. The platform features curated collections such as "Eternal Bloom," "Timeless Collection," and "Bridal Collection," catering to different customer preferences and occasions.

### Key Objectives
- Create an intuitive shopping experience for jewelry customers
- Implement a robust product management system for administrators
- Provide secure user authentication and personalized features
- Enable efficient inventory tracking and sales management
- Deliver a responsive design that works seamlessly across all devices

---

## 3. Main Features and Functionality

### 3.1 User Authentication System
- **User Registration & Login**: Secure account creation with email and password
- **Role-Based Access Control**: Separate interfaces for customers and administrators
- **Session Management**: Persistent login sessions using express-session with MySQL store
- **Visual Admin Identification**: Enhanced admin dashboard with distinctive purple gradient button and "ADMIN" badge

**Flow Description:**
1. New users register through the signup page
2. Credentials are securely stored in the database
3. Users login and receive session tokens
4. Role-based routing directs users to appropriate dashboards
5. Admins see enhanced interface with management tools

### 3.2 Product Catalog & Management

#### For Customers:
- **Product Categories**: 
  - Charms
  - Earrings
  - Necklaces
  - Bracelets
  - Rings
  - Watches

- **Product Collections**:
  - Eternal Bloom
  - Timeless Collection
  - Bridal Collection

- **Product Details Page**: Comprehensive product information including:
  - Multiple product images (Gold, Silver, Rose Gold variants)
  - Interactive image gallery with thumbnail selection
  - Price and material information
  - Size range details
  - Stock availability indicators (In Stock, Low Stock, Out of Stock)
  - Detailed product descriptions

#### For Administrators:
- **Product Management Dashboard**:
  - Add new products with multiple image uploads (Gold, Silver, Rose Gold)
  - Edit existing product details
  - Delete products from inventory
  - Manage product categories and collections
  - Track inventory levels

- **Admin-Only Features**:
  - Quick access icons for product management
  - Bulk product operations
  - Visual distinction from customer interface
  - No cart/wishlist features (admin-focused workflow)

### 3.3 Shopping Cart System
- **Add to Cart**: One-click addition of products
- **Quantity Management**: Adjust quantities directly in cart
- **Real-time Stock Validation**: Prevents over-ordering
- **Cart Persistence**: Cart items saved across sessions
- **Price Calculation**: Automatic total calculation
- **Cart Operations**:
  - Update quantities
  - Remove individual items
  - Clear entire cart

**Database Integration:**
- Utilizes MySQL transactions for data consistency
- Prevents duplicate entries with ON DUPLICATE KEY UPDATE
- Joins products and carts tables for efficient data retrieval

### 3.4 Wishlist Functionality
- **Save for Later**: Add products to wishlist for future purchase
- **Wishlist Management**: View all saved items in one place
- **Quick Actions**: Toggle items between wishlist and cart
- **Visual Indicators**: Heart icon shows wishlist status on product pages
- **Remove from Wishlist**: Easy removal of unwanted items
- **Clear Wishlist**: Bulk removal option

**Note:** Admins cannot add items to cart or wishlist, maintaining professional separation of duties

### 3.5 Advanced Search & Filter
- **Multi-field Search**: Searches across:
  - Product names
  - Categories
  - Descriptions
  - Materials
  - Price ranges
- **Search Results Page**: Dedicated results view with matching products
- **Real-time Filtering**: Category-based filtering
- **Collection Browsing**: View products by curated collections

### 3.6 User Management (Admin)
- **View All Users**: Comprehensive user list
- **Role Management**: Change user roles (user ↔ admin)
- **User Dashboard**: Track user activity and accounts

### 3.7 Customer Feedback System
- **Multiple Feedback Categories**:
  - Jewelry Feedback
  - Accessories Feedback
  - Customer Service Feedback
- **Structured Forms**: Category-specific feedback collection
- **Database Storage**: All feedback stored for analysis
- **Feedback Management**: Admin access to customer reviews

### 3.8 Contact & Information Pages
- **Contact Form**: Customer inquiry submission
- **Store Location**: Physical store information
- **Our Story**: Brand narrative and history
- **FAQ Page**: Common questions and answers
- **Shipping Policy**: Delivery information
- **Exchange Policy**: Return and exchange guidelines
- **Payment Information**: Payment methods and security
- **Privacy Policy**: Data protection information

### 3.9 Sales Analytics
- **Best Sellers Tracking**: Products ranked by sales volume
- **Sales History**: Transaction recording in sales table
- **Inventory Updates**: Automatic stock reduction on purchase
- **Sales Counter**: "Sold" column tracks total sales per product

### 3.10 Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Hamburger Menu**: Collapsible navigation for mobile devices
- **Flexible Grid Layouts**: Product cards adapt to screen width
- **Touch-Friendly**: Large buttons and tap targets
- **Responsive Images**: Optimized image loading

---

## 4. Technologies Used

### Frontend Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling and animations
  - Flexbox and Grid layouts
  - CSS transitions and transforms
  - Custom gradient designs
  - Responsive media queries
- **EJS (Embedded JavaScript)**: Server-side templating
  - Dynamic content rendering
  - Reusable components (header, footer, admin dashboard)
  - Conditional rendering based on user roles
- **JavaScript**: Client-side interactivity
  - Image gallery functionality
  - Form validation
  - Menu toggling
  - Dynamic UI updates
- **Bootstrap 4.5.2**: UI components and responsive utilities
- **Google Fonts (Lora)**: Typography styling

### Backend Technologies
- **Node.js**: Server-side JavaScript runtime
- **Express.js 5.1.0**: Web application framework
  - RESTful API routing
  - Middleware integration
  - Session handling
  - Static file serving

### Database
- **MySQL 9.4**: Relational database management
  - Multiple tables with foreign key relationships
  - Transactions for data integrity
  - Indexed queries for performance
  
**Database Schema:**
- `users`: User accounts and roles
- `products`: Product catalog (13 columns including sold tracking)
- `carts`: Shopping cart items
- `wishlists`: Saved products
- `sales`: Sales transaction history
- `sessions`: User session data
- `contactforms`: Customer inquiries
- `feedback_jewelry`: Jewelry feedback
- `feedback_accessories`: Accessories feedback
- `feedback_customer_service`: Service feedback

### Additional Technologies & Libraries
- **express-session 1.18.2**: Session management
- **express-mysql-session 3.0.3**: MySQL session store
- **mysql2 3.15.3**: MySQL database driver with Promise support
- **multer 2.0.2**: File upload handling for product images
- **body-parser 2.2.0**: Request body parsing
- **cors 2.8.5**: Cross-Origin Resource Sharing
- **bcryptjs 3.0.2**: Password hashing (available for future use)
- **jsonwebtoken 9.0.2**: JWT authentication (available for future use)
- **dotenv 17.2.3**: Environment variable management
- **nodemon 3.1.10**: Development auto-restart

### Development Tools
- **Visual Studio Code**: Code editor
- **Git**: Version control
- **MySQL Workbench**: Database design and management
- **Postman**: API testing (optional)

---

## 5. Challenges Faced and Solutions

### Challenge 1: MySQL Authentication Compatibility
**Problem**: MySQL 9.4 uses `caching_sha2_password` authentication, which wasn't fully supported by the older mysql2 driver (v3.10.2) bundled with express-mysql-session, causing "Access denied" errors.

**Solution**: 
- Removed the nested mysql2 dependency from express-mysql-session
- Forced the application to use the parent mysql2 (v3.15.3) which supports modern authentication
- Changed database host from "127.0.0.1" to "localhost" for proper connection resolution

### Challenge 2: Missing Database Columns
**Problem**: Application crashed with "Unknown column 'sold' in 'order clause'" error when trying to fetch best-selling products.

**Solution**:
- Added missing `sold` column to products table (INT, default 0)
- Created missing `sales` table with proper foreign key relationships
- Implemented automatic sold counter increment on purchases

### Challenge 3: Admin vs User Interface Separation
**Problem**: Admins could see shopping cart and wishlist options, which weren't relevant for administrative tasks.

**Solution**:
- Implemented role-based conditional rendering in EJS templates
- Created separate header includes (header.ejs vs adminDashboard.ejs)
- Added role checks to hide cart/wishlist features for admins
- Designed distinctive admin UI with gradient buttons and badges

### Challenge 4: Module Type Configuration
**Problem**: Node.js showed warnings about module type not being specified, causing performance overhead.

**Solution**:
- Added `"type": "module"` to package.json
- Ensured all imports use ES6 module syntax
- Updated file extensions and import statements consistently

### Challenge 5: Image Upload and Management
**Problem**: Managing multiple product image variants (Gold, Silver, Rose Gold) with proper storage and retrieval.

**Solution**:
- Configured multer with custom storage destination and filename generation
- Implemented multiple file upload fields in forms
- Created image selection functionality with thumbnail gallery
- Stored image paths in database for easy retrieval

### Challenge 6: Session Persistence
**Problem**: User sessions weren't persisting across server restarts.

**Solution**:
- Integrated express-mysql-session for database-backed session storage
- Configured proper session options (secret, resave, saveUninitialized)
- Implemented session timeout and secure cookie handling

### Challenge 7: Responsive Design Consistency
**Problem**: Layout issues on various screen sizes, especially mobile devices.

**Solution**:
- Created separate responsive.css file for media queries
- Implemented mobile-first design approach
- Added hamburger menu for mobile navigation
- Used flexible grid layouts that adapt to screen size
- Tested across multiple devices and browsers

---

## 6. Future Features to Add

### 6.1 Enhanced Security
- **Password Encryption**: Implement bcrypt hashing for passwords (bcryptjs already installed)
- **JWT Authentication**: Token-based authentication for API security
- **Two-Factor Authentication**: SMS or email verification
- **HTTPS Implementation**: SSL certificates for secure connections
- **Input Sanitization**: Prevent SQL injection and XSS attacks
- **Rate Limiting**: Prevent brute force attacks

### 6.2 Payment Integration
- **Payment Gateway**: Stripe or PayPal integration
- **Checkout Process**: Multi-step checkout flow
- **Order Confirmation**: Email receipts and order tracking
- **Payment History**: User transaction records
- **Invoice Generation**: PDF invoice creation
- **Refund Processing**: Automated refund handling

### 6.3 Advanced Product Features
- **Product Reviews & Ratings**: Customer feedback on products
- **Product Recommendations**: AI-based suggestion engine
- **Recently Viewed**: Track and display browsing history
- **Size Guide**: Interactive sizing information
- **Virtual Try-On**: AR integration for jewelry visualization
- **Product Comparison**: Side-by-side product comparison
- **Stock Alerts**: Notify when out-of-stock items return

### 6.4 Enhanced User Experience
- **User Profiles**: Editable profile with avatar upload
- **Order Tracking**: Real-time shipment tracking
- **Order History**: Complete purchase history
- **Saved Addresses**: Multiple shipping addresses
- **Gift Cards**: Purchase and redeem gift cards
- **Loyalty Program**: Points and rewards system
- **Newsletter Subscription**: Email marketing integration

### 6.5 Admin Dashboard Improvements
- **Analytics Dashboard**: Sales charts and graphs
- **Inventory Alerts**: Low stock notifications
- **Bulk Product Upload**: CSV import functionality
- **Order Management**: View and process customer orders
- **Sales Reports**: Downloadable sales analytics
- **Customer Analytics**: User behavior insights
- **Email Templates**: Custom email notifications

### 6.6 Marketing Features
- **Promotional Codes**: Discount coupon system
- **Flash Sales**: Time-limited special offers
- **Featured Products**: Homepage product highlights
- **Blog Section**: Jewelry care tips and style guides
- **Social Media Integration**: Share products on social platforms
- **Email Marketing**: Automated email campaigns

### 6.7 Search & Discovery
- **Advanced Filters**: Filter by price, material, style, occasion
- **Faceted Search**: Multiple simultaneous filters
- **Search Autocomplete**: Real-time search suggestions
- **Visual Search**: Image-based product search
- **Trending Products**: Most viewed/searched items

### 6.8 Mobile Application
- **Native Mobile App**: iOS and Android applications
- **Push Notifications**: Order updates and promotions
- **Mobile Wallet**: Apple Pay and Google Pay integration
- **Offline Browsing**: Cache products for offline viewing

### 6.9 Multi-language & Currency
- **Internationalization**: Multiple language support
- **Currency Conversion**: Auto-convert prices based on location
- **Localized Content**: Region-specific products and offers

### 6.10 Performance Optimization
- **Image Optimization**: WebP format and lazy loading
- **Caching Strategy**: Redis or Memcached integration
- **CDN Integration**: Content delivery network for static assets
- **Database Optimization**: Query optimization and indexing
- **Progressive Web App**: PWA for offline functionality

---

## 7. Database Architecture

### Entity Relationship Overview

**Users Table**
- Stores customer and admin account information
- Fields: ID, username, email, password, role

**Products Table**
- Central table for all jewelry items
- Fields: ID, category, name, description, price, material, quantity, imageGold, imageSilver, imageRoseGold, sizeRange, collection, sold

**Carts Table**
- Links users to products in their cart
- Fields: ID, userID (FK), productID (FK), quantity, added_at
- Foreign keys ensure data integrity

**Wishlists Table**
- Stores saved products for users
- Fields: wishlistID, ID (userID - FK), ProductID (FK), addedAt
- Unique constraint on ProductID prevents duplicates

**Sales Table**
- Tracks sales transactions
- Fields: saleID, productID (FK), quantitySold, saleDate
- Used for analytics and best seller calculations

**Feedback Tables**
- Three separate tables for different feedback types
- Enables category-specific feedback analysis

---

## 8. Project Structure

```
webdesign1/backend/
├── controllers/          # Business logic
│   ├── admin.js         # Admin operations
│   ├── auth.js          # Authentication logic
│   ├── timeless.js      # Main app controllers
│   └── user.js          # User operations
├── models/              # Database models
│   ├── accessories.js
│   ├── cart.js
│   ├── contact.js
│   ├── customerService.js
│   ├── Jewelry.js
│   ├── product.js
│   ├── user.js
│   └── wishlists.js
├── routes/              # API endpoints
│   ├── admin.js         # Admin routes
│   ├── auth.js          # Auth routes
│   ├── timeless.js      # Public routes
│   └── user.js          # User routes
├── views/               # EJS templates
│   ├── includes/        # Reusable components
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   └── adminDashboard.ejs
│   └── [various pages].ejs
├── public/              # Static assets
│   ├── homepage.css
│   ├── subpages.css
│   ├── responsive.css
│   ├── 404.css
│   └── photos/
├── utils/               # Utility functions
│   ├── database.js      # DB connection
│   ├── file.js          # File handling
│   └── path.js          # Path utilities
├── images/              # Uploaded product images
├── package.json         # Dependencies
└── server.js            # Application entry point
```

---

## 9. Key Achievements

✅ **Full-Stack Implementation**: Complete end-to-end e-commerce solution
✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
✅ **Role-Based Access**: Separate admin and user experiences
✅ **Database Integration**: Robust MySQL implementation with 10 tables
✅ **Session Management**: Persistent user sessions
✅ **Image Uploads**: Multi-variant product image handling
✅ **Search Functionality**: Multi-field product search
✅ **Shopping Features**: Cart and wishlist with real-time updates
✅ **Admin Tools**: Complete product and user management
✅ **Feedback System**: Multi-category customer feedback
✅ **Scalable Architecture**: MVC pattern for maintainability

---

## 10. Lessons Learned

- **Database Design Importance**: Proper schema planning prevents future issues
- **Version Compatibility**: Always check technology version compatibility
- **Separation of Concerns**: MVC architecture improves code maintainability
- **User Experience**: Role-based interfaces enhance usability
- **Error Handling**: Comprehensive error handling prevents crashes
- **Testing**: Regular testing catches issues early in development
- **Documentation**: Clear documentation aids team collaboration
- **Security Considerations**: Authentication and authorization are critical
- **Responsive Design**: Mobile-first approach ensures better user experience

---

## 11. Conclusion

Timeless represents a comprehensive e-commerce solution that successfully combines elegant design with robust functionality. The platform provides an intuitive shopping experience for customers while offering powerful management tools for administrators. 

The project demonstrates proficiency in full-stack web development, including frontend design, backend development, database management, and system integration. The implementation of modern web technologies and best practices ensures a scalable, maintainable, and user-friendly application.

With the foundation solidly in place and a clear roadmap for future enhancements, Timeless is well-positioned to serve as a professional jewelry e-commerce platform that can grow and adapt to evolving business needs.

---

## 12. Product Detail Page - User Interface Explanation

The Product Detail Page is a comprehensive, conversion-focused interface that provides customers with all necessary information to make informed purchase decisions.

### **Page Structure and Layout**

#### **1. Header Navigation**
- **Back Button**: "← Back" link that returns users to the category page
- **Conditional Header**: Shows admin dashboard for admins, standard header for users

#### **2. Main Content Grid (Two-Column Layout)**

##### **Left Column - Product Gallery**
**Main Image Display:**
- Large, high-resolution product image
- Default displays first available variant (Gold > Silver > Rose Gold)
- ID: `mainImage` for JavaScript manipulation

**Thumbnail Navigation:**
- Horizontal row of clickable thumbnail images
- Shows all available material variants (Gold, Silver, Rose Gold)
- **Active State**: Currently selected thumbnail highlighted
- **Interactive**: Click to change main image using `changeImage(this)`

##### **Right Column - Product Information**

**1. Category Badge** - Small colored badge displaying product category

**2. Product Title** - Large H1 heading with product name

**3. Price Display** - Prominent price formatted as `$XX.XX`

**4. Product Description** - Full detailed description

**5. Product Specifications Card:**
- **Material**: Metal type (Gold, Silver, Rose Gold, etc.)
- **Category**: Product classification  
- **Size Range**: Conditional display if size info exists
- **Availability Status**: Dynamic stock indicator
  - **In Stock** (Green): `quantity > 10`
  - **Low Stock** (Orange): `0 < quantity ≤ 10`
  - **Out of Stock** (Red): `quantity = 0`

**6. Action Buttons Section**

**For Regular Users:**
- **Add to Cart Button**: POST to `/user/cart/add/:productID`
- **Wishlist Buttons** (Conditional):
  - If NOT in wishlist: "♥ Add to Wishlist" button
  - If ALREADY in wishlist: "✖ Remove from Wishlist" (red button)
- **Out of Stock State**: Disabled button when `quantity = 0`

**For Admin Users:**
- **NO cart or wishlist buttons displayed**
- Only admin management options shown

**7. Admin Actions (Admin Only):**
- **Edit Product**: Links to `/admin/editProduct/:productID`
- **Delete Product**: POST to `/admin/delete-product/:productID`

### **Key Features**

#### **Image Gallery Interaction**
- Click-to-view different material variants
- Active thumbnail highlighted
- Smooth JavaScript transitions
- Mobile responsive touch-friendly design

#### **Dynamic Content Rendering**
- EJS templating with server-side data injection
- Conditional display based on:
  - User role (admin vs customer)
  - Stock availability
  - Wishlist status
  - Available product variants

#### **Stock Management**
- Real-time availability display
- Color-coded status badges
- Purchase prevention when out of stock
- Urgency creation with low stock warnings

#### **Role-Based Interface**
**Customer View:** Shopping-focused (Cart, Wishlist buttons)
**Admin View:** Management-focused (Edit, Delete buttons with no shopping features)

#### **Wishlist State Management**
- Server-side check if product in user's wishlist
- Dynamic button changes between Add/Remove
- Visual distinction with color coding
- Tied to logged-in user's session

### **Technical Implementation**

**Route:** `GET /products/:productId`

**Controller passes to template:**
- `product`: Product object with all details
- `inWishlist`: Boolean flag
- `role`: User role (admin/user)
- `isAuthenticated`: Login status
- `pageTitle`: Page meta title

**Database Queries:**
1. Product Fetch: `SELECT * FROM products WHERE ID = ?`
2. Wishlist Check: `SELECT * FROM wishlists WHERE userID = ? AND ProductID = ?`

**JavaScript Function:**
```javascript
function changeImage(img) {
    document.getElementById('mainImage').src = img.src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    img.classList.add('active');
}
```

### **User Flow**

**Customer Journey:**
1. Navigate from category/search → 2. View main image → 3. Click thumbnails to see variants → 4. Read details → 5. Check stock → 6. Add to cart/wishlist → 7. Continue shopping

**Admin Journey:**
1. Navigate to product → 2. Review information → 3. Edit or Delete → 4. Return to management

### **Responsive Design**
- **Desktop**: Two-column with large image gallery
- **Tablet**: Adjusted spacing with maintained layout
- **Mobile**: Single column, full-width elements, stacked buttons

### **Security**
- POST requests for all actions
- Session-based user identification
- Role-based authorization
- Backend stock validation

---

## 13. References & Resources

- **Express.js Documentation**: https://expressjs.com/
- **MySQL Documentation**: https://dev.mysql.com/doc/
- **EJS Templates**: https://ejs.co/
- **Node.js**: https://nodejs.org/
- **MDN Web Docs**: https://developer.mozilla.org/
- **Bootstrap**: https://getbootstrap.com/
- **Multer**: https://www.npmjs.com/package/multer

---

**Project Repository**: *[Add your GitHub repository link]*  
**Live Demo**: *[Add your deployment link if available]*  
**Contact**: *[Add contact information]*

---

*Report Prepared: December 2, 2025*
