import React from "react";
import styles from "../../../src/assets/styles/test.module.css";
import { useForm } from "react-hook-form";
import { createInertiaApp } from "@inertiajs/inertia-react";


const TestPage = ({ user }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            age: "",
            gender: "",
            chief_complaint: "",
            medical_history: "",
            vitals: "",
        },
    });

    const onSubmit = (data) => {
        console.log("form being sent:", data);

        // フォームデータをサーバーに送信
        createInertiaApp.post("/medical-exams", data, {
            onSuccess: () => {
                // レスポンス成功時の処理（例：リダイレクト）
                Inertia.visit("/medical-exams");
            },
        });
    };

    return (
        <>
            <div className={styles["red"]}>TestPage</div>
            <p>Reactだよー!!</p>
            <p>最初の登録は「{user.name}」さん!!</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("age", { required: true })}
                    placeholder="Age"
                />
                {errors.age && <p>入力は必須です</p>}
                <select {...register("gender")}>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                </select>
                <input
                    {...register("chief_complaint")}
                    placeholder="Chief Complaint"
                />
                <input
                    {...register("medical_history")}
                    placeholder="Medical History"
                />
                <input {...register("vitals")} placeholder="Vitals" />

                <button type="submit">送信</button>
            </form>
        </>
    );
};

export default TestPage;
