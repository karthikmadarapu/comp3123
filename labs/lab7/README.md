# COMP 3123 – Full Stack Development I
## Lab Exercise 7: Getting Started with React JS

This project involves setting up a basic React JS environment, building a responsive single-page template, and using React states and components to pass dynamic data downstream into the UI layout. 

---

## 🛠️ Project Initialization & Setup

1. **Physical Renaming:**
   The template project folder was renamed from `week09_fri_react_example` to `lab7`.

2. **Configuration Alignment:**
   Updated the app configuration identity manifest inside `package.json` to reflect the new project name:
   ```json
   {
     "name": "lab7",
     "version": "0.1.0"
   }
   ```

3. **Dependency Generation:**
   Restored the project workspace dependencies locally by running:
   ```bash
   npm install
   ```

4. **Booting Dev Server:**
   Launched the live-reloading internal development server at `http://localhost:3000` via:
   ```bash
   npm start
   ```

---

## 💻 Code Architecture & Modifications

The lab objectives were achieved by implementing a state-driven approach within the React component architecture:

### 1. State Management (`src/App.js`)
The primary course layout and student credentials were bound to an immutable local state entity using the functional components `useState` Hook:
```jsx
const [studentInfo] = useState({
  title: "Welcome to Fullstack Development - I",
  subtitle: "React JS Programming Week09 Lab exercise",
  id: "YOUR_STUDENT_ID",
  name: "YOUR_FULL_NAME",
  college: "George Brown College, Toronto"
});
```

### 2. Styling Re-alignment (`src/App.css`)
The standard default React dark-mode theme variables were updated within `.App-header` to deliver a clean canvas matching the structural interface layout specification:
* **Background Canvas Color:** `#ffffff` (White)
* **Default Typography Text Color:** `#000000` (Black)

---

## 📦 Bundling & Submission Execution

To finalize the evaluation phase, the project was cleaned and packaged using the following production steps:

1. **Process Teardown:** Terminated the active engine listening loop in the command line interface using `Ctrl + C`.
2. **Workspace Purge:** Safely deleted the massive `node_modules` local directory cache folder to optimize transport weight limits.
3. **Packaging Archive:** Compressed the source directory files directly into an archive named `lab7.zip`.
