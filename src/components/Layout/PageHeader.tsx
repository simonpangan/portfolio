import './PageHeader.css';

type Props = {
  baseClass?: string,
  children: JSX.Element[] | JSX.Element | string,
};

function PageHeader({children, baseClass} : Props) {

  //replace the page header default
  const baseCssClass =  baseClass ? baseClass :  'page-header';

  return (
      <div className="text-white bg-secondary p-4 mx-auto">
        <div className={`${baseCssClass} text-center text-md-start  px-2`}>
          {children}
        </div>
      </div>
  );
}

export default PageHeader;
