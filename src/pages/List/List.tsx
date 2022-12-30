import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Details } from '../../routes';

export interface IImage {
  id: string;
  author: string;
  width: string;
  height: string;
  url: string;
  download_url: string;
}

const List = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);

  const [images, setImages] = useState<IImage[]>();

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
      const data = await res.json();

      setImages(data);
    };

    try {
      fetchImages();
    } catch {
      alert('Failed to fetch images');
    }
  }, [page, limit]);

  return (
    <div>
      <label>
        Page:
        <input
          value={page}
          type='number'
          onChange={(e) => {
            setPage(+e.currentTarget.value);
          }}
        />
      </label>
      <label>
        Limit:
        <input
          value={limit}
          type='number'
          onChange={(e) => {
            setLimit(+e.currentTarget.value);
          }}
        />
      </label>
      <ul>
        {images &&
          images.map((im) => {
            return (
              <li key={im.id}>
                <NavLink to={Details + "/" + im.id}>{im.id}</NavLink>
                <p>{im.author}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default List;
