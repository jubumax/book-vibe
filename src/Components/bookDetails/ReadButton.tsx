'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

// This page is created only for avoiding client component related problem, because in [id] > page.tsx is declared in server component **

const ReadButton = ({ book }: { book: IBook }) => {

    const { readBooks, setReadBooks } = useContext(BooksContext);         // Use 'hook' for getting data from context

    const handleReadBook = () => {
        console.log('read book btn triggered', book);

        // setReadBooks((prevReadBooks) => [...prevReadBooks, book])
        setReadBooks([...readBooks, book])                          // Both way are SAME!

        toast.success(`You have read "${book.bookName}"`)

    }

    return (
        <div>
            <button
                className="btn btn-primary rounded-xl px-8 shadow-md transition hover:shadow-lg"
                onClick={() => handleReadBook()}>
                Read
            </button>
        </div>
    );
};

export default ReadButton;