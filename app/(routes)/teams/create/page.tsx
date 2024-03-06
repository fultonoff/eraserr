'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/sonner'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

const CreateTeam = () => {
  const [teamName, setTeamName]= useState('')
  const createTeam = useMutation(api.teams.createTeam)
  const {user}= useKindeBrowserClient() 
  const router = useRouter()

  const createNewTeam = ()=>{
    createTeam({
      teamName: teamName as string,
      createdBy: user?.email as string

    }).then(resp =>{
      console.log(resp);

      if(resp){
        toast('Team created')
        router.push('/dashboard')
      }
    })

  }
  return (
    <div className='md:px-16 px-6 py-16'>
      <Image src='/logo-black.png' alt='logo' width={200} height={200}/>
      <div className='flex flex-col items-center  mt-8'>
        <h2 className='font-bold text-[40px] py-3'>What should we call your team?</h2>
        <h2 className='text-muted-foreground'>You can always change this later</h2>

        <div className='mt-7 w-[40%] '>
          <label className='text-muted-foreground'>Team Name</label>
          <Input placeholder='Team Name' className='mt-3' onChange={(e)=> setTeamName(e.target.value)}/>
        </div>
        <Button className='bg-primary mt-9'
        disabled={!(teamName&&teamName?.length > 0) }
        onClick={createNewTeam}>Create Team</Button>
      </div>
    </div>
  )
}

export default CreateTeam