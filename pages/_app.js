import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <div className='h-16 sticky top-0 shadow-sm w-full  flex items-center px-8 justify-between flex-row'>
         <h4 className='text-black text-2xl font-Heading'>Smartcodehub</h4>
         <ul className='text-black flex space-x-6 items-center'>
           <li>Home</li>
           <li>Docs</li>
           <li>Blog</li>
           <li className='px-4 py-2 cursor-pointer bg-black rounded text-white'>Get Started</li>
         </ul>
    </div>
    <Component {...pageProps} />
    </div>
}

export default MyApp
