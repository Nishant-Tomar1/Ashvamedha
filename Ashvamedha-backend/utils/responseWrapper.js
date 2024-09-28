const success = (statusCode, result) => {
  return {
    status: "ok",
    result,
    statusCode,
  };
};
const error = (statusCode, message) => {
  return {
    status: "error",
    message,
    statusCode,
  };
};
module.exports = { success, error };
