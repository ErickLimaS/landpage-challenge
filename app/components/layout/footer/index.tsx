import Image from 'next/image'
import React from 'react'
import Logo from "@/public/assets/img/logo3.jpeg" // logo2 svg couldnt be stretched with a good quality
import Link from 'next/link'

function Footer() {
    return (
        <footer className='py-6 md:py-16 bg-footer flex items-center justify-center'>

            <div>

                <Link href={'/'}>

                    <Image src={Logo} alt={'Logo TESIS'} />

                </Link>

            </div>

        </footer>
    )
}

export default Footer