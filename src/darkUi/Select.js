import styled from "styled-components"
import Select from 'react-select'
import React, {useState, useEffect} from "react"

const SelectEnhanced = styled.div`
  .darkSelect {
    > div {
      border: 0;
      border-radius:6px;
      background-color: #3C4154;
      div {
        color: #fff!important;
      }
      .react-select__option:hover {
        background-color:#6C8EC4;
      }
      .react-select__option--is-selected {
        background-color:#5692F0
      }
      .react-select__option--is-focused {
        background-color:#6C8EC4
      }
    }
    
  }
`;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const SelectContainer = () => {
  const [selectedOption, setSelectedOption] = useState(false);
  
  useEffect(() => {
    console.log(`Option selected:`, selectedOption);
  })

  return (
    <SelectEnhanced>
      <Select
      className="darkSelect"
      classNamePrefix="react-select"
      value={selectedOption}
      onChange={(selectedOption) => setSelectedOption(selectedOption)}
      options={options}
      />
    </SelectEnhanced>
  )
}

export default SelectContainer