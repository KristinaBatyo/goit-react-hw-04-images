
import { ToastContainer, toast} from "react-toastify";
import {AppContainer} from '../app/App.styled'
import {Search} from '../searchbar/Searchbar'
import {Gallery} from '../imagegallery/ImageGallery'
import {Button} from '../button/Button'
import {LoaderSpiner} from '../loader/Loader'
import { fetchArticlesWithQuery } from 'services/Api';
import { Modal } from 'components/modal/Modal';
import { useState, useEffect } from 'react';

export const App = () => {
const [name, setName] = useState('')
const [images, setImages] = useState([])
const [page, setPage] = useState(1)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const [largeImg, setLargeImg] = useState('')
const [showModal, setShowModal] = useState(false)

useEffect(() => {
  if (name === '' || !page || error) {
    return;
  }
    async function getApp(){
    try {
      setLoading(true);
      const options = await fetchArticlesWithQuery(name, page);
      const image = options.map(option => ({
        id: option.id,
        webformatURL: option.webformatURL,
        largeImageURL: option.largeImageURL,
        tags: option.tags
      }))
      setImages(images => [...images, ...image])
    } catch (error) {
      setError(toast('Something went wrong!'))
    } finally {
      setLoading(false);
    }}
    getApp()
}, [name, page])


const handleFormSubmit = e => {
  if (e === name) {
    return 
  } 
  setName(e);  
  setImages([]);
  setPage(1);

}

const onLoadMore = () => {
setPage(page => page + 1)
};

const getlargeImageURL = imageUrl => {
  setLargeImg(imageUrl);
  toogleModal();
};

const toogleModal = () => {

    setShowModal(!showModal)

};
console.log(images.length)
    return(
      <AppContainer>
      <Search  onSubmit={handleFormSubmit} />      
      {images.length > 0 && <Gallery image={images} imagesClick={getlargeImageURL}/>}
      {images.length > 1 && <Button onClick={() => onLoadMore()}/>}
      {showModal && (<Modal src={largeImg} onClick={toogleModal}/>)}
      {loading && <LoaderSpiner/>}
      <ToastContainer/>
      </AppContainer>
    )
  }
