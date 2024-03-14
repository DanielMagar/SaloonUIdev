import cut from '../../image/services/cut.jpg';

function ServicesCard() {
  return (
    <div className="services-container">
      <div className="services-card">
        <div className="services-img">
          <img src={cut} alt="cut" />
        </div>
        <h2>Cut</h2>
        <div className="services-card-details">
          {/* <div className="services-heading">
            <h2>Hair</h2>
          </div> */}
          {/* <div className="services-details">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
