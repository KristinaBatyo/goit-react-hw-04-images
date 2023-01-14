import {ImageGallery} from "./ImageGallery.styled"
import { GalleryItem } from "components/imagegalleryitem/ImageGalleryItem"
import PropTypes from 'prop-types';



export const Gallery = ({image, imagesClick}) => {
        return(
            
            <ImageGallery>
                {image.map(({id, webformatURL, tags, largeImageURL}) => (
                <GalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
                imagesClick={imagesClick}
                />
                ))}
            
            </ImageGallery>
        )
}

Gallery.propTypes = {
    image: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }),
    ),
    imagesClick: PropTypes.func.isRequired,
}