// By AI !

import Image from 'next/image';
import Link from 'next/link';

interface Book {
    bookId: number;
    bookName: string;
    author: string;
    image: string;
    review: string;
    totalPages: number;
    rating: number;
    category: string;
    tags: string[];
    publisher: string;
    yearOfPublishing: number;
}

const BookCard = ({ book }: { book: Book }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="relative h-72 overflow-hidden bg-slate-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow backdrop-blur">
                        {book.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute right-4 top-4">
                    <span className="flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
                        ⭐ {book.rating}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Book name */}
                <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-slate-500">
                    by <span className="font-medium text-slate-700">{book.author}</span>
                </p>

                {/* Description
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                    {book.review}
                </p> */}

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

                {/* Book information */}
                <div className="my-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">

                    <div>
                        <p className="text-xs text-slate-400">Pages</p>
                        <p className="mt-1 font-semibold text-slate-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Published</p>
                        <p className="mt-1 font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Publisher</p>
                        <p className="mt-1 truncate font-semibold text-slate-700">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Rating</p>
                        <p className="mt-1 font-semibold text-slate-700">
                            ⭐ {book.rating}/5
                        </p>
                    </div>

                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="btn btn-success w-full rounded-xl text-white transition-all duration-300 group-hover:shadow-md">
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default BookCard;