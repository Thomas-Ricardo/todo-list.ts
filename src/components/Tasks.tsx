import { useEffect, useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import { ListTasks } from "./ListTasks";

import { NewTask } from "./NewTask";

const LOCAL_STORAGE_KEY = "todo";

export interface TheTask {
    id: string;
    content: string;
    isCompleted: boolean;
  }

export function Tasks() {
    const [tasks, setTasks] = useState<TheTask[]>([]);

    function loadStorageTasks() {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(saved) {
            setTasks(JSON.parse(saved));
        }
    }

    useEffect(() => {
        loadStorageTasks();
    }, []);

    function saveTasks(newTasks: TheTask[]) {
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    }

    function handleCreateNewTask(newTask: string) {
        const newTasks = [
            ...tasks,
            {
                id: uuidv4(),
                content: newTask,
                isCompleted: false,
            }
        ];

        saveTasks(newTasks)
    }

    function toggleTaskCompletedById(taskId: string) {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            }
            return task;
        });
        
        saveTasks(newTasks);

    }

    function deleteTaskById(taskId: string) {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        saveTasks(newTasks);
    }

    return (
            <>
            <NewTask  onCreatedTask={handleCreateNewTask}/>
            <ListTasks 
                tasks={tasks} 
                onCompleteTask={toggleTaskCompletedById} 
                onDeleteTask={deleteTaskById}
            />
            </>
        )

}