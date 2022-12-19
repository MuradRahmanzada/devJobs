import { useState } from "react";
import { useContext } from "react";
import { JobsContext } from "../../store/JobsContext";
import iSearch from "/assets/desktop/icon-search.svg";
import iLocation from "/assets/desktop/icon-location.svg";
import Input from "../UI/Input";
import CheckBox from "../UI/CheckBox";
import Button from "../UI/Button";
import { useMediaQuery } from "@react-hook/media-query";
import { MdFilterListAlt } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "../UI/Modal";

const Form: React.FC = () => {
  const { searchTerm, handleSearch, handleSubmit, isChecked, handleCheck } =
    useContext(JobsContext);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [modal, setModal] = useState(false);

  return (
    <form
      className="flex relative bottom-10 h-20 bg-white dark:bg-veryDarkBlue shadow-md rounded-md"
      autoComplete="off"
    >
      {modal && <Modal />}
      <section className="w-full flex items-center px-5 py-5 justify-between">
        {isMobile ? (
          <div className="flex items-center justify-between">
            <Input
              type="text"
              name="title"
              placeholder="Filter by title"
              className="min-w-[16rem] md:min-w-[35rem] outline-none bg-transparent dark:text-white"
              value={searchTerm.title}
              onChange={handleSearch}
              onClick={handleSubmit}
            />
            <div className="flex items-center gap-2 ">
              <MdFilterListAlt
                className="w-7 h-7 text-gray-500 cursor-pointer"
                onClick={(e) => setModal(!modal)}
              />
              <div className="bg-violet flex items-center rounded-md p-2">
                <button onClick={handleSubmit} type="submit">
                  <AiOutlineSearch className="w-7 h-7 text-white" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Input
              type="text"
              name="title"
              placeholder="Filter by title, companies, expertise"
              className="md:min-w-[10rem] lg:min-w-[28rem] outline-none bg-transparent dark:text-white text-sm"
              value={searchTerm.title}
              onChange={handleSearch}
              img={iSearch}
            />
            <Input
              type="text"
              placeholder="Filter by location"
              name="location"
              className="outline-none bg-transparent dark:text-white text-sm"
              value={searchTerm.location}
              onChange={handleSearch}
              img={iLocation}
            />
            <div className="flex items-center gap-6">
              <CheckBox
                type="checkbox"
                className="w-4 h-4 cursor-pointer bg-transparent dark:text-white"
                name="full_time"
                value={isChecked}
                handleCheck={handleCheck}
              />
              <Button
                type="submit"
                text="Search"
                className="h-10 px-8 bg-violet text-white font-semibold rounded-md text-sm"
                onClick={handleSubmit}
              />
            </div>
          </>
        )}
      </section>
    </form>
  );
};

export default Form;
