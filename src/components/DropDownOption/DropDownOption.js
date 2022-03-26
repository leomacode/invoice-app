import React, { useContext } from "react";
import "./dropDownOption.css";
import { SearchTermsContext } from "../../Contexts";
function DropDownOption({ name }) {
  const { terms, setTerms } = useContext(SearchTermsContext);

  const handleClick = () => {
    let searchTerms = terms;
    if (searchTerms.includes(name)) {
      searchTerms = searchTerms.filter((term) => !(term === name));
    } else {
      searchTerms.push(name);
      searchTerms = [...searchTerms];
    }
    setTerms(searchTerms);
  };

  return (
    <div className="drop-down-option flex">
      <input
        onClick={handleClick}
        className="drop-down-option-checkbox"
        type="checkbox"
        name={name}
        id={name}
      />
      <label
        className="drop-down-option-label h3-text-2 capitalize flex"
        htmlFor={name}
      >
        {name}
      </label>
    </div>
  );
}

export default DropDownOption;
