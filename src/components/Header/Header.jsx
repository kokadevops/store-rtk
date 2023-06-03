import { Link } from "react-router-dom";

import styles from "../../styles/Header.module.css";

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";

import AVATAR from "../../images/avatar.jpg";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="logo" />
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.user}>
                    <div
                        className={styles.avatar}
                        style={{ backgroundImage: `url(${AVATAR})` }}
                    />
                    <div className={styles.username}>Guest</div>
                </div>
                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className="icon">
                            <use
                                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}
                            />
                        </svg>
                    </div>
                    <div className={styles.input}>
                        <input
                            type="search"
                            name="search"
                            placeholder="search for"
                            autoComplete="off"
                            onChange={() => {}}
                            value=""
                        />
                    </div>
                    <div className="box"></div>
                </form>
                <div className={styles.account}>
                    <Link className={styles.favorites} to={ROUTES.HOME}>
                        <svg className={styles["icon-fav"]}>
                            <use
                                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}
                            />
                        </svg>
                    </Link>
                    <Link className={styles.cart} to={ROUTES.CART}>
                        <svg className={styles["icon-cart"]}>
                            <use
                                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}
                            />
                        </svg>
                        <span className={styles.count}>232</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
