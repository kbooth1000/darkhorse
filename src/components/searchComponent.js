
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'gatsby';
import parse from 'html-react-parser';

const Search = () => {

  const [data, setData] = useState([{ hits: [] }]);
  const [searchQuery, setSearchQuery] = useState('mahogany');

  useEffect(() => {
    async function getResponse() {
      const result = await axios(
        'http://www.atlantavoices.com/dh/wp-json/wp/v2/searchResults',
      );
      console.log('RESULT: ', result);

      setData(result.data);
    }
    getResponse();
  }, []);



  const removeLinebreaks = str => str.replace(/(\r\n|\n|\r)/gm, "");

  const removeWPShortcodes = str => str?.toString().replace(str?.slice(str.indexOf('['), str.indexOf(']') + 1), '');

  const htmlNodesFromString = data => data
    .filter(post => post.searchData)
    .filter(post => post.searchData.toString().includes(searchQuery))
    .map(
      post => Array.from(parse(post.searchData.toString()))
        .filter(node => (node.type === undefined))
      // .filter(node => (node.type != 'a' && node.type != 'img'))
    )

  const onlyTextFromHtml = htmlNodes => htmlNodes
    .map(
      paragraphs => paragraphs.map(p => {
        let p1 = removeLinebreaks(p);
        let p2 = removeWPShortcodes(p1);
        return p2;
      }
      )
        .join(' ')
    )

    let articleTexts = onlyTextFromHtml(htmlNodesFromString(data));

      const wordsSurroundingSearchQuery = (str, queryWord) => {
        const splitStr = str.split(' ');
        const wordIndex = splitStr.indexOf(splitStr.filter(subst => subst.includes(queryWord))[0]);
        return `...${splitStr.slice(wordIndex - 15 || 0, wordIndex + 15 || splitStr.length).join(' ') }...`;
        
      }
  console.log('DATA: ',
  articleTexts,
  );

  let searchResultsList = articleTexts.map(txt => wordsSurroundingSearchQuery(txt, searchQuery)
 )

 console.log('searchResultsList:', searchResultsList)

  const excerptCharLimit = 190;
  return (
    <div className="Search">

      <div className="search-results">
        {data
          .filter(post => post.searchData)
          .filter(post => post.searchData.toString().toLowerCase().includes(searchQuery))
          .map((post, i) => <article style={{ margin: '2rem' }} key={post.ID}>
            <Link to={post.pathname}><h3 className="blog-title">{post.post_title}</h3></Link>
            <div className="search-excerpt">
              {searchResultsList[i]}
              {/* { post =>  wordsSurroundingSearchQuery(txt, searchQuery) } */}
            </div>
          </article>)
        }
      </div>
    </div>
  )
}

export default Search;
