import Image from 'next/image'
// import wrongAddress from "@/assets/svgs/404.svg"

 
export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      {/* <Image src={wrongAddress} alt="Homiii logo" /> */}
      <h4>Are you sure you got the right address?</h4>
      
    </div>
  )
}