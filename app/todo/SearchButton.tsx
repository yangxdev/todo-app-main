"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function SearchButton() {
    const [isInputOpen, setInputOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setInputOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        if (isInputOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isInputOpen]);

    const toggleInput = () => {
        setInputOpen(!isInputOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', inputValue);
        setInputValue('');
        setInputOpen(false);
    }

    return (
        <div className="max-w-5xl bg-gradient-to-b rounded-lg mb-4 min-w-[30rem] btn-create-new-todo">
            {isInputOpen ? (
                <form className="flex items-center" onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="w-full py-4 pl-8 pr-64 rounded-lg pt-[1.25rem] outline-none"
                        
                    />
                </form>
            ) : (
                <button
                    className="btn btn-primary text-left w-full py-4 pl-8 pr-64 pt-[1.25rem] font-md rounded-lg"
                    onClick={toggleInput}
                >
                    Create a new todo...
                </button>
            )}
        </div>
    );
}