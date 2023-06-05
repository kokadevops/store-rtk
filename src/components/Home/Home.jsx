import { useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";

import Poster from "../Poster/Poster";
import Products from "../Products/Products";

const Home = () => {
    const { list } = useSelector(({ products }) => products);
    return (
        <>
            <Poster />
            <Products products={list} amount={5} title="Trends" />
        </>
    );
};

export default Home;
