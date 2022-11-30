import React from 'react'
import { useRouter } from 'next/router';

// slug is used for dynamic routing
const slug = () =>{
   const router = useRouter();
   const {slug} = router.query;
   return <div>
    {slug}
   </div>;
};

export default slug;