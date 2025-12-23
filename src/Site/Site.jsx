import React from 'react'
import css from './Site.module.css'
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Products from './pages/Products/Products'
import About from './pages/About/About'
import NecklaceBuilderApp from '../NecklaceBuilderApp/NecklaceBuilderApp'
import Collections from './pages/Collections/Collections'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import ProductsPanel from './pages/Dashboard/products/ProductsPanel'
import NewProduct from './pages/Dashboard/products/NewProduct'
import CollectionsPanel from './pages/Dashboard/collections/CollectionsPanel'
import NewCollection from './pages/Dashboard/collections/NewCollection'
import CategoriesPanel from './pages/Dashboard/categories/CategoriesPanel'
import NewCategory from './pages/Dashboard/categories/NewCategory'
import OrdersPanel from './pages/Dashboard/orders/OrdersPanel'
import EditProduct from './pages/Dashboard/products/EditProduct'
import EditCollection from './pages/Dashboard/collections/EditCollection'

const Site = () => {

  return (
    <React.Fragment>
        
        <Router>
          <Switch>
            <Route path="/" exact Component={Home}/>
            <Route path="/accueil" Component={Home}/>
            <Route path="/boutique" Component={Products}/>
            <Route path="/collections" Component={Collections}/>
            <Route path="/apropos" Component={About}/>
            <Route path="/customisation" Component={NecklaceBuilderApp}/>
            <Route path="/login" Component={Login}/>
            <Route path="/dashboard" Component={Dashboard}/>
            <Route path="/dashboard/produits" Component={ProductsPanel}/>
            <Route path="/dashboard/nouveau-produit" Component={NewProduct}/>
            <Route path="/dashboard/produits/edition" Component={EditProduct}/>
            <Route path="/dashboard/collections" Component={CollectionsPanel}/>
            <Route path="/dashboard/nouvelle-collection" Component={NewCollection}/>
            <Route path="/dashboard/collections/edition" Component={EditCollection}/>
            <Route path="/dashboard/categories" Component={CategoriesPanel}/>
            <Route path="/dashboard/nouvelle-categorie" Component={NewCategory}/>
            <Route path="/dashboard/commandes" Component={OrdersPanel}/>
            <Route path="*" Component={NotFound}/>
          </Switch>
        </Router>
        
        {/* <Footer/> */}
    </React.Fragment>
    
  )
}
export default Site