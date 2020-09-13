
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'gatsby';

const Search = () => {

  const [showSearch, setShowSearch] = useState('');
  const [searchClass, setSearchClass] = useState('');
  const [data, setData] = useState([{ hits: [] }]);
  const [searchQuery, setSearchQuery] = useState('somethingunlikely');

  useEffect(() => {
    async function getResponse() {
      const result = await axios(
        'http://www.atlantavoices.com/dh/wp-json/wp/v2/searchResults',
      );

      setData(result.data);
    }
    getResponse();
  }, []);

  const removeLinebreaks = str => str.replace(/(\r\n|\n|\r)/gm, "");

  const removeWPShortcodes =  string =>{
    const str = string.toString()
    let valid = true;
    return str?.split('').map(
          char =>  { 
            if(char === '[') valid = false;
            if(char ===  ']') valid = true;
            return (valid) ? (char===']' ? ' ' : char) : ''
      }    
    ).join('')
  }

  const removeHTMLTags = string =>{
    const str = string.toString()
    let valid = true;
    return str?.split('').map(
          char =>  { 
            if(char === '<') valid = false;
            if(char ===  '>') valid = true;
            return (valid) ? (char==='>' ? ' ' : char) : ''
      }    
    ).join('')
  }

  const htmlNodesFromString = data => data
    .filter(post => post.searchData)
    .filter(post => post.searchData.toString().toLowerCase().includes(searchQuery))
    
    .map(
      post => removeHTMLTags(post.searchData.toString())
    )
    .map(
      post => removeLinebreaks(post)
    )
    .map(
      post => removeWPShortcodes(post)
    )

  const onlyTextFromHtml = htmlNodes => htmlNodes
    .map(
         p =>  p   // GET RID OF THIS FUNCTION
      //   let p1 = removeLinebreaks(p);
      //   let p2 = removeWPShortcodes(p1);
      //   return p1;
      // }
      )
        // .join(' ')
    

    let articleTexts = onlyTextFromHtml(htmlNodesFromString(data));

      const wordsSurroundingSearchQuery = (str, queryWord) => {
        const splitStr = str.split(' ');
        const wordIndex = splitStr.indexOf(splitStr.filter(subst => subst.includes(queryWord))[0]);
        return `...${splitStr.slice((wordIndex - 8 < 0) ? 0 : wordIndex - 8, (wordIndex + 8 >= splitStr.length) ? splitStr.length : wordIndex + 8).join(' ') }...`;
        
      }

  let searchResultsList = articleTexts.map(txt => wordsSurroundingSearchQuery(txt, searchQuery)
 )

 const minSearchChars = 3;

 const handleSearchChange = e => {
   setSearchQuery((e.target.value.length >= minSearchChars) ? 
   e.target.value :
   'somethingunlikely')
}

  return (
    <div className={`Search ${searchClass}`} onMouseLeave={()=>setSearchClass('unhover')} onMouseEnter={()=>setSearchClass('')} role="search" >
    <label htmlFor="searchbar" style={{ paddingRight: `10px` }}>
                Search:
              </label>
              <input
                onFocus={()=>setShowSearch('show')}
                onBlur={()=>setShowSearch('')}
                id="searchbar"
                onChange={handleSearchChange}
                placeholder="Search"
              />
      <div className={`search-results ${showSearch}`}
        onMouseLeave={()=>setShowSearch('')}
      >
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