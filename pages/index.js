import React from 'react'
import { ReactFlowDiagram } from "../components/FlowDiagram";

const features = [
  'Model the application exactly how you need it, with custom entities, relationships, fields, and validations.',
  'The generated application is a complete full-stack application, with front-end, a secure NodeJS back-end that uses a REST API with ExpressJS, and a database',
  'Custom roles and permissions that restrict access to each specific feature in the application. ',
  'Built-in authentication, with sign-in, sign-up, password change, password recovery, and email confirmation',
  'Secure file uploads and reading to Google Cloud Storage, Amazon AWS S3, or even localhost',
  'Each entity that you define on the modeling tool has its own forms, lists, and filters',

]
export default function index() {
  return (
    <>
      <div className='flex  sm:flex-row flex-col p-8 py-32 justify-evenly items-center'>

        <div className=' rounded-lg relative border-gray-800  px-8 py-16'>

          <p className='font-body text-sm absolute -top-5  text-white rounded-md bg-indigo-900 inline px-4 py-2'>

           The Docs Are Still Under Development</p>

          <h1 className='font-Heading text-6xl mt-6 text-gray-900'>Smartcodehub</h1>
          <p className='font-Heading text-3xl mt-4 text-gray-800'>Opensource Web Based Full Stack Web Application Generator</p>
        </div>
        <div className='sm:w-2/3 w-full'>
          <ReactFlowDiagram />
        </div>
      </div>
     </>
  )
}
