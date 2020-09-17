import React, { Component } from 'react';

class Resume extends Component {
  render() {

    const divStyle = {
      color: "#f04f18",
      fontWeight: "bold",
    };

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description} <br></br> <span style={divStyle}>{work.skills}</span></p>
            
        </div>
      })
      var languages = this.props.data.skillss.languages;
      var frameworks = this.props.data.skillss.frameworks;
      var bdds = this.props.data.skillss.bdds;
      var cms = this.props.data.skillss.cms;
      var deployment = this.props.data.skillss.deployment;
      var methods = this.props.data.skillss.methods;
    }



    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Formation</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Expérience pro</span></h1>
         </div>
         <div className="nine columns main-col">
           <p>Expérience professionnelle en lien direct avec le développement. Vous pouvez consulter mon CV pour avoir un détail des expériences passées.</p>
          {work}
        </div>
    </div>


    <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}  
          </p>
        </div>

        <div className="nine columns main-col">
          <h3>Langages</h3>
          <p className="info">{languages}</p>

          <h3>Frameworks</h3>
          <p className="info">{frameworks}</p>

          <h3>Bases de données</h3>
          <p className="info">{bdds}</p>

          <h3>CMS</h3>
          <p className="info">{cms}</p>

          <h3>Déploiement</h3>
          <p className="info">{deployment}</p>

          <h3>Méthodes</h3>
          <p className="info">{methods}</p>
        </div>
      </div>
   </section>
    );
  }
}

export default Resume;
