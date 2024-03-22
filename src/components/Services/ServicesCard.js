function ServicesCard(props) {
  return (
    <div className="services-container">
      <div className="services-card">
        <div className="services-img">
          <img src={props.image} alt="cut" />
        </div>
        <h2>{props.name}</h2>
        <div className="services-card-details">
          <div className="services-heading">
            <h2>{props.name}</h2>
          </div>
          <div className="services-details">
            <div className="tr">
              <div>Short Hair Cut</div>
              <div>&#8377; 250/-</div>
            </div>
            <div className="tr">
              <div>Long Hair Cut</div>
              <div>&#8377; 250/-</div>
            </div>
            <div className="tr">
              <div>Bang</div>
              <div>&#8377; 250/-</div>
            </div>
            <div className="tr">
              <div>Creative Cut</div>
              <div>&#8377; 250/-</div>
            </div>
            <div className="tr">
              <div>Cut + Blow Dry</div>
              <div>&#8377; 250/-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
