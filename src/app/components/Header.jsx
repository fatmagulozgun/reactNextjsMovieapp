"use client"
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import MenuItem from './MenuItem'
import ThemeCom from './TemaDegisim'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [keyword, setKeyword] = useState('')
  const router = useRouter();

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`)
      setKeyword('')
    }
  }

  const menu = [
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Sign In",
      url: "/login"
    }
  ]


  return (
    <div className='flex items-center gap-7 h-20 p-5'>
      <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>MovieApp</div>
      <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
        <input value={keyword} onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} placeholder='Arama yapınız !' className='outline-none flex-1 bg-transparent' type="text" />
        <BiSearch size={25} />
      </div>

      <ThemeCom />


      {
        menu.map((m, i) => (
          <MenuItem m={m} key={i} />
        ))
      }

    </div>
  )
}

export default Header