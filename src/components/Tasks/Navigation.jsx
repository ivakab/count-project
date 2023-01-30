import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Tasks.module.css";

const Navigation = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">
          <button className={styles.btn}>Credit</button>
        </NavLink>
        <NavLink to="/deposit">
          <button className={styles.btn}> Deposit</button>
        </NavLink>
        <button onClick={goBack} className={styles.btn}>
          Go back
        </button>
      </header>
      <Outlet />
    </>
  );
};

export { Navigation };
