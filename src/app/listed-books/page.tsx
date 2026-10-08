'use client'

import BookCard from '@/Components/shared/BookCard';
import ListedBooksCard from '@/Components/shared/ListedBooksCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React, { useContext } from 'react';

const ListedBooks = () => {

    const { readBooks, wishList } = useContext(BooksContext)
    const [sortby, setSortBy] = React.useState<'rating' | 'pages' | 'year'>('rating'); // Default sort by rating

    // [Sorting - by rating, pages, year]

    // console.log(readBooks, wishList, 'readBooks', 'wishList');
    // console.log(sortby, "sortby");

    const sortBooks = (book: IBook[]) => {
        const sortedBooks = [...book];

        if (sortby === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);            // b-a because descending order to ascending order
        } else if (sortby === 'pages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortby === 'year') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishList = sortBooks(wishList);

    console.log(sortedReadBooks, sortedWishList, 'sortedReadBooks', 'sortedWishList');

    return (
        <div className="container mx-auto py-5">

            <h2 className="my-7 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
                Listed Books
            </h2>

            {/* Sort by added -- from daisyUI */}
            <div className="text-center">
                <select
                    defaultValue="Pick a Runtime"
                    className="select select-success"
                    value={sortby}
                    onChange={(e) => setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
                >
                    <option disabled={true}>Sort by</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of Pages</option>
                    <option value="year">Published Year</option>
                </select>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Read Books (${readBooks.length})`}
                    defaultChecked
                />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-[25px]">
                    {readBooks.length > 0 ? (
                        sortedReadBooks.map((book: IBook) => {
                            return <ListedBooksCard key={book.bookId} book={book} />
                        })
                    ) : (
                        <p className='text-center text-lg font-semibold'>No read books found.</p>
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Wishlist Books (${wishList.length})`}
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {wishList.length > 0 ? (
                        sortedWishList.map((book: IBook) => {
                            return <ListedBooksCard key={book.bookId} book={book} />
                        })
                    ) : (
                        <p className='text-center text-lg font-semibold'>No wishlist books added yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;