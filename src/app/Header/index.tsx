"use client"
import { useState } from "react";

const Header = () => {

  const [close, setClose] = useState(false)

  return (
    <header>
      <div className="flex items-center justify-between text-lg w-[72rem] m-auto">
        <div className="flex items-center z-50">
          <img src="logo.png" alt="logo-meow-cafe" className="w-32 sm:w-44" />
          <span className="font-bold sm:font-medium text-text text-xl -ml-4 pr-14 w-52">Meow Café</span>
          <div className="sm:hidden" onClick={() => setClose(!close)
          }>
            {close ? (
              <span className="material-symbols-outlined">
                close
              </span>
            ) : (
              <span className="material-symbols-outlined">
                menu
              </span>
            )}
          </div>
          <div className={`transition-all duration-200 ${!close ? "hidden sm:flex" : "sm:hidden flex-col top-20 absolute left-28 border rounded-3xl p-4"}`}>
            <nav className="flex flex-col sm:flex-row sm:items-center sm:gap-10 gap-2 text-headings font-medium mr-80">
              <a href="#home" className="link-underline">Início</a>
              <a href="#products" className="link-underline">Produtos</a>
              <a href="#about" className="link-underline">Sobre</a>
            </nav>
            <div className="flex mt-2 sm:mt-0 gap-8 items-center z-50">
              <span className="font-medium link-underline">Login</span>
              <span className="text-white bg-brand hover:bg-brand-2 rounded-full px-8 py-2">Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[72rem] m-auto items-center">
        <div className="z-50 w-96 px-4 sm:px-10 text-headings mt-4 space-y-3 absolute sm:static top-36">
          <span className="font-bold text-2xl sm:text-xl">Sabor inesquecível</span>
          <h1 className="font-bold text-4xl sm:text-7xl w-20 sm:w-full">Meow Café</h1>
          <p className="sm:font-normal font-medium sm:text-base text-lg w-48 sm:w-full">Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria tem um espaço confortável para você e seu melhor amigo. </p>
        </div>
          <img src="header-mobile.png" alt="image-header"
          className="sm:hidden"/>
        <img src="image-header.png" alt="image-header"
          className="hidden sm:block lg:absolute top-0 right-[21rem]"
        />
      </div>
    </header>
  )
}

export default Header;