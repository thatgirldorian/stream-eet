import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'


const App = () => {
  return (
      <div>
        <h1> 
          <Header />
        </h1>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App;




// 308748859570-e7chk2m9lqr57ptjs7jgos70faee74ii.apps.googleusercontent.com

