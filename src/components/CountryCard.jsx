export default function CountryCard(props) {
    return ( 
    <div className="card">
        <div className="img-container">
            <img src={props.item.picUrl} alt='Location' className="card--img" />
        </div>
        <div className="text-container">
            <div className="card--loc">
                <p className="card--loc-name"><i class="fa-solid fa-location-dot" style={{color: 'rgba(250, 50, 0, 0.6)'}}></i>{props.item.location}</p>
                <a href={props.item.googleMapsUrl} className='card--link'>View on Google Maps</a>
            </div>
            <h1 className="card--title">{props.item.title}</h1>
            <h6 className="card--date">{props.item.startDate} - {props.item.endDate}</h6>
            <p className="card--desc">{props.item.description}</p>
        </div>
    </div>
)}