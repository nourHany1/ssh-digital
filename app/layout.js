"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/page";
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Components/Footer/page";
import logo from '../public/Allimages/Logo.png'
import 'animate.css';

export default function RootLayout({ children }) {



  return (
    <html lang="en">
       <head>
      <link rel="shortcut icon" href="./favicon.ico" />
      <title>Alarab Soft</title>
    </head>

      <body className=' ' style={{backgroundColor:"rgba(1, 14, 40, 1)"}} > 
      
         

                    <Navbar />

                <div className="pt-16" >

                {children}
                </div>

             <Footer />
    
         
         </body>
    </html>
  );
}
