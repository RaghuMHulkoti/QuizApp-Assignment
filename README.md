# Quiz App
A dynamic and interactive quiz application built with React, Vite, and Tailwind CSS. This app fetches quiz questions from the Open Trivia Database API, allowing users to customize their quiz experience based on category, difficulty, type, and the number of questions.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo
### Quiz App Screenshot
Add a screenshot of your app here.

## Features
- **Customizable Quiz Options**: Select category, difficulty, type, and number of questions.
- **Real-Time Timer**: Countdown timer based on selected difficulty and number of questions.
- **Interactive Questions**: Select answers with immediate feedback.
- **Result Summary**: View total correct, incorrect, and not attempted questions.
- **Responsive Design**: Optimized for various screen sizes with Tailwind CSS.
- **Persistent State**: Maintains user selections and progress throughout the quiz.

## Technologies Used
- **React**: Front-end library for building user interfaces.
- **Vite**: Fast build tool for frontend development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Open Trivia Database API**: Source of quiz questions.
- **ESLint**: Code linting for maintaining code quality.
- **React Router DOM**: Client-side routing.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```

2. **Install Dependencies:**
   Ensure you have Node.js installed.
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

## Usage

1. **Select Quiz Options:**
   - Choose a category from the dropdown menu.
   - Select the difficulty level (Easy, Medium, Hard).
   - Choose the type of questions (Multiple Choice or True/False).
   - Specify the number of questions.

2. **Start the Quiz:**
   - Click on the "Start Quiz" button to begin.

3. **Answer Questions:**
   - Select an answer for each question.
   - Navigate through questions using the "Next" button.
   - Submit the quiz once all questions are answered.

4. **View Results:**
   - Review your total correct, incorrect, and not attempted answers.
   - See a detailed review of each question with your answers and the correct answers.

## Project Structure

```
src/
├── api/
│   └── QuizAPI.jsx         # Handles API requests to fetch quiz questions and categories
├── components/             # Contains reusable React components
│   ├── QuizOptions.jsx     # Component for selecting quiz options
│   ├── Questions.jsx       # Component for displaying quiz questions
│   ├── Results.jsx         # Component for showing quiz results
│   └── Timer.jsx           # Component for the countdown timer
├── pages/                  # Includes page-level components
│   ├── Home.jsx            # Home page component
│   └── Quiz.jsx            # Quiz page component
├── App.jsx                 # Main application component that sets up routing
├── main.jsx                # Entry point of the React application
├── assets/                 # Static assets like images
├── styles/                 # Global styles and Tailwind configurations
├── config/                 # Configuration files
│   └── tailwind.config.js  # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**
   ```bash
   git commit -m "Add your commit message here"
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Describe your changes and submit the pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
