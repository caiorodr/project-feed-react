import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment() {
    console.log('delete comment');
  
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/caiorodr.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="23 de Dezembro às 08:13h" dateTime="2022-12-23"> Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'> 
            <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
              <span>20</span>
          </button>
        </footer>
      </div>


    </div>
  )
}