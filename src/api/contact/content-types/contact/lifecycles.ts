export default {
  async afterCreate(event) {
     console.log("Email provider:", strapi.config.get("plugin::email"));
    const { result } = event;

    console.log("=== afterCreate lifecycle fired ===");
    console.log(result);


    try {
       console.log("Attempting to send email...");
       console.log("SMTP_USERNAME:", process.env.SMTP_USERNAME);
        console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD ? "Present" : "Missing");
      // await strapi.plugin("email").service("email").send({
      //    from: "Datacharya <goruledivya2196@gmail.com>",
      //   to: "divya.walunj@digimarketmoz.com",
      //   replyTo: "goruledivya2196@gmail.com",
      //   subject: "New Contact Form Submission",

      //   subject: "New Contact Form Submission",

      //   html: `
      //     <h2>New Contact Request</h2>

      //     <p><strong>Name:</strong> ${result.name}</p>

      //     <p><strong>Company:</strong> ${result.company}</p>

      //     <p><strong>Designation:</strong> ${result.designation}</p>

      //     <p><strong>Problem:</strong></p>

      //     <p>${result.problem}</p>
      //   `,
      // });

      await strapi.plugin("email").service("email").send({
  from: "Datacharya <goruledivya2196@gmail.com>",
  to: "divya.walunj@digimarketmoz.com",
  replyTo: "goruledivya2196@gmail.com",
  subject: "New Contact Form Submission",
  text: `New Contact Form Submission

Name: ${result.name}
Company: ${result.company}
Designation: ${result.designation}
Problem: ${result.problem}`,
  html: `
    <h2>New Contact Request</h2>
    <p><strong>Name:</strong> ${result.name}</p>
    <p><strong>Company:</strong> ${result.company}</p>
    <p><strong>Designation:</strong> ${result.designation}</p>
    <p><strong>Problem:</strong> ${result.problem}</p>
  `,
});
      console.log("Email sent successfully");
    } 
    // catch (err: any) {
    //   console.error(err.response?.data);
    // }
    catch (err: any) {
  console.error(
    "EMAIL ERROR:",
    JSON.stringify(err.response?.data || err, null, 2)
  );
}
    // catch (err) {
    //   console.error("Email Error:", err);
    // }
  },
};