import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const imageMap = new Map<string, ImagePlaceholder>(
  data.placeholderImages.map((img) => [img.id, img])
);

export function getPlaceholderImage(id: string): ImagePlaceholder {
  const image = imageMap.get(id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
}

export const allPlaceholderImages: ImagePlaceholder[] = data.placeholderImages;
