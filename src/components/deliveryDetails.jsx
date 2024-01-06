import Linebreak from "./lineBreak";

const DeliveryDetails = () => {
  return (
    <>
      <div className="delivery-con">
        <div className="delivery-header-con">
          <h1>Delivery details</h1>
        </div>
        <Linebreak />
        <div className="delivery-det-con">
          <div className="contact-det-header">
            <h3>Contact details</h3>
          </div>
          <form action="post" className="delivery-det-form">
            <div className="delivery-input-area">
              <label htmlFor="">Name: </label>
              <input size="30" type="text" />
            </div>
            <div className="delivery-input-area">
              <label htmlFor="">E-mail: </label>
              <input size="30" type="text" />
            </div>
            <div className="delivery-input-area">
              <label htmlFor="">Phone number: </label>
              <input size="30" type="text" />
            </div>
          </form>
          <Linebreak />
          <div className="contact-det-header">
            <h3>Delivery details</h3>
          </div>
          <form action="post" className="delivery-det-form">
            <div className="delivery-input-area">
              <label htmlFor="">First line of adrress: </label>
              <input size="30" type="text" />
            </div>
            <div className="delivery-input-area second-input ">
              <input className="" size="30" type="text" />
            </div>
            <div className="delivery-input-area">
              <label htmlFor="">Postcode: </label>
              <input size="30" type="text" />
            </div>
            <div className="delivery-input-area">
              <label htmlFor="">City: </label>
              <input size="30" type="text" />
            </div>
          </form>
        </div>
        <div className="delivery-button-con">
          <div className="summary-button-con btn">
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryDetails;
