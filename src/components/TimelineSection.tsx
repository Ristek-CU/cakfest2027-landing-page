import React, { useState } from 'react';
import {
  TIMELINE_SECTION_DATA,
  type CalendarEvent,
  type CalendarMonth,
} from '../lib/data/timelineData';

interface TimelineSectionProps {
  id?: string;
  className?: string;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  id = 'timeline',
  className = '',
}) => {
  const { title, subtitle, months, events, rundown } = TIMELINE_SECTION_DATA;

  const nextEventMonth = events.find((event) => event.date >= new Date().toISOString().slice(0, 10))?.date.slice(0, 7);
  const initialMonth = months.find((month) => month.key === nextEventMonth) ?? months[months.length - 1];
  const [selectedMonthKey, setSelectedMonthKey] = useState<string>(initialMonth.key);
  const defaultEvent = events.find((event) => event.date.startsWith(initialMonth.key)) ?? events[0];
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent>(defaultEvent);

  // Toggle state for Rundown Table
  const [showRundownTable, setShowRundownTable] = useState<boolean>(false);

  const currentMonth: CalendarMonth =
    months.find((m) => m.key === selectedMonthKey) || months[months.length - 1];

  const currentMonthIndex = months.findIndex((m) => m.key === selectedMonthKey);

  // Handle month switching via Prev / Next arrows
  const handlePrevMonth = () => {
    if (currentMonthIndex > 0) {
      const prev = months[currentMonthIndex - 1];
      setSelectedMonthKey(prev.key);
      const firstEvent = events.find((e) => e.date.startsWith(prev.key));
      if (firstEvent) setSelectedEvent(firstEvent);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex < months.length - 1) {
      const next = months[currentMonthIndex + 1];
      setSelectedMonthKey(next.key);
      const firstEvent = events.find((e) => e.date.startsWith(next.key));
      if (firstEvent) setSelectedEvent(firstEvent);
    }
  };

  const handleSelectMonth = (key: string) => {
    setSelectedMonthKey(key);
    const monthEvent = events.find((e) => e.date.startsWith(key));
    if (monthEvent) setSelectedEvent(monthEvent);
  };

  // Generate calendar grid days for Monday-first week (Senin..Minggu)
  // Day of week in JS: 0 = Sun, 1 = Mon, ..., 6 = Sat
  // We want: 0 = Senin, 1 = Selasa, 2 = Rabu, 3 = Kamis, 4 = Jumat, 5 = Sabtu, 6 = Minggu
  const getDaysForMonth = () => {
    const firstDayDate = new Date(currentMonth.year, currentMonth.monthIndex, 1);
    const jsDay = firstDayDate.getDay(); // 0 is Sunday
    const startOffset = jsDay === 0 ? 6 : jsDay - 1; // 0 for Monday, 6 for Sunday

    const days: Array<{
      dayNumber?: number;
      dateString?: string;
      event?: CalendarEvent;
    }> = [];

    // Empty leading padding cells
    for (let i = 0; i < startOffset; i++) {
      days.push({});
    }

    // Actual day cells
    for (let day = 1; day <= currentMonth.totalDays; day++) {
      const dayFormatted = String(day).padStart(2, '0');
      const dateString = `${currentMonth.key}-${dayFormatted}`;
      const event = events.find((e) => e.date === dateString);

      days.push({
        dayNumber: day,
        dateString,
        event,
      });
    }

    // Pad end of grid to complete the row
    const totalSlots = Math.ceil(days.length / 7) * 7;
    for (let i = days.length; i < totalSlots; i++) {
      days.push({});
    }

    return days;
  };

  const calendarDays = getDaysForMonth();
  const monthEvents = events.filter((event) => event.date.startsWith(selectedMonthKey));
  const weekDayLabels = ['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU', 'MINGGU'];

  return (
    <section
      id={id}
      className={`w-full max-w-[1140px] mx-auto px-4 sm:px-6 py-12 md:py-20 ${className}`}
    >
      {/* Section Header */}
      <div className="text-center max-w-[860px] mx-auto mb-10 md:mb-12">
        <h2 className="font-black text-2xl sm:text-3xl md:text-[38px] tracking-tight mb-3.5 font-['Aileron',sans-serif] text-white leading-tight uppercase">
          {title}
        </h2>
        <p className="text-[#a5b4d4] text-[13.5px] sm:text-[14.5px] md:text-[15px] leading-relaxed max-w-[760px] mx-auto font-['Aileron',sans-serif]">
          {subtitle}
        </p>
      </div>

      {/* Main Calendar Card Container */}
      <div className="w-full rounded-2xl md:rounded-3xl bg-[#0c122b]/95 border border-[#27325c] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden">
        {/* Top Header Bar */}
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#1f2852]">
          {/* Left: Navigation Month Label */}
          <div className="flex items-center gap-3 bg-[#080d22] border border-[#242e58] rounded-xl px-3.5 py-1.5 shadow-inner">
            <button
              type="button"
              onClick={handlePrevMonth}
              disabled={currentMonthIndex === 0}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                currentMonthIndex === 0
                  ? 'text-[#475569] cursor-not-allowed bg-transparent'
                  : 'bg-[#12193b] text-white hover:bg-[#1e295e] border border-[#2c3769] cursor-pointer'
              }`}
              title="Bulan sebelumnya"
              aria-label="Previous month"
            >
              &#8249;
            </button>

            <span className="font-['Aileron',sans-serif] font-black text-sm sm:text-[15px] tracking-widest text-[#f6feff] select-none whitespace-nowrap">
              {currentMonth.label}
            </span>

            <button
              type="button"
              onClick={handleNextMonth}
              disabled={currentMonthIndex === months.length - 1}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                currentMonthIndex === months.length - 1
                  ? 'text-[#475569] cursor-not-allowed bg-transparent'
                  : 'bg-[#12193b] text-white hover:bg-[#1e295e] border border-[#2c3769] cursor-pointer'
              }`}
              title="Bulan selanjutnya"
              aria-label="Next month"
            >
              &#8250;
            </button>
          </div>

          {/* Right: Month Selector Tabs */}
          <div className="flex w-full items-center justify-center gap-2 sm:w-auto">
            {months.map((m) => {
              const isActive = m.key === selectedMonthKey;
              return (
                <button
                  key={m.key}
                  type="button"
                  onClick={() => handleSelectMonth(m.key)}
                  className={`min-h-11 flex-1 px-2 sm:flex-none sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-['Aileron',sans-serif] font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#fd47d6] text-white shadow-[0_0_18px_rgba(253,71,214,0.45)] border border-[#fd47d6]'
                      : 'bg-[#12193e] text-[#8e9cb8] hover:text-white border border-[#222c57] hover:border-[#38488a]'
                  }`}
                >
                  {m.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3 p-4 md:hidden" aria-label={`Agenda ${currentMonth.label}`}>
          {monthEvents.map((event) => (
            <button
              key={event.date}
              type="button"
              onClick={() => setSelectedEvent(event)}
              aria-pressed={selectedEvent.date === event.date}
              className={`flex min-h-20 w-full items-center gap-4 rounded-xl border p-3 text-left transition-colors ${selectedEvent.date === event.date ? 'border-[#e0ff00] bg-[#1b2147]' : 'border-[#2e3770] bg-[#111936] hover:border-[#fd47d6]'}`}
            >
              <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-[#25204a] text-sm font-black text-white">
                <strong className="text-xl leading-none text-[#e0ff00]">{event.dayNumber}</strong>
                <span className="mt-1 text-[10px]">{currentMonth.shortLabel.split(' ')[0]}</span>
              </span>
              <span className="min-w-0">
                <strong className="block text-sm leading-snug text-white">{event.title}</strong>
                <span className="mt-1 block text-xs text-slate-300">{event.venue}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Full calendar stays visible on wider screens. */}
        <div className="hidden w-full overflow-x-auto md:block">
          <div className="min-w-[700px] w-full">
            {/* Weekday Row Header */}
            <div className="grid grid-cols-7 border-b border-[#1d2754] bg-[#090e24]/70">
              {weekDayLabels.map((dayLabel, idx) => (
                <div
                  key={dayLabel}
                  className={`py-3 text-center text-xs font-['Aileron',sans-serif] font-extrabold text-[#8391b4] tracking-wider uppercase select-none ${
                    idx < 6 ? 'border-r border-[#192247]/60' : ''
                  }`}
                >
                  {dayLabel}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 bg-[#0b1029]/80">
              {calendarDays.map((cell, index) => {
                const isColEnd = (index + 1) % 7 === 0;
                const hasEvent = Boolean(cell.event);
                const isSelected =
                  cell.event && selectedEvent && cell.event.date === selectedEvent.date;

                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (cell.event) {
                        setSelectedEvent(cell.event);
                      }
                    }}
                    className={`relative min-h-[100px] sm:min-h-[112px] p-2 sm:p-2.5 flex flex-col justify-start transition-all border-b border-[#182147]/80 ${
                      !isColEnd ? 'border-r border-[#182147]/80' : ''
                    } ${
                      cell.dayNumber
                        ? hasEvent
                          ? 'cursor-pointer hover:bg-[#141b3e]'
                          : 'bg-transparent'
                        : 'bg-[#070b1e]/40'
                    } ${
                      isSelected
                        ? 'border-2 !border-[#e0ff00] shadow-[0_0_20px_rgba(224,255,0,0.35)] z-10 bg-[#12183c]'
                        : ''
                    }`}
                  >
                    {/* Day Number */}
                    {cell.dayNumber && (
                      <span
                        className={`text-xs sm:text-[13px] font-['JetBrains_Mono',monospace] font-extrabold select-none ${
                          isSelected
                            ? 'text-white'
                            : hasEvent
                            ? 'text-[#f1f5f9]'
                            : 'text-[#64748b]'
                        }`}
                      >
                        {cell.dayNumber}
                      </span>
                    )}

                    {/* Event Mini-Card Inside Grid Cell */}
                    {cell.event && (
                      <div
                        className={`mt-1.5 p-2 rounded-lg text-left transition-all ${
                          cell.event.type === 'peak' || isSelected
                            ? 'bg-[#211749] border border-[#5d308c]'
                            : 'bg-[#15193f] border border-[#2e3770]'
                        }`}
                      >
                        <div
                          className={`font-['Aileron',sans-serif] text-[10.5px] sm:text-[11.5px] font-extrabold leading-tight line-clamp-2 ${
                            cell.event.type === 'peak' ? 'text-white' : 'text-white'
                          }`}
                        >
                          {cell.event.title}
                        </div>
                        <div
                          className={`flex items-center gap-1 font-['JetBrains_Mono',monospace] text-[9px] sm:text-[10px] mt-1 font-bold truncate ${
                            cell.event.type === 'peak'
                              ? 'text-[#e0ff00]'
                              : 'text-[#cbd5e1]'
                          }`}
                        >
                          <span className="text-[#fd47d6] text-xs leading-none">📍</span>
                          <span className="truncate">{cell.event.venue}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Event Spotlight Panel */}
        {selectedEvent && (
          <div className="p-5 sm:p-7 md:p-8 bg-[#090e26] border-t border-[#1d2752] transition-all">
            {/* Top Bar: Tag on Left, Time/Date on Right */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
              <span className="inline-block self-start px-3.5 py-1 rounded-full text-[10.5px] sm:text-xs font-['Aileron',sans-serif] font-black tracking-widest uppercase text-white bg-[#fd47d6] shadow-[0_0_12px_rgba(253,71,214,0.4)]">
                {selectedEvent.tag}
              </span>
              <span className="text-xs sm:text-[13.5px] font-extrabold tracking-wide text-[#e0ff00] font-['JetBrains_Mono',monospace]">
                {selectedEvent.time}
              </span>
            </div>

            {/* Middle: Content + Venue Box */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-7">
              {/* Left Column: Title & Description */}
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-black text-white font-['Aileron',sans-serif] mb-2 leading-tight">
                  {selectedEvent.title}
                </h3>
                <p className="text-[#cbd5e1] text-xs sm:text-[13.5px] md:text-[14px] leading-relaxed font-['Aileron',sans-serif]">
                  {selectedEvent.desc}
                </p>
              </div>

              {/* Right Column: Venue Box */}
              <div className="bg-[#060a1c] border border-[#232d5b] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shrink-0 shadow-inner">
                <div className="w-10 h-10 rounded-xl bg-[#21163e] border border-[#48296d] flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fd47d6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9.5px] sm:text-[10.5px] font-bold tracking-widest text-[#8592af] uppercase font-['JetBrains_Mono',monospace]">
                    LOKASI PELAKSANAAN:
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 font-['Aileron',sans-serif]">
                    {selectedEvent.venue}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Toggle Pill for Full Rundown Table */}
            <div className="pt-2 border-t border-[#161f47]/60 flex flex-col items-center">
              <button
                type="button"
                onClick={() => setShowRundownTable(!showRundownTable)}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-white font-['Aileron',sans-serif] bg-[#0c132f] hover:bg-[#141d45] border border-[#2a3668] hover:border-[#fd47d6]/60 transition-all duration-200 cursor-pointer shadow-md"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                <span>
                  {showRundownTable
                    ? 'Sembunyikan Format Tabel Rundown'
                    : 'Tampilkan Format Tabel Rundown Lengkap'}
                </span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    showRundownTable ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Collapsible Rundown Table */}
              {showRundownTable && (
                <div className="w-full mt-6 overflow-x-auto rounded-xl border border-[#242f5e] bg-[#060a1e]/90 animate-fadeIn">
                  <table className="mobile-rundown w-full text-left border-collapse text-xs sm:text-[13px]">
                    <thead>
                      <tr className="bg-[#0e163b] text-[#93a1c2] border-b border-[#242f5e] font-['Aileron',sans-serif]">
                        <th className="py-3 px-4 font-extrabold uppercase tracking-wider">
                          Tanggal Pelaksanaan
                        </th>
                        <th className="py-3 px-4 font-extrabold uppercase tracking-wider">
                          Agenda Kegiatan
                        </th>
                        <th className="py-3 px-4 font-extrabold uppercase tracking-wider">
                          Lokasi & Keterangan
                        </th>
                        <th className="py-3 px-4 font-extrabold uppercase tracking-wider text-center">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#18224a] font-['Aileron',sans-serif]">
                      {rundown.map((item) => (
                        <tr
                          key={item.id}
                          className={`hover:bg-[#10173d] transition-colors ${
                            item.isAccent ? 'bg-[#151130]/50' : ''
                          }`}
                        >
                          <td data-label="Tanggal" className="py-3.5 px-4 font-['JetBrains_Mono',monospace] font-bold text-[#f1f5f9] whitespace-nowrap">
                            {item.dateRange}
                          </td>
                          <td data-label="Agenda" className="py-3.5 px-4 text-[#e2e8f0] font-medium">
                            {item.agenda}
                          </td>
                          <td data-label="Lokasi" className="py-3.5 px-4 text-[#cbd5e1]">
                            {item.venue}
                          </td>
                          <td data-label="Status" className="py-3.5 px-4 text-center whitespace-nowrap">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-[10.5px] font-['JetBrains_Mono',monospace] font-extrabold tracking-wider uppercase ${
                                item.status === 'PUNCAK ACARA'
                                  ? 'bg-[#fd47d6] text-white shadow-[0_0_10px_rgba(253,71,214,0.4)]'
                                  : item.status === 'SEDANG BERJALAN'
                                  ? 'bg-[#132c38] text-[#e0ff00] border border-[#245b59]'
                                  : 'bg-[#141b38] text-[#94a3b8] border border-[#25325e]'
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TimelineSection;
