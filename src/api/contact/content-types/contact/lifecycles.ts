export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugin("email").service("email").send({
        to: "divya.walunj@digimarketmoz.com",
        subject: "New Contact Form Submission",

        html: `
          <h2>New Contact Request</h2>

          <p><strong>Name:</strong> ${result.name}</p>

          <p><strong>Company:</strong> ${result.company}</p>

          <p><strong>Designation:</strong> ${result.designation}</p>

          <p><strong>Problem:</strong></p>

          <p>${result.problem}</p>
        `,
      });

      console.log("Email sent successfully");
    } catch (err) {
      console.error("Email Error:", err);
    }
  },
};