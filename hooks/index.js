import { useState, useCallback, useEffect } from 'react';
import httpService from '../services/http';
import axios from 'axios';

const useShowState = (initialOpen = false) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    const onToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    return [isOpen, onToggle];
};

const useFetchContents = (contentType, args, offset) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [total, setTotal] = useState(0);

    const source = axios.CancelToken.source();

    const fetchContents = async () => {
        setLoading(true);
        setError(false);
        let queryArgs = args;
        args.offset = offset;

        try {
            const results = await httpService.getContent(contentType, queryArgs);
            if (results.status === 200) {
                setList(prevList => {
                    return [...new Set([...prevList, ...results.data.data.rows])]
                })
                setLoading(false);
                setHasMore(args.offset + args.limit < results.data.data.count);
                return;
            }
            throw new Error("Failed to fetch hotels");

        } catch (error) {
            if(axios.isCancel(error)){
                return;
            }
            setError(true);
        }
    }

    useEffect(() => {
        setList([]);
    }, [args]);

    useEffect(() => {
        fetchContents();
        return () => source.cancel("Data fetching cancelled");
    }, [args, offset])

    return { loading, error, list, hasMore }
}

export {
    useShowState,
    useFetchContents
};
