import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Link from "next/link";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}
    (window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '204530941473917');
    fbq('track', 'PageView');

    
  }, [router.events])
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
