import Header from "../components/Header/Header";
import Form from "../components/Main/Form";
import JobList from "../components/Main/JobList";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-lightGray dark:bg-midnight">
      <Header />
      <div className="flex flex-col max-w-screen-2xl mx-auto px-5 md:px-12">
        <Form />
        <JobList />
      </div>
    </div>
  );
};

export default Home;
