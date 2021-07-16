import '../styles/globals.css'
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return <div>
    <div className='h-16 z-50 py-2 shadow bg-white sticky top-0  w-full  flex items-center px-8 justify-between flex-row'>
      <img src='https://products.smartcodehub.com/Smartcodehub.png' className='h-20'/>
      <ul className='text-black  space-x-6 items-center hidden sm:flex' >
        <li><Link href='/'>
          <a>Home</a>
        </Link></li>
        <li><Link href='/docs'>
          <a>Docs</a>
        </Link></li>
        <li><a href='https://blog.smartcodehub.com'>Blog</a></li>
        <li className='px-4 py-2 cursor-pointer bg-black rounded text-white'>
          <a href="https://github.com/Smart-code-hub/Smartcodehub-Docs" target='blank'>
            Get Started
          </a>
        </li>
      </ul>
    </div>
    <Component {...pageProps} />
  </div>
}

export default MyApp
