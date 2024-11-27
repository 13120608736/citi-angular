export default [
  {
    context: ["/api"],
    target: "",
    secure: false,
    changeOrigin: true,
  },
  {
    context: ["/ws-"],
    target: "",
    ws: true,
    secure: false,
    changeOrigin: true,
  },
];
