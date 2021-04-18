import React from 'react';
import './emoji-rating.css';

export default function EmojiRating({ active, onClickItem }) {

    const items = [];

    for (let i = 0; i < 5; i++) {
        items.push(<div className={`emoji-rating__item ${i === active ? 'active' : '' }`} onClick={() => onClickItem(i)}> </div>);
    }

    return <div className={"emoji-rating"}>
        { items }
    </div>
}