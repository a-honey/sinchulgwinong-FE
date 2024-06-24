import CommunityScrapBox from "./CommunityScrapBox";
import JobScrapBox from "./JobScrapBox";
import OrganScrapBox from "./OrganScrapBox";

const Scraps = () => {
  return (
    <>
      <h2 className="title1 mb-[50px]">스크랩</h2>
      <div className="flex flex-col gap-[70px]">
        <JobScrapBox />
        <OrganScrapBox />
        <CommunityScrapBox />
      </div>
    </>
  );
};

export default Scraps;
