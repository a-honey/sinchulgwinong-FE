"use client";

import { useCallback, useState } from "react";

import { AddressType } from "@/api/category/getAddressSearch";
import { UseFormRegisterReturn } from "react-hook-form";
import getCityNames from "@/api/category/getCityNames";
import getDistrictNames from "@/api/category/getDistrictNames";
import getDongNames from "@/api/category/getDongNames";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const AddressBox = ({ register }: { register: UseFormRegisterReturn }) => {
  const [address, setAddress] = useState({ city: "", district: "", dong: "" });
  const { data: cityNames } = useUpdateFetch(getCityNames);
  return (
    <div className="flex">
      <label className="w-[80px] subTitle2 text-[#2D2D2D]">지역</label>
      <div className="flex">
        <select
          defaultValue="서울특별시"
          onChange={(e) => {
            setAddress((prev) => ({ ...prev, city: e.target.value }));
          }}
        >
          {cityNames?.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        {address.city && (
          <DistrictBox address={address} setAddress={setAddress} />
        )}
        {address.district && (
          <DongBox address={address} setAddress={setAddress} />
        )}
      </div>
    </div>
  );
};

export default AddressBox;

const DistrictBox = ({
  address,
  setAddress,
}: {
  address: AddressType;
  setAddress: React.Dispatch<React.SetStateAction<AddressType>>;
}) => {
  const { data: districtNames } = useUpdateFetch(
    useCallback(() => getDistrictNames(address.city), [address])
  );
  return (
    <select
      defaultValue="광진구"
      onChange={(e) => {
        setAddress((prev) => ({ ...prev, district: e.target.value }));
      }}
    >
      {districtNames?.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

const DongBox = ({
  address,
  setAddress,
}: {
  address: AddressType;
  setAddress: React.Dispatch<React.SetStateAction<AddressType>>;
}) => {
  const { data: dongNames } = useUpdateFetch(
    useCallback(() => getDongNames(address.city, address.district), [address])
  );
  return (
    <select
      defaultValue="광진구"
      onChange={(e) => {
        setAddress((prev) => ({ ...prev, dong: e.target.value }));
      }}
    >
      {dongNames?.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
