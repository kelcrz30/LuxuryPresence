// src/components/SearchSection.jsx
import { useMemo, useState } from "react";

const SearchSection = ({ onSearch }) => {
  const [form, setForm] = useState({
    location: "",
    propertyType: "any",
    sortBy: "newest",
    beds: "any",
    baths: "any",
    minPrice: "",
    maxPrice: "",
  });

  const locations = useMemo(
    () => ["Any Area", "Quezon City", "Makati", "BGC", "Pasig", "Cebu", "Davao"],
    []
  );

  const propertyTypes = useMemo(
    () => ["Any", "Condo", "House", "Townhouse", "Lot", "Commercial"],
    []
  );

  const sortOptions = useMemo(
    () => [
      { label: "Newest", value: "newest" },
      { label: "Price: Low to High", value: "price_asc" },
      { label: "Price: High to Low", value: "price_desc" },
      { label: "Beds: Most", value: "beds_desc" },
    ],
    []
  );

  const numberOptions = useMemo(
    () => ["Any", "1+", "2+", "3+", "4+", "5+"],
    []
  );

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const min = form.minPrice ? Number(form.minPrice) : null;
    const max = form.maxPrice ? Number(form.maxPrice) : null;

    if (min !== null && max !== null && min > max) {
      alert("Min price cannot be higher than max price.");
      return;
    }
    if (onSearch) onSearch(form);
    else console.log("Search payload:", form);
  };

  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0">
        <img
          src="https://img1.wsimg.com/isteam/stock/143/:/rs=w:1534,m"
          alt="Home background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center text-white">

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Find a place that fits your life
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
            Search by location, type, bedrooms, and price. Then sort results the
            way you want.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 rounded-2xl border border-white/10 bg-white/95 p-4 shadow-2xl backdrop-blur sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">

            <div className="md:col-span-4">
              <label className="text-xs font-semibold text-slate-700">
                Location
              </label>
              <select
                value={form.location}
                onChange={update("location")}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc === "Any Area" ? "" : loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-slate-700">
                Property Type
              </label>
              <select
                value={form.propertyType}
                onChange={update("propertyType")}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t.toLowerCase()}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-slate-700">
                Sort By
              </label>
              <select
                value={form.sortBy}
                onChange={update("sortBy")}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-transparent">
                Search
              </label>
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                Search
              </button>
            </div>

            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-slate-700">
                Bedrooms
              </label>
              <select
                value={form.beds}
                onChange={update("beds")}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              >
                {numberOptions.map((n) => (
                  <option key={n} value={n.toLowerCase()}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-slate-700">
                Bathrooms
              </label>
              <select
                value={form.baths}
                onChange={update("baths")}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              >
                {numberOptions.map((n) => (
                  <option key={n} value={n.toLowerCase()}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-slate-700">
                Min Price
              </label>
              <input
                value={form.minPrice}
                onChange={update("minPrice")}
                inputMode="numeric"
                placeholder="e.g. 50000"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-slate-700">
                Max Price
              </label>
              <input
                value={form.maxPrice}
                onChange={update("maxPrice")}
                inputMode="numeric"
                placeholder="e.g. 250000"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <p className="opacity-80">
              Tip: leave fields blank to broaden your results.
            </p>

            <button
              type="button"
              onClick={() =>
                setForm({
                  location: "",
                  propertyType: "any",
                  sortBy: "newest",
                  beds: "any",
                  baths: "any",
                  minPrice: "",
                  maxPrice: "",
                })
              }
              className="rounded-lg px-3 py-2 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Reset filters
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
