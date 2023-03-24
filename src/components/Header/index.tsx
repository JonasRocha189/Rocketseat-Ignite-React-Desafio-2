import styles from './styles.module.css'

import Logo from '../../assets/logo.svg'

import Pin from '../../assets/icons/pin.svg'
import CartYellow from '../../assets/icons/cart-yellow.svg'

export function Header() {
  return (
    <header>
      <div className={styles.header}>
        <img src={Logo} alt="Coffee Delivery" />

        <div className={styles.infoContainer}>
          <span className={styles.location}>
            <img src={Pin} alt="" /> São José dos Campos, SP
          </span>
          <div className={styles.cart}>
            <img src={CartYellow} alt="" />
            <span className={styles.cartNumber}>3</span>
          </div>
        </div>
      </div>
    </header>
  )
}
