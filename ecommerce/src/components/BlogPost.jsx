import React from "react";
import { ChevronRight } from "lucide-react";

export default function BlogPost() {
  const blogData = {
    image: "/pink.png?height=600&width=500",
    title: "the quick fox jumps over",
    paragraphs: [
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    ],
    relatedLinks: [
      "the quick fox jumps over the lazy dog",
      "the quick fox jumps over the lazy dog",
      "the quick fox jumps over the lazy dog",
      "the quick fox jumps over the lazy dog",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Sol Sütun - Görsel */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <div className="relative aspect-square bg-[#f8d0d0]">
            <img
              src={blogData.image || "/placeholder.svg"}
              alt="Interior design with pink wall, chair and table"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Orta Sütun - Başlık ve Paragraflar */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-[#252b42]">{blogData.title}</h2>
          <p className="text-[#737373] text-lg leading-relaxed">{blogData.paragraphs[0]}</p>
          <p className="text-[#737373] text-lg leading-relaxed">{blogData.paragraphs[1]}</p>
          <p className="text-[#737373] text-lg leading-relaxed">{blogData.paragraphs[2]}</p>
        </div>

        {/* Sağ Sütun - Başlık ve İlgili Linkler */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-[#252b42]">{blogData.title}</h2>

          <div className="space-y-2">
            {blogData.relatedLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[#252b42] hover:text-[#1a87c6] cursor-pointer transition"
              >
                <ChevronRight className="w-5 h-5" />
                <span className="text-lg">{link}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#252b42]">{blogData.title}</h2>

          <div className="space-y-2">
            {blogData.relatedLinks.slice(0, 3).map((link, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[#252b42] hover:text-[#1a87c6] cursor-pointer transition"
              >
                <ChevronRight className="w-5 h-5" />
                <span className="text-lg">{link}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
