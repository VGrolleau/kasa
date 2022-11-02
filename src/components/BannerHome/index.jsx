import '../../utils/styles/Banner.css'
import ImageBanner from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'

function BannerHome() {
    return (
        <section className="banner" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url(${ImageBanner})`
        }}>
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default BannerHome