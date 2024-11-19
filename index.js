document.getElementById("run-button").addEventListener("click", async () => {
  const contentDiv = document.getElementById("Content");
  
  contentDiv.innerHTML = "Running...";

  // Load Pyodide
  await loadPyodide();
  const pyodide = await loadPyodide();

  const pythonCode = `
x = 27
print(x)
`;

  try {
    const output = pyodide.runPython(pythonCode);
    contentDiv.innerHTML = output;
  } catch (error) {
    contentDiv.innerHTML = "Error: " + error.message;
  }
});
