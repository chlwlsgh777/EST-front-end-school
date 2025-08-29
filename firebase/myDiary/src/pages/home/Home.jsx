import React from "react";
import styles from "./Home.module.css";
import DiaryFrom from "./DiaryFrom";
import DiaryList from "./DiaryList";

export default function Home() {
  return (
    <div className="container">
      <main className={styles["diary-main"]}>
        <h2 className={styles.heart}>2023.02.27의 비밀일기</h2>
        <DiaryFrom />
      </main>
      <section>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul>
          <DiaryList />
        </ul>
      </section>
    </div>
  );
}
