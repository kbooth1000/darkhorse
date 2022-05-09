import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

import Head from '../components/Head';

const About = () => {

  return <div className="About">
    <Layout title="Our Story">
      <Head title="Our Story" />

      <div className="entry-content">

        <div id="attachment_153" style={{width: '310px', marginLeft: '1rem'}} className="wp-caption alignnone">
          <img src="https://www.darkhorsewoodworks.com/dh1/static/about2-2c054d43028dc2ccd760a662e8db5f1f.jpeg" alt="Who knew this would turn into a lifelong passion?" width="270" height="184" />
            <p id="caption-attachment-153" className="wp-caption-text">Who knew this would turn into a lifelong passion?
            </p>
            </div>
            <p><strong>Family legacy</strong></p>
            <p>When working in my studio, I often think about how much I enjoy what I do and how lucky I am to make a living doing work that I love.</p>
            <p>Woodworking has been a lifelong passion of mine, stretching all the way back to childhood, when I would spend hours with my grandfather in his workshop. For a 5-year-old, filing a piece of scrap wood into a pile of sawdust was pretty exciting.</p>
            <p>I think of woodworking as being in my DNA. My great-grandfather was a German woodworker who immigrated to the United States late in the 19th century, and I’m amazed at the artistry he created using the tools of his day. His work is truly inspiring and led me to carry on his tradition of craftsmanship. I hope he would be pleased with the pieces his great-grandson creates by combining Old World techniques with New World ideas.</p>
            <p><strong>The Dark Horse tradition</strong></p>
            <p>Turning a passion into a profession is extremely satisfying.I built commissioned pieces for nearly 25 years, moonlighting while working day jobs in the technology and construction management industries.Then I decided it was time for a change and turned my wood-working side line into a full-time endeavor.</p>
            <p> Dark Horse Woodworks opened in 2007 in Atlanta’s Metropolitan Business and Arts District, a historic warehouse complex that has been transformed into a thriving center for art studios, galleries and workshops.</p>
            <p><strong>Industry leadership</strong></p>
            <p>In 2012, Dark Horse joined the Cabinet Makers Association (CMA), an industry group for shops throughout the US and Canada. We have been recognized by the CMA with many Wood Diamond Awards for our work, and I have taken on a leadership role with the organization.</p>
            <p>I’ve served as a member of the Board of Directors, as vice-president and am currently leading the board as president. I have shared my expertise at national industry meetings and hosted a shop tour for CMA members from across the country.</p>
            <p>Our involvement with the CMA has improved how I run my business, as well as improving our products. We’ve been exposed to both new materials and new ideas that have enhanced our manufacturing process. Along the way, I’ve gained a few mentors who are always at the other end of the phone when I need help with unusual problems.</p>
            <p>All of this means that the work we do for you follows the latest, greatest industry guidance and expertise.</p>
            <p><strong>Versatility</strong></p>
            <p>The Dark Horse Studios team specializes in contemporary large-scale cabinetry and other projects for kitchens, living areas, bathrooms, libraries and beyond.</p>
            <p>A custom design is a collaboration between you and the Dark Horse design-craft team. We’re always excited to talk with you about your project and look at the ways we could work together to bring your ideas to life.</p>
            <p><Link to="contact">Click here to contact us about your project.</Link></p>
            <p>The Dark Horse team values working with clients who appreciate the distinction of custom, finely crafted cabinetry and furniture, and we find the design process as satisfying as the building process.</p
            ><p>We enjoy meeting and getting to know our clients, finding out what they believe is important, and incorporating their sense of style into a unique project.</p>
            <p>Our collaborations with innovative design and architecture firms have led to awards as well as coverage in national publications such as <em>Dwell</em> magazine and <em>The New York Times</em>.</p>
            <p>Thanks for taking time to learn more about Dark Horse Woodworks.</p>
            <p>~ Chris Dehmer</p>
            </div>


    </Layout>
  </div>
}
export default About;