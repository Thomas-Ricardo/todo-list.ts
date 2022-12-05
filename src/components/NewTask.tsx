import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css'

interface PropsHeader {
    onCreatedTask: (taskTitle: string) => void;
  }

export function NewTask( { onCreatedTask }:PropsHeader) {

    const[content, setContent] = useState("");

    function handleCreateNewTask(e: FormEvent) {
        e.preventDefault();

        if(content) {
            onCreatedTask(content);
            setContent("");
        }
    }

    function onChangeContent(e: ChangeEvent<HTMLInputElement>) {
        setContent(e.target.value);
    }
    
    return (
        <div className={styles.content}>
        <form onSubmit={handleCreateNewTask} className={styles.tasksForm}>
            <input 
                name="task"
                placeholder="Adicione uma nova tarefa"
                type="text"
                value={content}
                onChange={onChangeContent}
                required
            />
            <div>
                <button>
                    <strong>Criar</strong><PlusCircle size={25} />
                </button>
            </div>
        </form>
    </div>
    )
}