"use client";

import postJobInfoPost, {
  Payload,
  PostBody,
} from "@/api/job-info/postJobInfoPost";

import AddressBox from "./AddressBox";
import Button from "@/components/Button";
import DateBox from "./DateBox";
import Editor from "@/components/Editor";
import GenderBox from "./GenderBox";
import { Input } from "@/components/ui/input";
import JobTypeBox from "./JobTypeBox";
import OrganInfoBox from "./OrganInfoBox";
import SalaryTypeBox from "./SalaryTypeBox";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Writing = () => {
  const [image, setImage] = useState<File | null>();
  const { control, watch, handleSubmit, register } = useForm<Payload>();

  const onSubmit = (data: Payload) => {
    const combinedAddress = [
      data.regionName,
      data.subRegionName,
      data.localityName,
      data.address,
    ].join(" ");

    const payload = {
      ...data,
      address: combinedAddress,
      salaryAmount: +data.salaryAmount,
    };

    console.log(payload);

    const formData = new FormData();
    formData.append(
      "request",
      new Blob([JSON.stringify(payload)], {
        type: "application/json",
      })
    );

    if (image) {
      formData.append("images", image);
    }

    postJobInfoPost(formData);
    return;
  };

  return (
    <main>
      <h2 className="title1 mb-[50px]">채용 글 작성</h2>
      <div className="flex flex-col gap-[60px]">
        <OrganInfoBox />
        <form
          className="flex flex-col gap-[20px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="subTitle1">모집 내용</div>
          <div className="border grid grid-cols-2 gap-[40px] p-[40px]">
            <DateBox register={register("jobEndDate")} />
            <div className="flex flex-col gap-[10px]">
              <label className="subTitle2 text-[#2D2D2D]">카테고리</label>
              <AddressBox watch={watch} register={register} />
              <JobTypeBox
                watch={watch}
                categoryRegister={register("majorCategoryName")}
                subCategoryRegister={register("minorCategoryName")}
              />
              <div className="flex items-center">
                <label className="w-[80px] subTitle2 text-[#2D2D2D]">
                  상세 조건
                </label>
                <div className="flex">
                  <GenderBox register={register("sex")} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <SalaryTypeBox register={register("salaryType")} />
              <div className="flex flex-col gap-[10px]">
                <label className="subTitle2 text-[#2D2D2D]">금액</label>
                <Input
                  placeholder="숫자를 입력하세요"
                  {...register("salaryAmount")}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="subTitle1">모집 글 작성</div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[10px]">
                <label className="subTitle1 w-[60px]">제목</label>
                <Input {...register("jobTitle")} />
              </div>
              <div className="flex items-center gap-[10px]">
                <label className="subTitle w-[60px]">내용</label>
                <Editor
                  control={control}
                  defaultValue={DefaultEditorValue}
                  name="jobContent"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <label className="subTitle1 w-[45px]">파일</label>
            <input
              type="file"
              accept=".png, .jpg, .jpeg, .gif"
              onChange={(e) => setImage(e.target.files && e.target.files[0])}
            />
          </div>
          <Button variants="yellow" text="등록" />
        </form>
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
