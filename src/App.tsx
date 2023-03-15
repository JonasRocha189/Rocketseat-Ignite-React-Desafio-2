// Styles
import './global.css'
import styles from './App.module.css'

// Images
import Logo from './assets/logo.svg'
import CoffeeDelivery from './assets/coffee-delivery.png'

// Icons
import Pin from './assets/icons/pin.svg'
import CartYellow from './assets/icons/cart-yellow.svg'

function App() {
  return (
    <>
      <header>
        <div className={styles.header}>
          <img src={Logo} alt="Coffee Delivery" />

          <div>
            <span>
              <img src={Pin} alt="" /> São José dos Campos, SP
            </span>
            <span>
              <img src={CartYellow} alt="" />
              Carrinho
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.container}>
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
      </main>
    </>
  )
}

export default App
