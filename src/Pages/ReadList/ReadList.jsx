import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';
const ReadList = () => {
    const [redList,setList] = useState([])
    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storedBookDAta = getStoredBook();
        const ConvertedStoredBooks = storedBookDAta.map(id => parseInt(id))
        const myReadList = data.filter(book=>ConvertedStoredBooks.includes(book.bookId));
        setList(myReadList)
    },[])
    return (
        <div>
              <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i red {redList.length}</h2>
      <div className='flex gap-4 mt-4 mb-5'>
          {
        redList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>My Wishlist Books</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;