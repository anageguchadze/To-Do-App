from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

class Task(BaseModel):
    id: int
    title: str
    completed: bool
    
tasks = []
task_id_counter = 0

@app.get('/tasks')
def get_tasks():
    return tasks


@app.post('/tasks')
def create_task(task:Task):
    global task_id_counter
    task_id_counter += 1
    task.id = task_id_counter
    tasks.append(task.model_dump())
    return task


@app.put('/tasks/{task_id}')
def update_task(task_id:int, updated_task:Task):
    for task in tasks:
        if task['id'] == task_id:
            if updated_task.title is not None:
                task['title'] = updated_task.title
            if updated_task.completed is not None:
                task['completed'] = updated_task.completed
            return task
    raise HTTPException(status_code=404, detail='Task Not Found')


@app.delete('/tasks/{task_id}')
def delete_task(task_id:int):
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    return {'Message': f'Task ID {task_id} Deleted!'}