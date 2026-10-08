import ReadButton from '@/Components/bookDetails/ReadButton';
import WishListButton from '@/Components/bookDetails/WishListButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';
import booksData from '../../../../public/booksData.json';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const BookDetailPage = async ({ params }: IBookDetailsPageProps) => {

    const { id } = await params;

    const book = (booksData as IBook[]).find(
        (book: IBook) => String(book.bookId) === String(id),
    ) as IBook;

    console.log(book, 'Book');

    if (!book) {
        return <div className="p-6">Book not found.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="card lg:card-side overflow-hidden border border-slate-200 bg-base-100 shadow-lg">

                {/* Book Image */}
                <figure className="bg-slate-100 p-6 lg:w-2/5">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={500}
                        height={500}
                    />
                </figure>

                {/* Book Details */}
                <div className="card-body p-6 md:p-8 lg:w-3/5">

                    {/* Category + Rating */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="badge badge-success px-4 py-3 font-semibold text-white">
                            {book.category}
                        </span>

                        <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2">
                            <span className="text-lg">⭐</span>
                            <span className="font-bold text-amber-700">
                                {book.rating}
                            </span>
                            <span className="text-sm text-slate-500">/ 5</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="text-base text-slate-500">
                        Written by{" "}
                        <span className="font-semibold text-slate-800">
                            {book.author}
                        </span>
                    </p>

                    {/* Review */}
                    <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Information */}
                    <div className="my-6 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-5 md:grid-cols-4">

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                Pages
                            </p>
                            <p className="mt-1 text-lg font-bold text-slate-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                Publisher
                            </p>
                            <p className="mt-1 truncate text-lg font-bold text-slate-800">
                                {book.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                Published
                            </p>
                            <p className="mt-1 text-lg font-bold text-slate-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                Rating
                            </p>
                            <p className="mt-1 text-lg font-bold text-slate-800">
                                {book.rating}
                            </p>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="card-actions justify-end gap-3">

                        <ReadButton book={book} />
                        <WishListButton book={book} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;