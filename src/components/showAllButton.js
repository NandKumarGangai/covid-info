import React from 'react';
import './styles/show-all-button.css';

export default function ShowAllButton({ onClick }) {
    return (
        <div className="show-all-btn">
            <button
            type="button"
            className="btn"
            onClick={onClick}
        >
            See all countries stats
        </button>
        </div>
    )
}
