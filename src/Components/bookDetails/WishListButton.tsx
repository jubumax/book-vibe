'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

// This page is created only for avoiding client component related problem, because in [id] > page.tsx is declared in server component **

const WishListButton = ({ book }: { book: IBook }) => {

    const { wishList, setWishList } = useContext(BooksContext);         // Use 'hook' for getting data from context

    const handleAddToWishList = () => {
        console.log('add to wishlist btn triggered', book);

        // setWishList((prevWishList) => [...prevWishList, book])
        setWishList([...wishList, book])                          // Both way are SAME!

        toast.success(`You have added "${book.bookName}" to your wishlist`)

    }

    return (
        <div>
            <button
                className="btn btn-primary rounded-xl px-8 shadow-md transition hover:shadow-lg"
                onClick={() => handleAddToWishList()}>
                Add to Wishlist
            </button>
        </div>
    );
};

export default WishListButton;