import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

export default function Home() {
  
  return (
    <>
    <div className="flex flex-col w-full h-full justify-center items-center bg-white">

      {/* THE NAVBAR */}
      <Navbar />

      {/* THE BANNER */}
      <Banner />

      {/* FOOTER */}

    </div>
    </>
  );
}
