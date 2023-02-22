import React from 'react'
import Categories from '../../component/categories/Categories'
import MainProducts from '../../component/main-products/MainProducts';
import Search from '../../component/search/Search';

function Home() {
  console.log('home robotaet');
  return (
    <>
      <main>
        <Search/>
        <Categories/>
        <MainProducts/>
      </main>
    </>
  )
}

export default Home