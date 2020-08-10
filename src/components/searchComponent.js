
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'gatsby';
import parse from 'html-react-parser';

const Search = () => {

  const [data, setData] = useState([{ hits: [] }]);
  const [searchQuery, setSearchQuery] = useState('somethingunlikely');

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


  const replaceAll = (searchString, replaceString, str) => {
    return str.split(searchString).join(replaceString);
  }

  const removeLinebreaks = str => str.replace(/(\r\n|\n|\r)/gm, "");

  const removeWPShortcodes = str => str?.toString().replace(str?.slice(str.indexOf('['), str.indexOf(']') + 1), '');

  const removeHTMLTags = string =>{
    const str = string.toString()
    let valid;
    return str?.split('').map(
          char =>  { 
            if(char === '<') valid = false;
            if(char ===  '>') valid = true;
            return (valid) ? (char==='>' ? ' ' : char) : ''
      }    
    ).join('')
    // return replaceAll(str?.slice(str.indexOf('<'), str.indexOf('>') + 1), '  ', str);
  }

  const htmlNodesFromString = data => data
    .filter(post => post.searchData)
    .filter(post => post.searchData.toString().toLowerCase().includes(searchQuery))
    .map(
      post => removeHTMLTags(post.searchData.toString())
      // Array.from(parse(post.searchData.toString()))
      //   .filter(node => (node.type === undefined  ||
      //     node.type === 'p'))
    )

  const onlyTextFromHtml = htmlNodes => htmlNodes
    .map(
         p => {
        let p1 = removeLinebreaks(p);
        let p2 = removeWPShortcodes(p1);
        return p2;
      }
      )
        // .join(' ')
    

    let articleTexts = onlyTextFromHtml(htmlNodesFromString(data));

      const wordsSurroundingSearchQuery = (str, queryWord) => {
        const splitStr = str.split(' ');
        const wordIndex = splitStr.indexOf(splitStr.filter(subst => subst.includes(queryWord))[0]);
        return `...${splitStr.slice(wordIndex - 8 || 0, wordIndex + 8 || splitStr.length).join(' ') }...`;
        
      }
  console.log('DATA: ',
  articleTexts,
  );

  let searchResultsList = articleTexts.map(txt => wordsSurroundingSearchQuery(txt, searchQuery)
 )

 console.log('searchResultsList:', searchResultsList)

 const minSearchChars = 3;

 const handleSearchChange = e => {
   setSearchQuery((e.target.value.length >= minSearchChars) ? 
   e.target.value :
   'somethingunlikely')
}

  const excerptCharLimit = 190;
  return (
    <div className="Search">
    <label htmlFor="searchbar" style={{ paddingRight: `10px` }}>
                Search:
              </label>
              <input
                id="searchbar"
                onChange={handleSearchChange}
                placeholder="Search"
                style={{ margin: `0 auto`, width: `400px` }}
              />
      <div className="search-results">
        {data
          .filter(post => post.searchData)
          .filter(post => post.searchData.toString().toLowerCase().includes(searchQuery))
          .map((rslt, i) => <article style={{ margin: '2rem' }} key={rslt.ID}>
            <Link to={rslt.pathname}><h3 className="blog-title">{rslt.post_title}</h3></Link>
            <div className="search-excerpt">
              {searchResultsList[i]}
            </div>
          </article>)
        }
      </div>
    </div>
  )
}

export default Search;