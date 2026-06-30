/**
 * Utility functions pentru formatarea timpului și orelor de funcționare
 */

export interface OpenHours {
  periods?: Array<{
    open: { day: number; time: string };
    close: { day: number; time: string };
  }>;
  open_now?: boolean;
  weekday_text?: string[];
}

/**
 * Formatează orele de funcționare pentru afișare
 */
export const formatOpenHours = (
  openHours: OpenHours | string | null | undefined
): string => {
  // Dacă este deja un string, îl returnăm
  if (typeof openHours === "string") {
    return openHours;
  }

  // Dacă nu avem date, returnăm mesaj implicit
  if (!openHours) {
    return "Program nedisponibil";
  }

  // Dacă avem weekday_text, folosim primul element
  if (openHours.weekday_text && openHours.weekday_text.length > 0) {
    return openHours.weekday_text[0];
  }

  // Dacă avem periods, formatăm primul period
  if (openHours.periods && openHours.periods.length > 0) {
    const period = openHours.periods[0];
    const openTime = formatTime(period.open.time);
    const closeTime = formatTime(period.close.time);
    return `${openTime} - ${closeTime}`;
  }

  // Dacă avem doar open_now
  if (typeof openHours.open_now === "boolean") {
    return openHours.open_now ? "Deschis acum" : "Închis acum";
  }

  return "Program nedisponibil";
};

/**
 * Formatează timpul din format HHMM în HH:MM
 */
export const formatTime = (time: string): string => {
  if (!time || time.length !== 4) {
    return time;
  }

  const hours = time.substring(0, 2);
  const minutes = time.substring(2, 4);
  return `${hours}:${minutes}`;
};

/**
 * Verifică dacă o locație este deschisă acum
 */
export const isOpenNow = (
  openHours: OpenHours | string | null | undefined
): boolean => {
  if (typeof openHours === "object" && openHours?.open_now !== undefined) {
    return openHours.open_now;
  }

  // Dacă nu avem informații precise, returnăm true ca fallback
  return true;
};

/**
 * Obține ziua săptămânii curentă (0 = Duminică, 1 = Luni, etc.)
 */
export const getCurrentWeekday = (): number => {
  return new Date().getDay();
};

/**
 * Formatează toate zilele săptămânii din openHours
 */
export const formatWeekSchedule = (openHours: OpenHours): string[] => {
  if (openHours.weekday_text) {
    return openHours.weekday_text;
  }

  if (openHours.periods) {
    // Grupează periods pe zile
    const daySchedule: { [key: number]: string } = {};

    openHours.periods.forEach((period) => {
      const day = period.open.day;
      const openTime = formatTime(period.open.time);
      const closeTime = formatTime(period.close.time);
      daySchedule[day] = `${openTime} - ${closeTime}`;
    });

    // Convertește în array pentru fiecare zi a săptămânii
    const weekDays = [
      "Duminică",
      "Luni",
      "Marți",
      "Miercuri",
      "Joi",
      "Vineri",
      "Sâmbătă",
    ];
    return weekDays.map((dayName, index) => {
      const schedule = daySchedule[index];
      return schedule ? `${dayName}: ${schedule}` : `${dayName}: Închis`;
    });
  }

  return ["Program nedisponibil"];
};
