import { useState } from 'react';

const useShowState = (initialOpen = false) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    const onToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    return [isOpen, onToggle];
};

export default useShowState;
