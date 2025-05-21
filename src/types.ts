export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  description?: string;
  likes: number;
  user: {
    name: string;
  };
}

export interface FetchImagesResponse {
  results: UnsplashImage[];
  total_pages: number;
}
