import { useState } from 'react';

function useMoreLess(initialItems, itemsPerPage = 5) {
  const [visibleItems, setVisibleItems] = useState(0);

  const showNextItems = () => {
    setVisibleItems((prevVisibleItems) =>
      Math.min(prevVisibleItems + itemsPerPage, initialItems.length - itemsPerPage)
    );
  };

  const showPreviousItems = () => {
    setVisibleItems((prevVisibleItems) =>
      Math.max(prevVisibleItems - itemsPerPage, 0)
    );
  };

  const getCurrentItems = () => {
    return initialItems.slice(visibleItems, visibleItems + itemsPerPage);
  };

  return {
    showNextItems,
    showPreviousItems,
    getCurrentItems,
    canShowNext: visibleItems + itemsPerPage < initialItems.length,
    canShowPrevious: visibleItems > 0,
  };
}

export default useMoreLess;
