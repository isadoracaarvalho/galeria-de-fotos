import '../assets/styles/photo.css'

export default function Photo({imgUrl, imgTitle}) {

    return (
        <div className='photo-container'>
            <img src={imgUrl} alt={imgTitle} />

            <div className="photo-title">
                <h3>{imgTitle}</h3>
            </div>
        </div>
    );
}