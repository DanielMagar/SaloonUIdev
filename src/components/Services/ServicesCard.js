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
            {props.servicesList.map((list) => {
              return (
                <div className="tr">
                  <div>{list.name}</div>
                  <div>&#8377; {list.price}/-</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
