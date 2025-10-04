import { ImagePlaceholder } from "@/lib/placeholder-images";

export function ImageDimensions({ image }: { image: ImagePlaceholder }) {
  if (process.env.NODE_ENV !== 'development' || !image.width || !image.height) {
    return null;
  }

  return (
    <div className="absolute bottom-2 left-2 z-20 rounded-md bg-black/50 px-2 py-1 text-xs font-semibold text-white">
      {image.width} x {image.height}
    </div>
  );
}
