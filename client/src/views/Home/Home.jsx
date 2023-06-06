import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

import style from "../Home/Home.module.css";

import Search from "../../components/Search/Search";
import Loader from "../Loader/Loader";
import SearchType from "../../components/SearchType/SearchType";
import Paginado from "../../components/Paginado/Paginado"
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await dispatch(getPokemons());
      setLoading(false);
    };
    getData();
  }, [dispatch, reload]);

  // useEffect( async () => {
  //   setLoading(true);
  //   await dispatch(getPokemons());
  //   setLoading(false)
  // }, [dispatch]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await dispatch(getPokemons());
      setLoading(false);
    };
    getData();
  }, [dispatch]);
    return (
        <div className={style.main}>
          
          {loading ? (
            <Loader />,
            <p>Loading</p>
          ) : (
            <div className={style.animation}>
              <SearchType />
              <div className={style.controls}>
                <SearchBar />
                
                <Filter />
                <button
                  className={style.button}
                  onClick={() => setReload(!reload)}
                >
                  Recargar
                </button>
              </div>
              <div className={style.bottomSection}>
                <Paginado />
                <Footer />
              </div>
            </div>
          )}
        </div>
      );
    };

export default Home;