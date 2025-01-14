import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  const handleRedirectToMainApp = ()=>{
    router.push('/chats-list')
  }
  return (
    <>
      <button onClick={handleRedirectToMainApp}>Go to chats-list</button>
    </>
  );
}
