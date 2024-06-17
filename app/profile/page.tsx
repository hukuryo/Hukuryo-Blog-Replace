"use client";

import Link from "next/link";
import { SideBar } from "../components/SideBar";
import { PageTitle } from "../components/PageTitle";
import { PageTracking } from "@/app/components/PageTracking";
import { ResponsiveProfile } from "@/app/components/ResponsiveProfile";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "プロフィール",
  description: "プロフィール",
};

export default function profile() {
  return (
    <>
      <PageTracking pass={"profile"} pageTitle={"プロフィール紹介"} />
      <main className="pt-10 sm:px-20 pb-48 bg-indigo-100 px-5">
        <div className="flex flex-row-reverse">
          <SideBar />
          <div className="w-full bg-white px-10 py-5 pb-10 shadow-lg rounded-md">
            <PageTitle title={"プロフィール紹介"} />
            <p className="mt-16">
              このページでは筆者の経歴などについて紹介します。
            </p>
            <div className="mt-16">
              <div className="border border-slate-300 h-72 shadow-md sm:w-4/5 px-5 pt-8 mb-10 drop-shadow-md">
                <p className="text-center mb-7 font-bold">経歴紹介</p>
                <p className="mb-7 border-b-4 border-gray-400">
                  2021年3月 大学卒業
                </p>
                <p className="mb-7 border-b-4 border-gray-400">
                  2021年4月 鉄道会社に就職
                </p>
                <p className="mb-7 border-b-4 border-gray-400">
                  2022年11月~ エンジニアに転職
                </p>
              </div>
              <p className="mb-10">千葉県民です。今も千葉県在住です。</p>
              <p className="mb-10">大学まで野球をやっていました。</p>
              <p className="mb-12">
                趣味はスポーツ観戦、映画鑑賞、漫画を読むこと
              </p>
              <PageTitle title={"アウトプット"} />
              <ul>
                <li className="mb-3">
                  ・{" "}
                  <Link
                    className="text-lg text-blue-500 hover:underline"
                    href="https://qiita.com/hukuryo"
                  >
                    Qiita
                  </Link>
                </li>
                <li className="mb-3">
                  ・{" "}
                  <Link
                    className="text-lg text-blue-500 hover:underline"
                    href="https://zenn.dev/ryohei0509"
                  >
                    Zenn
                  </Link>
                </li>
                <li className="mb-3">
                  ・{" "}
                  <Link
                    className="text-lg text-blue-500 hover:underline"
                    href="https://github.com/hukuryo"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  ・{" "}
                  <Link
                    className="text-lg text-blue-500 hover:underline"
                    href="https://twitter.com/hukuryo_"
                  >
                    Twitter(X)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ResponsiveProfile />
      </main>
    </>
  );
}
