import EVM from '../components/EVM'
import Party from '../components/Party'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div id={styles.container}>
        <h1 id={styles.hello}>VOTE.app</h1>
      </div>
      <Party/>
      <EVM/>
    </div>
  )
}
