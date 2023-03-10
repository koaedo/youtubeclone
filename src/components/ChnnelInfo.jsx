import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChnnelInfo({ id, name }) {
    const { youtube } = useYoutubeApi();
    const {
        error,
        isLoading,
        data: url,
    } = useQuery(['channel', id], () => youtube.channelImageURL(id), {staleTime: 1000 * 6 * 5});

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Somthing is wrong ㅠㅠ</p>}
            <div className='flex my-4 mb-8 items-center'>
                {url && (
                    <img className='w-10 h-10 rounded-full'
                        src={url}
                        alt={name}
                    />
                )}
                <p className='text-lg font-medium ml-2'>{name}</p>
            </div>
            ;
        </>
    );
}
