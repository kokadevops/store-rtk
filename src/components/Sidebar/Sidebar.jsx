import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { list } = useSelector(({ categories }) => categories);
    console.log(list);
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    {list.map(({ id, name }) => (
                        <li key={id}>
                            <NavLink
                                className={({ isActive }) =>
                                    `${styles.link} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                                to={`/categories/${id}`}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.footer}>
                <a href="/help" target="_blank" className={styles.link}>
                    help
                </a>
                <a
                    href="/terms"
                    style={{ textDecoration: "underline" }}
                    target="_blank"
                    className={styles.link}
                >
                    Terms&conditions
                </a>
            </div>
        </section>
    );
};

export default Sidebar;
