
import './App.css';
// import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Basket from './components/Basket';
import Footer from './components/Footer';
import data from './data';
import { useState, useEffect } from 'react';

// const for localStorage
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
const cartNumberFromLocalStorage = JSON.parse(localStorage.getItem('cartNumber') || '[]') ;


function App() {

  const { products } = data;
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  

  useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
  },
  [cartItems]
  );


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems (cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1} : x)
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems (cartItems.filter((x) =>
        x.id !== product.id)
      );
    } else {
      setCartItems(cartItems.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty -1} : x)
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.reduce((prev, curr) => prev + curr.qty,0)}></Header>
      <div>
        <Section onAdd={onAdd } products={products}></Section>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
      </div>

      <Footer></Footer>
    </div>
  );
 }

 export default App;
































// ----------------- home page --------
// const blogObj = {
//   title: 'Blog Title 13',
//   description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
// }


//   return (
//     <div className="App">

//       <header>
//         <p>e-Commerce</p>
//         <div className="right-side-header">
//           <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-blue.png`} alt="add-to-cart-icon"/>
//           <div className="circle"></div>
//         </div>
//       </header>

//       <section>
//         <div className="item">
//           <img className="laptop" src={`${process.env.PUBLIC_URL}/assets/images/acer-aspire.jpg`} alt="acer"/>
//           {/* <h3>{blogObj.title}</h3> */}
//           <h1>Acer</h1>
//           <div className="price">
//             <h2>199 <span>$</span></h2>
//             <button> AddToCart
//             <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
//             </button>          </div>
//           <p>{blogObj.description}</p>
//         </div>

//         {/* <hr></hr> */}

//         <div className="item">
//         <img className="laptop" src={`${process.env.PUBLIC_URL}/assets/images/asus-e406na.jpg`} alt="asus"/>
//           {/* <h3>{blogObj.title}</h3> */}
//           <h1>Asus</h1>
//           <div className="price">
//             <h2>219 <span>$</span></h2>
//             <button> AddToCart
//             <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
//             </button>          </div>
//           <p>{blogObj.description}</p>
//         </div>

//         {/* <hr></hr> */}

//         {/* <div className="item">
//         <img className="laptop" src={`${process.env.PUBLIC_URL}/assets/images/avita-pura.jpg`} alt="avita-pura"/>
//           {/* <h3>{blogObj.title}</h3> */}
//           {/* <h1>Avita Pura</h1>
//           <div className="price">
//             <h2>199 <span>$</span></h2>
//             <button> AddToCart
//             <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
//             </button>          </div>
//           <p>{blogObj.description}</p>
//         </div> */} 

//         <div className="item">
//         <img className="laptop" src={`${process.env.PUBLIC_URL}/assets/images/dell-latitude.jpg`} alt="dell"/>
//           {/* <h3>{blogObj.title}</h3> */}
//           <h1>Dell</h1>
//           <div className="price">
//             <h2>349 <span>$</span></h2>
//             <button> AddToCart
//             <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
//             </button>
//           </div>
//           <p>{blogObj.description}</p>
//         </div>

//         {/* <hr></hr> */}

//         <div className="item">
//         <img className="laptop" src={`${process.env.PUBLIC_URL}/assets/images/hp-probook.jpg`} alt="hp"/>
//           {/* <h3>{blogObj.title}</h3> */}
//           <h1>HP</h1>
//           <div className="price">
//             <h2>349 <span>$</span></h2>
//             <button> AddToCart
//             <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
//             </button>          </div>
//           <p>{blogObj.description}</p>
//         </div>

//         {/* <hr></hr> */}

//         <div className="item">
//         <img className="laptop" src={`${process.env.PUBLIC_URL}/assets/images/lenovo-thinkpad.jpg`} alt="lenovo"/>
//           {/* <h3>{blogObj.title}</h3> */}
//           <h1>Lenovo</h1>
//           <div className="price">
//             <h2>399 <span>$</span></h2>
//             <button> AddToCart
//             <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
//             </button>          </div>
//           <p>{blogObj.description}</p>
//         </div>

//         <div className="item">
//         <img className="laptop" src={`${process.env.PUBLIC_URL}/assets/images/macbook-pro.jpg`} alt="macbook"/>
//           {/* <h3>{blogObj.title}</h3> */}
//           <h1>Macbook</h1>
//           <div className="price">
//             <h2>499 <span>$</span></h2>
//             <button> AddToCart
//             <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
//             </button>          </div>
//           <p>{blogObj.description}</p>
//         </div>

//         {/* <hr></hr> */}

//         <div className="item">
//         <img className="laptop" src={`${process.env.PUBLIC_URL}/assets/images/panasonic-toughbook.jpg`} alt="panasonic"/>
//           {/* <h3>{blogObj.title}</h3> */}
//           <h1>Panasonic</h1>
//           <div className="price">
//             <h2>249 <span>$</span></h2>
//             <button> AddToCart
//             <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
//             </button>          </div>
//           <p>{blogObj.description}</p>
//         </div>

//         {/* <hr></hr> */}

//         <div className="item">
//         <img className="laptop" src={`${process.env.PUBLIC_URL}/assets/images/toshiba-portege.jpg`} alt="toshiba"/>
//           {/* <h3>{blogObj.title}</h3> */}
//           <h1>Toshiba</h1>
//           <div className="price">
//             <h2>299 <span>$</span></h2>
//             <button> AddToCart
//             <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
//             </button>          </div>
//           <p>{blogObj.description}</p>
//         </div>
//       </section>

//       <footer>
//         <div className="small-icons">
//         <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/facebook.png`} alt="facebook"/>
//         <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/instagram.png`} alt="instagram"/>
//         <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`} alt="twitter"/>
//         <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/linkedin.png`} alt="linkedin"/>
//         </div>
//         <div>
//           <p>
//           © 2021 Copyright: Oliver Vukovic - Quantox Technology
//           </p>
//         </div>
//       </footer>




//       {/* <h3>Ime i prezime: {getFullName(firstName,lastName)}</h3>
//       {/* {`${firstName} ${lastName}`} */}
//       {/* <p>Godina: {mObj.age}</p>
//       <p>Zaposlen: {job}</p> */}

//       {/* <input placeholder= {inputPlaceholder} autoComplete/> */}

//       {/* {detailsInputBox} */}

//       {/* {mArr[0]}

//       {
//         mArr[0] > 0 ? "True" : "False"
//       } */}
     
    
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}


//     </div>
//   );
// }

// export default App;
