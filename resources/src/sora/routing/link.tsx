import { useRouter } from './index'

type Props = {
  to: string;
  text: string;
}

function Link({ text, to }: Props) {
  const router = useRouter()

  function ck(e: React.MouseEvent) {
    e.preventDefault()
    router.navigate(to)
  }

  return (
    <a href={to} onClick={ck} className="text-blue-500 hover:text-blue-700">
      {text}
    </a>
  )

}

export default Link