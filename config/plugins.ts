// import type { Core } from '@strapi/strapi';

// const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({});

// export default config;

import type { Core } from "@strapi/strapi";
console.log("Loading plugins.ts...");

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: "Datacharya <goruledivya2196@gmail.com>",
        defaultReplyTo: "goruledivya2196@gmail.com",
      },
    },
  },
});

export default config;