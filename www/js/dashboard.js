/* ==========================================================================
   dashboard.js

   Drives all client-side interactivity for the dashboard:
     - clickable values that open a modal showing a chart + sortable, paginated table of the
       underlying micro-report records

   DATA ACCESS:
   All drill-down data is read via fetch() against relative paths under
   DATA/L1/, e.g.:
     DATA/L1/BY_YEAR/2026/2026-06.json
     DATA/L1/BY_ACCT/6351220/2026-06.json
     DATA/L1/BY_NAME/321_DEVELOPMENT_LP/2026-06.json

   This requires the page to be served over http/https (e.g. GitHub
   Pages) -- fetch() against file:// URLs is blocked by browsers for
   local JSON and is not supported here.

   Each L1 file is a JSON array of raw records with fields:
     {"0": "<row id>", "name": "...", "invoice": "YYYY-MM-DD",
      "gross": "1234.5600", "status": "Paid", "description": "...",
      "alt": "<account code>"}

   No build step / bundler is assumed: this is loaded as a plain
   <script src="..."> after Chart.js, and exposes a small set of
   functions on `window` that the Jinja template's inline onclick
   handlers call directly (PALedger.openYear(...), etc.)
   ========================================================================== */

(function () {
  //javascript code here
})();
