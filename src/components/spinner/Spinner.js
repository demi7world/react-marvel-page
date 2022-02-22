import loading from './loading.gif'

const Spinner = () => {
    return (
        <img src={loading} alt="Loading" style={{display: 'block', margin: '0 auto', height: '250px', objectFit: 'contain'}} />
    )
}

export default Spinner;