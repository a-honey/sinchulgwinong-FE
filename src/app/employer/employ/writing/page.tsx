"use client";

import Editor from "@/components/Editor";
import { Input } from "@/components/ui/input";

const Writing = () => {
  return (
    <main>
      <h2 className="title1 mb-[50px]">채용 글 작성</h2>
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[20px]">
          <div className="subTitle1">내 기업 정보</div>
          <div className="border grid grid-cols-2 gap-[40px] p-[40px]">
            <div className="flex flex-col gap-[10px]">
              <label className="subTitle2 text-[#2D2D2D]">기업명</label>
              <div className="subTitle2 border rounded rounded-[10px] p-[15px]">
                성희네 사과 농장
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="subTitle2 text-[#2D2D2D]">사업 내용</label>
              <div className="subTitle2 border rounded rounded-[10px] p-[15px]">
                과수 재배(사과)
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="subTitle2 text-[#2D2D2D]">사업자등록번호</label>
              <div className="subTitle2 border rounded rounded-[10px] p-[15px]">
                12345
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="subTitle1">모집 내용</div>
          <div className="border grid grid-cols-2 gap-[40px] p-[40px]">
            <div className="flex flex-col gap-[10px]">
              <label className="subTitle2 text-[#2D2D2D]">모집 기간</label>
              <div className="flex items-center gap-[10px]">
                <label className="w-[80px] subTitle2 text-[#2D2D2D]">
                  시작일
                </label>
                <Input type="date" />
              </div>
              <div className="flex items-center gap-[10px]">
                <label className="w-[80px] subTitle2 text-[#2D2D2D]">
                  시작일
                </label>
                <Input type="date" />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="subTitle2 text-[#2D2D2D]">카테고리</label>
              <div className="flex">
                <label className="w-[80px] subTitle2 text-[#2D2D2D]">
                  지역
                </label>
                <div className="flex">
                  <select value={"시.도"}>
                    <option>서울특별시</option>
                  </select>
                  <select value={"시.구.군"}>
                    <option>서울특별시</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <label className="w-[80px] subTitle2 text-[#2D2D2D]">
                  업종
                </label>
                <div className="flex">
                  <select value={"분류"}>
                    <option>서울특별시</option>
                  </select>
                  <select value={"업직종"}>
                    <option>서울특별시</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <label className="w-[80px] subTitle2 text-[#2D2D2D]">
                  상세 조건
                </label>
                <div className="flex">
                  <select value={"경력"}>
                    <option>서울특별시</option>
                  </select>
                  <select value={"성별"}>
                    <option>서울특별시</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[10px]">
                <label className="subTitle2 text-[#2D2D2D]">급여 형태</label>
                <div className="grid grid-cols-4">
                  <option>일급</option>
                  <option>주급</option>
                  <option>월급</option>
                  <option>연봉</option>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="subTitle2 text-[#2D2D2D]">연봉</label>
                <Input placeholder="숫자를 입력하세요" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="subTitle1">모집 글 작성</div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <label className="subTitle1 w-[60px]">제목</label>
              <Input />
            </div>
            <div className="flex items-center gap-[10px]">
              <label className="subTitle w-[60px]">내용</label>
              <Editor defaultValue={DefaultEditorValue} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Writing;

const DefaultEditorValue = `한줄평, 장점, 단점<br/>
차량 운행 여부 - 출퇴근 차량 있음/ 없음<br/>
집결 지도 여부 - 있음/ 없음<br/>
집결지는 어디인가요? - ex. 마을 회관, 집 앞, 시장 ...<br/>
식사 제공 - 아침 / 점심 / 저녁 / 간식<br/>
하루 몇시간 정도 일하나요? - 8시간 미만 / 8시간 / 9시간 / 10시간 / 11시간 이상<br/>
주 평균 잡업은 몇 번 정도 하는 지 알려주세요 - 없음 / 1일 미만 / 1일 / 2일 / 3일 이상<br/>
1년 동안 실제 사용한 휴가 ( 연차, 여름 휴가 등 ) 은 며칠인 지 알려주세요 <br/>- 0-7일/ 8-14일  / 15- 21일 / 22- 30일<br/>
업무 일정을 유연하게 조정할 수 있나요? <br/>- 지유롭게 조정 가능 / 눈치 보면서 조정 가능 / 제한적으로 조정 가능 / 조정 어려움 / 조정 불가능<br/>
어떤일을 하는 지 구체적으로 알려주세요 - ex. 밭에 씨를 뿌려요, 식물에 물을 줘요, 잡초를 제거해요...<br/>`;
