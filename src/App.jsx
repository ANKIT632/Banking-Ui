import styles from './style';
import { Navbar,Hero,Stats,Billing,Business,CardDeal,Testimonals,CTA,Footer,Clients } from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
          <Navbar/>
         </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonals/>
          <Clients/>
          <CTA/>
          <Footer/>

        </div>
      </div>
    </div>
  )
}

export default App