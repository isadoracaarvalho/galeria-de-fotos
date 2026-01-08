import { useEffect, useState } from 'react';
import '../assets/styles/gallery.css';
import Photo from './Photo'
import { searchPhotos } from '../services/pexels';

export default function Gallery({search}) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
    async function loadPhotos() {
      const results = await searchPhotos('nature');
      setPhotos(results.photos);
    }

    loadPhotos();
  }, []);

    const filterPic = photos.filter(photo => photo.alt.toLowerCase().includes(search.toLowerCase()))

    return (
        <section className="gallery">
        <div className="gallery-grid">
            {filterPic.length === 0 ? (
                <p>Nenhuma foto encontrada</p>
            ) : (
            filterPic.map(p => 
                <Photo
                    key={p.id}
                    imgUrl={p.src.medium}
                    imgTitle={p.alt}
                />
            ))}
        </div>
        </section>
    );
}
