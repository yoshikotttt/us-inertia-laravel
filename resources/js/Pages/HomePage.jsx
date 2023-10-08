import AcceptHome from "@/Components/AcceptHome";
import RequestHome from "@/Components/RequestHome";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

const HomePage = ({ user }) => {
    return (
        <>
            <Authenticated user={user}>
                {/* ユーザーの役割に基づいて表示を切り替える */}
                {user.role === 0 && <RequestHome />}
                {user.role === 1 && <AcceptHome />}
            </Authenticated>
        </>
    );
};

export default HomePage;
