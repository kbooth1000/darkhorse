import React from "react"
import Search from "../components/SearchComponent"
import '../styles/searchStyles.css'

const SearchPage = () => (
  <div>
    <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
    </h1>
    <div style={{width:'290px'}}>
      <Search />
    </div>
  </div>
)

export default SearchPage
