import {format, parseISO} from "date-fns";
import {uk} from "date-fns/locale";
import client from "@/app/contentful/intex";

export const formatDate = (dateString: string): string => {
  // Парсим дату из строки
  const date = parseISO(dateString);

  // Форматируем дату в нужный формат
  const formattedDate = format(date, "d MMMM yyyy 'р.'", {locale: uk});

  return `Опубліковано: ${formattedDate}`;
}
