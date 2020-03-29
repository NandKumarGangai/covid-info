import React from 'react';
import './styles/searchbar.css';

export default function SearchBar({ country, onChange, onSubmit }) {
    return (
        <div className=''>
            <nav className='searchbar'>
                <a className="search-title large" href='#'>
                    {`${country} stats`}
                </a>
                <form>
                <input
                    className="search-input"
                    type="search"
                    placeholder="Search Country"
                    onChange={onChange}
                />
                <button
                    className="btn-search"
                    type="button"
                    onClick={onSubmit}
                >
                    Search
                    </button>
                    </form>
            </nav>
        </div>
    )
}
