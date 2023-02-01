import TheAside from './TheAside';
import TheContent from './TheContent';
import TheHeader from './TheHeader';
import TheSidebar from './TheSidebar';

const TheLayout = () => {
  return (
    <div>
      <TheSidebar />
      <TheAside />

      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <TheHeader />
        <div className="body flex-grow-1 px-3">
          <TheContent />
        </div>
        {/* <TheFooter /> */}
      </div>
    </div>
  );
};
export default TheLayout;
