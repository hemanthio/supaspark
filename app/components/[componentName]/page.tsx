// 'use client'

// import { notFound } from 'next/navigation'
// import dynamic from 'next/dynamic'

// export default function DynamicComponentPage({ params }: { params: { componentName: string } }) {
//   const ComponentName = params.componentName

//   const DynamicComponent = dynamic(
//     () => import(`../../../componentsLibrary/${ComponentName}`).catch(() => notFound()),
//     {
      
//       ssr: false, // Disable server-side rendering for simplicity
//     }
//   )

//   return (
   
      
//         <DynamicComponent />
     
//   )
// }

'use client'

import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { use } from 'react'
import { Suspense } from 'react'


interface PageProps {
params: Promise<{ componentName: string }>
}

function DynamicComponentPage({ params }: PageProps) {
const resolvedParams = use(params)
if (!resolvedParams?.componentName) {

return <div>Loading...</div>
}
const componentName = resolvedParams.componentName

const DynamicComponent = dynamic(

() => import(`../../../componentsLibrary/${componentName}`).catch(() => notFound()),
{
ssr: false,
loading: () => <div>.</div>
}
)
return (
<div suppressHydrationWarning>
<Suspense fallback={<div>.</div>}>
<DynamicComponent />
</Suspense>
</div>
)
}
export default DynamicComponentPage


// 'use client'

// import { notFound } from 'next/navigation'
// import dynamic from 'next/dynamic'
// import { useState, useEffect, Suspense } from 'react'


// interface PageProps {
//   params: Promise<{ componentName: string }>
// }

// function DynamicComponentPage({ params }: PageProps) {
//   const [componentName, setComponentName] = useState<string>('')
//   const loadingFallback = <div>.</div>

//   useEffect(() => {
//     params.then(p => setComponentName(p.componentName))
//   }, [params])

//   if (!componentName) {
//     return loadingFallback
//   }

//   const DynamicComponent = dynamic(
//     () => import(`../../../componentsLibrary/${componentName}`).catch(() => notFound()),
//     { 
//       ssr: false,
//       loading: () => loadingFallback 
//     }
//   )

//   return (
//     <div suppressHydrationWarning>
//     <Suspense fallback={loadingFallback}>
//       <DynamicComponent />
//     </Suspense>
//     </div>
//   )
// }

// export default DynamicComponentPage