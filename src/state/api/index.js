import axios from "axios";

/**
 * This is the API instance that will be used to make requests to the backend.
 * You can configure the base URL and other settings here.
 * For example, you can set the timeout, headers, etc.
 * You can also create multiple instances for different APIs if needed.
 * axios.create() is used to create a custom Axios instance with its own default configuration
 */

const api = axios.create({
  /**
   * The base URL is the root URL for all requests made with this instance.
   * You can change this to point to your backend server.
   * For example, if your backend server is running on localhost:4000,
   * you can set the base URL to "http://localhost:4000/api/v1".
   */
  baseURL: "http://localhost:4000/api/v1",
  /**
   * The timeout is the maximum time (in milliseconds) to wait for a response.
   * If the request takes longer than this time, it will be aborted.
   * You can adjust this value based on your needs.
   */
  timeout: 1000,
});

/**
 * This is an example of how to add interceptors to the API instance.
 * Interceptors are functions that Axios calls for every request or response.
 * You can use interceptors to modify requests or responses,
 * or to handle errors globally.
 * For example, you can add a token to the headers of every request,
 */
api.interceptors.request.use((config) => {
  /**
   * Extract the token from localStorage.
   * This is where you would typically store the token after logging in.
   */
  const token = localStorage.getItem("token");

  /**
   * If the token exists, add it to the headers of the request.
   * This is useful for authentication.
   * You can also add other headers here if needed.
   */
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  /**
   * Always return the config object at the end of the interceptor.
   * This is important because Axios uses this object to make the request.
   * If you don't return the config object, the request will not be sent.
   */
  return config;
});

/**
 * Export the API instance so that it can be used in other parts of the application.
 * You can import this instance in your components or services
 * and use it to make requests to the backend.
 */
export default api;
