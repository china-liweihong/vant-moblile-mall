import { ResponseBody } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const builder = <T = any>(
  data: T,
  msg?: string,
  code = 0
): ResponseBody<T> => {
  const responseBody: ResponseBody = {
    msg: "",
    timestamp: 0,
    code: 0,
    data: null
  };
  responseBody.data = data;
  if (msg !== undefined && msg !== null) {
    responseBody.msg = msg;
  }
  if (code !== undefined && code !== null) {
    responseBody.code = code;
  }
  responseBody.timestamp = new Date().getTime();
  return responseBody;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getQueryParamter = (options: any) => {
  const url = options.url;
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  // tn=monline_3_dg&ie=utf-8&wd=简书
  // {"tn=monline_3_dg&ie=utf-8&wd=简书"}
  // {"tn":"monline_3_dg","ie":"utf-8","wd":"简书"}
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"') // 将双引号变为转义字符
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBody = (options: any) => {
  return options.body && JSON.parse(options.body);
};

export const trim = (str: string) => {
  return str.replace(/^\s/, "").replace(/\s$/, "");
};
