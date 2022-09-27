import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>Library Catalog!!!!</div>
      <div><Link to={'/books'}> Click here! </Link></div>
    </>
  );
}
