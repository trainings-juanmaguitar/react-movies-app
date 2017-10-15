import React from 'react';
import { Pagination } from 'react-bootstrap'

const _Pagination = props => {
  const { handleSelectPage, totalPages, totalResults, query, page } = props
  return (
    <div className="Pagination">
      <h1>
        Found { totalResults } movies
        {
          query &&
          <span>for: <strong>"{ query }"</strong></span>
        }
        
      </h1>
      <h4>Showing results from { page*20-20+1 } to { page === totalPages ? totalResults : page*20 }</h4>
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={ totalPages }
        maxButtons={5}
        activePage={ page }
        onSelect={ handleSelectPage } 
      />
    </div>
  )
}

export default _Pagination;
