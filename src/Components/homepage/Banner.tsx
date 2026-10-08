import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (                // Redesigned by AI
        <section className="py-10 md:py-16">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6 py-10 shadow-sm md:px-12 md:py-14 lg:px-16">

                    {/* Decorative circle */}
                    <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-200/40 blur-2xl" />

                    <div className="relative grid items-center gap-10 md:grid-cols-2">

                        {/* Content */}
                        <div className="space-y-6">
                            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                                📚 Discover Your Next Read
                            </span>

                            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-5xl">
                                Books to freshen up
                                <span className="block text-emerald-600">
                                    your bookshelf
                                </span>
                            </h1>

                            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                                Explore a collection of inspiring stories, timeless
                                classics, and knowledge-packed books waiting to be
                                discovered.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <button className="btn btn-success rounded-full px-6 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                                    View The List
                                </button>

                                <button className="btn btn-outline rounded-full px-6">
                                    Explore Books
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative flex justify-center">
                            <div className="absolute inset-0 rounded-3xl bg-emerald-300/20 blur-3xl" />

                            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src={bannerImg}
                                    alt="Books on a bookshelf"
                                    className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;