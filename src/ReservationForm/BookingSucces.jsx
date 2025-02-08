// import React, { useState } from 'react';
// import {Card, CardContent} from '@mui/material/CardContent';
// import { Button } from "@/components/ui/button";

// const BookingSuccess = () => {
//   const [modal, setModal] = useState(true);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <Card className="w-2/3 shadow-xl rounded-2xl">
//         <CardContent className="relative flex flex-col items-center text-center p-6">
//           <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-2xl"></div>
//           <div className="relative w-full h-48 bg-gray-200 flex justify-center items-center rounded-lg">
//             <p className="text-4xl font-bold text-white">Successful!</p>
//           </div>
//           <p className="relative text-gray-100 mt-4">Your booking has been completed successfully.</p>
//           <Button className="relative mt-6 w-1/4 bg-blue-500 text-white hover:bg-blue-600" onClick={() => setModal(false)}>
//             Done
//           </Button>
//         </CardContent>
//       </Card>

//       <div className={`z-50 bg-black opacity-40 w-[200px] h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white ${modal ? 'block' : 'hidden'}`}>
//         <div className="flex justify-center items-center h-full">
//           Done!
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingSuccess;
