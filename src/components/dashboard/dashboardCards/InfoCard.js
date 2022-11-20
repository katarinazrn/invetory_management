import './InfoCard.css';

const InfoCard = ({ text, value }) => {

    return (
        <div className="info-card">
            <h4>{text}</h4>
            <b>{value}</b>
        </div>
    )
}

export default InfoCard;