import React, { useState } from "react";

const tabs = [
  { id: 1, label: "Hesabım" },
  { id: 2, label: "Şirket" },
  { id: 3, label: "Ekip Üyeleri" },
  { id: 4, label: "Faturalama" }
];
// State setter fonksiyonunu kullanarak geçerli sekmeyi güncelleyin (tıklandığında görünümünü değiştirmek için)
export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("Hesabım");
  // let currentTab = "Hesabım;
  const changeTab = (tab) => {
    setCurrentTab(tab.label);
  };

  return (
    <div className="flex justify-center my-8">
      <div className="flex space-x-4" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              changeTab(tab);
            }}
            className={`${
              tab.label === currentTab
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:text-gray-700"
            } rounded-md px-3 py-2 text-sm font-medium`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
