import * as XLSX from "xlsx";

export function createReport(data, name = "data") {
  if (data) {
    const worksheet = XLSX.utils.json_to_sheet(Object.values(data));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `${name}data`);

    // Создание файла Excel
    XLSX.writeFile(workbook, `${name}.xlsx`);
  }
}
