// "use client"

// import React, { useEffect, useState } from 'react';
// import Navbar from '../Components/NavBar/navBar';
// import axios from 'axios';
// import instance from '../api/route';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { Router } from 'next/router';


// const LandingPage = () => {
//   const router = useRouter();
//   const [productData, setProductData] = useState([]);

//   const getData = async () => {
//     try {
//       const response = await instance.get('products');
//       setProductData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleSubmit=()=>{
//     router.push('/2');

//   }



//   return (
//     <div className='h-full'>
//       <Navbar />
//       <div className='flex flex-wrap justify-between'>
//         {productData.length > 0 ? (
//           productData.map((product) => (
//             <div className='text-center my-5 w-72 rounded-lg shadow' key={product.id}>
//               <div className="max-w-sm mt-5">
//                 <a href="#">
//                   <img className="rounded-t-md h-36 mx-auto" src={product.image} alt="" />
//                 </a>
//                 <div className="p-5 flex flex-col justify-between  h-60">
//                   <a href="#">
//                     <p className="mb-2 text-lg tracking-tight text-gray-900">{product.title.substring(0, 40)}</p>
//                   </a>
//                   <p>$:{product.price}</p>
//                   <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
//                     Read more
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h3>No data Found Sorry....</h3>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
