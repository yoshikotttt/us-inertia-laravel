import React from 'react'
// import { Switch } from "antd";

const AcceptHome = ({ notifications }) => {
//   console.log(notifications)
    // const onChange = (checked) => {
    //     console.log(`switch to ${checked}`);
    // };
   return (
       <>
           {/* <div className="mb-4 flex justify-between items-center">
               <p className="font-bold text-xl">アクティブ</p>
               <Switch defaultChecked onChange={onChange} />
           </div> */}
           <div className="bg-white p-4 rounded shadow-md">
               {notifications && notifications.length > 0 ? (
                   <div className="notifications">
                       <p className="font-bold text-lg mb-3">
                           通知あり{" "}
                           <span className="text-blue-500">
                               {notifications.length}
                           </span>{" "}
                           件
                       </p>
                       <ul className="list-disc pl-5 space-y-2 ">
                           {notifications.map((notification, index) => (
                               <li
                                   key={index}
                                   className="mb-2 p-2 bg-blue-100 rounded w-1/2"
                               >
                                   {notification.message.substring(0, 30)}...
                               </li>
                           ))}
                       </ul>
                   </div>
               ) : (
                   <p className="text-gray-500">通知はありません。</p>
               )}
           </div>
       </>
   );


};

export default AcceptHome