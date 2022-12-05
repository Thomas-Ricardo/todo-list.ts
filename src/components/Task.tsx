import { TheTask } from "./Tasks";
import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface TaskProps {
    task: TheTask;
    onCompleteTask: (taskId: string) => void;
    onDeleteTask: (taskId: string) => void;
}
export function Task({ task, onCompleteTask, onDeleteTask}: TaskProps) {
    
    return (
        <footer className={styles.task}>
            <button
                className={styles.checkedContent}
                onClick={() => onCompleteTask(task.id)}
            >
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.content}
            </p>

            <button className={styles.deleteButton} onClick={() => onDeleteTask(task.id)} title="Deletar Task">
                <Trash size={25} />
            </button>
        </footer>
    )
}