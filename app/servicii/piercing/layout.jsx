import Footer from "../../../components/layout/Footer";
export default function PiercingLayout({ children }) {
  return (
    <div className='bg-micropigmentare bg-cover bg-no-repeat bg-fixed bg-center relative'>
      <div className='page bg-primary/40'>
        {children}
        <Footer />
      </div>
    </div>
  );
}
