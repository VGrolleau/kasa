import '../../utils/styles/Home.css';
import Header from '../../components/Header';
import BannerHome from '../../components/BannerHome';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import { useEffect } from "react"

function Home() {
  useEffect(() => { document.title = "Kasa - Accueil" })
  return (
    <div className='home'>
      <Header />
      <BannerHome />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
