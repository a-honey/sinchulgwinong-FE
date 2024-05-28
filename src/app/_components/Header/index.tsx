import Link from "next/link";
import Paths from "@/constants/paths";

const PATHS = [
  { ko: "채용 정보", to: Paths.JOB_INFO },
  { ko: "기업 정보", to: Paths.ORGAN_INFO },
  { ko: "커뮤니티", to: Paths.COMMUNITY },
  { ko: "고객센터", to: Paths.QNA },
];

const Header = () => {
  return (
    <header>
      <div>신출귀농</div>
      <nav>
        {PATHS.map((path) => (
          <Link key={path.ko} href={path.to}>
            {path.ko}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
