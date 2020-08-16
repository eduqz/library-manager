const apiKey = 'AIzaSyB_cyza5uGCCLpEFjbx45TVzBAQ2-J5lU0';
const sheetId = '1j2wdBjZNKDj8N4xUR50lfKE4pnDkW_rbeGtgOLBDPxo';

const sheetLink = `https://docs.google.com/spreadsheets/d/${sheetId}`;

const sheetApiLink = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:F1:append?valueInputOption=USER_ENTERED`;

const createApiLink = (isbn) =>
  `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`;

export { sheetLink, sheetApiLink, createApiLink };
