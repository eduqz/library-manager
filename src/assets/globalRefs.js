import { GoogleSpreadsheet } from 'google-spreadsheet';

const sheetLink = `https://docs.google.com/spreadsheets/d/${process.env.REACT_APP_SHEET_ID}`;

const createApiLink = (isbn) =>
  `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${process.env.REACT_APP_API_KEY}`;

const sheetDocument = new GoogleSpreadsheet(process.env.REACT_APP_SHEET_ID);

export { sheetLink, sheetDocument, createApiLink };
