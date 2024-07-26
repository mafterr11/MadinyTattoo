import Footer from "../../../components/layout/Footer";
export default function MicropigmentareLayout({ children }) {
  return (
    <div className='bg-laser bg-cover bg-no-repeat bg-fixed bg-center relative'>
      <div className='page bg-primary/40'>
        {children}
        <Footer />
      </div>
    </div>
  );
}
