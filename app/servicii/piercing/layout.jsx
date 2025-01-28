import Footer from "../../../components/layout/Footer";
export default function PiercingLayout({ children }) {
  return (
    <div className='bg-piercing bg-cover bg-no-repeat bg-fixed bg-center xl:bg-[center_top_-20rem] relative'>
      <div className='page bg-primary/40'>
        {children}
        <Footer />
      </div>
    </div>
  );
}
