# React Redux Todo App

A modern and efficient Todo List application built using **React** and **Redux Toolkit**. This app allows users to add, edit, delete, and mark tasks as done, with clean state management and a responsive interface.

---

## 🚀 Features

- ✅ Add new todos
- ✏️ Edit existing tasks
- ❌ Delete tasks
- ✅ Mark tasks as completed
- ⚛️ State managed with Redux Toolkit
- 🎨 Styled with Tailwind CSS (if included)

---

## 🧠 Tech Stack

- **React** – Frontend library
- **Redux Toolkit** – Simplified Redux state management
- **React Icons** – Icon set for UI buttons
- **Tailwind CSS** *(optional)* – Utility-first styling

---

## 📁 Project Structure

```

react-redux-todo-app/
├── src/
│   ├── app/
│   │   └── store.js             # Redux store
│   ├── components/
│   │   └── Todo.jsx             # Main todo component
│   ├── features/
│   │   └── todo/
│   │       └── TodoSlice.js     # Redux slice (reducers/actions)
│   └── App.jsx                  # App entry point with Provider
├── package.json
└── README.md

````

---

## ⚙️ Setup & Installation

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/react-redux-todo-app.git
cd react-redux-todo-app
````

2. **Install dependencies**

```bash
npm install
```

3. **Run the app**

```bash
npm run dev
# or if you're using Create React App:
# npm start
```

---

## 🛠 Functionality Overview

### ➕ Add a Todo

Type a task in the input and click **Add**.

### 📝 Edit a Todo

Click the ✏️ (edit) button to enable editing, then **Update**.

### ✅ Mark as Done

Click the ✅ (done) button to visually mark a task as completed.

### ❌ Delete a Todo

Click the 🗑️ (trash) icon to remove a task.

---

## 🧪 Future Improvements

* Filter by completed/pending
* Local storage or backend sync
* Drag & drop reorder
* Due dates and reminders

---

## 👨‍💻 Author

**Faiz Alam**
GitHub: [@faizalam000](https://github.com/faizalam000)

---