# 📅 Interactive Wall Calendar App

A visually rich and responsive wall calendar built using React and Tailwind CSS.
It combines a modern UI with practical features like date range selection and notes, inspired by the look and feel of a physical wall calendar.

---

## ✨ Features

* **📸 Wall Calendar Aesthetic**
  Each month displays a themed image that enhances the visual experience.

* **📆 Day Range Selector**
  Select a start and end date. The selected dates are highlighted clearly, with intermediate dates softly shaded.

* **📝 Notes Section**
  Add and manage notes for selected date ranges or the current month.

* **🎨 Dynamic Themes**
  Each month has its own gradient color scheme for a fresh look.

* **⚡ Smooth Transitions**
  Subtle animations when switching months for a better user experience.

* **📱 Fully Responsive**
  Works seamlessly across desktop and mobile devices.

---

## 🛠️ Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* JavaScript (ES6+)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd calendar_app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
│── components/
│   ├── CalendarGrid.jsx
│   ├── DateCell.jsx
│   ├── NotesSection.jsx
│
│── utils/
│   ├── dateUtils.js
│
│── Calendar.jsx
│── App.jsx
```

---

## 🎯 How It Works

* The calendar grid is generated dynamically for each month.
* Clicking once sets the **start date**.
* Clicking again sets the **end date**.
* All dates between are automatically highlighted.
* Notes can be linked to the selected range using a unique key.

---

## 💡 Future Improvements

* Drag-to-select date range
* Persistent notes (local storage / database)
* Event reminders
* Dark mode

---

## 📌 Conclusion

This project focuses on blending **design and usability**, creating a calendar that is not only functional but also visually engaging.

---

Made with ❤️ using React
