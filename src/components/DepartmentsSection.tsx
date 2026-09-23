import React, { useState } from 'react';
import {
  Activity,
  Shield,
  HeartPulse,
  Sparkles,
  Droplet,
  FileText,
  Eye,
  Baby,
  FlaskConical,
  Users,
  Scan,
  Laptop,
  CheckCircle,
  Heart,
  Pill,
  Scale,
  Package,
  Search,
  ArrowRight,
  Stethoscope,
  Building2,
  ChevronRight
} from 'lucide-react';
import { Link } from './Link';
import { DEPARTMENTS, Department } from '../data/departments';

// Helper to assign specialized iconography to each department
function getDepartmentIcon(id: string) {
  switch (id) {
    case 'accident-emergency':
      return Activity;
    case 'cdcr':
      return Shield;
    case 'anaesthesia-intensive-care':
      return HeartPulse;
    case 'dentistry':
      return Sparkles;
    case 'haematology':
      return Droplet;
    case 'health-records':
      return FileText;
    case 'internal-medicine':
      return Stethoscope;
    case 'ophthalmology':
      return Eye;
    case 'paediatrics':
      return Baby;
    case 'pathology':
      return FlaskConical;
    case 'physiotherapy':
      return HeartPulse;
    case 'public-health':
      return Users;
    case 'radiology':
      return Scan;
    case 'surgery':
      return Stethoscope;
    case 'family-medicine':
      return Building2;
    case 'information-technology':
      return Laptop;
    case 'internal-audit':
      return CheckCircle;
    case 'nursing-services':
      return Heart;
    case 'pharmacy':
      return Pill;
    case 'servicom':
      return Scale;
    case 'social-welfare':
      return Users;
    case 'stores-supplies':
      return Package;
    default:
      return Stethoscope;
  }
}

export function DepartmentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Clinical' | 'Diagnostic' | 'Support'>('All');

  const filteredDepartments = DEPARTMENTS.filter((dept) => {
    const matchesSearch =
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Clinical') {
      return [
        'accident-emergency',
        'anaesthesia-intensive-care',
        'dentistry',
        'internal-medicine',
        'ophthalmology',
        'paediatrics',
        'physiotherapy',
        'surgery',
        'family-medicine',
        'nursing-services'
      ].includes(dept.id);
    }
    if (selectedFilter === 'Diagnostic') {
      return ['cdcr', 'haematology', 'pathology', 'radiology', 'pharmacy'].includes(dept.id);
    }
    if (selectedFilter === 'Support') {
      return [
        'health-records',
        'public-health',
        'information-technology',
        'internal-audit',
        'servicom',
        'social-welfare',
        'stores-supplies'
      ].includes(dept.id);
    }
    return true;
  });

  return (
    <section
      id="departments-section"
      className="relative z-10 w-full py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching the reference styling & copy */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Clinical &amp; Administrative Specialties
          </div>

          <h2
            id="our-departments-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
          >
            Our Departments
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            With a crop of seasoned specialists in various fields of medicine in our departments, we specialize in numerous procedures from the mundane to the complex. Find below our various departments in FMC Asaba
          </p>
        </div>

        {/* Filter Tabs and Quick Search Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
            {(['All', 'Clinical', 'Diagnostic', 'Support'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedFilter === filter
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {filter === 'All' ? `All (${DEPARTMENTS.length})` : filter}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search departments..."
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:border-emerald-600 focus:bg-white text-slate-800 placeholder-slate-400 transition-colors"
            />
          </div>
        </div>

        {/* 2-Column Department Pill Grid faithfully reproducing the reference layout */}
        <div
          id="departments-2col-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4"
        >
          {filteredDepartments.map((department) => {
            const IconComponent = getDepartmentIcon(department.id);

            return (
              <Link
                key={department.id}
                href={`/departments/${department.id}`}
                className="group relative flex items-center justify-between p-4 sm:px-6 sm:py-4.5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md hover:bg-emerald-50/30 transition-all duration-200 cursor-pointer text-left"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                  {/* Modern Icon Badge */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-200/70 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-200 shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Department Details */}
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-emerald-900 transition-colors leading-snug truncate sm:whitespace-normal">
                      {department.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal line-clamp-1 mt-0.5">
                      {department.category}
                    </p>
                  </div>
                </div>

                {/* Right Arrow indicator */}
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white text-slate-400 flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {filteredDepartments.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">No departments match "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('All');
              }}
              className="mt-3 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
