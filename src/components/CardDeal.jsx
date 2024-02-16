import { card } from "../assets"
import styles ,{ layout } from "../styles"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem quis officia itaque accusamus rem ab mollitia nihil ad dicta?</p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card-image" className="w-[100%] h-[100%] " />
    </div>
  </section>
)

export default CardDeal