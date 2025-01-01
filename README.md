# To-Do App

This is a full-stack To-Do List application that allows users to create, update, mark as complete, and delete tasks. The app is built using HTML, CSS, and JavaScript for the frontend, with a Python-based FastAPI backend.

## Features
- **Add Tasks**: Quickly add new tasks to your to-do list.
- **Mark Tasks as Complete**: Mark tasks as completed or undo them.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Responsive UI**: A clean, mobile-friendly interface.
- **Persistent Data**: Data is managed through a FastAPI backend.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI (Python)
- **Styling**: Custom CSS
- **Communication**: Fetch API for frontend-backend communication

## Getting Started

### Prerequisites
- Python 3.8+

### Installation
1. Clone the repository:
   git clone https://github.com/anageguchadze/To-Do-App.git
 

2. Install backend dependencies:
   cd To-Do-App/todo_back
   pip install -r requirements.txt
   

3. Start the FastAPI server:
   uvicorn main:app --reload
  

4. Open the `index.html` file in your browser to view the app:
   cd ../todo_front
   open index.html

### API Endpoints
- **GET /tasks**: Retrieve all tasks.
- **POST /tasks**: Create a new task. Requires `id`, `title`, and `completed` fields.
- **PUT /tasks/{task_id}**: Update an existing task by ID.
- **DELETE /tasks/{task_id}**: Delete a task by ID.

### Frontend Instructions
- Ensure the backend server is running.
- Open the `index.html` file in a browser to interact with the application.

## Usage
- Add a new task using the input box and the "Add Task" button.
- Mark a task as completed or undo it by clicking the "Done" or "Undo" button.
- Delete a task by clicking the "Delete" button.

## File Structure
```
To-Do-App
├── todo_back
│   ├── main.py         # FastAPI backend
│   ├── requirements.txt # Python dependencies
├── todo_front
    ├── index.html      # Frontend HTML
    ├── styles.css      # Custom CSS styles
    ├── script.js       # Frontend JavaScript
```

## License
This project is open-source and available under the [MIT License](LICENSE).


Feel free to contribute to this project by submitting issues or pull requests!

