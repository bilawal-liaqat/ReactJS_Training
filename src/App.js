import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/common/Header'
import PostList from './components/posts/postList';
import PostDetail from './components/posts/postDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/post/:id" exact component={PostDetail} />

      </Switch>

    </div>
    </Router>
  );
}

export default App;
