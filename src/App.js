import React from 'react';
import store from './redux/store';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './UI/Layout';
import main from './pages/main'

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Switch>
              <Redirect from="/" exact to="/main"/>
              <Route path="/main" exact component={main}/>
              <Route render={()=><h1>Page not found</h1>}/>
          </Switch> 
        </BrowserRouter> 
      </Layout>
    </Provider>
  );
}

export default App;
