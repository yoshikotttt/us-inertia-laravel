import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

const SearchDoctorPage = ({ user, results}) => {

    console.log(results)
    return (
        <>
            <Authenticated user={user}>
                <div className="text-center">
                    <h3 className="result-info mb-4 mx-20 font-bold text-xl text-center bg-blue-200 h-14 rounded-xl flex items-center justify-center">
                        検索結果 　　{results.length} 件
                    </h3>

                    {/* <form action={route("process.select")} method="GET"> */}

                    <form method="GET">
                        <div className="pl-20 mt-10 mb-10">
                            {results.map((result) => (
                                <label
                                    key={result.id}
                                    className="block my-2 text-left mt-4"
                                >
                                    <div className="flex space-x-4">
                                        <input
                                            type="radio"
                                            name="selected_result"
                                            value={result.id}
                                        />
                                        {result.qualification}/ {result.region}/
                                        {result.areas.map((area, index) => (
                                            <div key={index} className="pl-1">
                                                {area}
                                            </div> // px-2は左右にスペースを追加するためのクラス
                                        ))}
                                    </div>
                                </label>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="shadow-lg bg-blue-500 hover:bg-blue-600 shadow-blue-500/50 hover:shadow-blue-600/50 text-white rounded px-2 py-1 transition duration-300 ease-in-out h-14 w-40"
                        >
                            依頼する
                        </button>
                    </form>
                </div>
            </Authenticated>
        </>
    );
};

export default SearchDoctorPage;
