import { JSDOM } from "jsdom";

const URL = "https://wltest.dns-systems.net/";

export async function fetchDocument() {
  return (await JSDOM.fromURL(URL)).window.document;
}
