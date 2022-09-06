import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
      return <div>
          Here's the first page 
          <Link to="/pagetwo">Go to page 2</Link>
          </div>
}

const PageTwo = () => {
    return <div>
            Here's the second page
            <Link to='/'>Back to page 1</Link>
          </div>
}

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={PageOne} />
            <Route path='/pagetwo' component={PageTwo} />
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App;