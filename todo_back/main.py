from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI()

class Task(BaseModel):
    id: int
    title: str
    completed: bool
    
