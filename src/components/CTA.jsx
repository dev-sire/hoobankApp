import styles from "../styles"
import Button from "./Button"

const CTA = () =>(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-black-gradient-2 box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's try our service now!</h2>
      <p className={styles.paragraph}>Everything you need to accept payments and grow your businedd anywhere on the planet</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button/>
    </div>
  </section>
)

export default CTA