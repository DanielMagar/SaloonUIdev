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
            <table>
              <tr>
                <td>Short Hair Cut</td>
                <td>250/-</td>
              </tr>
              <tr>
                <td>Long Hair Cut</td>
                <td>250/-</td>
              </tr>
              <tr>
                <td>Bang</td>
                <td>250/-</td>
              </tr>
              <tr>
                <td>Creative Cut</td>
                <td>250/-</td>
              </tr>
              <tr>
                <td>Cut + Blow Dry</td>
                <td>250/-</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
