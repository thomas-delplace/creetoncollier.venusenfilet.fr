import React from 'react'
import { Link } from 'react-router-dom'
import css from './Products.module.css'
import Nav from '../../assets/nav/Nav'
import Page from '../../assets/page/Page'
import ProductCard from './ProductCard/ProductCard'

const Products = () => {

  return (
    <Page>
      <div className={css.wrapper}>
        {/* <h1>PRODUITS</h1> */}
        <div className={css.topPanel}>
          <form className={css.searchForm} action="" method="get">
            <input className={css.searchBar} type="text" name="" id="" />
            <input className={css.searchButton} type="submit" value="CHERCHER" />
          </form>
        </div>
        <div className={css.leftPanel}>
          <h2>CATÉGORIES</h2>
          <ul>
            <Link to="/categories/colliers"><li id="colliers">Colliers</li></Link>
            <Link to="/categories/bouclesdoreilles"><li id="bouclesdoreilles">Boucles d'oreilles</li></Link>
            <Link to="/categories/chokers"><li id="chokers">Chokers</li></Link>
            <Link to="/categories/bougies"><li id="bougies">Bougies</li></Link>

          </ul>
          <h2>COLLECTIONS</h2>
          <ul>
            <Link to="/collections/queer"><li id="queer">Queer</li></Link>
            <Link to="/collections/kinky"><li id="kinky">Kinky</li></Link>
            <Link to="/collections/feministe"><li id="feministe">Féministe</li></Link>
            <Link to="/collections/breizh"><li id="breizh">Breizh</li></Link>

          </ul>
        </div>
        <div className={css.mainPanel}>
          <div className={css.productGrid}>
            <ProductCard img="http://192.168.1.70:8080/medias/boucles-d-oreilles-bananes-20240321105611.JPG" alt="" name="Boucles d'oreilles banane" id="boucles-d-oreilles-bananes-20240321105611" price={14.99}/>
            <ProductCard img="http://192.168.1.70:8080/medias/boucles-d-oreilles-serotonine-20240311132500.webp" alt="" name="Boucles d'oreilles sérotonine" id="boucles-d-oreilles-serotonine-20240311132500" price={19.99}/>
            <ProductCard img="http://192.168.1.70:8080/medias/bougie-femme-charnue-20240328193256.jpg" alt="" name="Bougie belle femme charnue et dodue" id="bougie-femme-charnue-20240328193256" price="13.50"/>
            <ProductCard img="http://192.168.1.70:8080/medias/ensemble-collier-et-boucles-d-oreille-20240313162101.JPG" alt="" name="Ensemble collier et boucles d'oreilles" id="ensemble-collier-et-boucles-d-oreille-20240313162101" price={19.99}/>


            
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
            <div className={css.placeholder}></div>
          </div>
        </div>
      </div>


      <div className={css.home}>

      </div>

    </Page>
  )
}
export default Products