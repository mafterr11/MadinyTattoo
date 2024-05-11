import Footer from "../../components/Footer";
export default function DespreLayout({ children }) {
  return (
    <div className='bg-despre bg-cover bg-no-repeat bg-scroll lg:bg-fixed bg-[center_right_-25rem] md:bg-center relative'>
      <div className="page bg-primary/40">
      {children}
      <Footer />
      </div>
    </div>
  );
}
