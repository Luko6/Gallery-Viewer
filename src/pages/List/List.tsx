import { useEffect, useState } from 'react';

import Pagination from '../../components/Pagination/Pagination';
import Beer, { IBeer } from '../../components/Beer/Beer';

import styles from './List.module.scss';
import { usePagination } from '../../hooks/usePagination';
import ListingWrapper from '../../components/ListingWrapper/ListingWrapper';

const List = () => {
  const { limit, page, query } = usePagination();

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<IBeer[]>();

  useEffect(() => {
    const fetchImages = async () => {
      const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}${
        query && '&beer_name=' + query.replace(' ', '_')
      }`;

      console.log(url);

      const res = await fetch(url);
      const data = await res.json();

      setImages(data);
    };

    try {
      setLoading(true);
      fetchImages();
      setLoading(false);
    } catch {
      alert('Failed to fetch images');
      setLoading(false);
    }
  }, [page, limit, query]);

  return (
    <div>
      <Pagination />
      {loading && <h2>Loading...</h2>}
      {!loading && !images?.length && <h2>No beers with name {query}</h2>}
      {!loading && images && (
        <ListingWrapper>
          {images.map((beer) => {
            return <Beer key={beer.id} id={beer.id} name={beer.name} image_url={beer.image_url} />;
          })}
        </ListingWrapper>
      )}
    </div>
  );
};

export default List;
