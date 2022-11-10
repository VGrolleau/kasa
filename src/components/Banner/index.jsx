import '../../utils/styles/Banner.css'

function Banner(props) {
    return (
        <section className={props.className} style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url(${props.image})`
        }}>
            <h1 style={{ display: props.styleH1 }}>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner