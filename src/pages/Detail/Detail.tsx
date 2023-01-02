import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IBeer } from '../../components/Beer/Beer';
import FavoriteToggle from '../../components/FavoriteToggle/FavoriteToggle';

const Detail = () => {
  const { id } = useParams();

  const [image, setImage] = useState<IBeer>();

  useEffect(() => {
    const fetchDetails = async () => {
      // const res = await fetch(`https://picsum.photos/id/${id}/info`);
      const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const data: IBeer[] = await res.json();

      setImage(data[0]);
    };

    try {
      fetchDetails();
    } catch {
      alert('Something went wrong...');
    }
  }, [id]);

  return (
    <div>
      {image ? (
        <>
          <FavoriteToggle id={image.id} />
          <p>ID: {image.id}</p>
          <p>Name: {image.name}</p>
          <img src={image.image_url} alt='something' width={200} height={300} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
