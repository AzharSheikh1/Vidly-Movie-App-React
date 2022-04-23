import React, { Component } from 'react';
import './App.css';
import Movie from './components/movies';
import NotFound from './components/not-found';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NavBar from './components/navbar';
import MovieForm from './components/movieForm';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/movies" component={Movie}></Route>
          <Redirect from='/' exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
