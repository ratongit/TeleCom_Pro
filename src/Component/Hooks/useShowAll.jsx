import { useState } from 'react';

const useShowAll = (setArrays) => {

    const [showAll, setShowAll] = useState(false);

    const handleShow = () => {
        setShowAll(!showAll);
    };

    const array = setArrays.slice(0, showAll ? setArrays.length : 5)

    return { showAll, handleShow, array,}
    //  {showAll ? 'Show Less' : 'Show All'}


};

export default useShowAll;


