import BookList from './components/book/BookList';
import { Route, Switch } from 'react-router-dom';
// import Book from './components/book/Book';
// import BookDetail from './components/book/BookDetail';
import Author from './components/author/Author';
import NotFound from './components/notfound/NotFound';
import Home from './components/home/Home';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <>
      <h1>Library App</h1>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/books/:id" component={BookDetail} /> */}
        <Route path="/books" component={BookList} />
        <Route path="/authors" component={Author} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
