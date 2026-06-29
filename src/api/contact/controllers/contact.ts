/**
 * contact controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contact.contact');

// import { factories } from "@strapi/strapi";

// export default factories.createCoreController(
//   "api::contact.contact"
// );

// import { factories } from "@strapi/strapi";

// export default factories.createCoreController(
//   "api::contact.contact",
//   ({ strapi }) => ({
//     async send(ctx) {
//       const { name, company, designation, problem } = ctx.request.body;

//       try {
//         await strapi.plugin("email").service("email").send({
//           to: "divya.walunj@digimarketmoz.com",
//           subject: "New Contact Form Submission",
//           html: `
//             <h2>New Contact Request</h2>

//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Company:</strong> ${company}</p>
//             <p><strong>Designation:</strong> ${designation}</p>
//             <p><strong>Problem:</strong> ${problem}</p>
//           `,
//         });

//         ctx.send({
//           success: true,
//           message: "Email sent successfully",
//         });
//       } catch (err) {
//         console.error(err);
//         ctx.throw(500, "Unable to send email");
//       }
//     },
//   })
// );