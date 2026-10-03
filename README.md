# 🔎 GitHub Profile Search

A responsive web application that allows users to search for GitHub profiles by username and view important profile information using the **GitHub REST API**.

The project was built to practice **JavaScript, REST API integration, asynchronous programming, DOM manipulation, and dynamic UI rendering**.

## 🌐 Live Demo

**[View Live Demo](https://khushichaubey-493.github.io/GitHub-Search-Profile/)**

## 📸 Project Preview

![GitHub Profile Search Preview](github-profile-search.jpeg)

## ✨ Features

* 🔍 Search GitHub users by username
* 🔗 Fetch profile data from the GitHub REST API
* 👤 Display GitHub username and profile name
* 🖼️ Display profile avatar
* 📝 Display profile bio
* 📍 Display user location
* 👥 Display followers and following counts
* 📦 Display public repository count
* 🔗 Direct link to the user's GitHub profile
* ⌨️ Search using the **Enter** key
* ⏳ Loading state while fetching data
* ⚠️ Validation for empty search input
* ❌ Handles users that do not exist
* 🚨 Handles API/network errors
* 📱 Responsive interface

## 🛠️ Technologies Used

| Technology            | Purpose                                    |
| --------------------- | ------------------------------------------ |
| **HTML5**             | Page structure and semantic markup         |
| **CSS3**              | Styling and responsive layout              |
| **JavaScript (ES6+)** | Application logic and API handling         |
| **GitHub REST API**   | Fetching GitHub user information           |
| **Fetch API**         | Making asynchronous API requests           |
| **DOM Manipulation**  | Dynamically displaying profile information |

## 🔌 API Used

This project uses the GitHub Users API:

```text
https://api.github.com/users/{username}
```

For example:

```text
https://api.github.com/users/octocat
```

The application sends the entered username to the API and uses the returned JSON data to generate the profile card dynamically.

## ⚙️ How It Works

### 1. Enter a Username

The user enters a GitHub username into the search field.

### 2. Send API Request

JavaScript sends an asynchronous request to the GitHub Users API using the Fetch API.

### 3. Process the Response

The application receives the profile data in JSON format and extracts the required information.

### 4. Generate the Profile

JavaScript dynamically creates the profile interface using the returned API data.

### 5. Display the Result

The profile card displays information such as:

* Profile picture
* Name
* Username
* Bio
* Location
* Followers
* Following
* Public repositories

The user can also click **Check Profile** to open the actual GitHub profile.

## 🧠 JavaScript Concepts Practiced

This project helped me strengthen the following JavaScript concepts:

* `async/await`
* `fetch()`
* Promises
* REST API integration
* JSON response handling
* DOM manipulation
* Template literals
* Event listeners
* Functions
* Conditional rendering
* Input validation
* Error handling
* Dynamic HTML generation

## 📂 Project Structure

```text
GitHub-Search-Profile/
│
├── github-profile-search.jpeg
├── index.html
├── index.js
├── style.css
└── README.md
```

## 🚀 Getting Started

### Prerequisites

You only need:

* A modern web browser
* Internet connection

An internet connection is required because the application retrieves profile information from the GitHub REST API.

### Run Locally

#### 1. Clone the repository

```bash
git clone https://github.com/KhushiChaubey-493/GitHub-Search-Profile.git
```

#### 2. Open the project

```bash
cd GitHub-Search-Profile
```

#### 3. Run the application

Open `index.html` in your browser.

You can also use **VS Code Live Server** for local development.

## 🔄 Application Flow

```text
User enters GitHub username
          ↓
    Click Search / Press Enter
          ↓
     Fetch GitHub API
          ↓
    Receive JSON response
          ↓
    Validate API response
          ↓
Generate profile information
          ↓
 Display profile card
```

## ⚠️ Error Handling

The application provides feedback for common situations:

* Empty username → prompts the user to enter a username
* Invalid GitHub username → displays **User not found**
* API/network problem → displays an error message
* Successful request → dynamically displays the profile

## 🎯 Learning Objectives

The main purpose of this project was to gain practical experience with:

* Consuming third-party REST APIs
* Working with asynchronous JavaScript
* Handling API responses
* Dynamically generating UI elements
* Handling user input
* Implementing loading and error states
* Building responsive frontend interfaces

## 🔮 Future Improvements

Possible improvements for future versions include:

* Display the user's GitHub company and website
* Show account creation date
* Display the user's repositories
* Add repository sorting and filtering
* Add dark/light theme support
* Add recent repository information
* Improve accessibility
* Add better API error messages
* Add search history
* Add debounce for repeated searches

## 👩‍💻 Author

**Khushi Chaubey**

* GitHub: [KhushiChaubey-493](https://github.com/KhushiChaubey-493)
* Portfolio: [Personal Portfolio Website](https://khushichaubey-493.github.io/Personal-Portfolio-Website/)

## 📄 License

This project was created for **learning and educational purposes**.
