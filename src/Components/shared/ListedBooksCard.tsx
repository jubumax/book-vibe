import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({ book }: { book: IBook }) => {
    return (
        <div key={book.bookId} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row">

            {/* Book Image */}
            <div className="relative h-72 w-full shrink-0 overflow-hidden bg-slate-100 sm:h-[400px] sm:w-[450px]">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={450}
                    height={450}
                    className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                        {book.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Title + Rating */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                            {book.bookName}
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            By{' '}
                            <span className="font-semibold text-slate-700">
                                {book.author}
                            </span>
                        </p>
                    </div>

                    <div className="flex w-fit items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5">
                        <span>⭐</span>
                        <span className="font-bold text-amber-700">
                            {book.rating}
                        </span>
                    </div>

                </div>

                {/* Review */}
                <p className="mt-4 line-clamp-3 max-w-3xl text-sm leading-6 text-slate-600">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-auto pt-5">

                    <div className="mb-5 grid grid-cols-2 gap-4 border-y border-slate-100 py-4 sm:grid-cols-4">

                        <div>
                            <p className="text-xs text-slate-400">
                                Pages
                            </p>
                            <p className="mt-1 font-semibold text-slate-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">
                                Published
                            </p>
                            <p className="mt-1 font-semibold text-slate-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">
                                Publisher
                            </p>
                            <p className="mt-1 truncate font-semibold text-slate-800">
                                {book.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">
                                Category
                            </p>
                            <p className="mt-1 font-semibold text-slate-800">
                                {book.category}
                            </p>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <Link href={`/books/${book.bookId}`} className="w-full sm:w-auto">
                            <button className="btn btn-outline rounded-xl">
                                View Details
                            </button>
                        </Link>

                        <button className="btn btn-success rounded-xl px-6 text-white shadow-sm transition hover:shadow-md">
                            📖 Read Book
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
};

export default ListedBooksCard;