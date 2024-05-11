import Footer from "../../../components/Footer";
export default function MicropigmentareLayout({ children }) {
  return (
    <div className='bg-micropigmentare2 md:bg-micropigmentare bg-cover bg-no-repeat bg-fixed bg-center relative'>
      <div className='page bg-primary/40'>
        {children}
        <Footer />
      </div>
    </div>
  );
}
