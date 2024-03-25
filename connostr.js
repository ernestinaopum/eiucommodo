if (requestUrl.origin !== sw.origin && requestUrl.host.match(/^(localhost|127.0.0.1|0.0.0.0):(\d+)$/)) {
  // This block will execute if the request URL's origin is different from the service worker's origin
  // and if the host is 'localhost', '127.0.0.1', or '0.0.0.0' followed by a port number.
}
