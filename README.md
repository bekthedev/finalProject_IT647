# SNHU-a-palooza Concert Series Website

**Final Project – IT 647 Advanced Web Design and Development**

## Overview

This website was developed as the final project for IT 647 and fulfills the city of Woodstock, NY’s requirements for managing the SNHU-a-palooza open concert series. The concerts occur on the first Friday of each month in a farmer’s field, with free admission limited to **50,000 attendees** per event.

To maintain this attendance cap, a digital registration system was created, allowing users to select an individual concert date, register, and receive a printable confirmation with a control number. The system is designed with best practices in user experience, navigation, styling, and responsiveness for both desktop and mobile platforms.

---

## 🌐 Website Structure

The website includes the following five public pages:

### 1. **Homepage (`index.html`)**
* Overview of the SNHU-a-palooza event
* Navigation menu linking to all other pages
* Clean, responsive layout with emphasis on accessibility and visual appeal

### 2. **Details Page (`details.html`)**
* Expanded information about the concert series
* Multimedia inclusion (image/audio)
* Embedded third-party calendar widget showing all concert dates
* Clickable calendar links to corresponding event details

### 3. **Registration Page (`register.html`)**
* Form that collects:
  * Full name
  * Email (validated)
  * Phone number (validated)
  * Selected event date
* Responsive form inputs styled for desktop and mobile screens
* Input validation using client-side scripting

### 4. **Confirmation Page (`confirmation.html`)**
* Displays user information and a **unique control number**
* Message confirming successful registration

### 5. **Print View Page (`print.html`)**
* Optimized print version of the confirmation page
* Clean formatting for physical check-in at event entry

---

## 🎯 Project Goals & Outcomes

This project demonstrates mastery of the following course outcomes:

* ✅ Design responsive, accessible websites that meet client needs and apply modern web standards
* ✅ Implement intuitive navigation and thoughtful information architecture
* ✅ Construct pages using HTML5 and CSS3 with mobile-first responsive design
* ✅ Use JavaScript for client-side validation (emails, phone numbers, etc.)
* ✅ Apply industry best practices in code formatting, structure, and documentation

---

## 📦 Technologies Used

* **HTML5** for structure
* **CSS3** with media queries for mobile and web styling
* **JavaScript** for form validation and interactivity
* **Third-Party Tools**:
  * Google Calendar or similar widget for displaying events
  * Unique ID generation for confirmation codes

---

## 🗄️ Database Setup (MySQL)

The registration system uses a MySQL database to store user information securely and reliably.

### Database: `finalProjectIT647`

You can initialize the database by running the `data.sql` script included in the project.

#### ⚙️ Steps:

1. Ensure MySQL is installed and running locally.
2. Open your terminal and run the following command:
   ```bash
   mysql -u root -p < sql/data.sql
   ```
3. This will:
  - Create the database `finalProjectIT647`
  - Create the table `finalProjectIT647Table`
  - Insert sample registration records

#### Table Structure:

| Field               | Type         | Null | Key    | Default | Extra          |
|--------------------|--------------|------|--------|---------|----------------|
| RowNum             | INT          | NO   | PRI    | NULL    | AUTO_INCREMENT |
| confirmationNumber | VARCHAR(255) | YES  | UNIQUE | `""`    |                |
| Name               | VARCHAR(100) | NO   |        | NULL    |                |
| Email              | VARCHAR(100) | NO   |        | NULL    |                |
| Phone              | VARCHAR(20)  | NO   |        | NULL    |                |

You can inspect the table using:

```sql
USE finalProjectIT647;
SELECT * FROM finalProjectIT647Table;
```

---

## 📁 Project Files

* `index.html`
* `details.html`
* `register.html`
* `confirmation.html`
* `print.html`
* `/css/style.css`
* `/images/` (logo, multimedia, etc.)
* `/js/validation.js` *(if applicable)*
* `sql/data.sql` *(for database setup)*

---

## 🔐 License

This project is academic and educational in nature. Use of materials beyond this context requires instructor permission.
