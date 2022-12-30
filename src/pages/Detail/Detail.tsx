import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { IImage } from '../List/List';

const Detail = () => {
  const { id } = useParams();

  const [image, setImage] = useState<IImage>();

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://picsum.photos/id/${id}/info`);
      const data = await res.json();

      setImage(data);
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
          <p>ID: {image.id}</p>
          <p>Author: {image.author}</p>
          <img src={image.download_url} alt='something' width={300} height={200} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
