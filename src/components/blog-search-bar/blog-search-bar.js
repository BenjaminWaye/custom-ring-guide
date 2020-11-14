import React from 'react';

import DataListInput from "react-datalist-input";

const BlogSearchBar = ({items, handleSelect, handleInput}) => {
  const match = (currentInput, item) => {
      return (item.label.toLowerCase().includes(currentInput.toLowerCase()))
    }
    return (
        <div>
            <DataListInput className="blog-search-bar" placeholder="Enter your question here" items={items} onSelect={handleSelect} match={match} onInput={handleInput}/>
        </div>
    );
};

export default BlogSearchBar;