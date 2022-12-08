import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import {Post} from "./Post";

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Caio"
            content="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus tenetur laborum reiciendis tempora dignissimos ducimus, quibusdam voluptatibus voluptas autem, praesentium dolorum ullam id. Dolorum distinctio fugit, iusto reiciendis doloremque eum."
          />
          <Post
            author="Rafael"
            content="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus tenetur laborum reiciendis tempora dignissimos ducimus, quibusdam voluptatibus voluptas autem, praesentium dolorum ullam id. Dolorum distinctio fugit, iusto reiciendis doloremque eum."
          />

        </main>
      </div>
    </div>
  )
}


