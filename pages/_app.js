import '../styles/globals.css'
import Link from "next/link";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return <div>
    <div className='h-16 z-50 py-2 shadow bg-white sticky top-0  w-full  flex items-center px-8 justify-between flex-row'>
      <Image src='/Smartcodehub.png' alt='Smartcodehub' height={80} width={80}/>
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
