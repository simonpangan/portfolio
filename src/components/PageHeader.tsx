import './PageHeader.css';

type Props = {
  children: JSX.Element[],
};

function PageHeader({children} : Props) {
  return (
      <div className="text-white bg-secondary p-4 mx-auto">
        <div className="text-center text-md-start page-header px-2">
          {children}
        </div>
      </div>
  );
}

export default PageHeader;
