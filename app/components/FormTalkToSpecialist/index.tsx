"use client"
import React, { useEffect, useState } from 'react'

function TalkToSpecialistForm() {

    const [loading, setLoading] = useState<boolean>(false)

    const [formFilled, setFormFilled] = useState<boolean>(false)

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [company, setCompany] = useState<string>("")
    const [telephone, setTelephone] = useState<string>("")

    // SUBMIT FORM - not async, while its just a example
    function submitForm(e: React.FormEvent<HTMLFormElement>) {

        setLoading(true)

        e.preventDefault()

        // Validate numbers on input with more than 13 chars
        if (telephone.length < 13) {

            alert("Número não está completo! Tente Novamente.")

            setLoading(false)

            return

        }

        const telphoneRegex = RegExp(/(\d{2})(\d{1})(\d{4})(\d{4})/)

        // Transforms raw input value into the brazilian number format: (XX) XXXXX-XXXX
        const formatedTelphoneNumber = telephone.replace(telphoneRegex, "($1) $2$3-$4")

        // Simulates Server Loading
        setTimeout(() => {

            setLoading(false)

            alert(
                `
                Server Loading Simulation!
                Data Received by Server Bellow:

                Nome: ${name}
                Email ${email}
                Empresa: ${company}
                Telefone: ${formatedTelphoneNumber}
            `)

        }, 1000)

    }

    // If all fields were filled, it changes the Submit Button color
    useEffect(() => {

        if (name.length >= 3 && email.length >= 1 && company.length >= 1 && telephone.length > 10) {
            if (formFilled == false) setFormFilled(true)
        }
        else {
            if (formFilled == true) setFormFilled(false)
        }

    }, [name, email, company, telephone])

    return (
        <form
            className='flex flex-col gap-14 max-w-full'
            onSubmit={(e) => submitForm(e)}
        >

            <div className='md:min-w-[400px] xl:min-w-[440px] flex flex-col gap-4 text-xl font-medium'>

                <label className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between md:items-center font-semibold'>
                    Nome:
                    <input
                        onChange={(e) => setName(e.target.value)}
                        className='lg:min-w-[300px] border-solid border-2 border-slate-200 rounded-lg bg-[#f4f8fd] p-2 text-lg text-black/90'
                        name="name"
                        type="text"
                        title="Seu Nome."
                        required
                    ></input>
                </label>

                <label className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between md:items-center font-semibold'>
                    E-mail:
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='lg:min-w-[300px] border-solid border-2 border-slate-200 rounded-lg bg-[#f4f8fd] p-2 text-lg text-black/90'
                        name="email"
                        type="email"
                        title="Seu email."
                        required
                    ></input>
                </label>

                <label className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between md:items-center font-semibold'>
                    Empresa:
                    <input
                        onChange={(e) => setCompany(e.target.value)}
                        className='lg:min-w-[300px] border-solid border-2 border-slate-200 rounded-lg bg-[#f4f8fd] p-2 text-lg text-black/90'
                        name="company"
                        type="text"
                        title="Nome da Empresa."
                        required
                    ></input>
                </label>

                <label className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between md:items-center font-semibold'>
                    Telefone:
                    <input
                        onChange={(e) => setTelephone(e.target.value)}
                        className='lg:min-w-[300px] border-solid border-2 border-slate-200 rounded-lg bg-[#f4f8fd] p-2 text-lg text-black/90'
                        name="tel"
                        type="tel"
                        pattern="(\([0-9]{2}\))\s?([0-9]{4,5})-([0-9]{4})"
                        title="Verifique o DDD e outros números, seguindo esse formato: (XX) XXXXX-XXXX."
                        required
                    ></input>
                </label>

            </div>

            <button
                className={`p-3 rounded-lg text-center text-xl font-bold text-white ${formFilled ? "bg-primary" : "bg-[#98bdf9]"} hover:bg-primary transition-all`}
                type='submit'
                disabled={loading}
            >
                {loading ? "ENVIANDO..." : "FALE COM UM ESPECIALISTA"}
            </button>

        </form>
    )
}

export default TalkToSpecialistForm