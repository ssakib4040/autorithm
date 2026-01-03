"use client";

import { useRouter } from "next/navigation";

const categories = [
  "All",
  "CRM",
  "Marketing",
  "SaaS Ops",
  "E-commerce",
  "Support",
  "Analytics",
  "Document Management",
  "Finance",
];

interface FiltersProps {
  selectedCategory: string;
  priceRange: string;
  selectedTool: string;
  page: number;
}

export default function Filters({
  selectedCategory,
  priceRange,
  selectedTool,
  page,
}: FiltersProps) {
  const router = useRouter();

  const buildQueryString = (updates: Record<string, string>) => {
    const newParams = new URLSearchParams();
    const current = {
      tool: selectedTool,
      category: selectedCategory,
      priceRange,
      page: page.toString(),
    };
    const merged = { ...current, ...updates };

    Object.entries(merged).forEach(([key, value]) => {
      if (value && value !== "All" && value !== "1") {
        newParams.set(key, value);
      }
    });

    const query = newParams.toString();
    return query ? `?${query}` : "";
  };

  const priceOptions = [
    { value: "All", label: "All Prices" },
    { value: "0-150", label: "Under $150" },
    { value: "150-200", label: "$150 - $200" },
    { value: "200+", label: "$200+" },
  ];

  return (
    <>
      {/* Category Filter */}
      <div className="flex-1">
        <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => {
            router.push(
              `/products${buildQueryString({
                category: e.target.value,
                page: "1",
              })}`
            );
          }}
          className="w-full pl-4 pr-10 py-2 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none appearance-none bg-[length:1.5em] bg-[position:right_0.5rem_center] bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div className="flex-1">
        <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
          Price Range
        </label>
        <select
          value={priceRange}
          onChange={(e) => {
            router.push(
              `/products${buildQueryString({
                priceRange: e.target.value,
                page: "1",
              })}`
            );
          }}
          className="w-full pl-4 pr-10 py-2 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none appearance-none bg-[length:1.5em] bg-[position:right_0.5rem_center] bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          }}
        >
          <option value="All">All Prices</option>
          <option value="0-150">Under $150</option>
          <option value="150-200">$150 - $200</option>
          <option value="200+">$200+</option>
        </select>
      </div>
    </>
  );
}
