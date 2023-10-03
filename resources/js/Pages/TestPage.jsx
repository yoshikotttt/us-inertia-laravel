import React from "react";
import styles from "../../../src/assets/styles/test.module.css";

const TestPage = ({ user }) => {
    return (
        <>
            <div className={styles['red']}>TestPage</div>
            <p>Reactだよー!!</p>
            <p>最初の登録は「{user.name}」さん!!</p>
        </>
    );
};

export default TestPage;
