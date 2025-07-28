# The Phelan Focus
![Next.js](https://img.shields.io/badge/Next.js-React-blue)
[![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

# Table of Contents
- [Preresiquites](#prerequisites)
- [Getting Started](#getting-started)

Clone repo, or use GitHub Desktop
## Preresiquites
- Node.js

## Getting Started
1. Open up a terminal and have it point to the folder you want the local repository to be in
2. Run `git clone https://github.com/PROJXON/PhelanFocus.git` in the terminal
3. Run `cd PhelanFocus`
4. Run `npm install`
5. For EmailJS functionality for the contact form to work, create an emailjs account or use supplied credentials with a .env folder created in root as follows:
  ```
  NEXT_PUBLIC_SERVICE=service key
  NEXT_PUBLIC_USER=user key
  NEXT_PUBLIC_TEMPLATE=email sent to person who submitted contact form
  NEXT_ADMIN_TEMPLATE=email sent to admin
  NEXT_PUBLIC_ADMIN_EMAIL=admin email
  ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.