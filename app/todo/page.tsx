"use client";

import Head from 'next/head';
import React, { useState } from 'react';
import './todo-page.css';
import Checkbox from './Checkbox';
import './checkbox.css';
import SearchButton from './SearchButton';
import ListFooter from './ListFooter';
import ListTodos from './ListTodos';


export default function Home() {
    return (
        <>
            <Head>
                <title>Todo App</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
                <div className="main-wrapper">
                    <SearchButton />
                </div>
            </main>
        </>
    )
}