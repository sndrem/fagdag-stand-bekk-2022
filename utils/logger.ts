import colors from "colors";

export const log = {
  success: (message: string) => console.log(colors.green(message)),
};
