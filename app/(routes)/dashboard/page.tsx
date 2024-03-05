'use client'

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation, useQuery } from 'convex/react'

const Dashboad  = () => {
  const convex=useConvex();
  const {user}:any = useKindeBrowserClient()
  console.log(user);

  const createUser=useMutation(api.user.createUser);

  useEffect(()=>{
    if(user)
    {
      checkUser()
    }
},[user])

  const checkUser=async()=>{
    const result=await convex.query(api.user.getUser,{email:user?.email});
    if(!result?.length)
    {
        createUser({
          name:user.given_name,
          email:user.email,
          image:user.picture
        }).then((resp)=>{
          console.log(resp)
        })
    }

  }
  return (
    <div>Dashboad 

      <Button>
      <LogoutLink>
        Log out
      </LogoutLink>
      </Button>
    </div>
  )
}

export default Dashboad 


