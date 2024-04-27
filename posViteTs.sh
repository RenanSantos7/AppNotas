#!/bin/bash

# Pegar o nome do projeto a partir do nome da pasta
project_name=$(basename "$PWD")

# Instalar dependências com pnpm
pnpm install

# Instalar a biblioteca 'react-router-dom' com o pnpm
pnpm add react-router-dom react-router-hash-link classnames styled-components
pnpm add -D prettier json-server

# Apagar o arquivo App.css
rm src/App.css

# Modificar o arquivo index.html
sed -i 's/<html lang="en">/<html lang="pt-BR">/' index.html
sed -i 's/<title>.*<\/title>/<title>'"$project_name"'<\/title>/' index.html
sed -i '/<div id="root">/i\
   <style>\
      noscript {\
        width: 500px;\
        height: 500px;\
        margin: 120px auto;\
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\
      }\
    </style>\
    <noscript>\
      <h1>Esta página necessita de JavaScript para funcionar</h1>\
      <h2>Por favor, habilite o JavaScript</h2>\
    </noscript>' index.html

# Limpar as pastas 'public' e 'src/assets'
rm -rf public/* src/assets/*

# Criar as pastas 'components', 'contexts' e 'pages'
mkdir -p src/components src/contexts src/pages src/types

# Criar o arquivo Base.tsx dentro de 'src/pages'
echo "import { Outlet, ScrollRestoration } from 'react-router-dom'

export default function Base() {
    return (
        <>
            <Outlet />
            <ScrollRestoration />
        </>
    )
}" > src/pages/Base.tsx

# Criar o arquivo DataContext.tsx dentro de 'src/contexts'
echo "import { createContext, useState, useEffect, ReactNode } from 'react'

export const DataContext = createContext(null);

const DataProvider = ({ children }:{children: ReactNode}) => {
    const [, ] = useState([]);
    
    return (
        <DataContext.Provider value={{ ,  }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
" > src/contexts/DataContext.tsx

# Modificar o arquivo App.tsx
sed -i 's/import React from "react";/import { RouterProvider } from "react-router-dom";\
import router from "./router";\
import DataProvider from "./contexts/DataContext.tsx";/' src/App.tsx
sed -i 's/<App \/>/<DataProvider>\n\t<RouterProvider router={router} \/>\n<\/DataProvider>/' src/App.tsx

# Criar o arquivo router.tsx
echo "import { createBrowserRouter } from 'react-router-dom'
import Base from './pages/Base.tsx'
import Home from './pages/Home/Home.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Base />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ],
    }
])

export default router" > src/router.tsx

# Modificar o arquivo index.css
echo '@import url("https://renan-santos.netlify.app/styles/reset.css");' > src/index.css

# Alterar o conteúdo do tsconfig.json
cat <<EOF > tsconfig.json
{
	"compilerOptions": {
		// Projects
		
		// Language and Environment
		"target": "ESNext",
		"lib": ["ESNext", "DOM", "DOM.Iterable"],
		"jsx": "react-jsx",
		"useDefineForClassFields": true,
		
		//Modules
		"module": "NodeNext",
		"moduleResolution": "NodeNext",
		"types": ["jest", "@testing-library/jest-dom"],
		"resolveJsonModule": true,
		"allowImportingTsExtensions": true,
		
		// Js Support
		
		//Emit
		"noEmit": true,
		
		// Interop Constraints
		"isolatedModules": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		
		// Type Check
		"strict": true,
		"strictNullChecks": false,
		"noUnusedLocals": false,
		"noUnusedParameters": false,
		"noFallthroughCasesInSwitch": true,
		
		// Completeness
		"skipLibCheck": true
	},
	"include": ["src"]
}
EOF

# Iniciar um repositório git
git init

# Renomear a branch master para main
git branch -m master main

# Fazer commit
git add .
git commit -m ':tada: primeiro commit'

