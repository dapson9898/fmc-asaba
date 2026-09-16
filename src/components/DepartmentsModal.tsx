// import { Department, DEPARTMENTS } from '../data/departments';

// interface DepartmentsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   selectedDepartmentId: string;
//   onSelectDepartment: (department: Department) => void;
// }

// export function DepartmentsModal({ isOpen, onClose, selectedDepartmentId, onSelectDepartment }: DepartmentsModalProps) {
//   if (!isOpen) return null;

//   return (
//     <div
//       id="departments-directory-modal"
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="modal-title"
//     >
//       <div
//         className="relative w-full max-w-2xl bg-neutral-900 border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[88vh] flex flex-col"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header */}
//         <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
//           <div>
//             <span className="text-[12px] uppercase tracking-widest text-emerald-400 font-medium">
//               Federal Medical Centre Asaba
//             </span>
//             <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-white">
//               Hospital Departments List
//             </h2>
//             <p className="text-sm text-neutral-400 mt-1">
//               Select a clinical or administrative division to view department services.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={onClose}
//             aria-label="Close modal"
//             className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Directory List */}
//         <div className="flex-1 overflow-y-auto space-y-3 pr-2">
//           {DEPARTMENTS.map((dept) => {
//             const isCurrent = dept.id === selectedDepartmentId;

//             return (
//             <button
//               key={dept.id}
//               type="button"
//               onClick={() => onSelectDepartment(dept)}
//               className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
//                 isCurrent
//                   ? 'bg-emerald-950/40 border-emerald-500/40 ring-1 ring-emerald-500/30'
//                   : 'bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer'
//               }`}
//             >
//               <div className="text-left">
//                 <div className="flex items-center gap-2">
//                   <h3 className="text-base sm:text-lg font-semibold text-white">
//                     {dept.name}
//                   </h3>
//                   {isCurrent && (
//                     <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30">
//                       Current Page
//                     </span>
//                   )}
//                 </div>
//                 <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
//                   {dept.category} • Lead: {dept.head}
//                 </p>
//               </div>

//               {isCurrent ? (
//                 <span className="text-xs text-emerald-400 font-medium px-3 py-1.5 rounded-lg bg-emerald-900/30">
//                   Viewing
//                 </span>
//               ) : (
//                 <span className="text-xs text-neutral-300 px-3 py-1.5 rounded-lg bg-white/10">
//                   View info
//                 </span>
//               )}
//             </button>
//             );
//           })}
//         </div>

//         {/* Modal Footer */}
//         <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
//           <p className="text-xs text-neutral-400">
//             FMC Asaba Hospital Portal Directory • All data secured by IT Infrastructure
//           </p>
//           <button
//             type="button"
//             onClick={onClose}
//             className="px-5 py-2 text-sm bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
