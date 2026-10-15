// iOS port: use the system share sheet rather than a WKWebView blob download.
export async function shareBackup(file) {
  const filesystem = globalThis.Capacitor.registerPlugin("Filesystem");
  const share = globalThis.Capacitor.registerPlugin("Share");
  const path = `字里有田-${file.slot === "sandbox" ? "沙盒" : "正式"}-备份.json`;
  const { uri } = await filesystem.writeFile({
    path,
    data: JSON.stringify(file, null, 1),
    directory: "CACHE",
    encoding: "utf8",
  });
  await share.share({
    title: "字里有田存档",
    files: [uri],
    dialogTitle: "保存日记和庄园存档",
  });
}
