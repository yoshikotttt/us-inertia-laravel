import AcceptHome from "@/Pages/AcceptHome";
import RequestHome from "@/Pages/RequestHome";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

const HomePage = ({ user, notifications }) => {
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
