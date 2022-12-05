import { useState } from 'react'
import { Header } from './components/Header'

import styles from './App.module.css'
import { Tasks } from './components/Tasks'

export function App() {

const ex = "asdfg"
  return (
    <div>
      <Header />
    <div className={styles.wrapper}>
      <main>
        <Tasks />
      </main>
    </div>
    </div>
  )
}


