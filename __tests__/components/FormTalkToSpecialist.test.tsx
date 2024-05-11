import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import TalkToSpecialistForm from "@/app/components/FormTalkToSpecialist"

describe("Form Talk to Specialist", () => {

    it("Telefone Input Field accepts correct value format", async () => {

        const user = userEvent.setup()

        render(<TalkToSpecialistForm />)

        const telFormField = screen.getByRole("textbox", { name: /Telefone/i })

        expect(telFormField).toBeInTheDocument

        const valueToSetOnInput = "(11) 91234-5678"

        const telefoneInputPattern = RegExp(/(\([0-9]{2}\))\s?([0-9]{4,5})-([0-9]{4})/)

        await user.type(telFormField, valueToSetOnInput)

        expect(telFormField).toHaveValue(valueToSetOnInput)
        expect(valueToSetOnInput).toMatch(telefoneInputPattern)

    })

    it("Telefone Input Field do not accepts incorrect value format", async () => {

        const user = userEvent.setup()

        render(<TalkToSpecialistForm />)

        const telFormField = screen.getByRole("textbox", { name: /Telefone/i })

        expect(telFormField).toBeInTheDocument

        const wrongValueToSetOnInput = "11 912345678"

        const telefoneInputPattern = RegExp(/(\([0-9]{2}\))\s?([0-9]{4,5})-([0-9]{4})/)

        await user.type(telFormField, wrongValueToSetOnInput)

        expect(telFormField).toHaveValue(wrongValueToSetOnInput)
        expect(wrongValueToSetOnInput).not.toMatch(telefoneInputPattern)

    })

    it("Submit should be called when all fields were filled correctly", async () => {

        const user = userEvent.setup()

        const onSubmit = jest.fn()

        render(<TalkToSpecialistForm onSubmit={onSubmit} />)

        const nameFormField = screen.getByRole("textbox", { name: /Nome/i })
        const emailFormField = screen.getByRole("textbox", { name: /E-mail/i })
        const companyformField = screen.getByRole("textbox", { name: /Empresa/i })
        const telFormField = screen.getByRole("textbox", { name: /Telefone/i })

        await user.type(nameFormField, "Erick Lima")
        await user.type(emailFormField, "erick@gmail.com")
        await user.type(companyformField, "TESIS")
        await user.type(telFormField, "(11) 91234-5678")

        await user.click(screen.getByRole("button"))

        expect(onSubmit).toHaveBeenCalled()

    })

    it("Submit should not be called when a field is empty or filled incorrectly", async () => {

        const user = userEvent.setup()

        const onSubmit = jest.fn()

        render(<TalkToSpecialistForm onSubmit={onSubmit} />)

        const nameFormField = screen.getByRole("textbox", { name: /Nome/i })
        const emailFormField = screen.getByRole("textbox", { name: /E-mail/i })
        const companyformField = screen.getByRole("textbox", { name: /Empresa/i })
        const telFormField = screen.getByRole("textbox", { name: /Telefone/i })

        await user.type(nameFormField, "Erick 11")
        await user.type(emailFormField, "x")
        await user.type(companyformField, "TESIS")
        await user.type(telFormField, " ")

        await user.click(screen.getByRole("button"))

        expect(onSubmit).not.toHaveBeenCalled()

    })

})