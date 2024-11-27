import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Slider = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600',
            thumbnail: 'https://picsum.photos/id/1018/250/150'
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600',
            thumbnail: 'https://picsum.photos/id/1015/250/150'
        },
        {
            original: 'https://picsum.photos/id/1016/1000/600',
            thumbnail: 'https://picsum.photos/id/1016/250/150'
        },
    ]
  return (
    <ImageGallery 
        items={images}
        showThumbnails={false} 
        showNav={false}
        autoPlay={true}
        infinite={true}
        slideInterval={5000} //Duración 5 segundos
        slideDuration={1000} //Duración de la transicion de una imagen a otra, 1 seg
    />
  )
}


//Con video
// import React, { useState, useEffect } from 'react';
// import Gallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';

// const CustomImageGallery = () => {
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const imagesAndVideos = [
//     { type: 'image', src: 'image1.jpg', thumbnail: 'thumb1.jpg' },
//     { type: 'image', src: 'image2.jpg', thumbnail: 'thumb2.jpg' },
//     { type: 'video', src: 'video1.mp4' },
//     { type: 'image', src: 'image3.jpg', thumbnail: 'thumb3.jpg' },
//     { type: 'image', src: 'image4.jpg', thumbnail: 'thumb4.jpg' },
//   ];

//   useEffect(() => {
//     const items = imagesAndVideos.map(item => {
//       if (item.type === 'image') {
//         return {
//           original: item.src,
//           thumbnail: item.thumbnail,
//           description: 'Image Description', // O puedes añadir cualquier descripción
//         };
//       } else if (item.type === 'video') {
//         return {
//           renderItem: () => (
//             <div>
//               <video
//                 autoPlay
//                 muted
//                 onEnded={handleVideoEnd}
//                 style={{ width: '100%', height: 'auto' }}
//               >
//                 <source src={item.src} type="video/mp4" />
//               </video>
//             </div>
//           ),
//         };
//       }
//     });

//     setGalleryItems(items);
//   }, []);

//   const handleVideoEnd = () => {
//     setCurrentIndex(currentIndex + 1); // Avanza al siguiente elemento
//   };

//   return (
//     <Gallery
//       items={galleryItems}
//       startIndex={currentIndex}
//       onSlide={index => setCurrentIndex(index)}
//       slideInterval={5000} // Intervalo para cambiar la imagen (en milisegundos)
//     />
//   );
// };

// export default CustomImageGallery;

