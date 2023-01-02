import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { IRootState } from '../../store';
import Pagination from '../../components/Pagination/Pagination';
import Beer, { IBeer } from '../../components/Beer/Beer';

import styles from './List.module.scss';

const List = () => {
  const limit = useSelector((state: IRootState) => state.pagination.limit);
  const page = useSelector((state: IRootState) => state.pagination.page);
  const query = useSelector((state: IRootState) => state.pagination.query);

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

      console.log(data);

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
        <div className={styles.container}>
          {images.map((beer) => {
            return <Beer id={beer.id} name={beer.name} image_url={beer.image_url} />;
          })}
        </div>
      )}
    </div>
  );
};

export default List;
