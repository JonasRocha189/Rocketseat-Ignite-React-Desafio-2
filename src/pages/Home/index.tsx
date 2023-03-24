import styles from './styles.module.css'

import CoffeeDelivery from '../../assets/coffee-delivery.png'
import { Coffee } from '../../components/Coffee'

export function Home() {
  return (
    <>
      <section>
        <div>
          <div>
            <h1>Econtre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div>
            <span>Compra simples e segura</span>
            <span>Compra simples e segura</span>
            <span>Compra simples e segura</span>
            <span>Compra simples e segura</span>
          </div>
        </div>
        <div>
          <img src={CoffeeDelivery} alt="" />
        </div>
      </section>

      <section>
        <h2>Nossos Cafés</h2>

        <div className={styles.grid}>
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
        </div>
      </section>
    </>
  )
}
