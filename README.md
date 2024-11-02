# UrlBook - Chrome Extension

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue.svg)](https://developer.chrome.com/docs/extensions/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Overview

UrlBook is a simple and efficient Chrome Extension that helps users save and manage URLs quickly within the browser. It allows users to save the current tab's URL, view saved URLs, and delete URLs as needed, offering a streamlined experience for bookmarking frequently visited or essential web pages.

## Features

- 📌 Save the current tab's URL with a single click
- 🗂 View and manage saved URLs in a user-friendly list
- 🗑 Delete URLs when no longer needed
- 💾 Persistent storage with Chrome's local storage API

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Prerequisites

- Google Chrome browser
- Basic understanding of Chrome Extensions (optional)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/itsumarsoomro/UrlBook-ChromeExtension-Js.git
   cd UrlBook-ChromeExtension-Js
   ```

2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (top right corner)
4. Click on **Load unpacked** and select the cloned directory (`UrlBook-ChromeExtension-Js`)
5. The UrlBook extension should now be loaded and available in your Chrome toolbar

## Project Structure

```
UrlBook-ChromeExtension-Js/
│
├── manifest.json    # Chrome extension configuration
├── index.html      # Popup HTML interface
├── function.js        # JavaScript logic for the popup
├── styles.css      # Styling for the popup
└── README.md       # Project documentation
```

## Usage

1. Click on the **UrlBook** icon in the Chrome toolbar to open the extension popup
2. To save the current tab's URL, click the **Save URL** button
3. View your saved URLs in the popup
4. To delete a URL, click the **Delete** button next to the specific URL

### Example Code Snippet

```javascript
// function.js - Function to save the current tab URL
savetabBtn.addEventListener("click", function(){
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
     });
})
```

## Screenshots

### Extension Popup
[Screenshot placeholder for extension popup]

### Saved URLs List
[Screenshot placeholder for saved URLs list]

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/itsumarsoomro/UrlBook-ChromeExtension-Js](https://github.com/itsumarsoomro/UrlBook-ChromeExtension-Js)
