import React from 'react'

export default function index() {
    return (
        <div className='flex'>
            <div className='sm:w-1/5 p-8 sticky flex top-0 text-gray-200 bg-gray-800 h-screen'>
                <ul className='space-y-5'>
                    <li className=''>Get Started</li>
                    <li className=''>Local Setup</li>
                    <li className=''>Packages Flow</li>
                    <li className=''>Contribute</li>

                </ul>
            </div>
            <div className='flex justify-center py-16 w-full text-3xl font-lato'>
                <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-lg mx-auto">
                    <p>First Lets Clone teh backend and frontend Repositories</p>
                    <pre>
                        git clone https://github.com/Smart-code-hub/Smartcodehub-api
                        <br />
                        git clone https://github.com/Smart-code-hub/Smartcodehub-Webapp

                    </pre>

                    Once cloned we can create docker-compose file  as folows

                    <pre>
                        {` 
version: "3"
services:
api:
    container_name: Smartcodehub-api
    restart: always
    build: ./Smartcodehub-api/.
    ports:
    - "3666:3666"
    volumes:
    - .:/app
    links:
    - Smartcodehub-db
    networks:
    - Smartcodehub
app:
    container_name: Smartcodehub-webapp
    restart: always
    build: ./Smartcodehub-webapp/.
    ports:
    - "3667:80"
    volumes:
    - .:/app  
    networks:
    - Smartcodehub       
Smartcodehub-db:
    container_name: Smartcodehub-db
    image: mongo
    ports:
    - "27018:27017"
    networks:
    - Smartcodehub
networks:
Smartcodehub:`}
                    </pre>

                    <p> Just the final command </p>
                    <pre>docker-compose up</pre>
                </div>
            </div>
        </div>)
}
