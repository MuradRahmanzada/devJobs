import { useParams } from "react-router-dom";
import data from "../data/data.json";
import FooterBanner from "../components/Footer/FooterBanner";
import Header from "../components/Header/Header";
import CompanyHeader from "../components/Main/CompanyHeader";
import JobDescription from "../components/Main/JobDescription";

const Detail: React.FC = () => {
  const { position } = useParams<{ position: string }>();
  const job = data.find((job) => job.position === position);

  return (
    <div className="bg-lightGray dark:bg-midnight">
      <Header />
      <div className="max-w-screen-md mx-auto px-7 lg:px-0">
        <CompanyHeader
          logoBgColor={job?.logoBgColor}
          logo={job?.logo}
          company={job?.company}
          website={job?.website}
        />
        <div className="py-10">
          <div className="w-full p-8 shadow-lg rounded-lg bg-white dark:bg-veryDarkBlue">
            <JobDescription job={job} />
          </div>
        </div>
      </div>
      <FooterBanner
        position={job?.position}
        company={job?.company}
        apply={job?.apply}
      />
    </div>
  );
};

export default Detail;
