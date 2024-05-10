import Image from 'next/image'
import React from 'react'
import Logo from "@/public/assets/img/1.png"
import Link from 'next/link'

function Header() {
    return (
        <header className='pt-6 pb-6 md:pt-8 md:pb-8 bg-offwhite flex md:items-center md:justify-center '>

            <div className='pl-4 xl:pl-0 max-w-36 w-full sm:max-w-30 md:max-w-7xl'>

                <Link href={'/'} className='block max-w-fit'>

                    <Image src={Logo} alt={'Logo TESIS'} />

                </Link>

            </div>

        </header>
    )

}

export default Header