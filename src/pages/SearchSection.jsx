// src/components/SearchSection.jsx
import { useMemo, useState } from "react";
import { FiSearch, FiRotateCcw } from "react-icons/fi";

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

  const locations = useMemo(() => ["Any Area", "Quezon City", "Makati", "BGC", "Pasig", "Cebu", "Davao"], []);
  const propertyTypes = useMemo(() => ["Any", "Condo", "House", "Townhouse", "Lot", "Commercial"], []);
  const sortOptions = useMemo(() => [
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Beds: Most", value: "beds_desc" },
  ], []);
  const numberOptions = useMemo(() => ["Any", "1+", "2+", "3+", "4+", "5+"], []);

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(form);
  };

  return (
    <section className="relative overflow-hidden min-h-[650px] flex items-center">
      {/* Background Image & Solid Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://img1.wsimg.com/isteam/stock/143/:/rs=w:1534,m"
          alt="Luxury Home"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 w-full">
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight italic">
            Find a place that <span className="not-italic font-bold">fits your life</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-white/90 font-light">
            Search by location, type, bedrooms, and price to find your next home.
          </p>
        </div>

        {/* SOLID DESIGN FORM */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto rounded-xl bg-white p-5 shadow-2xl md:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-12">
            
            {/* Row 1: Location, Type, Sort */}
            <div className="md:col-span-4">
              <label className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1.5 block">Location</label>
              <select
                value={form.location}
                onChange={update("location")}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-slate-400 focus:bg-white transition-all"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc === "Any Area" ? "" : loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-4">
              <label className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1.5 block">Property Type</label>
              <select
                value={form.propertyType}
                onChange={update("propertyType")}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-slate-400 focus:bg-white transition-all"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t.toLowerCase()}>{t}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-4">
              <label className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1.5 block">Sort By</label>
              <select
                value={form.sortBy}
                onChange={update("sortBy")}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-slate-400 focus:bg-white transition-all"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Row 2: Beds, Baths, Price Range */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1.5 block">Beds</label>
              <select
                value={form.beds}
                onChange={update("beds")}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none"
              >
                {numberOptions.map((n) => <option key={n} value={n.toLowerCase()}>{n}</option>)}
              </select>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1.5 block">Baths</label>
              <select
                value={form.baths}
                onChange={update("baths")}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none"
              >
                {numberOptions.map((n) => <option key={n} value={n.toLowerCase()}>{n}</option>)}
              </select>
            </div>

            <div className="md:col-span-4">
              <label className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1.5 block">Min Price</label>
              <input
                value={form.minPrice}
                onChange={update("minPrice")}
                inputMode="numeric"
                placeholder="e.g. 50,000"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-300 focus:bg-white"
              />
            </div>

            <div className="md:col-span-4">
              <label className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1.5 block">Max Price</label>
              <input
                value={form.maxPrice}
                onChange={update("maxPrice")}
                inputMode="numeric"
                placeholder="e.g. 250,000"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-300 focus:bg-white"
              />
            </div>
          </div>

          {/* Footer Row */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={() => setForm({ location: "", propertyType: "any", sortBy: "newest", beds: "any", baths: "any", minPrice: "", maxPrice: "" })}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2"
            >
              <FiRotateCcw /> Reset Filters
            </button>

            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-3 rounded-lg bg-slate-900 px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-black active:scale-[0.98] shadow-lg shadow-slate-200"
            >
              <FiSearch className="text-base" /> Search Properties
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;