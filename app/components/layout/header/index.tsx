import Image from 'next/image'
import React from 'react'
import Logo from "@/public/assets/img/logo1.png"
import Link from 'next/link'

function Header() {
    return (
        <header className='flex md:items-center md:justify-center py-4 md:py-6 bg-offwhite'>

            <div className='pl-4 xl:pl-0 max-w-36 w-full sm:max-w-30 md:max-w-7xl'>

                <Link href={'/'} className='block max-w-fit'>

                    <Image src={Logo} alt={'Logo TESIS'} />

                </Link>

            </div>

        </header>
    )
}

export default Header