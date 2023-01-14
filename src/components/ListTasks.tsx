import { ClipboardText } from "phosphor-react";
import styles from "./ListTasks.module.css";

import { TheTask } from "./Tasks";
import { Task } from  "./Task";

interface ListTasksProps {
    tasks: TheTask[];
    onCompleteTask: (taskId: string) => void;
    onDeleteTask: (taskId: string) => void;
}

export function ListTasks({ tasks, onCompleteTask, onDeleteTask }: ListTasksProps) {
    
    const tasksCreatedCount = tasks.length;

    const tasksCompletedCount = tasks.filter((task) => task.isCompleted).length;

    const tasksCompletedStr =  " de ";
    
    const strTask = tasksCompletedStr.toString()
    
    const tasksCompletedCountStr = tasksCompletedCount.toString();
    
    const tasksCompletedCountOff = tasksCreatedCount.toString();

    const tasksCompletedCountOn = tasksCompletedCountStr + strTask + tasksCompletedCountOff;


    return (
        <div className={styles.tasksList}>
            <header className={styles.tasksListHeader}>
                <strong className={styles.tasksCreated}>Tarefas criadas <span>{tasksCreatedCount}</span></strong>
                <strong className={styles.tasksCompleted}>Tarefas concluídas <span>{tasks.length <= 0 ? tasksCompletedCountOff : tasksCompletedCountOn}</span></strong>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                <Task 
                    key={task.id}
                    task={task}
                    onCompleteTask={onCompleteTask}
                    onDeleteTask={onDeleteTask}
                />
                ))}
                {tasks.length <= 0 && (
                <article className={styles.listEmpty}>
                    <ClipboardText size={50} />
                    <div>
                        <p>Você não tem ainda tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </article>
                )}
            </div>
        </div>
    )
};