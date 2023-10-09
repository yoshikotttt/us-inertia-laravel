import AcceptHome from "@/Pages/AcceptHome";
import RequestHome from "@/Pages/RequestHome";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const HomePage = ({ user, notifications: initialNotifications }) => {
    const [notifications, setNotifications] = useState(initialNotifications);

     useEffect(() => {
         // 10秒ごとに通知を確認する
         const interval = setInterval(() => {
             Inertia.get(
                 "/home",
                 {},
                 {
                     onSuccess: (page) => {
                         setNotifications(page.props.notifications);
                     },
                 }
             );
         }, 100000); // 10000ms = 10s

         // クリーンアップ関数
         return () => {
             clearInterval(interval);
         };
     }, []);

    return (
        <>
            <Authenticated user={user}>
                {/* ユーザーの役割に基づいて表示を切り替える */}
                {user.role === 0 ? (
                    <RequestHome notifications={notifications} />
                ) : (
                    <AcceptHome notifications={notifications} />
                )}
            </Authenticated>
        </>
    );
};

export default HomePage;
