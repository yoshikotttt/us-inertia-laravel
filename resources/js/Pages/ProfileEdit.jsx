import { useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

const ProfileEdit = ({ user }) => {
   const { data, setData, post } = useForm({
       ...user,
       _method: "PUT",
   });

    const handleSubmit = (e) => {

        e.preventDefault();
        post(route("profile_detail.update"), data, {
            preserveScroll: true,
            onSuccess: () => {
                Inertia.visit("/profile-detail/edit");
            },
        });
    };
    


    return (
        <>
            <div>ProfileEdit</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>名前:</label>
                    <input
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                </div>

                <div>
                    <label>資格:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="専門医"
                                checked={data.qualification === "専門医"}
                                onChange={() =>
                                    setData("qualification", "専門医")
                                }
                            />
                            専門医
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="検査士"
                                checked={data.qualification === "検査士"}
                                onChange={() =>
                                    setData("qualification", "検査士")
                                }
                            />
                            検査士
                        </label>
                    </div>
                </div>

                <div>
                    <label>資格取得年度:</label>
                    <select
                        value={data.qualification_year}
                        onChange={(e) =>
                            setData("qualification_year", e.target.value)
                        }
                    >
                        {[...Array(new Date().getFullYear() - 1990 + 1)].map(
                            (_, idx) => {
                                const year = new Date().getFullYear() - idx;
                                return (
                                    <option value={year} key={year}>
                                        {year}年
                                    </option>
                                );
                            }
                        )}
                    </select>
                </div>

                <div>
                    <label>地域:</label>
                    <select
                        value={data.region}
                        onChange={(e) => setData("region", e.target.value)}
                    >
                        {[
                            "北海道",
                            "東北",
                            "関東",
                            "中部",
                            "関西",
                            "中国四国",
                            "九州",
                        ].map((region) => (
                            <option value={region} key={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>対応可能領域:</label>
                    {["上腹部", "下腹部", "心臓"].map((area) => (
                        <label key={area}>
                            <input
                                type="checkbox"
                                value={area}
                                checked={data.areas.includes(area)}
                                onChange={(e) => {
                                    const updatedAreas = e.target.checked
                                        ? [...data.areas, area]
                                        : data.areas.filter((a) => a !== area);
                                    setData("areas", updatedAreas);
                                }}
                            />
                            {area}
                        </label>
                    ))}
                </div>

                <div>
                    <button type="submit">更新する</button>
                </div>
            </form>
        </>
    );


};

export default ProfileEdit;
