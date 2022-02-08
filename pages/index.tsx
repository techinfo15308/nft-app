import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg'>
      <div className="container">
        <Head>
          <title>NFT</title>
          <meta name="NFT site" content="nft" />
          <link rel="icon" href="/img/logo.png" />
        </Head>

        <main className={styles.main}>
          <nav className="navbar navbar-dark navbar-expand-lg bg-faded justify-content-center">
            <a href="/" className="navbar-brand d-flex w-50 me-auto">
              <img src="/img/logo.png" alt="" width="40" height="40" className="d-inline-block align-text-top" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
              <ul className="navbar-nav w-100 justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link" href="#">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">LEGENDS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ROADMAP</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">TEAM</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">RARITIES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FAQ</a>
                </li>
              </ul>
              <ul className="nav navbar-nav mx-auto w-100 justify-content-end">
                <li className="nav-item d-inline-flex">
                  <a className="nav-link p-2" href="#"><i className="bi bi-facebook"></i></a>
                  <a className="nav-link p-2" href="#"><i className="bi bi-twitter"></i></a>
                  <a className="nav-link p-2" href="#"><i className="bi bi-instagram"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link col btn btn-ultra-voilet btn-rounded" href="#">JOIN OUR DISCORD</a>
                </li>
              </ul>
            </div>
          </nav>


         
          <motion.div className="text-center" initial="hidden" animate="visible" variants={{
            hidden:{
              scale:.7,
              opacity:0
            },
            visible: {
              scale:1,
              opacity:1,
              transition:{
                delay:0.6,
              }
            }
          }} >
            <h1 className="pt-5 text-white">AXO SOCIETY</h1>
            <p className="text-light">Lorem ipsum dolor sit met, consectetur adipiscing elit. Cras mollis sem eu malesuada eleifend.</p>
            <img src="img/header1.png" className="w-100 img-hero"/>
         </motion.div>
         <div className="text-center mt-5 img-hero">
            <a href='#welcome'><img src="img/scroll.png" className="p-3 mx-auto d-block" alt="..."/></a>
            <img src="img/divide.png" className="mx-auto d-block divide-width" alt="..."/>
         </div>
         <div className="row mt-5" >
            <div className="col-12 col-md-6 text-center pt-md-5" >
               <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-inner" id="welcome">
                     <div className="carousel-item active">
                        <span className="d-inline-block">
                        <img src="img/nft1.png" className="slideimage-w" alt="..."/>
                        <img src="img/nft2.png" className="slideimage-w" alt="..."/>		
                        </span>
                        <span className="d-inline-block">
                        <img src="img/nft4.png" className="slideimage-w" alt="..."/>
                        <img src="img/nft5.png" className="slideimage-w" alt="..."/>		
                        </span>
                        <span className="d-inline-block">
                        <img src="img/nft1.png" className="slideimage-w" alt="..."/>
                        <img src="img/nft3.png" className="slideimage-w" alt="..."/>		
                        </span>
                     </div>
                     <div className="carousel-item">
                        <span className="d-inline-block">
                        <img src="img/nft2.png" className="slideimage-w" alt="..."/>
                        <img src="img/nft3.png" className="slideimage-w" alt="..."/>		
                        </span>
                        <span className="d-inline-block">
                        <img src="img/nft4.png" className="slideimage-w" alt="..."/>
                        <img src="img/nft5.png" className="slideimage-w" alt="..."/>		
                        </span>
                        <span className="d-inline-block">
                        <img src="img/nft3.png" className="slideimage-w" alt="..."/>
                        <img src="img/nft1.png" className="slideimage-w" alt="..."/>		
                        </span>
                     </div>
                  </div>
                  <button className="carousel-control-prev adjustmover" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon firstmover " aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next adjustmover1" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon firstmover" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                  </button>
               </div>
            </div>
            <div className="col-md-6 order-md-1 order-2 pr-md-4 welcomediv vercenter">
               <div className="vermiddle">
                  <h1 className="mb-md-4 mb-3">WELCOME NFT</h1>
                  <p className="mb-md-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     <br/><br/>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <h5>Number of NFT: 555</h5>
                  <h5>Initial Price: 2 <img src="img/currency.png" width="30" className="margtop-7"/></h5>
               </div>
            </div>
         </div>
         <div className="text-center mt-5">
            <img src="img/divide.png" className="rounded mx-auto d-block" alt="..."/>
         </div>
         <div className="row text-center mt-5">
            <div className="col-12 col-lg-6 order-md-1 order-2 ">
               <div className="transdiv">
                  <div className="text-center">
                     <h1 className="mb-md-4 mb-3 pt-5">LEGENDS TITLE</h1>
                     <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                     </p>
                     <div id="scroller">
                        <div className="nava1">
                           <a className="prev"><i className="bi bi-arrow-left"></i></a>
                           <a className="next"><i className="bi bi-arrow-right"></i></a>
                        </div>
                        <a className="item" href="#">
                        <img src="img/nft1.png" className="img-responsive" />
                        </a>
                        <a className="item" href="#">
                        <img src="img/nft2.png"  className="img-responsive" />
                        </a>
                        <a className="item" href="#">
                        <img src="img/nft3.png"  className="img-responsive" />
                        </a>
                        <a className="item" href="#">
                        <img src="img/nft4.png"  className="img-responsive" />
                        </a>
                        <a className="item" href="#">
                        <img src="img/nft5.png"  className="img-responsive" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-12 col-lg-6 order-md-2 order-1 ">
               <div className="text-center transdiv" >
                  <a className="thumbnail" href="https://www.youtube.com/watch?v=D0UnqGm_miA" target="_blank">
                     <div className="img">
                        <i className="bi bi-play display-1 text-white"></i>
                        <img className="w-100 maskimg"  alt="" src="img/mask.png" />
                     </div>
                  </a>
               </div>
            </div>
         </div>
         <div className="text-center mt-5">
            <img src="img/divide.png" className="rounded mx-auto d-block" alt="..."/>
         </div>
         <div className="row mt-5">
            <div className="col-12 col-md-6  order-md-1 order-2 vermiddle400">
               <div  className="vercenter">
                  <h1 className="mb-md-4 mb-3">Charity</h1>
                  <p className="mb-md-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     <br/><br/>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <h5>Number of NFT: 555</h5>
                  <h5>Initial Price: 2 <img src="img/currency.png" width="30" height="30"/></h5>
               </div>
            </div>
            <div className="col-12 col-md-6 text-center  order-md-2 order-1 vermiddle400" >
               <div  className="vercenter">
                  <span className="d-inline-block">
                  <img src="img/nft1.png" className="slideimage-w" alt="..."/>
                  <img src="img/nft2.png" className="slideimage-w" alt="..."/>		
                  </span>
                  <span className="d-inline-block">
                  <img src="img/nft4.png" className="slideimage-w" alt="..."/>
                  <img src="img/nft5.png" className="slideimage-w" alt="..."/>		
                  </span>
               </div>
            </div>
         </div>
         <div className="text-center mt-5">
            <img src="img/divide.png" className="rounded mx-auto d-block" alt="..."/>
         </div>
         <div className="text-center m-5">
            <br/><br/>
            <h1>MEET THE FOUNDERS</h1>
         </div>
         <div className="row">
            <div className="col-12">
               <div className="row row-cols-1  row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                  <div className="col">
                     <div className="h-100">
                        <img src="img/nft1.png" className="card-img-top" alt="..."/>
                        <div className="card-body lineh05">
                           <h5 className="card-title">Paige Turner</h5>
                           <p className="text-muted">Founder</p>
                           <p className="text-our"><b>8 years of experience</b></p>
                           <span className="text-muted lineh12">Lorem Ipsum text is here, Lorem Ipsum text is here,</span>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="h-100">
                        <img src="img/nft2.png" className="card-img-top" alt="..."/>
                        <div className="card-body lineh05">
                           <h5 className="card-title">Paige Turner</h5>
                           <p className="text-muted">Founder</p>
                           <p className="text-our"><b>8 years of experience</b></p>
                           <span className="text-muted lineh12">Lorem Ipsum text is here, Lorem Ipsum text is here,</span>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="h-100">
                        <img src="img/nft3.png" className="card-img-top" alt="..."/>
                        <div className="card-body lineh05">
                           <h5 className="card-title">Paige Turner</h5>
                           <p className="text-muted">Founder</p>
                           <p className="text-our"><b>8 years of experience</b></p>
                           <span className="text-muted lineh12">Lorem Ipsum text is here, Lorem Ipsum text is here,</span>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="h-100">
                        <img src="img/nft4.png" className="card-img-top" alt="..."/>
                        <div className="card-body lineh05">
                           <h5 className="card-title">Paige Turner</h5>
                           <p className="text-muted">Founder</p>
                           <p className="text-our"><b>8 years of experience</b></p>
                           <span className="text-muted lineh12">Lorem Ipsum text is here, Lorem Ipsum text is here,</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="text-center mt-5">
            <img src="img/divide.png" className="rounded mx-auto d-block" alt="..."/>
         </div>
         <div className="text-center m-5">
            <br/><br/>
            <h1>FAQ</h1>
         </div>
         <div className="row">
            <div className="col-12">
               <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                        </button>
                     </h2>
                     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus velit, pretium in sodales ut, feugiat eu elit. Ut pellentesque libero a leo semper rhoncus. Ut sodales augue et posuere accumsan. Ut et placerat tortor, vitae volutpat erat. Vestibulum commodo fermentum nibh et pharetra.
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                        </button>
                     </h2>
                     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus velit, pretium in sodales ut, feugiat eu elit. Ut pellentesque libero a leo semper rhoncus. Ut sodales augue et posuere accumsan. Ut et placerat tortor, vitae volutpat erat. Vestibulum commodo fermentum nibh et pharetra.
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                        </button>
                     </h2>
                     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus velit, pretium in sodales ut, feugiat eu elit. Ut pellentesque libero a leo semper rhoncus. Ut sodales augue et posuere accumsan. Ut et placerat tortor, vitae volutpat erat. Vestibulum commodo fermentum nibh et pharetra.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </main>
        
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script
            dangerouslySetInnerHTML={{
              __html: `
              var itemPositions = [];
              var numberOfItems = $('#scroller .item').length;
              
              /* Assign each array element a CSS class based on its initial position */
              function assignPositions() {
              for (var i = 0; i < numberOfItems; i++) {
                if (i === 0) {
                  itemPositions[i] = 'left-hidden';
                } else if (i === 1) {
                  itemPositions[i] = 'left';
                } else if (i === 2) {
                  itemPositions[i] = 'middle';
                } else if (i === 3) {
                  itemPositions[i] = 'right';
                } else {
                  itemPositions[i] = 'right-hidden';
                }
              }
              /* Add each class to the corresponding element */
              $('#scroller .item').each(function(index) {
                $(this).addClass(itemPositions[index]);
              });
              }
              
              /* To scroll, we shift the array values by one place and reapply the classes to the images */
              function scroll(direction) {
              if (direction === 'prev') {
                itemPositions.push(itemPositions.shift());
              } else if (direction === 'next') {
                itemPositions.unshift(itemPositions.pop());
              }
              $('#scroller .item').removeClass('left-hidden left middle right right-hidden').each(function(index) {
                $(this).addClass(itemPositions[index]);
              });
              }
              
              /* Do all this when the DOMs ready */
              $(document).ready(function() {
              
              assignPositions();
              var autoScroll = window.setInterval("scroll('next')", 4000);
              
              
              
              /* Click behaviours */
              $('.prev').click(function() {
                scroll('prev');
              });
              $('.next').click(function() {
                scroll('next');
              });
              
              });
                  `,
            }}
          ></script>
      </div>
    </div>
  )
}
