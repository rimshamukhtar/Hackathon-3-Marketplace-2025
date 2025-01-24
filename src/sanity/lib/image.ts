// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }

// import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';


// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   apiVersion: '2021-08-31',
//   useCdn: true,
// });

// const builder = imageUrlBuilder(client);

// export function urlFor(source: any) {
//   return builder.image(source);
// }


import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2021-08-31',
  useCdn: true,
});

// Create an image URL builder
const builder = imageUrlBuilder(client);

/**
 * Generate a URL for a Sanity image.
 * @param source The source image object from Sanity.
 * @returns The URL string for the image.
 */
export function urlFor(source:  SanityImageSource) {
  return builder.image(source).url();
}

