// import './index.scss'
import styles from './index.module.scss'
import './other.css'
export function Header(){
    return <div>
        <p className={styles.header}>This is Header</p>
        <h3 className='currentHad'>我是标题</h3>
    </div>
}