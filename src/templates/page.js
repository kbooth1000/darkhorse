//import React from 'react';

//import Layout from '../components/layout';
//import Head from '../components/head';

//import { graphql } from 'gatsby';


//const Page = props => {
//  console.log('***********#################PAGE***********************', props.data.wp)

//  const { date, author, content, title } = props.data.wp.pageBy

//  const postContent = props.data.wp.pageBy.title;


//  return (
//    <Layout>
//      <Head title={title} />
//      <h1>{title}</h1>
//      <p class="entry-meta">
//        <time className="entry-time" itemProp="datePublished" dateTime="2019-07-19T14:39:30-04:00">
//          {date}
//        </time> by
//      <span className="entry-author vcard" itemProp="author" itemScope="itemscope" itemType="http://schema.org/Person">
//          <span> <strong> {author.name}</strong>
//          </span>
//        </span>
//      </p>
//      <div dangerouslySetInnerHTML={{ __html: content }}>
//      </div>
//    </Layout>
//  )
//}

//export default Page;


//export const query = graphql`
//  query($id: ID!) {
//    wp {
//      pageBy(id: $id) {
//        date
//        author {
//          node {
//              name
//            }
//        }
//        content(format: RENDERED)
//        title(format: RENDERED)
//      }
//    }
//  }
//`