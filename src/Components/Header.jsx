import React, { useState } from 'react'
import Logo from '../Assets/Images/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
  const headerList = ["Home", "About Us", "How it works", "Support Provided", "FAQs"]
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(0)

  function handleToggle() {
    setToggle(!toggle)
  }

  function handleLink(index) {
    setActive(index)
    setToggle(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-[82rem] items-center justify-between px-3">

        {/* Logo */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <img src={Logo} alt="logo" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
          <span className="text-sm font-bold text-primary min-[360px]:text-base min-[400px]:text-xl sm:text-2xl">
            <span className="text-green">Comfort</span>Group
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-8 xl:gap-10">
            {headerList.map((li, i) => (
              <li key={i}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleLink(i) }}
                  className={`relative cursor-pointer whitespace-nowrap py-2 text-[15px] font-medium tracking-wide transition-colors ${
                    active === i ? 'text-green' : 'text-primary hover:text-green'
                  }`}
                >
                  {li}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded bg-green transition-transform duration-300 ${
                      active === i ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA buttons + hamburger */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="#"
            className="whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-green sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get Support
          </a>
          <a
            href="#"
            className="hidden rounded-lg bg-primary px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Donate
          </a>

          <button
            type="button"
            onClick={handleToggle}
            aria-label={toggle ? 'Close menu' : 'Open menu'}
            aria-expanded={toggle}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-primary sm:h-10 sm:w-10 lg:hidden"
          >
            {toggle ? <IoMdClose className="h-6 w-6" /> : <RxHamburgerMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`bg-white transition-all duration-300 lg:hidden ${
          toggle ? 'block border-t' : 'hidden'
        }`}
      >
        <ul className="px-4 pb-2 pt-1 md:px-6">
          {headerList.map((li, i) => (
            <li key={i} className="border-b last:border-b-0">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleLink(i) }}
                className={`block cursor-pointer py-3 text-base font-medium transition-colors active:bg-gray-50 ${
                  active === i ? 'text-green' : 'text-primary'
                }`}
              >
                {li}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header