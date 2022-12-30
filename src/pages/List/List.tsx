import { useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Details } from '../../routes';
import { IRootState } from '../../store';
import Pagination from '../../components/Pagination/Pagination';

import { useQuery, useQueryClient } from 'react-query';

export interface IImage {
  id: string;
  author: string;
  width: string;
  height: string;
  url: string;
  download_url: string;
}

const List = () => {
  const limit = useSelector((state: IRootState) => state.pagination.limit);
  const page = useSelector((state: IRootState) => state.pagination.page);

  const [images, setImages] = useState<IImage[]>();

  const queryClient = useQueryClient();
  const queryKey = 'images';
  const queryFn = () => fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`).then((res) => res.json());
  const result = useQuery(queryKey, queryFn);

  // Continue from: https://ilxanlar.medium.com/fetch-cache-and-update-data-effortlessly-with-react-query-445e799a84e4#e303

  //   useEffect(() => {
  //     const fetchImages = async () => {
  //       const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
  //       const data = await res.json();

  //       setImages(data);
  //     };

  //     try {
  //       fetchImages();
  //     } catch {
  //       alert('Failed to fetch images');
  //     }
  //   }, [page, limit]);

  return (
    <div>
      <Pagination />
      {result.status === 'loading' && <div>Loading...</div>}
      {result.status === 'error' && <div>Error...</div>}
      {result.status === 'success' && (
        <ul>
          {result.data.map((im: IImage) => {
            return (
              <li key={im.id}>
                <NavLink to={Details + '/' + im.id}>{im.id}</NavLink>
                <p>{im.author}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
