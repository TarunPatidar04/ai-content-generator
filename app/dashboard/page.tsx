"use client";
import { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <>
      {/* Search Section  */}
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      {/* Template List Section  */}
      <TemplateListSection  userSearchInput={userSearchInput}/>
    </>
  );
};

export default Dashboard;
