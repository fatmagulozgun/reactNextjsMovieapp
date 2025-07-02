'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Serit = () => {
    const searchParams = useSearchParams() //urldeki query işlemlerini yakalamak için
    const genre = searchParams.get('genre') //http://localhost:3000/?genre=latest ise latesti getirecek.

    const tabs = [
        {
            name: "En Populer",
            url: "popular"
        },
        {
            name: "En Son",
            url: "latest"
        },
        {
            name: "Yakında gelecekler",
            url: "upcoming"
        }
    ]
    return (
        <div className='p-5 my-5 bg-gray-100 dark:bg-gray-900 flex item-center justify-center gap-7'>
            {
                tabs.map((t, i) => (
                    <Link key={i} className={`cursor-pointer hover:opacity-75 transition-opacity ${t.url === genre ? "underline underline-offset-8 text-amber-600" : ""}`} href={`/?genre=${t.url}`}>{t.name}</Link>
                ))
            }
        </div>
    )
}

export default Serit