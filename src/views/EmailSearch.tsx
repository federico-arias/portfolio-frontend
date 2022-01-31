import { Button, Input } from '../components'

export const EmailSearch = () => {
  return <>
    <Input label="Email" name="email" required={true} value={""} onChange={() => {}} errors={{}} />
    <Button isLoading={false}>SEND</Button>
  </>
}
