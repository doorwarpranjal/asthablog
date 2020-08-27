import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Navbar from '../components/navbar/Navbar'
import contactStyles from '../styles/contactStyles.module.scss'

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <Navbar />
      <div className={contactStyles.divider}></div>



      <div className={contactStyles.mainContainer}>


        <div className={contactStyles.imageContainer}>
          <img src='https://bridge283.qodeinteractive.com/wp-content/uploads/2019/11/p2-img-01.jpg' />
        </div>


        <div className={contactStyles.innerContainer}>
          <div className={contactStyles.leftContainer}>

            <h3 className={contactStyles.formHeading}>Drop us a message....</h3>
            <form className={contactStyles.form}>
              <input placeholder="First Name" type="text" className={contactStyles.formInput} />
              <input placeholder="youremail@gmail.com" type="email" className={contactStyles.formInput} />
              <input placeholder="your Message ..." type="textarea" className={contactStyles.formInput} />
              <button className={contactStyles.sendButton}>SEND</button>
            </form>


            <div className={contactStyles.contactInfoDiv}>

                <div className={contactStyles.textSection}>
                  <h4 className={contactStyles.textHeading}>Email</h4>
                  <h6 className={contactStyles.textInnerText}> mybridge@example.com</h6>
                  <h6 className={contactStyles.textInnerText}>mybridge@example.com</h6>
                </div>
                
                <div className={contactStyles.textSection}>
                  <h4 className={contactStyles.textHeading}>ADDRESS</h4>
                  <h6 className={contactStyles.textInnerText}> 106 boulevard Malesherbes</h6>
                  <h6 className={contactStyles.textInnerText}>Tel: +33 (0)1 80 48 96 00</h6>
                </div>



            </div>

          </div>




          <div className={contactStyles.rightContainer}>

          </div>
        </div>



      </div>







    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`