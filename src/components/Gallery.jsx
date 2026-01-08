import { useEffect, useState } from 'react';
import '../assets/styles/gallery.css';
import Photo from './photo';
import { searchPhotos } from '../services/pexels';

export default function Gallery() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
    async function loadPhotos() {
      const results = await searchPhotos('nature');
      setPhotos(results.photos);
    }

    loadPhotos();
  }, []);

    return (
        <section className="gallery">
        <div className="gallery-grid">
            {photos.map(p => 
                <Photo
                    key={p.id}
                    imgUrl={p.src.medium}
                    imgTitle={p.photographer} 
                />
            )}
        </div>
        </section>
    );
}
