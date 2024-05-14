import React from 'react';
import booksData from '../Jsons/request.json';

const BookComponent = () => {
  const saveBookToJson = () => {
    const newBook = {
      title: "Animal Farm",
      author: "George Orwell",
      read: false
    };
    console.log('Books Data:', booksData);
    try {
      // Add the new book to the existing data
      const updatedBooks = [...booksData, newBook];
      booksData.push(updatedBooks);
      // Output the updated data to the console
      console.log('Updated Books Data:', updatedBooks);
      
      // If you want to overwrite the existing file, you can't do it directly in the frontend.
      // Instead, you can consider sending the updated data to a backend server for storage.
    } catch (error) {
      console.error('Error saving book data:', error);
    }
  };

  return (
    <div>
      <button onClick={saveBookToJson}>Save Book to JSON</button>
      <div>Hello</div>
    </div>
  );
}

export default BookComponent;
