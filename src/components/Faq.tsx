import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Faq = {
  id: number;
  question: string;
  answer: string;
  tags: string[];
};

type FaqProps = {
  projectId?: number;
  unitId?: number;
  apiBase?: string;
};

const Faq = ({ projectId, unitId, apiBase = "http://localhost:4000" }: FaqProps) => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Fetch tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch(`${apiBase}/api/faqs/tags`);
        const data = await res.json();
        if (data.success) setTags(data.tags as string[]);
      } catch (err) {
        console.error("❌ Failed to fetch FAQ tags:", err);
      }
    };
    fetchTags();
  }, [apiBase]);

  // Fetch FAQs
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        let url = `${apiBase}/api/faqs`;
        const params = new URLSearchParams();
        if (projectId) params.append("projectId", String(projectId));
        if (unitId) params.append("unitId", String(unitId));
        if (search.trim()) params.append("search", search.trim());
        if (activeTag) params.append("tag", activeTag);
        if (params.toString()) url += `?${params.toString()}`;

        const res = await fetch(url);
        const data = await res.json();
        if (data.success) setFaqs(data.items as Faq[]);
      } catch (err) {
        console.error("❌ Failed to fetch FAQs:", err);
      }
    };
    fetchFaqs();
  }, [apiBase, projectId, unitId, search, activeTag]);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <motion.div
      id="FAQ"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {projectId || unitId
            ? "Answers related to this project/unit."
            : "Find answers about buying, financing, handover, amenities and more."}
        </p>
      </div>

      {/* Search */}
      <div className="max-w-3xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />

        {/* Tag filter */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-1 rounded-full text-sm ${
                !activeTag
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1 rounded-full text-sm ${
                  activeTag === tag
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left p-5 flex justify-between items-center"
            >
              <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
              <span className="ml-3 text-blue-600 text-xl">
                {activeId === faq.id ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {activeId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="px-5 pb-5 text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                  {faq.tags && faq.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {faq.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {faqs.length === 0 && (
          <p className="text-center text-gray-500 italic">
            No FAQs found. Try adjusting search or tags.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Faq;
