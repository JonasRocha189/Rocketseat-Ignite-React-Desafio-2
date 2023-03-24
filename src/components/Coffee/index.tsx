import styles from './styles.module.css'

export function Coffee() {
  return (
    <div className={styles.coffeCard}>
      <div className={styles.coffeInfo}>
        <img src="" alt="" />
        <span>Tradicional</span>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos miudos</p>
      </div>
      <div className={styles.coffePrice}>
        <span> R$ 9,90</span>
        <input type="number" min={1} step={1} />
        <button>Cart</button>
      </div>
    </div>
  )
}
