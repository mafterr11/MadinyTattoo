import Footer from "../../../components/Footer";
export default function TatuajeLayout({ children }) {
  return (
    <div className='bg-tatuaje bg-cover  bg-no-repeat bg-fixed bg-center relative'>
      <div className='page bg-primary/40'>
        {children}
        <Footer />
      </div>
    </div>
  );
}
