import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Tasks.module.css";

const Navigation = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <header>
        <NavLink to="/" className={styles.active}>
          <button className={styles.btn}>Credit</button>
        </NavLink>
        <NavLink to="/deposit" className={styles.active}>
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
