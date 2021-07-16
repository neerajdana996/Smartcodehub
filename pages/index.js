import React from 'react'
import { ReactFlowDiagram } from "../components/FlowDiagram";

const backendfeatures = [
  `The API comes with the latest tech Stack (node js, express js, and MongoDB) It comes with robust CRUD operations`,

  `Has in build functionality of image upload and mapping the image to correct fields in DB (MongoDB) also saves the image in API folder with managed names as per entity`,

  `comes with an option for you to create a flow of authentication so dynamic that you chose the payload and what you want in token the login API endpoint is created with JSON web token. Even you can decide which other entities should apply authentication as in the video above`,

  `the code is as simple as it looks, and every file is customizable for you to insert your unique business logic`,

]
const frontendFeatures = [
  `The web application comes with again a trending library (react js). Comes with robust yet very dynamic and decupled react forms for creating and edit`,
  `the list view is under active development currently, it has pagination and searching functionality in it`,
  `The data is not some fake data. It has integration with the generated API`,
  `Some great packages are already implemented like redux redux-saga for state management`,
  `No Class Component Everything is built using react hooks and a promise always to be updated`,
]
export default function index() {
  return (
    <>
      <div className='flex  sm:flex-row flex-col p-8 py-32 justify-evenly items-center'>

        <div className=' rounded-lg relative border-gray-800  px-8 py-16'>

          <p className='font-body text-sm absolute -top-5  text-white rounded-md bg-indigo-900 inline px-4 py-2'>

            The Docs Are Still Under Development</p>
          <p className='font-Heading text-2xl mt-4 text-gray-800'> Smartcodehub Opensource Web Based Full Stack Web Application Generator</p>
          <p className="mb-6 text-lg text-gray-500 leading-loose">
         Phase 1  With a vision to generate Full stack web application with  all sort of combinations of all technologies in backend and frontend </p>
        
         
        </div>
        <div className='sm:w-2/3 w-full'>
          <ReactFlowDiagram />
        </div>
      </div>
      <section className=' w-full'>
         
      

        <div>
               <section className="py-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 items-center mb-12 lg:mb-16">
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg">
                <span className="text-xs font-bold text-gray-200 uppercase">Smartcodehub</span>
                <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">Smartcodehub Full stack web application generator</h2>
                <div className="max-w-md">
                  <p className="mb-6 lg:mb-0 text-base text-gray-500 leading-loose">SmartCodeHub is a platform where you can quickly create a fully 
          {`functional and highly customizable full-stack application. 
          and it's not just a boilerplate it has some fantastic features as discussed below. 
          Before going forward, please see this small video to get an idea of what 
          SmartCodeHub can do. I bet that it will be worth it if you are a javascript 
          developer`}</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="aspect-w-16 aspect-h-9 rounded">
            <iframe className='rounded-lg' src="https://www.youtube.com/embed/kA6yMPhfztk"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-12">
          {frontendFeatures.map((a,i)=> <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full font-bold text-gray-50">{i+1}</span>
              <div className="max-w-xs px-4">
                <p className="text-lg text-gray-500 leading-loose">{a}.</p>
              </div>
            </div>)}
          </div>
        </div>
      </section>
        </div>
        <div>
          <h1 className='prose my-8 prose-2xl'>Backend Features</h1>
          <div className="flex flex-wrap -mx-4 -mb-12">
          {frontendFeatures.map((a,i)=> <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full font-bold text-gray-50">{i+1}</span>
              <div className="max-w-xs px-4">
                <p className="text-lg text-gray-500 leading-loose">{a}.</p>
              </div>
            </div>)}
          </div>
        </div>
       



      </section>
    </>
  )
}
