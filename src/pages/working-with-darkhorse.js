import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';

const WorkingWith = () => {
  return <div className="WorkingWith">
    <Layout title="Working With Darkhorse">
      <Head title="Working With Darkhorse" />
      <div className="WorkingWith-page">
        <div className="entry-content">
          <p>Designing custom cabinetry, shelving and other home furnishings allows you to choose all of the details – style, materials, color, finish and size.</p>
          <p>In the design stage, we talk about styles you like and look at photos of cabinetry and furnishings that capture what you have in mind. We’ll talk about what you do and don’t like about those photos/styles, as well as the intended use and the rooms where the custom work will be located. If you’ve created a sketch of what you have in mind, we’ll look at that, too.</p>
          <p>Together, we’ll create a design that fits your needs and your desire for a one-of-a-kind creation. (Any architects and designers who are involved in your project will be part of this process as well, of course.)</p>
          <p>After we’ve worked together to determine the design elements, Dark HorseWoodworks will provide a proposal stating the price and approximate delivery date.</p>
          <p>We often have a backlog of projects that can last anywhere from a few weeks to a few months, and we’ll always give you realistic expectations about timing. Unless otherwise stated, all price quotes include setup and installation.</p>
          <p><strong>Payment</strong></p>
          <p>We are pleased to accept cash, checks, Visa, MasterCard, American Express and Discover.</p>
          <p><strong>Warranty</strong></p>
          <p>We stand behind the products we create. Typically, our work is intended for normal indoor use. Should our furniture or cabinetry fail at any time during<br /> the lifetime of the original owner because of issues with our workmanship or material, we will either repair or replace it at no cost.</p>
          <p><strong>If you are interested in discussing a project, please fill out the form below:</strong></p>
          <p><Link to="/contact">Click here to contact us about your project.
          </Link></p>
      </div>
      </div>
    </Layout>
            </div>
}
export default WorkingWith;