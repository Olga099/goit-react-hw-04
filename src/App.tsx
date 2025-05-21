import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './services/api';
import { UnsplashImage } from './types';

function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchImages(query, page);
        setImages(prev => (page === 1 ? data.results : [...prev, ...data.results]));
        setTotalPages(data.total_pages);
      } catch (error) {
        setError('Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
  };

  const handleLoadMore = () => setPage(prev => prev + 1);

  const openModal = (image: UnsplashImage) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  );
}

export default App;
