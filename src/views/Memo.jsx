import React from 'react'
import { useMemo, useState } from 'react';

function Memo() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState(['Harry Potter', 'Lord of the Rings', 'Hobbit', 'Percy Jackson']);

    const filteredBooks = books.filter(book => book.toLowerCase().includes(query.toLowerCase()));

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                placeholder="Search for a book..."
                onChange={e => setQuery(e.target.value)} 
            />
            <ul>
                {filteredBooks.map(book => (
                    <li key={book}>{book}</li>
                ))}
            </ul>
        </div>
    );
}

export default Memo