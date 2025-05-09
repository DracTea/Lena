import { Button } from "@/sora/common";
import { useRouter } from "@sora/routing";

export default function View() {
  const router = useRouter();

  async function handleClick() {
    const res = await fetch('/apanel/password-reset'); 
    //const data = await res.json();
    // console.log(data);
    router.push('/apanel');
  }

  return (
    <main className="view">
      <div className="container-padding">
        <h1>login</h1>
        <Button onClick={handleClick} text="Login" />
      </div>
    </main>
  )
}

