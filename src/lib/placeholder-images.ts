import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  width?: number;
  height?: number;
};

const imageMap = new Map<string, ImagePlaceholder>(
  data.placeholderImages.map((img) => {
    const urlParts = img.imageUrl.split('/');
    const dimensions = urlParts.slice(-2);
    const hasDimensions = dimensions.length === 2 && /^\d+$/.test(dimensions[0]) && /^\d+$/.test(dimensions[1]);
    
    return [img.id, {
      ...img,
      width: hasDimensions ? parseInt(dimensions[0], 10) : undefined,
      height: hasDimensions ? parseInt(dimensions[1], 10) : undefined,
    }];
  })
);

export function getPlaceholderImage(id: string): ImagePlaceholder {
  const image = imageMap.get(id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
}

export const allPlaceholderImages: ImagePlaceholder[] = data.placeholderImages.map(img => getPlaceholderImage(img.id));
