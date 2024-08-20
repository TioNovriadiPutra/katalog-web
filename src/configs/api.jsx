const UTILITY_PREFIX = "/utility";
const COLLECTION_PREFIX = "/collection";

export const API_ENDPOINT = {
  pm2Status: UTILITY_PREFIX + "/pm2-status",
  stopPm2: UTILITY_PREFIX + "/pm2-stop",
  startPm2: UTILITY_PREFIX + "/pm2-start",
  pm2Log: UTILITY_PREFIX + "/pm2-log",
  retrievePostman: COLLECTION_PREFIX + "/postman",
};
