"use client";

import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";
import getCityNames from "@/api/category/getCityNames";
import getDistrictNames from "@/api/category/getDistrictNames";
import getDongNames from "@/api/category/getDongNames";
import useUpdateFetch from "@/hooks/useUpdateFetch";

interface AddressType {
  city: string;
  district: string;
  dong: string;
}

const Filter = ({
  address,
  setAddress,
}: {
  address: AddressType;
  setAddress: React.Dispatch<React.SetStateAction<AddressType>>;
}) => {
  const { data: cityNames } = useUpdateFetch(getCityNames);
  return (
    <div className="border">
      <div className="flex border-t border-b bg-[#F4F4F4]">
        <div className="w-[220px] subTitle2 flex justify-center border-r p-[30px]">
          시.도
        </div>
        <div className="w-[350px] subTitle2 flex justify-center border-r p-[30px]">
          시구군
        </div>
        <div className="flex-grow subTitle2 flex justify-center border-r p-[30px]">
          동읍면
        </div>
      </div>
      <div className="flex">
        <div className="w-[220px] flex flex-col h-[400px] overflow-y-auto">
          {cityNames?.map((city) => (
            <div
              key={city}
              onClick={() => {
                setAddress({
                  city,
                  district: "",
                  dong: "",
                });
              }}
              className={cn(
                "subTitle2 flex justify-center border-r p-[30px]",
                address.city === city && "bg-primary3"
              )}
            >
              {city}
            </div>
          ))}
        </div>
        <div className="w-[350px] flex flex-col h-[400px] overflow-y-auto">
          {address.city && (
            <DistrictBox address={address} setAddress={setAddress} />
          )}
        </div>
        <div className="flex-grow grid grid-cols-3  h-[400px] overflow-y-auto">
          {address.city && address.district && (
            <DongBox address={address} setAddress={setAddress} />
          )}
        </div>
      </div>
      <div className="flex justify-left p-[30px] border-t gap-[20px]">
        {Object.entries(address).map(
          ([key, value]) =>
            value && (
              <div
                key={value}
                className="flex justify-between min-w-[110px] bg-[#ECECEC] py-[5px] px-[10px] rounded-[3px] border"
              >
                <div>{value}</div>
                <div
                  onClick={() => {
                    setAddress((prev) => ({
                      ...prev,
                      [key]: "",
                    }));
                  }}
                >
                  X
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Filter;

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
    <>
      {districtNames?.map((district) => (
        <div
          key={district}
          className={cn(
            "subTitle2 flex justify-center border-r p-[30px]",
            address.district === district && "bg-primary3"
          )}
          onClick={() => {
            setAddress((prev) => ({ ...prev, district, dong: "" }));
          }}
        >
          {district}
        </div>
      ))}
    </>
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
    <>
      {dongNames?.map((dong) => (
        <div
          key={dong}
          className={cn(
            "subTitle2 flex justify-center p-[30px]",
            address.dong === dong && "bg-primary3"
          )}
          onClick={() => {
            setAddress((prev) => ({ ...prev, dong }));
          }}
        >
          {dong}
        </div>
      ))}
    </>
  );
};
