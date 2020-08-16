const apiKey = 'AIzaSyB_cyza5uGCCLpEFjbx45TVzBAQ2-J5lU0';

const sheetLink =
  'https://docs.google.com/spreadsheets/d/1j2wdBjZNKDj8N4xUR50lfKE4pnDkW_rbeGtgOLBDPxo/edit?usp=sharing';

const createApiLink = (isbn) =>
  `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`;

export { sheetLink, createApiLink };
