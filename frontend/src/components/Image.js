// import React, { Component } from 'react';
// import '../CSS/Formstyle.css';

// class Image extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imgArray: [],
//     };
//     // Create a ref for imgWrap
//     this.imgWrapRef = React.createRef();
//   }

//   handleFileChange = (e) => {
//     const imgWrap = this.imgWrapRef.current; // Access the ref
//     const maxLength = e.target.getAttribute('data-max_length');
//     const files = e.target.files;
//     const newImages = [];

//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];

//       if (file.type.match('image.*')) {
//         if (newImages.length < maxLength) {
//           newImages.push(file);
//         } else {
//           // Handle error or show a message about reaching the maximum allowed images
//           console.error('Maximum number of images reached');
//         }
//       }
//     }

//     this.setState((prevState) => ({
//       imgArray: [...prevState.imgArray, ...newImages],
//     }));
//   };

//   handleRemoveImage = (file) => {
//     this.setState((prevState) => ({
//       imgArray: prevState.imgArray.filter((img) => img !== file),
//     }));
//   };

//   render() {
//     const { imgArray } = this.state;

//     return (
//       <div className="upload__box">
//         <div className="upload__btn-box">
//           <label className="upload__btn">
//             <p>Upload images</p>
//             <input
//               type="file"
//               multiple
//               data-max_length="20"
//               className="upload__inputfile"
//               onChange={this.handleFileChange}
//             />
//           </label>
//         </div>
//         <div className="upload__img-wrap" ref={this.imgWrapRef}>
//           {imgArray.map((file, index) => (
//             <div key={index} className="upload__img-box">
//               <div
//                 style={{ backgroundImage: `url(${URL.createObjectURL(file)})` }}
//                 data-number={index}
//                 data-file={file.name}
//                 className="img-bg"
//               >
//                 <div
//                   className="upload__img-close"
//                   onClick={() => this.handleRemoveImage(file)}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Image;
// import React, { useState, useRef } from 'react';
// import '../CSS/Formstyle.css';

// const Image = () => {
//   const [imgArray, setImgArray] = useState([]);
//   const imgWrapRef = useRef();

//   const handleFileChange = async (e) => {
//     const imgWrap = imgWrapRef.current;
//     const maxLength = e.target.getAttribute('data-max_length');
//     const files = e.target.files;
//     const newImages = [];

//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];

//       if (file.type.match('image.*')) {
//         if (newImages.length < maxLength) {
//           newImages.push(file);

//           // Upload the image to Cloudinary
//           await uploadImageToCloudinary(file);
//         } else {
//           console.error('Maximum number of images reached');
//         }
//       }
//     }

//     setImgArray((prevImages) => [...prevImages, ...newImages]);
//   };

//   const uploadImageToCloudinary = async (file) => {
//     const data = new FormData();
//     data.append('file', file);
//     data.append('upload_preset', 'chatapp');
//     data.append('cloud_name', 'dogndfmt0');

//     try {
//       const response = await fetch('https://api.cloudinary.com/v1_1/dogndfmt0/image/upload', {
//         method: 'post',
//         body: data,
//       });

//       const cloudinaryData = await response.json();
//       console.log('Cloudinary URL:', cloudinaryData.url);
//       // Use the Cloudinary URL as needed (e.g., save it to state or perform other actions)
//     } catch (error) {
//       console.error('Error uploading image to Cloudinary:', error);
//     }
//   };

//   const handleRemoveImage = (file) => {
//     setImgArray((prevImages) => prevImages.filter((img) => img !== file));
//   };

//   return (
//     <div className="upload__box">
//       <div className="upload__btn-box">
//         <label className="upload__btn">
//           <p>Upload images</p>
//           <input
//             type="file"
//             multiple
//             data-max_length="20"
//             className="upload__inputfile"
//             onChange={handleFileChange}
//           />
//         </label>
//       </div>
//       <div className="upload__img-wrap" ref={imgWrapRef}>
//         {imgArray.map((file, index) => (
//           <div key={index} className="upload__img-box">
//             <div
//               style={{ backgroundImage: `url(${URL.createObjectURL(file)})` }}
//               data-number={index}
//               data-file={file.name}
//               className="img-bg"
//             >
//               <div
//                 className="upload__img-close"
//                 onClick={() => handleRemoveImage(file)}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Image;
import React, { useState, useRef } from 'react';
import '../CSS/Formstyle.css';

const Image = ({ onImageUpload }) => {
  const [imgArray, setImgArray] = useState([]);
  const imgWrapRef = useRef();
  const a=[]
  const handleFileChange = async (e) => {
    const imgWrap = imgWrapRef.current;
    const maxLength = 4;
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type.match('image.*')) {
        if (newImages.length < maxLength) {
          newImages.push(file);

          // Upload the image to Cloudinary
          await uploadImageToCloudinary(file,i);
        } else {
          console.error('Maximum number of images reached');
        }
      }
    }

    setImgArray((prevImages) => [...prevImages, ...newImages]);
    console.log(imgArray);
    console.log(newImages);
    console.log(a);
    onImageUpload(a); // Notify the parent component about the uploaded images
  };


  const uploadImageToCloudinary = async (file,i) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'chatapp');
    data.append('cloud_name', 'dogndfmt0');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dogndfmt0/image/upload', {
        method: 'post',
        body: data,
      });

      const cloudinaryData = await response.json();
      console.log('Cloudinary URL:', cloudinaryData.url);
      a[i++]=cloudinaryData.url;
      // Use the Cloudinary URL as needed (e.g., save it to state or perform other actions)
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleRemoveImage = (file) => {
    setImgArray((prevImages) => prevImages.filter((img) => img !== file));
  };

  return (
    <div className="upload__box">
      <div className="upload__btn-box">
        <label className="upload__btn">
          <p>Upload images</p>
          <input
            type="file"
            multiple
            data-max_length="20"
            className="upload__inputfile"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="upload__img-wrap" ref={imgWrapRef}>
        {imgArray.map((file, index) => (
          <div key={index} className="upload__img-box">
            <div
              style={{ backgroundImage: `url(${URL.createObjectURL(file)})` }}
              data-number={index}
              data-file={file.name}
              className="img-bg"
            >
              <div
                className="upload__img-close"
                onClick={() => handleRemoveImage(file)}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
