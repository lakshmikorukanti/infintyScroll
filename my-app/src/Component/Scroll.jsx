import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
export default function Scroll() {
    const [ data, setData ] = useState([]);
    let [ page, setPage ] = useState(0);
    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = () => {
        let x = page + 1;
        axios
            .get(
                `https://api.unsplash.com/collections?page=${x}&per_page=20&client_id=SdHjaE8qTWAhaviiUkXfcVuvc0IGAjZHIdo4UoHLHLI`
            )
            .then((res) => setData(data.concat(res.data)));
        setPage(x);
    };

    return (
        <div>
            <InfiniteScroll dataLength={data.length} next={fetchImages} hasMore={true}>
                {data.map((a) => (
                    <img src={a.cover_photo.urls.small} style={{ height: '300px', width: '300px', padding: '20px' }} />
                ))}
            </InfiniteScroll>
        </div>
    );
}
