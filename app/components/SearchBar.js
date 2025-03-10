"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchQuery = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };

  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleSearchQuery} 
      />
    </div>
  );
}
