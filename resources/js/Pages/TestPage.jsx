import React from "react";
import styles from "../../../src/assets/styles/test.module.css";
import { useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";



const TestPage = ({ user, medicalData }) => {
    const { data, setData, post, errors } = useForm({
        name: "",
        age: "",
        gender: "男性",
        chief_complaint: "",
        medical_history: "",
        vitals: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/medical-exams", data, {
            preserveScroll: true,
            onSuccess: () => {
                // レスポンス成功時の処理（例：リダイレクト）
                window.location.href = "/test";
            },
        });
    };

    const handleDelete = (id) => {
        if(window.confirm("本当にこのデータを削除しますか")){
             Inertia.delete(`/test/${id}`, {
                onSuccess:() =>{
                    Inertia.visit("/test");
                }
             })
        }
    }

    return (
        <>
           
                <div className={styles["red"]}>TestPage</div>
                <p>最初の登録は「{user.name}」さん!!</p>

                <form onSubmit={handleSubmit}>
                    <input
                        value={data.age}
                        onChange={(e) => setData("age", e.target.value)}
                        placeholder="Age"
                    />
                    {errors.age && <p>入力は必須です</p>}
                    <select
                        value={data.gender}
                        onChange={(e) => setData("gender", e.target.value)}
                    >
                        <option value="男性">男性</option>
                        <option value="女性">女性</option>
                    </select>
                    <input
                        value={data.chief_complaint}
                        onChange={(e) =>
                            setData("chief_complaint", e.target.value)
                        }
                        placeholder="Chief Complaint"
                    />
                    <input
                        value={data.medical_history}
                        onChange={(e) =>
                            setData("medical_history", e.target.value)
                        }
                        placeholder="Medical History"
                    />
                    <input
                        value={data.vitals}
                        onChange={(e) => setData("vitals", e.target.value)}
                        placeholder="Vitals"
                    />

                    <button type="submit">送信</button>
                </form>

                {medicalData.length === 0 ? (
                    <p>投稿はありません</p>
                ) : (
                    <ul>
                        {medicalData.map((medical) => (
                            <li key={medical.id}>
                                {medical.age}
                                {medical.gender}
                                <button
                                    onClick={() => handleDelete(medical.id)}
                                >
                                    削除
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            
        </>
    );
};

export default TestPage;
