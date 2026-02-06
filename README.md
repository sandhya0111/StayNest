# 🏠 StayNest

**StayNest** is a comprehensive full-stack booking platform designed to simplify the process of finding and managing accommodations. Built with the **MVC architecture**, it ensures a scalable and organized codebase, providing a seamless experience for both travelers and hosts.

🔗 **Live Demo:** [staynest-sfr4.onrender.com](https://staynest-sfr4.onrender.com)

## ✨ Key Features

* **🔍 Smart Discovery:** Browse and search for stays with dynamic filtering.
* **🛡️ Secure Authentication:** User signup and login functionality for personalized booking.
* **📋 Listing Management:** Full CRUD (Create, Read, Update, Delete) operations for property listings.
* **💬 Review System:** Integrated feedback loop allowing users to rate and review their stays.
* **📱 Fully Responsive:** Optimized for a premium experience on mobile, tablet, and desktop.
* **🗺️ Interactive UI:** Clean, intuitive views powered by EJS and modern CSS.
  
## 🛠️ Technical Stack

| Layer | Technology |
| --- | --- |
| **Backend** | Node.js, Express.js |
| **Frontend** | EJS (Embedded JavaScript), CSS3, JavaScript |
| **Database** | MongoDB (via Mongoose) |
| **Authentication** | Passport.js / Express-Session |
| **Deployment** | Render |

## 📂 Architecture Overview

The project follows the **Model-View-Controller (MVC)** design pattern to maintain a clean separation of concerns:

* **`models/`**: Defines the data structure (Schemas) for Listings, Reviews, and Users.
* **`views/`**: Contains EJS templates for rendering the UI dynamically.
* **`controllers/`**: Bridges the two by handling the logic and processing user requests.
* **`routes/`**: Manages the application's endpoints and navigation flow.
* **`public/`**: Stores static assets like custom stylesheets and client-side scripts.

## 🚀 Installation & Setup

Follow these steps to get a local copy up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/sandhya0111/StayNest.git
cd StayNest

```
### 2. Install Dependencies

```bash
npm install

```

### 3. Environment Configuration

Create a `.env` file in the root directory and add your credentials:

```env
PORT=8080
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
MAP_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret

```

### 4. Run the Application

```bash
npm start

```

The server will start at `http://localhost:8080`.

## 📸 Preview

> [!TIP]
> **Pro Tip:** Add a screenshot of your homepage here by uploading an image to your repo and linking it below!
> `![Homepage](public/images/screenshot.png)`

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/NewFeature`).
3. Commit your Changes (`git commit -m 'Add some NewFeature'`).
4. Push to the Branch (`git push origin feature/NewFeature`).
5. Open a **Pull Request**.

## 📄 License

This project is licensed under the **MIT License**.

**Developed with ❤️ by [Sandhya**](https://www.google.com/search?q=https://github.com/sandhya0111)
* Help you write a **Deployment Guide** specifically for Render or Vercel?
* Create a **Custom Logo** or Banner for the top of this README?
