import { IParams } from '../shared-interfaces';

export const checkIsLocalhost = (): boolean => {
  const isLocalHost =
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    Boolean(window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
  return isLocalHost;
};

export const createIndexes = <T, G extends IParams>(data: T[], filter: G) => {
  const { page, limit } = filter;
  return data.map((element, index) => ({
    ...element,
    index: (page - 1) * limit + index + 1,
  }));
};

const noMoreThanOneCommas = (input: number | string) => {
  const str = input.toString();
  let commasCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') commasCount++;
    if (commasCount > 1) break;
  }
  return commasCount <= 1;
};

export const insertCommas = (input: number | undefined | string, decimals: number = 4) => {
  if (typeof input === 'undefined') return '';
  if (!noMoreThanOneCommas(input)) return '';
  const parts = input.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (parts[1]) parts[1] = parts[1].substring(0, decimals); // Only take the first 4 decimals
  return parts.join('.');
};

export const unInsertCommas = (input: string) => {
  const parts = input.split('.');
  parts[0] = parts[0].replaceAll(',', '');
  if (parts[1]) parts[1] = parts[1].substring(0, 4); // Only take the first 4 decimals
  return parts.join('.');
};

export const getEllipsisTxt = (str: string, n = 5) => {
  if (str) {
    return str.length > n ? `${str.slice(0, n)}...${str.slice(str.length - n)}` : str;
  }
  return '';
};
