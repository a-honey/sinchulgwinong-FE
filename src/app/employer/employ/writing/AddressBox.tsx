"use client";

import {
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormWatch,
} from "react-hook-form";
import { useCallback, useState } from "react";

import { AddressType } from "@/api/category/getAddressSearch";
import { Input } from "@/components/ui/input";
import { Payload } from "@/api/job-info/postJobInfoPost";
import getCityNames from "@/api/category/getCityNames";
import getDistrictNames from "@/api/category/getDistrictNames";
import getDongNames from "@/api/category/getDongNames";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const AddressBox = ({
  watch,
  register,
}: {
  watch: UseFormWatch<Payload>;
  register: UseFormRegister<Payload>;
}) => {
  const city = watch("regionName");
  const district = watch("subRegionName");

  const { data: cityNames } = useUpdateFetch(getCityNames);
  return (
    <div className="flex">
      <label className="w-[80px] subTitle2 text-[#2D2D2D]">지역</label>
      <div className="flex flex-col gap-[20px]">
        <div className="flex">
          <select defaultValue="서울특별시" {...register("regionName")}>
            <option value="">시도</option>
            {cityNames?.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <DistrictBox city={city} register={register} />
          <DongBox city={city} district={district} register={register} />
        </div>
        <Input placeholder="상세주소" {...register("address")} />
      </div>
    </div>
  );
};

export default AddressBox;

const DistrictBox = ({
  city,

  register,
}: {
  city: string;

  register: UseFormRegister<Payload>;
}) => {
  const { data: districtNames } = useUpdateFetch(
    useCallback(() => getDistrictNames(city), [city])
  );
  return (
    <select defaultValue={districtNames?.[0]} {...register("subRegionName")}>
      <option value="">시구군</option>
      {districtNames?.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

const DongBox = ({
  city,
  district,
  register,
}: {
  city: string;
  district: string;
  register: UseFormRegister<Payload>;
}) => {
  const { data: dongNames } = useUpdateFetch(
    useCallback(() => getDongNames(city, district), [city, district])
  );
  return (
    <select defaultValue={dongNames?.[0]} {...register("localityName")}>
      <option value="">동읍면</option>
      {dongNames?.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
