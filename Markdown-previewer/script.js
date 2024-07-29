document.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");

  const defaultMarkdown = `# Heading 1

`;

  editor.placeholder = defaultMarkdown;
  preview.innerHTML = marked(defaultMarkdown);

  editor.addEventListener("input", () => {
    preview.innerHTML = marked(editor.value);
  });
});
