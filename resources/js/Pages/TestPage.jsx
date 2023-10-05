import React from "react";
import styles from "../../../src/assets/styles/test.module.css";
import { useForm } from "react-hook-form";
import { InertiaApp } from "@inertiajs/inertia-react";

const TestPage = ({ user }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        name: "",
        age: "",
        gender: "",
        chief_complaint: "",
        medical_history: "",
        vitals: "",
    });

    const onSubmit = (data) => {
        // フォームデータを処理するための form() 関数を取得します。
        const form = useForm({
            name: data.name,
            age: data.age,
            gender: data.gender,
            chief_complaint: data.chief_complaint,
            medical_history: data.medical_history,
            vitals: data.vitals,
        });

        // フォームデータを保存します。
        form.save("/medical-exams", {
            redirectTo: "/medical-exams",
        });
    };

    return (
        <>
            <div className={styles["red"]}>TestPage</div>
            <p>Reactだよー!!</p>
            <p>最初の登録は「{user.name}」さん!!</p>

            <form onSubmit={handleSubmit}>
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
