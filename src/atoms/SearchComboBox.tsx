import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './SearchComboBox.css';

interface SearchComboBoxItem {
  value: string;
  display?: string | JSX.Element;
  hasCard?: boolean;
}

interface SearchComboBoxProps {
  displayName: string;
  items: SearchComboBoxItem[];
  selectedItem: string;
  onItemChange: (selectedItem: string, hasCard?: boolean) => void;
  comments?: string;
  showComboBox?: boolean;
  searchString?: string;
  disabled?: boolean;
}

const SearchComboBox: React.FC<SearchComboBoxProps> = ({
  items,
  selectedItem,
  onItemChange,
  comments,
  showComboBox = true,
  searchString = '',
  disabled = false,
}) => {
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const [showList, setShowList] = useState<boolean>(false);
  const [, setIsInputHovered] = useState<boolean>(false);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(-1);
  const [filteredItems, setFilteredItems] = useState<SearchComboBoxItem[]>([]);
  const [selectedItemInternal, setSelectedItemInternal] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = event.target.value;
    setSearchPhrase(inputVal);
    if (inputVal.length === 0) {
      onItemChange('');
    }

    const filteredItems = items.filter((item) => {
      const displayValue = item.display ? item.display.toString() : item.value;
      return (
        displayValue.toLowerCase().includes(inputVal.toLowerCase()) ||
        item.value.toLowerCase().includes(inputVal.toLowerCase()) ||
        (searchString && searchString.toLowerCase() === inputVal.toLowerCase())
      );
    });

    setFilteredItems(filteredItems);
    setShowList(inputVal.length >= 3);
  };

  const handleListClick = useCallback((item: SearchComboBoxItem) => {
    setSelectedItemInternal(item.value);
    setShowList(false);
    setSearchPhrase('');
    onItemChange(item.value, item.hasCard);
  }, [onItemChange]);

  const handleInputMouseEnter = () => {
    if (searchPhrase.length < 3) {
      setIsInputHovered(true);
    }
  };

  const handleInputMouseLeave = () => {
    setIsInputHovered(false);
  };

  const handleListMouseLeave = () => {
    setShowList(false);
  };

  const handleButtonClick = () => {
    setShowList(!showList);
    if (!showList) {
      const filteredItems = items.filter((item) => {
        const displayValue = item.display ? item.display.toString() : item.value;
        return (
          displayValue.toLowerCase().includes(searchPhrase.toLowerCase()) ||
          item.value.toLowerCase().includes(searchPhrase.toLowerCase()) ||
          (searchString && searchString.toLowerCase() === searchPhrase.toLowerCase())
        );
      });
      setFilteredItems(filteredItems);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveItemIndex((prevActiveItemIndex) =>
          prevActiveItemIndex < filteredItems.length - 1 ? prevActiveItemIndex + 1 : prevActiveItemIndex
        );
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveItemIndex((prevActiveItemIndex) =>
          prevActiveItemIndex > 0 ? prevActiveItemIndex - 1 : prevActiveItemIndex
        );
      }

      if (e.key === 'Enter' && activeItemIndex >= 0) {
        e.preventDefault();
        handleListClick(filteredItems[activeItemIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredItems, activeItemIndex, handleListClick]);

  useEffect(() => {
    if (selectedItem !== selectedItemInternal) {
      setSelectedItemInternal(selectedItem);
    }
  }, [selectedItem, selectedItemInternal]);

  return (
    <div className="searchComboBox_container" onMouseLeave={handleListMouseLeave}>
      {showComboBox && (
        <div className="searchComboBox_inputWrapper">
          <input
            type="text"
            placeholder="Szukaj..."
            value={searchPhrase}
            onChange={handleInputChange}
            className="searchComboBox_input"
            onMouseEnter={handleInputMouseEnter}
            onMouseLeave={handleInputMouseLeave}
            disabled={disabled}
          />
          <button
            className={`searchComboBox_button ${showList ? 'active' : ''}`}
            onClick={handleButtonClick}
            disabled={disabled}
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
      )}
      {searchPhrase.length > 0 && searchPhrase.length < 3 && (
        <div className="searchComboBox_info">Wprowadź co najmniej 3 znaki</div>
      )}
      {showList && !disabled && (
        <div className="searchComboBox_list">
          {filteredItems.length === 0 && searchPhrase.length >= 3 ? (
            <div className="searchComboBox_info">Brak wyników</div>
          ) : (
            filteredItems.map((item, index) => {
              if (item.value === 'Brak wyboru') {
                return null; // Ignoruj element "Brak wyboru"
              }
              return (
                <div
                  key={index}
                  onClick={() => handleListClick(item)}
                  className={
                    selectedItemInternal === item.value || activeItemIndex === index ? 'selected' : ''
                  }
                >
                  {item.display || item.value}
                </div>
              );
            })
          )}
        </div>
      )}
      {selectedItemInternal && !disabled && selectedItemInternal && (
        <div>
          <div className={`searchComboBox_selectedItems${disabled ? 'Disabled' : ''}`}>
            {selectedItemInternal}
          </div>
          {comments && <div className="searchComboBox_comments">{comments}</div>}
        </div>
      )}
    </div>
  );
};

export default SearchComboBox;
export type { SearchComboBoxProps, SearchComboBoxItem };
