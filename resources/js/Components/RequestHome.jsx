import { Inertia } from '@inertiajs/inertia';
import React from 'react'

const RequestHome = () => {
    return (
        <div className="mt-4 text-center">
            <h3 className="text-xl mb-10 mt-20">検査を依頼する</h3>

            <div className="flex justify-center space-x-4">
                <button
                    className="h-14 w-40 shadow-lg bg-blue-500 hover:bg-blue-600 shadow-blue-500/50 hover:shadow-blue-600/50 text-white rounded px-2 py-1 transition duration-300 ease-in-out"
                    onClick={() => Inertia.get("/search", { query: "心臓" })}
                >
                    心臓
                </button>
                <a href="">
                    <button
                        className="h-14 w-40 shadow-lg bg-blue-500 hover:bg-blue-600 shadow-blue-500/50 hover:shadow-blue-600/50 text-white rounded px-2 py-1 transition duration-300 ease-in-out"
                        onClick={() =>
                            Inertia.get("/search", { query: "上腹部" })
                        }
                    >
                        上腹部
                    </button>
                </a>
                <a href="">
                    <button
                        className="h-14 w-40 shadow-lg bg-blue-500 hover:bg-blue-600 shadow-blue-500/50 hover:shadow-blue-600/50 text-white rounded px-2 py-1 transition duration-300 ease-in-out"
                        onClick={() =>
                            Inertia.get("/search", { query: "下腹部" })
                        }
                    >
                        下腹部
                    </button>
                </a>
            </div>
        </div>
    );
};

export default RequestHome