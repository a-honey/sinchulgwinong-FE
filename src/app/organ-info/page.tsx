import List from "../../components/List";

const THEAD = ["지역", "기업명", "기업리뷰", "업종", "별점"];

const OrganInfo = () => {
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">전체 기업 정보</h1>
      <List>
        <List.Header count={200} />
        <List.Table className="w-full">
          <List.Table.Head titles={THEAD} />
          <List.Table.Row
            names={[
              "충북 단양군",
              "(주) 신출귀농",
              "30,000 개",
              "농업",
              "★★★★★ 5.0",
            ]}
          />
          <List.Table.Row
            names={[
              "충북 단양군",
              "(주) 신출귀농",
              "30,000 개",
              "농업",
              "★★★★★ 5.0",
            ]}
          />{" "}
          <List.Table.Row
            names={[
              "충북 단양군",
              "(주) 신출귀농",
              "30,000 개",
              "농업",
              "★★★★★ 5.0",
            ]}
          />{" "}
          <List.Table.Row
            names={[
              "충북 단양군",
              "(주) 신출귀농",
              "30,000 개",
              "농업",
              "★★★★★ 5.0",
            ]}
          />
        </List.Table>
        <List.Footer />
      </List>
    </main>
  );
};

export default OrganInfo;
