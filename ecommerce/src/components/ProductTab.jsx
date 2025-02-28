

import { useState } from "react"

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description")

  // Tab content data
  const tabsData = {
    description: {
      title: "Description",
      content:
        "",
    },
    additionalInfo: {
      title: "Additional Information",
      content: (
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 pr-4 font-medium">Color</td>
              <td className="py-3">Blue, White, Black, Grey</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 pr-4 font-medium">Size</td>
              <td className="py-3">XS, S, M, L, XL</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 pr-4 font-medium">Material</td>
              <td className="py-3">100% Cotton</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    reviews: {
      title: "Reviews",
      count: 0,
      content: (
        <div className="flex flex-col items-center py-8">
          <p className="text-gray-500 mb-4">There are no reviews yet.</p>
          <button className="px-6 py-3 bg-[#23a6f0] text-white font-bold rounded-md">Write a Review</button>
        </div>
      ),
    },
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Tab Navigation */}
      <div className="flex justify-center border-b border-gray-200">
        {Object.keys(tabsData).map((tabKey) => (
          <button
            key={tabKey}
            className={`px-6 py-4 text-lg font-medium ${
              activeTab === tabKey ? "text-[#252b42] border-b-2 border-[#23a6f0]" : "text-[#737373]"
            }`}
            onClick={() => setActiveTab(tabKey)}
          >
            {tabsData[tabKey].title}
            {tabKey === "reviews" && <span className="ml-1 text-[#23856d]">({tabsData.reviews.count})</span>}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-8">{tabsData[activeTab].content}</div>
    </div>
  )
}

