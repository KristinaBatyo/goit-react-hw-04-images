
import {ImageGalleryItemImage, ImageGalleryItem } from "./ImageGalleryItem.styled"
import PropTypes from 'prop-types';

export const GalleryItem  =({webformatURL, tags, largeImageURL, imagesClick}) => {
  return(
        <ImageGalleryItem>
    <ImageGalleryItemImage 
    src={webformatURL} 
    alt={tags} 
    onClick={() => imagesClick(largeImageURL)}
    />

  </ImageGalleryItem>
  )
}


GalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  imagesClick: PropTypes.func.isRequired,
};