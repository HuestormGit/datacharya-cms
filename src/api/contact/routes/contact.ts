/**
 * contact router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::contact.contact');

/**
 * contact router
 */

// export default {
//   routes: [
//     {
//       method: "POST",
//       path: "/contact",
//       handler: "contact.send",
//       config: {
//         auth: false,
//       },
//     },
//   ],
// };
// export default {
//   routes: [
//     {
//       method: "POST",
//       path: "/contacts/send",
//       handler: "contact.send",
//       config: {
//         auth: false,
//       },
//     },
//   ],
// };