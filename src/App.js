import React    from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Launches from './components/Launches';
import RocketDetails from './components/RocketDetails';


const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Launches />} />
          <Route exact path="/launch/:id" element={<RocketDetails />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );  
}

export default App;
