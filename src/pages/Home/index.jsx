import '../../utils/styles/Home.css';
import Banner from '../../components/Banner'
import ImageBanner from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'
import Card from '../../components/Card';
import { useEffect } from "react"
import Datas from '../../datas/logements.json'

function Home() {
  useEffect(() => { document.title = "Kasa - Accueil" })
  return (
    <div className='home'>
      <Banner className="banner" image={ImageBanner} styleH1="block" />
      <section className="cards">
        {Datas.map(data => {
          return <Card data={data} key={data.id} />
        })}

      </section>
    </div>
  );
}

export default Home;
