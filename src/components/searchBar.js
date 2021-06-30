import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
   const [term, setTerm] = useState("");

   const onInputChange = (event) => {
      setTerm(event.target.value);
   };

   const onSubmit = (event) => {
      event.preventDefault();
      onFormSubmit(term);
      //   console.log(this.state.term);
   };

   return (
      <div className="ui segment">
         <form onSubmit={onSubmit} className="ui form">
            <div className="field">
               <label> Vedio search</label>
               <input type="text" onChange={onInputChange} value={term} />
            </div>
         </form>
      </div>
   );
};

export default SearchBar;
