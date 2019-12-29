import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import consultation from '../images/consultation.jpg'
import design from '../images/design.jpg'
import development from '../images/development.jpg'
import data from '../images/data.jpg'
import iteration from '../images/iteration.jpg'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="services"
          className={`${this.props.article === 'service' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>

          <h3>Consultation</h3>
          <span className="image main">
            <img src={consultation} alt="" />
          </span>
          <p>
          Where do you want to go? How do we get you there? Which technologies and digital solutions?
          </p>
          <p>
          CentiDigital will walk you through the process from the beginning to launch. We show you the opportunities for growth and risks in the latest technologies. We have a deep understanding of the advantages and disadvantages of different system architectures and will support you in selecting the best digital solutions for your business.
          </p>

          <h3>Design</h3>
          <span className="image main">
            <img src={design} alt="" />
          </span>
          <p>
          We understand people are visual creatures. Visual design has a significant impact on how we understand products and services. The importance of effective and captivating UX and UI design cannot be overstated. 
          </p>
          <p>
          At CentiDigital, we implement modern design techniques that are always responsive and intriguing. We don't throw your ideas into a template like most other digital creators do because we value your brand and business. 
          </p>

          <h3>Development</h3>
          <span className="image main">
            <img src={development} alt="" />
          </span>
          <p>
          We develop your digital solutions using modern technologies and techniques. We are not bound to a specific set of tools, but have extensive capabilities in a vast assortment of technologies. This allows us to choose the right ones that best suit your needs. From web to mobile development, our work is always built for reliability, flexibility, and scale.
          </p>

          
          <h3>Tracking &amp; Data Analysis</h3>
          <span className="image main">
            <img src={data} alt="" />
          </span>
          <p>
          We understand the importance of evaluating data points to guide the work we do. We use quantitative and qualitative tracking tools to measure your web and mobile app performance, so that we can advise on future ideas and implementations. We are a data and results-driven company that will always be looking for the best usage of data to benefit your business.
          </p>
          
          
          <h3>Iteration</h3>
          <span className="image main">
            <img src={iteration} alt="" />
          </span>
          <p>
          Successful businesses understand the importance of revision and iteration. Digital technologies are improving and growing at a rapid pace. CentiDigital is at the forefront of design and development trends. We can assure you that your digital solutions will always be current and relevant.
          </p>

          {close}
        </article>

        <article
          id="process"
          className={`${this.props.article === 'process' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Process</h2>

          <p>
          We understand that your web and mobile solution reflects your brand. It's where clients begin learning about your taste, attention to detail, and business philosophy - it's the most significant point of contact for any potential client's journey. Your revenue will grow if you truly understand your audience and create a smooth and engaging process for them. 
          </p>
          <p>
          CentiDigital's strategic model is a 7-step process to ensuring we achieve a clear plan, captivating design, sharp development, and most importantly, business growth.
          </p>

          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>Learning &amp; Mapping</h3>
          <h6>01 / 07</h6>
          <p>
          Inspired by the renowned Google Ventures Design Sprint methodology, we use our CD Design Model to start learning all about you, your business and your clients with the help of powerful market research and data analysis tools.
          </p>

          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>UX Design</h3>
          <h6>02 / 07</h6>
          <p>
          We leverage insights from the CD Design Model to plan and design a captivating user experience catered to your client base.
          </p>

          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>UI Design</h3>
          <h6>03 / 07</h6>
          <p>
          With proven innovative design tools such as Adobe Xd, Figma and Sketch, we collaborate with you to create sophisticated and elegant designs that incorporate the latest trends and capabilities.
          </p>

          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>Develop</h3>
          <h6>04 / 07</h6>
          <p>
          CentiDigital uses an agile development methodology to ensure efficient and timely development. With extensive capabilities in a vast assortment of development tools, choosing the right development tools for the job is just as important as programming effective and dynamic code. We don't use cheap, bloated templates that affect performance and optimization. Our developers create components that are catered to your specific web and mobile solutions.
          </p>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>Test</h3>
          <h6>05 / 07</h6>
          <p>
          We believe testing is one of the most important and overlooked steps in creating a high quality product. That is why our QA consists of testing for performance, speed, optimization and accessibility using industry standard reports and metrics. 
          </p>

          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>Deploy</h3>
          <h6>06 / 07</h6>
          <p>
          Going live is arguably the most exciting part of this entire process but can also be the most stressful. Whether it is getting setup with hosting or submitting to the app store, we are here to help you along the way to getting published, so you can start monetizing.
          </p>

          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>Track &amp; Learn</h3>
          <h6>07 / 07</h6>
          <p>
          Deployment is always followed by measurement and iteration. Using quantitative and qualitative tracking tools, we help you identify opportunities to improve and update based on data analytics. Our motto is: “Always Getting Better”, and that’s what we want for our clients, too.
          </p>
          
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
          CentiDigital is a digital product development agency based in Dallas, TX.  We deliver impactful customer experiences driven by innovation and insight. 
          </p>
          <p>Using a a data-driven approach, our company works with all industries and oversees every step of design &amp; development, from strategy to execution to optimization.</p>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h3>Our Mission</h3>
          <p>We believe building meaningful and engaging digital experiences is not only about hiring the best agency, but also about choosing the one that will be able to make the most of your idea and will push it further than you could have imagined. </p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/CentiDigital" target="_blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/CentiDigital" target="_blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/CentiDigital" target="_blank" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:alvin@centidigital.com"
                className="icon fa-envelope"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
