interface IProps {
  position: string | undefined;
  company: string | undefined;
  apply: string | undefined;
}

const FooterBanner: React.FC<IProps> = (props) => {
  const { position, company, apply } = props;

  return (
    <div className="w-full h-28 bg-white dark:bg-veryDarkBlue">
      <div className="max-w-screen-md mx-auto">
        <div className="lg:flex lg:justify-between px-5 lg:px-0 py-7 gap-10">
          <div>
            <h1 className="hidden lg:block text-lg font-bold dark:text-white">
              {position}
            </h1>
            <p className="hidden lg:block text-gray-500">{company}</p>
          </div>
          <div className="w-full lg:w-max">
            <a href={apply}>
              <button className="h-12 w-full px-4 bg-violet text-white font-semibold rounded-md">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
