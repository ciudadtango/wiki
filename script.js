
/**
 * Filters rows inside <details> sections based on the user's input.
 * It matches content in <tbody> rows and shows/hides sections accordingly.
 */
function filterSections(inputId) {
  const searchTerm = document.getElementById(inputId).value.toLowerCase();
  const detailSections = document.querySelectorAll("details");

  detailSections.forEach((section) => {
    const rows = section.querySelectorAll("tbody tr");
    const header = section.querySelector("thead");
    let matchCount = 0;

    rows.forEach((row) => {
      const isVisible = row.textContent.toLowerCase().includes(searchTerm);
      row.style.display = isVisible ? "" : "none";
      if (isVisible) matchCount++;
    });

    if (searchTerm.length > 0) {
      if (matchCount > 0) {
        section.style.display = "";
        section.open = true;
        if (header) header.style.display = "";
      } else {
        section.style.display = "none";
      }
    } else {
      section.style.display = "";
      section.open = false;
      rows.forEach((row) => (row.style.display = ""));
      if (header) header.style.display = "";
    }
  });
}
