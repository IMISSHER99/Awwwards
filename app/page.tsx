import Image from "next/image";
import WithContainer from "./_components/WithContainer";

interface HomeProps {

}

const Home:React.FC<HomeProps> = ({}) => {
  return (
    <main className="bg-color h-full">
      <WithContainer>
        hello world!
      </WithContainer>
    </main>
  )
}

export default Home
