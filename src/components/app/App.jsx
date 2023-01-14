import { Component } from 'react';
import { ToastContainer, toast} from "react-toastify";
import {AppContainer} from '../app/App.styled'
import {Search} from '../searchbar/Searchbar'
import {Gallery} from '../imagegallery/ImageGallery'
import {Button} from '../button/Button'
import {LoaderSpiner} from '../loader/Loader'
import { fetchArticlesWithQuery } from 'services/Api';
import { Modal } from 'components/modal/Modal';


export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    largeImg: '',
    showModal: false,
  };


      async componentDidUpdate(_, prevState) {
        const {name, page} = this.state;
        if (prevState.name !== name || prevState.page !== page) {
          this.setState({ loading: true });
          try {
            const options = await fetchArticlesWithQuery(name, page);
            const images = options.map(option => ({
              id: option.id,
              webformatURL: option.webformatURL,
              largeImageURL: option.largeImageURL,
              tags: option.tags
            }))
            this.setState(prevState => ({
              images: [...prevState.images, ...images],
            }));
              // console.log(this.state.images)
            
            } catch (error) {
            this.setState({error: toast('Something went wrong!')})
          } finally {
            this.setState({ loading: false, });
          }}
          return
        }

handleFormSubmit = name => {
  if (name === this.state.name) {
    return 
  } 
this.setState({
  name: name,
  images: [],
  page: 1,
})
}

// reset = () => {
//     this.setState ({name: '',});
// };

onLoadMore () {
  this.setState(prevState => ({
      page: prevState.page + 1,
  }));
};

getlargeImageURL = imageUrl => {
  this.setState({
    largeImg: imageUrl,
  })
  this.toogleModal();
};

toogleModal = () => {
  this.setState(state => ({
    showModal: !state.showModal,
  }))
};


  render(){
    const images = this.state;
    const props = images.images

    return(
      <AppContainer>
      <Search  onSubmit={this.handleFormSubmit} />      
      {images.length !== 0 && <Gallery image={props} imagesClick={this.getlargeImageURL}/>}
      {this.state.images.length > 1 && <Button onClick={() => this.onLoadMore()}/>}
      {this.state.showModal && (<Modal src={this.state.largeImg} onClick={this.toogleModal}/>)}
      {this.state.loading && <LoaderSpiner/>}
      <ToastContainer/>
      </AppContainer>
    )
  }
}
