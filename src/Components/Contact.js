import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span></span></h1>

            </div>

            

            <div className="nine columns main-col">
                  <h2>Contactez moi !</h2>
                  <br></br>

                  <p className="address">
						   {name}<br />
						   {phone} <br />
						   {email}
					   </p>

            </div>

         </div>

   </section>
    );
  }
}

export default Contact;
